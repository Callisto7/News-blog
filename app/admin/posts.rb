ActiveAdmin.register Post do

  permit_params :user_id, :title, :text, :category

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
      row 'Имя' do |post|
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
      row 'Фотография' do |post|
        post.image
      end
  end
  end

  form do |f|
    f.inputs "Создание поста" do
      f.input :user, label: "Автор"
      f.input :title, label: "Заголовок"
      f.input :text, label: "Содержимое"
      f.input :category, label: "Категории"
      f.input :image, label: "Фотография"
    end
    f.actions
  end
  
end
