Rails.application.routes.draw do
  root to: "pages#home"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :cv, only: %i[index]
  resources :contacts, only: %i[index]
  resources :works, only: %i[index]

end
