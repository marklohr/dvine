class CreateCollectionsRestaurants < ActiveRecord::Migration
  def change
    create_table :collections_restaurants do |t|
      t.integer :collection_id
      t.integer :restaurant_id

      t.timestamps null: false
    end
  end
end
