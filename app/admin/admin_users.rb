ActiveAdmin.register AdminUser do
  permit_params :email, :password, :password_confirmation

  menu label: "Администраторы"

  index :title => 'Админ - Пользователи' do
    selectable_column
    id_column
    column :email
    column :created_at
    actions
  end

  filter :email
  filter :current_sign_in_at
  filter :sign_in_count
  filter :created_at

  show  do
    attributes_table do
      row :email
      row :created_at
    end
  end

  show do
    attributes_table :title => 'Инормация о пользователе' do
      row 'Email' do |admin_user|
        admin_user.email
      end
      row 'Дата регистрации' do |admin_user|
        admin_user.created_at
      end
    end
  end

  form :title => 'Изменить Администратора' do |f|
      f.inputs  do
      f.input :email, label: 'Email'
      f.input :password, label: 'Пароль'
      f.input :password_confirmation, label: 'Подтвердите пароль'
    end
      f.actions do
        f.action :submit, label: "Изменить администратора"
        f.cancel_link({action: "show"})
      end
  end
end
