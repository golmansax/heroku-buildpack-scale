class AddLastGeneratedToBuildpacks < ActiveRecord::Migration
  def change
    add_column :buildpacks, :last_weighed, :datetime

    Buildpack.all.each do |buildpack|
      buildpack.update_attributes!(last_weighed: Time.now)
    end
  end
end
