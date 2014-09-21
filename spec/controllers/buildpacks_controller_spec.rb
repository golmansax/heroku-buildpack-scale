require 'rails_helper'

describe BuildpacksController do
  let(:params) { { format: :json } }
  let(:url) { 'https://github.com/puffnfresh/heroku-buildpack-haskell.git' }
  let(:buildpack) { create(:buildpack) }

  before(:each) do
    allow(BuildpackWeigher).to receive(:perform_async)
  end

  describe '#index' do
    it 'outputs a json of buildpacks' do
      buildpacks_builder = Jbuilder.new do |json|
        json.array! [buildpack], :url, :pretty_name, :weight_in_mb, :id
      end

      get(:index, params)
      expect(response.body).to eq(buildpacks_builder.target!)
    end

    it 'assigns buildpacks' do
      buildpack
      get(:index, params)
      expect(assigns(:buildpacks)).to eq([buildpack])
    end
  end

  describe '#create' do
    it 'creates a buildpack' do
      post(:create, params.merge(buildpack: { url: url }))
      buildpack = Buildpack.last
      expect(buildpack.url).to eq(url)
    end

    it 'runs the weigher asynchronously' do
      new_buildpack_id = Buildpack.count + 1
      expect(BuildpackWeigher).to receive(:perform_async).with(new_buildpack_id)
      put(:update, params.merge(id: buildpack.id))
    end

    it 'returns forbidden if the params are invalid' do
      post(:create, params.merge(buildpack: { url: '' }))
      expect(response.status).to eq(403)
    end
  end

  describe '#update' do
    it 'nils out the buildpack weight' do
      put(:update, params.merge(id: buildpack.id))
      expect(buildpack.reload.weight_in_mb).to be_nil
    end

    it 'runs the weigher asynchronously' do
      expect(BuildpackWeigher).to receive(:perform_async).with(buildpack.id)
      put(:update, params.merge(id: buildpack.id))
    end
  end
end
