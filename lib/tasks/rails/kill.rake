namespace :rails do
  task :kill do
    sh 'pkill --full rails'
  end
end
