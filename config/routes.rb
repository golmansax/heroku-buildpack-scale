HerokuBuildpackScale::Application.routes.draw do
  root 'pages#index'

  resources :buildpacks, only: :index
end
