class BuildpacksController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @buildpacks = Buildpack.all
    respond_to { |format| format.json }
  end

  def create
    @buildpack = Buildpack.new(buildpack_params)
    respond_to do |format|
      if @buildpack.save
        format.json
      else
        format.json { render json: @buildpack.errors, status: :forbidden }
      end
    end
  end

  def update
    @buildpack = Buildpack.find(params[:id])
    @buildpack.update_attributes!(weight_in_mb: nil)
    BuildpackWeigher.perform_async(@buildpack.id)

    respond_to do |format|
      format.json
    end
  end

  private

  def buildpack_params
    params.require(:buildpack).permit(:url)
  end
end
