require 'rails_helper'

describe Buildpack do
  let(:url) { 'https://github.com/heroku/heroku-buildpack-many-words.git' }
  let(:buildpack) { create(:buildpack, url: url) }

  describe '#pretty_name' do
    it 'is a capitalized suffix of the url' do
      expect(buildpack.pretty_name).to eq 'Many Words'
    end
  end
end
