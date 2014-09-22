require 'spec_helper'
require 'heroku_buildpack_scale'

module HerokuBuildpackScale
  describe BashInterface do
    let(:bash_interface) { BashInterface.new }
    let(:ruby_url) { 'https://github.com/heroku/heroku-buildpack-ruby.git' }
    let(:java_url) { 'https://github.com/heroku/heroku-buildpack-java.git' }

    before(:each) do
      receive_expected = receive(:dummy_repo_exists?).and_return(true)
      expect_any_instance_of(BashInterface).to receive_expected
    end

    describe '#weight_in_mb' do
      before(:each) do
        allow(bash_interface).to receive(:push_new_url)
        allow(bash_interface).to receive(:weight_for_current_url)
      end

      describe 'if current url is not desired url' do
        before(:each) do
          expect(bash_interface).to receive(:current_url).and_return(java_url)
        end

        it 'pushes new url' do
          expect(bash_interface).to receive(:push_new_url).with(ruby_url)
          bash_interface.weight_in_mb(ruby_url)
        end

        it 'weighs current url' do
          receive_expected = receive(:weight_for_current_url).with(no_args)
          expect(bash_interface).to receive_expected
          bash_interface.weight_in_mb(ruby_url)
        end
      end

      describe 'if current url is desired url' do
        before(:each) do
          expect(bash_interface).to receive(:current_url).and_return(ruby_url)
        end

        it 'does not push new url' do
          expect(bash_interface).not_to receive(:push_new_url)
          bash_interface.weight_in_mb(ruby_url)
        end

        it 'weighs current url' do
          receive_expected = receive(:weight_for_current_url).with(no_args)
          expect(bash_interface).to receive_expected
          bash_interface.weight_in_mb(ruby_url)
        end
      end
    end
  end
end
