Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    get '/search_destination/:input', to: 'places_search#search_destination'
    get '/confirm_route/convert_coords/:location', to: 'geocode_map#get_coords'
    get '/confirm_route/mapbox', to: 'geocode_map#mapbox'
    # get '/lyft_uber/?start_lat=:start_lat&start_long=:start_long&drop_off_lat=:drop_off_lat&drop_off_long=:drop_off_long', to: 'lyft_uber#lyft_estimate'
    get '/lyft_uber', to: 'lyft_uber#uber_estimate'
  end
end