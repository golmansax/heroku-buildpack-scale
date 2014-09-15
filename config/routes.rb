HerokuBuildpackScale::Application.routes.draw do
  def set_routes
    root 'pages#index'

    resources :buildpacks, only: [:index, :create, :update]

    require 'sidekiq/web'
    mount Sidekiq::Web => '/sidekiq'
  end

  if Rails.env.production?
    scope '/heroku-buildpack-scale' do
      set_routes
    end
  else
    set_routes
  end
end
