module Dateable
  extend ActiveSupport::Concern

  def created_date
    created_at.in_time_zone(Time.zone.name).strftime('%H:%M, %d.%m.%Y')
  end
end