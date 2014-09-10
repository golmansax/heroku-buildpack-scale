class BuildpackWeightCanBeNull < ActiveRecord::Migration
  def change
    change_column :buildpacks, :weight_in_mb, :integer, null: true
  end
end
