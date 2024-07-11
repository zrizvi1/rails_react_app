# frozen_string_literal: true

# AddConfirmableField
class AddConfirmableField < ActiveRecord::Migration[7.0]
  def change
    ## User
    add_column :users, :confirmation_token, :string
    add_column :users, :confirmed_at, :datetime
    add_column :users, :confirmation_sent_at, :datetime
    add_column :users, :unconfirmed_email, :string # Only if using reconfirmable
    add_index :users, :confirmation_token, unique: true

    ## Employer
    add_column :employers, :confirmation_token, :string
    add_column :employers, :confirmed_at, :datetime
    add_column :employers, :confirmation_sent_at, :datetime
    add_column :employers, :unconfirmed_email, :string # Only if using reconfirmable
    add_index :employers, :confirmation_token, unique: true
  end
end
