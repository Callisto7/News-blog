ActiveAdmin.register User do
  permit_params :first_name, :last_name, :role, :gender, :email, :password, :password_confirmation

  menu label: "Пользователи"
  index do
    selectable_column
    id_column
    column :last_name
    column :first_name
    column :email
    column :created_at
    actions
  end

  form do |f|
    f.inputs "Создание пользователя" do
      f.input :first_name, label: "Имя"
      f.input :last_name, label: "Фамилия"
      f.input :email, label: "Email"
      f.input :password, label: "Пароль"
      f.input :password_confirmation, label: "Подтвердите пароль"
      f.input :role, label: "Роль"
      f.input :gender, label: "Пол"
    end
    f.actions
  end

end
