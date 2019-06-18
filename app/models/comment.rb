class Comment < ApplicationRecord
  include Dateable

  belongs_to :user
  belongs_to :post

  validates :text, presence: true

  scope :order_by_new, -> { order(created_at: :desc).includes(:user) }
end
