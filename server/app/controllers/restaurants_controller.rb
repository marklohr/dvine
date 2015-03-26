class RestaurantsController < ApplicationController
  
  def index
    # if params[:page]
    ##@restaurants = Restaurant.paginate(:page => params[:page], :per_page => 20)
    # else
    @restaurants = Restaurant.all
    # end
    respond_to do |format|
      format.html #index.html.erb
        # @restaurants = Restaurant.paginate(:page => params[:page], :per_page => 20)
      format.json { render json: @restaurants.to_json }
    end
  end
  
  def show
    set_restaurant
    respond_to do |format|
      format.html #index.html.erb
        # @restaurants = Restaurant.paginate(:page => params[:page], :per_page => 20)
      format.json { render json: @restaurant.to_json }
    end
  end

  def new
    @restaurant = Restaurant.new
    respond_to do |format|
      format.html 
      format.json { render json: @restaurant.to_json }
    end
  end

  def create
    @restaurant = Restaurant.new restaurant_params
      if @restaurant.save
      respond_to do |format|
        format.json { render json: @restaurant.as_json }
        format.html
        end
      else
      respond_to do |format|
        format.json { render json: @restaurant.errors.full_messages, status: 422 }
        format.html
      end
    end
  end

  def edit
    @restaurant = Restaurant.find params[:id]
  end

  def update
    @restaurant = Restaurant.find params[:id]
    if @restaurant.update_attributes restaurant_params
      respond_to do |format|
        format.html
        format.json { render json: @restaurant.as_json }
      end
    else
      respond_to do |format|
        format.html
        format.json { render json: @restaurant.errors.full_messages, status: 422 }
      end
    end
  end


  def destroy
    @restaurant = Restaurant.find params[:id]
    @restaurant.destroy
  end


  private

  def set_restaurant
    @restaurant = Restaurant.find params[:id]
  end
  
  def restaurant_params
    params.require(:restaurant).permit(
      :name,
      :address,
      :city,
      :state,
      :zip,
      :phone,
      :website,
      :latitude,
      :longitude
      )


  end
end
