Rails.application.routes.draw do
  root to: 'home#index'
  get '/counter', to: 'home#index'
end
