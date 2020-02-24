Rails.application.routes.draw do
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    sign_in: 'users/login',
    sign_out: 'users/logout',
    passwords: 'users/passwords',
    registrations: 'users/registrations'
  }
  resources :posts do
    resource :likes, only: :update
  end
  resources :comments, only: [:create, :destroy]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'posts#index'
end