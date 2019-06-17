class Comment < ApplicationRecord
  include Dateable

  belongs_to :user
  belongs_to :post

  validates :text, presence: true
end
