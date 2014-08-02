module HerokuBuildpackScale
  class BashInterface
    require 'pathname'

    def weight_in_mb(url)
      fail_message = 'Need to install heroku-buildpack-dummy'
      fail fail_message unless Pathname(dummy_dir).directory?

      output = raw_weight_output(url)

      # I've seen Heroku output either:
      #  - 745 (representing 745 KB)
      #  - 11M (representing 11 MB)
      if output.match(/M/)
        output.match(/([0-9]+)M/).captures.first.to_i
      else
        1
      end
    end

    def raw_weight_output(url)
      command = "cd #{dummy_dir} && echo #{url} > .buildpacks && " \
        "git commit -am 'Changing buildpack to #{url}' && " \
        'git push --force && git push heroku master --force && ' \
        'heroku apps:info'

      output = `#{command}`
      output.match(/Slug Size:\s*(.*)$/).captures.first
    end

    def dummy_dir
      my_dir = File.dirname(__FILE__)
      File.join(my_dir, '..', '..', '..', 'heroku-buildpack-dummy')
    end
  end
end
