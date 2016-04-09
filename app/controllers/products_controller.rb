class ProductsController < ApplicationController
  before_action :product, only: [:show, :edit, :update, :destroy] 

  def index
    @product = Product.all
  end

  def show
  end

  def new
    @product = Product.new(product_params)
    if product.save
      render :show
    else
      render :new
    end
  end
<<<<<<< HEAD
=======


  def create


  end


>>>>>>> bf53b2b6c53dc352002c4f9f8e883f22bd19e940
  def update
    if @user.update(user_params)
      render :show
    else
      render :edit
    end
  end

  def delete
    products_name = @product.name
    @product.destroy
    render :index
  end

  private

  def product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:prodcut).permit(:name, :description, :price, :picture, :quantity)
  end
end
