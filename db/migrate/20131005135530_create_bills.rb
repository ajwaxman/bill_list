class CreateBills < ActiveRecord::Migration
  def change
    create_table :bills do |t|
      t.string :name
      t.integer :day
      t.integer :user_id

      t.timestamps
    end
  end
end
