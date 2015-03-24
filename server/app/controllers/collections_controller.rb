class CollectionsController < ApplicationController
  def show
    @collection = Collection.first
    respond_to do |format|
      format.json { render json: @collection.restaurants.to_json }
    end
  end

  def add_restaurant
    @collection = Collection.first
    # for allston
    # {restaurant: {id: <id>}}
    # POST /collections/1/add_restaurant.json
    collections_restaurant = @collection.collections_restaurants.build(params[:restaurant])
    if collections_venue.save
      respond_to do |format|
        format.json { render json: @collection.to_json }
      end
    else
      respond_to do |format|
        format.json { render json: @collection.to_json }
      end
    end
  end
end
