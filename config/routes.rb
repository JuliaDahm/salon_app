Rails.application.routes.draw do

  devise_for :users, controllers: {
        sessions: 'users/registrations'
      }
  root 'home#index'
  resources :customers
end
