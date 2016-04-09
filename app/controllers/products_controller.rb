class ProductsController < ApplicationController
  before_action :product, only: [:show, :edit, :update, :destroy] 

  def index
    @product = Product.all
  end

  def show
  end


  def create
    product = Product.new(product_params)
    if product.save
      render json: product
    else
      render json: { errors: product.errors.full_messages }
    end
  end

  def edit
  end

  def update
      product = Product.find(params[:id])
      if product.update(product_params)
        render json: product
      else
        render json: { errors: product.errors.full_messages }
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
    params.require(:product).permit(:name, :description, :price, :picture, :quantity)
  end
end
