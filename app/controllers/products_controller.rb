class ProductsController < ApplicationController
  
  
  def index
    @product = Product.all
  end

  def show
  end

  def new
  end

  def edit
  end

  def create
  end

  def update
  end

  def delete
  end

  private

  def product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:prodcut).permit(:name, :description, :price, :picture, :quantity)
end
