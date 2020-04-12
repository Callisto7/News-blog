ActiveAdmin.register Post do
  permit_params :user_id, :title, :text, :category
  menu label: "Новости"



  #
  # or
  #
  # permit_params do
  #   permitted = [:user_id, :title, :text, :category]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index do
    selectable_column
    id_column
    column :user
    column :title
    column :text
    column :created_at
    column :updated_at
    column :category
    actions
  end

  show do
    attributes_table do
      row :user
      row :title
      row :text
      row :created_at
      row :updated_at
      row :category
    end
  end
  
end
