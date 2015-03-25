class Collection < ActiveRecord::Base

  has_many :collections_restaurants
  has_many :restaurants, :through => :collections_restaurants

end
