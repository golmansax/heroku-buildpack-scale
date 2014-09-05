FactoryGirl.define do
  factory :buildpack do
    url 'https://github.com/heroku/heroku-buildpack-ruby.git'
    weight_in_mb 10
  end
end
