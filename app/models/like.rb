class Like < ApplicationRecord
  belongs_to :user
  belongs_to :post

  scope :active_likes_count, -> { where(active: true).count }

  def active!
    update(active: true)
  end

  def deactivate!
    update(active: false)
  end
end
