const toggleBurgerMenu = () => {
  const menu = document.querySelector('.popup-menu'),
    menuDialog = menu.querySelector('.popup-dialog-menu'),
    menuButtons = document.querySelectorAll('.menu'),
    closeButton = menuDialog.querySelector('.close-menu');

  const showMenu = () => {
    menu.style.visibility = 'visible';
    menuDialog.style.transform = 'translate3d(0, 0, 0)';
  };

  const hideMenu = () => {
    menu.style.visibility = 'hidden';
    const transform = document.documentElement.clientWidth > 576 ?
      'translate3d(645px, 0, 0)' : 'translate3d(0, -655px, 0)';
    menuDialog.style.transform = transform;
  };

  menuButtons.forEach(button => {
    button.addEventListener('click', () => {
      showMenu();
    });
  });

  menu.addEventListener('click', event => {
    const target = event.target;
    if (target.tagName === 'A' || target === closeButton) {
      hideMenu();
    } else if (!target.closest('.row')) {
      hideMenu();
    }
  });
};

export default toggleBurgerMenu;
