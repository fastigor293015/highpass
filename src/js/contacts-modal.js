let modal = document.querySelector('.contacts__modal'),
    closebtn = document.querySelector('.contacts-modal__btn_close'),
    closeicon = document.querySelector('.contacts-modal__icon_close'),
    openicon = document.querySelector('.contacts-modal__icon_open'),
    text = document.querySelector('.contacts-modal__text');

closebtn.onclick = () => {
  let x = document.documentElement.clientWidth;
  modal.classList.toggle('contacts__modal_hidden');
  if (x > 1200) {
    if (modal.classList.contains('contacts__modal_hidden') == true) {
      let w = modal.offsetWidth;
      modal.style.transform = 'translateX(-' + (w - 60) + 'px)';
      closeicon.classList.remove('contacts-modal__icon_active');
      openicon.classList.add('contacts-modal__icon_active');
    } else {
      modal.style.transform = 'none';
      closeicon.classList.add('contacts-modal__icon_active');
      openicon.classList.remove('contacts-modal__icon_active');
    }
  } else {
    if (modal.classList.contains('contacts__modal_hidden') == true) {
      let h = modal.offsetHeight;
      modal.style.transform = 'translateY(' + (h - 60) + 'px)';
      closeicon.classList.remove('contacts-modal__icon_active');
      openicon.classList.add('contacts-modal__icon_active');
    } else {
      modal.style.transform = 'none';
      closeicon.classList.add('contacts-modal__icon_active');
      openicon.classList.remove('contacts-modal__icon_active');
    }
  }
}
