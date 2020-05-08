class UsersController < ApplicationController
  before_action :authenticate_user!
  def show
    @user = User.find(params[:id])
  end
end

def index

end

# def update
#   @user = current_user
#   if @user.update_attributes(current_user_params)
#     flash[:notice] = "Saved.."
#   else
#     flash[:notice] = "Cannot update.."
#   end
#   redirect_to @user
# end



# def update
#   @user = current_user
#   respond_to do |format|
#     if @user.update(current_user_params)
#       format.html { redirect_to @user, notice: t('.notice') }
#       format.json { render :show, status: :ok, location: "Saved.." }
#     else
#       format.html { render :edit }
#       format.json { render json: @user.errors, status: :unprocessable_entity }
#     end
#   end
# end
#
# private
# def current_user_params
#   params.require(:user).permit(:first_name,
#                                :last_name,
#                                :gender,
#                                :email,
#                                :password,
#                                :password_confirmation)
# end
