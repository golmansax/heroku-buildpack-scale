class Buildpack < ActiveRecord::Base
  validates :url, format: /\Ahttps:\/\/github.com\/.*heroku-buildpack-.*\.git\z/

  def pretty_name
    snake_name.gsub(/-/, ' ').titleize
  end

  def snake_name
    repo_name.match(/heroku-buildpack-(.*)/).captures.first
  end

  def repo_name
    File.basename(url, '.git')
  end
end
