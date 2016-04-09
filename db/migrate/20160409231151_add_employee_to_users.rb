class AddEmployeeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :employee, :boolean, default: false
    add_column :users, :present, :boolean, default: false
  end
end
