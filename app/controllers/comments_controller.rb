class CommentsController < ApplicationController
  before_action :authenticate_user!, only: %i(create)


  def create
    @comment = Comment.new(comment_params.merge(user_id: current_user.id))

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment.post, notice: t('.notice') }
        format.json { render post_path(@comment.post_id), status: :created, location: @comment }
      else
        set_post_and_comments
        format.html { render  template: 'posts/show' }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def comment_params
    params.fetch(:comment, {}).permit(:post_id, :text)
  end

  def set_post_and_comments
    @post = @comment.post
    @comments = Comment.includes(:user).all
  end
end
