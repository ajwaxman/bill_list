class Bill < ActiveRecord::Base
  attr_accessible :day, :name, :user_id

  def days_until_due
    today = Time.now
    simple_today = Time.new(today.year, today.month, today.day)
    if day < today.day
      month_due = today.month
    else
      month_due = today.month + 1
    end
    day_due = Date.new(today.year,month_due,day)
    binding.pry
    return ((day_due - simple_today)/(60*60*24)).to_i
  end

  def self.sorted_by_days_until_due
    Bill.all.sort_by(&:days_until_due)
  end
end
