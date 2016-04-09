Rails.application.routes.draw do
  devise_for :users, controllers: {
        sessions: 'users/registrations'
      }
  root 'products#index'
  resources :customers
end
