class Post < ApplicationRecord
  belongs_to :user

  validates :title, :text, presence: true

  def created_date
    created_at.in_time_zone(Time.zone.name).strftime('%H:%M %d.%m.%Y')
  end
end
