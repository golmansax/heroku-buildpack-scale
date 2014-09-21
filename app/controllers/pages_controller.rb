class PagesController < ApplicationController
  def index
    routes = {
      buildpacks_path: buildpacks_path,
      buildpack_path: buildpack_path('<%= id %>'),
    }
    gon.push(routes)
  end
end
