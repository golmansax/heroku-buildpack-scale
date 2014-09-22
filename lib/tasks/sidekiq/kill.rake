namespace :sidekiq do
  task :kill do
    sh 'pkill --full sidekiq'
  end
end
