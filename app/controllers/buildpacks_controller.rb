class BuildpacksController < ApplicationController
  def index
    @buildpacks = Buildpack.all
    respond_to { |format| format.json }
  end
end
