module HerokuBuildpackScale
  class Scale
    def weight_in_mb(url)
      HerokuBuildpackScale::BashInterface.new.weight_in_mb(url)
    end
  end
end
