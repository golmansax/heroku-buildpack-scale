class MakeUrlIndexUnique < ActiveRecord::Migration
  def change
    remove_index :buildpacks, :url
    add_index :buildpacks, :url, unique: true
  end
end
