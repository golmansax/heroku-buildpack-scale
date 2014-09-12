class BuildpackWeigher
  include Sidekiq::Worker
  sidekiq_options retry: false

  def perform(buildpack_id)
    buildpack = Buildpack.find(buildpack_id)
    buildpack.update_attributes!(weight_in_mb: weight_in_mb(buildpack.url))
  end

  def weight_in_mb(url)
    HerokuBuildpackScale::Scale.new.weight_in_mb(url)
  end
end
