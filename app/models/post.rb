class Post < ApplicationRecord
  include Dateable
  CATEGORIES = %w[movie sport politic economic science].freeze

  enum category: CATEGORIES

  belongs_to  :user
  has_many    :comments
  has_many    :likes

  mount_uploader :image, ImageUploader

  validates :title, :text, presence: true
  validates :category, inclusion: { in: CATEGORIES }
end
