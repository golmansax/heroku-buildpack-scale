class BuildpacksController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: Buildpack.all }
    end
  end
end
