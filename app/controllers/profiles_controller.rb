class ProfilesController < ApplicationController
  before_action :set_user, except: [:my_posts]

  def show
  end

  def my_posts
    @posts = current_user.posts
  end

  private

    def set_user
      @user = User.find(params[:id])
    end

end
