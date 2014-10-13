require 'rails_helper'

describe BuildpackWeigher do
  let(:weigher) { BuildpackWeigher.new }
  let(:buildpack) { create(:buildpack) }

  describe '#perform' do
    before(:each) do
      receive_allowed = receive(:weight_in_mb)
      allow_any_instance_of(HerokuBuildpackScale::Scale).to receive_allowed
    end

    it 'returns the result from the scale' do
      receive_expected = receive(:weight_in_mb)
        .with(buildpack.url)
        .and_return(77)
      expect_any_instance_of(HerokuBuildpackScale::Scale).to receive_expected

      weigher.perform(buildpack.id)
      expect(buildpack.reload.weight_in_mb).to eq 77
    end

    it 'sets the last weighed to today' do
      Timecop.freeze(Time.now.round) do
        expect do
          weigher.perform(buildpack.id)
        end.to change { buildpack.reload.last_weighed }.from(nil).to(Time.now)
      end
    end
  end
end
