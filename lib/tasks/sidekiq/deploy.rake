namespace :sidekiq do
  task :deploy do
    sh 'sidekiq -e production -d -L log/sidekiq.log'
  end
end
