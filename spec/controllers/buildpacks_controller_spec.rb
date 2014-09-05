require 'rails_helper'

describe BuildpacksController do
  describe '#index' do
    let(:params) { { format: :json } }

    it 'returns buildpacks' do
      buildpack = create(:buildpack)
      get(:index, params)
      expect(response.body).to eq BuildpackSerializer.new(buildpack).to_json
    end
  end
end
