class ProductsController < ApplicationController
  before_action :product, only: [:show, :edit, :update, :destroy] 
  before_action :authenticate_user!
  
  def index
    @products = Product.all
    respond_to do |format|
      format.html 
      format.json { render json: @products.to_json }
    end
    
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

  def destroy
    if Product.find(params[:id]).destroy
      render json: { id: params[:id].to_i}
    else
      render json: { errors: "Product can't be deleted try again"}
    end
  end

  private

  def product
    @product = Product.find(params[:id])
  end

  def product_params
    params.require(:product).permit(:name, :description, :price, :picture, :quantity)
  end
end
