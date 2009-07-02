class CreateMarkers < ActiveRecord::Migration
  def self.up
    create_table :markers do |t|
      t.string :name
      t.string :url
      t.integer :pos_x
      t.integer :pos_y
      t.belongs_to :post_id
      t.integer :price

      t.timestamps
    end
  end

  def self.down
    drop_table :markers
  end
end
