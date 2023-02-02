let input = document.querySelectorAll('.form__input'),
    placeholder = document.querySelectorAll('.placeholder');

input.forEach((item) => {
  item.onfocus = () => {
    let path = event.currentTarget.dataset.path;
    placeholder.forEach((active) => {
      let target = active.dataset.target;
      if (path.localeCompare(target) === 0) {
        if (target.localeCompare("contacts-comment") === 0) {
          active.style.transform = 'translate(-22px, -15px) scale(60%)';
        } else {
          active.style.transform = 'translate(-9px, -15px) scale(60%)';
        }
      }
    })
  };
  item.onblur = () =>  {
    let curTarget = event.currentTarget,
        path = curTarget.dataset.path;
    placeholder.forEach((active) => {
      let target = active.dataset.target;
      if (path.localeCompare(target) === 0) {
        if (curTarget.value !== "") {
          if (target.localeCompare("contacts-comment") === 0) {
            active.style.transform = 'translate(-22px, -15px) scale(60%)';
          } else {
            active.style.transform = 'translate(-9px, -15px) scale(60%)';
          }
        } else {
          active.style.transform = 'none';
        }
      }
    })
  };
})
