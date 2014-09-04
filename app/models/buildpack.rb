class Buildpack < ActiveRecord::Base
  def pretty_name
    repo_name.match(/heroku-buildpack-(.*)/).captures.first.capitalize
  end

  def repo_name
    File.basename(url, '.git')
  end
end
