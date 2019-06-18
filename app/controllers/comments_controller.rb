class CommentsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_comment, only: %i(destroy)

  def create
    @comment = Comment.new(comment_params.merge(user_id: current_user.id))

    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment.post, notice: 'Комментарий успешно добавлен.' }
        format.json { render post_path(@comment.post_id), status: :created, location: @comment }
      else
        @post = @comment.post
        format.html { render  template: 'posts/show' }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @comment.destroy
    respond_to do |format|
      format.html { redirect_to @comment.post, notice: 'Комментарий успешно удалён.' }
      format.json { head :no_content }
    end
  end

  private

  def set_comment
    @comment = Comment.find(params[:id])
  end

  def comment_params
    params.fetch(:comment, {}).permit(:post_id, :text)
  end
end
