require 'rails_helper'

describe BuildpackWeigher do
  let(:weigher) { BuildpackWeigher.new }
  let(:buildpack) { create(:buildpack) }

  describe '#perform' do
    it 'returns the result from the scale' do
      receive_expected = receive(:weight_in_mb)
        .with(buildpack.url)
        .and_return(77)
      expect_any_instance_of(HerokuBuildpackScale::Scale).to receive_expected

      weigher.perform(buildpack.id)
      expect(buildpack.reload.weight_in_mb).to eq 77
    end
  end
end
