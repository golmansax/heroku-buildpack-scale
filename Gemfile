source 'https://rubygems.org'

ruby '2.1.2'

gem 'rails', '~> 4.1.0'
gem 'sqlite3'
gem 'jbuilder'
gem 'sidekiq'
gem 'sinatra', '>= 1.3.0', require: false
gem 'gon'

gem 'sass-rails', '~> 4.0.0'
gem 'uglifier', '>= 1.3.0'
gem 'react-rails', '~> 1.0.0.pre', github: 'reactjs/react-rails'
gem 'requirejs-rails', git: 'https://github.com/golmansax/requirejs-rails'
gem 'bootstrap-sass'

group :doc do
  # bundle exec rake doc:rails generates the API under doc/api.
  gem 'sdoc', require: false
end

# Use ActiveModel has_secure_password
# gem 'bcrypt-ruby', '~> 3.1.2'

# Use unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano', group: :development

# Use debugger
# gem 'debugger', group: [:development, :test]

gem 'rubocop'
gem 'travis'

group :test do
  gem 'rspec-rails'
  gem 'factory_girl_rails'
  gem 'shoulda-matchers'
  gem 'coveralls', require: false
end

source 'https://rails-assets.org' do
  gem 'rails-assets-reqwest'
  gem 'rails-assets-underscore'
end
