HerokuBuildpackScale::Application.routes.draw do
  root 'pages#index'

  resources :buildpacks, only: [:index, :create, :update]

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'
end
