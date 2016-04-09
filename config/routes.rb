Rails.application.routes.draw do

  devise_for :users, controllers: {
        sessions: 'users/sessions'
      }
  root 'home#show'
  resources :customers
  resources :products
  
end
