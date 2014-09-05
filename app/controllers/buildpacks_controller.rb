class BuildpacksController < ApplicationController
  def index
    respond_to do |format|
      format.json { render Buildpack.all }
    end
  end
end
