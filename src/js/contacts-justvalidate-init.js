new JustValidate('.about__form', {
  rules: {
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    mail: {
      required: 'Заполните это поле',
      email: 'Введите корректный e-mail'
    },
  },
  colorWrong: '#FF3030',
});

new JustValidate('.contacts__form', {
  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 15,
    },
    mail: {
      required: true,
      email: true
    },
  },
  messages: {
    name: {
      required: 'Заполните это поле',
      minLength: 'Введите от 2 до 15 символов',
      maxLength: 'Введите от 2 до 15 символов',
    },
    mail: {
      required: 'Заполните это поле',
      email: 'Введите корректный e-mail'
    },
  },
  colorWrong: '#FF3030',

  submitHandler: function (form, values, ajax) {
    ajax({
        url: '/mail.php',
        method: 'POST',
        data: values,
        async: true,
        callback: function (response) {
            alert('Успешная отправка!')
        },
        error: function (response) {
            alert('Ошибка отправки!')
        }
    });
  },
});
