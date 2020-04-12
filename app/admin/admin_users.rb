ActiveAdmin.register AdminUser do
  permit_params :email, :password, :password_confirmation

  menu label: "Администраторы"
  index do
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

  form do |f|
    f.inputs do
      f.input :email, label: "Email"
      f.input :password, label: "Пароль"
      f.input :password_confirmation, label: "Подтвердите пароль"
    end
    f.actions
  end

end
