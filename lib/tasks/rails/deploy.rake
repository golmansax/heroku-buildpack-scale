namespace :rails do
  task :deploy do
    # Keep this sync'd with my-config/ports
    PROD_PORT = 7703

    sh "rails server -e production -p #{PROD_PORT} -d"
  end
end
