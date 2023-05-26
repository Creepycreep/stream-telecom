document.addEventListener('DOMContentLoaded', () => {

  let popUpBtn = document.querySelector('#pop-up-open'),
    closeBtn = document.querySelector('#pop-up-close'),
    popUp = document.querySelector('#pop-up');

  popUpBtn = addEventListener('click', (e) => {
    if (e.target.id == 'pop-up-open') {
      popUp.classList.remove('pop-up_hide');
    }
  });

  closeBtn.addEventListener('click', () => {
    popUp.classList.add('pop-up_hide');
  });

});