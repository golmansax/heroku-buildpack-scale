task :deploy do
  # Keep this sync'd with my-config/ports
  PROD_PORT = 7703

  sh 'pkill --full rails || true'
  sh "rails server -e production -p #{PROD_PORT} -d"
end
