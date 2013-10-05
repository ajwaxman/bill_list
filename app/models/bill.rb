class Bill < ActiveRecord::Base
  attr_accessible :day, :name, :user_id
end
