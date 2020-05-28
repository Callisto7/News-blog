ActiveAdmin.register Post do
  permit_params :user_id, :title, :text, :category
  menu label: "Новости"

  # or
  #
  # permit_params do
  #   permitted = [:user_id, :title, :text, :category]
  #   permitted << :other if params[:action] == 'create' && current_user.admin?
  #   permitted
  # end

  index :title => 'Новости' do
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

  show do
    attributes_table :title => 'Подробнее' do
      row 'Автор' do |post|
        post.user
      end
      row 'Заголовок' do |post|
        post.title
      end
      row 'Содержимое' do |post|
        post.text
      end
      row 'Дата добавления' do |post|
        post.created_at
      end
      row 'Дата обновления' do |post|
        post.updated_at
      end
      row 'Категория' do |post|
        post.category
      end
  end
  end

  form :title => 'Добавить новость' do |f|
    f.inputs do
      f.input :user, label: "Автор"
      f.input :title, label: "Заголовок"
      f.input :text, label: "Содержимое"
      f.input :category, label: "Категории"
      f.input :image, label: "Фотография"
    end

    f.actions do
      f.action :submit, label: "Обновить Новость"
      f.cancel_link({action: "show"})
    end
  end
end
