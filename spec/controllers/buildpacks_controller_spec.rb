require 'rails_helper'

describe BuildpacksController do
  describe '#index' do
    let(:params) { { format: :json } }
    let!(:buildpack) { create(:buildpack) }

    it 'outputs a json of buildpacks' do
      buildpacks_builder = Jbuilder.new do |json|
        json.array! [buildpack], :url, :pretty_name, :weight_in_mb, :id
      end

      get(:index, params)
      expect(response.body).to eq buildpacks_builder.target!
    end

    it 'assigns buildpacks' do
      get(:index, params)
      expect(assigns(:buildpacks)).to eq [buildpack]
    end
  end
end
