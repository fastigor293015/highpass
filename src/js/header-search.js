let openform = document.querySelector('.header-search__btn'),
    closeform = document.querySelector('.header-form__btn_close'),
    form = document.querySelector('.header__form'),
    inputform = document.querySelector('.header-form__input');

openform.onclick = () => {
  form.classList.add('header__form_active');
  inputform.focus();
}

closeform.onclick = () => {
  form.classList.remove('header__form_active');
}
