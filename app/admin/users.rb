ActiveAdmin.register User do
  permit_params :first_name, :last_name, :role, :gender, :email, :password, :password_confirmation
  menu label: "Пользователи"
  index :title => 'Пользователи' do
    selectable_column
    id_column
    column :last_name
    column :first_name
    column :email
    column :created_at
    actions
  end

  show do
    attributes_table do
      row :last_name
      row :first_name
      row :email
      row :role
      row :gender
      row :created_at
    end
  form do |f|
    f.actions do
      f.action :submit, label: "Изменить пользователя"
      f.cancel_link({action: "show"})
    end
  end
end

  show do
    attributes_table :title => 'Инормация о пользователе' do
      row 'Имя' do |user|
        user.last_name
      end
      row 'Фамилия' do |user|
        user.first_name
      end
      row 'Email' do |user|
        user.email
      end
      row 'Роль' do |user|
        user.role
      end
      row 'Пол' do |user|
        user.gender
      end
      row 'Дата регистрации' do |user|
        user.created_at
      end
    end
  end

  form :title => 'Изменить пользователя' do |f|
    f.inputs do
      f.input :last_name, label: "Имя"
      f.input :first_name, label: "Фамилия"
      f.input :email, label: "Email"
      f.input :password, label: "Пароль"
      f.input :password_confirmation, label: "Подтвердите пароль"
      f.input :role, label: "Роль"
      f.input :gender, label: "Пол"
    end
    f.actions do
      f.action :submit, label: "Изменить пользователя"
      f.cancel_link({action: "show"})
    end
  end
end
