class Post < ApplicationRecord
  include Dateable
  CATEGORIES = %w[movie sport politic science].freeze

  enum category: CATEGORIES

  belongs_to :user
  has_many :comments
  has_many :likes

  validates :title, :text, presence: true
  validates :category, inclusion: { in: CATEGORIES }
end
