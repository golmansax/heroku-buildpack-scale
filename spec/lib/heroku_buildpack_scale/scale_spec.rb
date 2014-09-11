require 'spec_helper'
require 'heroku_buildpack_scale'

module HerokuBuildpackScale
  describe Scale, :local do
    let(:scale) { Scale.new }
    let(:ruby_url) { 'https://github.com/heroku/heroku-buildpack-ruby.git' }
    let(:java_url) { 'https://github.com/heroku/heroku-buildpack-java.git' }

    describe '#weight_in_mb' do
      it 'returns an integer representing MB size' do
        expect(scale.weight_in_mb(java_url)).to eq(63)
      end

      it 'can run on the same url twice in a row' do
        pending 'me finishing this'
        expect(scale.weight_in_mb(ruby_url)).to eq(11)
        expect(scale.weight_in_mb(ruby_url)).to eq(11)
      end
    end
  end
end
