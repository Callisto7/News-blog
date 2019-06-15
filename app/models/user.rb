class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  ROLES = %w[standard admin].freeze
  GENDERS = %w[male female].freeze
  enum role: ROLES
  enum gender: GENDERS

  validates :first_name, :last_name, :role, :gender, presence: true
end
