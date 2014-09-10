class AddIndexOnUrlToBuildpacks < ActiveRecord::Migration
  def change
    add_index :buildpacks, :url
  end
end
