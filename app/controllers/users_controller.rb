class UsersController < ApplicationController
  before_action: user except:[:index, :new, :create]

  def index
  end

  def show
  end

  def edit
  end

  def create
  end

  def update
  end

  private

  def user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(user).permit(name:, email:, password:, avatar:)
  end
end
