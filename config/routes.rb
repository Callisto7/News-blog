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
  root 'posts#index'
  get '/profiles/:id', to: 'profiles#show', as: 'profile'
end