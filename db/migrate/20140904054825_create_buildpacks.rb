class CreateBuildpacks < ActiveRecord::Migration
  def change
    create_table :buildpacks do |t|
      t.string :url, null: false
      t.integer :weight_in_mb, null: false

      t.timestamps
    end
  end
end
