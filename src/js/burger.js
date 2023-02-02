let burger = document.querySelector('.burger'),
    btnclose = document.querySelector('.nav__btn_close'),
    nav = document.querySelector('.header__nav'),
    items = Array.prototype.slice.call(document.querySelectorAll('.nav__item')),
    mediaWidth = 660,
    phone = document.querySelector('.nav__phone'),
    i;

items.push(phone);

let anim = () => {
  items[i].style.opacity = 1;
  items[i].style.transform = 'none';
  i++;
  if (i === items.length) {
    cancelAnimationFrame(anim);
  } else {
    requestAnimationFrame(anim);
  }
}

let animReverse = () => {
  items[i].style.opacity = 0;
  items[i].style.transform = 'translateY(50px)';
  i--;
  if (i === -1) {
    cancelAnimationFrame(animReverse);
  } else {
    requestAnimationFrame(animReverse);
  }
}

burger.onclick = () => {
  nav.classList.add('header__nav_active');
  setTimeout(() => {
    nav.style.opacity = 1;
  }, 10)
  cancelAnimationFrame(animReverse);
  i = 0;
  setTimeout(() => {
    requestAnimationFrame(anim);
  }, 80)
}

btnclose.onclick = () => {
  cancelAnimationFrame(anim);
  i = items.length - 1;
  requestAnimationFrame(animReverse);
  nav.style.opacity = 0;
  setTimeout(() => {
    nav.classList.remove('header__nav_active');
  }, 250)
}

window.onresize = () => {

  // для элементов навигации
  let x = document.documentElement.clientWidth;
  if (x > mediaWidth) {
    items.forEach((item) => {
      nav.style.opacity = 1;
      item.style.opacity = 1;
      item.style.transform = 'none';
    })
  } else {
    if (nav.classList.contains('header__nav_active') === false) {
      items.forEach((item) => {
        nav.style.opacity = 0;
        item.style.opacity = 0;
        item.style.transform = 'translateY(50px)';
      })
    } else {
      items.forEach((item) => {
        item.style.opacity = 1;
        item.style.transform = 'none';
      })
    }
  }

  // для модального окна
  if (x > 1200) {
    if (modal.classList.contains('contacts__modal_hidden') == true) {
      let w = modal.offsetWidth;
      modal.style.transform = 'translateX(-' + (w - 60) + 'px)';
    } else {
      modal.style.transform = 'none';
    }
  } else {
    if (modal.classList.contains('contacts__modal_hidden') == true) {
      let h = modal.offsetHeight;
      modal.style.transform = 'translateY(' + (h - 60) + 'px)';
    } else {
      modal.style.transform = 'none';
    }
  }
}
