Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope(:path => '/api') do
    get '/search_start/:input', to: 'search#search_start'
  end
end
