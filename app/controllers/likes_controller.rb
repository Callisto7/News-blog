class LikesController < ApplicationController
  before_action :authenticate_user!
  before_action :set_like

  def update
    if @like.active?
      @like.deactivate!
    else
      @like.active!
    end
    render(json: { like_count: Like.where(post_id: params[:post_id]).active_likes_count, like_status: @like.active? })
  end

  private

  def set_like
    @like = current_user.likes.find_or_create_by(post_id: params[:post_id])
  end
end
