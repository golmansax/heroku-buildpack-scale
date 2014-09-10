require 'rails_helper'

describe Buildpack do
  let(:url) { 'https://github.com/heroku/heroku-buildpack-many-words.git' }
  let(:buildpack) { create(:buildpack, url: url) }

  describe '#pretty_name' do
    it 'is a capitalized suffix of the url' do
      expect(buildpack.pretty_name).to eq 'Many Words'
    end
  end

  describe 'validations' do
    it 'does not allow bad urls' do
      bad_urls = [
        nil,
        'hello',
        'https://github.com/heroku/heroku-buildpack-java',
      ]

      bad_urls.each do |url|
        is_expected.not_to allow_value(url).for(:url)
      end
    end

    it 'allows good urls' do
      good_urls = [
        'https://github.com/heroku/heroku-buildpack-java.git',
      ]

      good_urls.each do |url|
        is_expected.to allow_value(url).for(:url)
      end
    end
  end
end
