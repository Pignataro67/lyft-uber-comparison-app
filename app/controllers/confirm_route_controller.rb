class ConfirmRouteController < ApplicationController
  require uri
  
  def get_coordinates
    location = URI.encode(params[:location])
    res = RestClient::Request.execute(
      method: :get,
      url: "https://api.mapbox.com/geocoding/v5/mapbox.places/#{location}.json?access_token=#{ENV['MAPBOX']}",
      )
    render json: res
  end

  def mapbox
    key = ENV['MAPBOX']
    render json: key
  end
end