module HerokuBuildpackScale
  class Runner
    def print_weight(url)
      weight_in_mb = HerokuBuildpackScale::Scale.new.weight_in_mb(url)
      puts "\nBuildpack from #{url}"
      puts "Weighs #{weight_in_mb} MB"
    end
  end
end
