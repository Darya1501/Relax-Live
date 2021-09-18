const togglePopup = (popupSelector, openButtonsSelector, closeButtonSelector) => {
  const popup = document.querySelector(popupSelector),
    openButtons = document.querySelectorAll(openButtonsSelector),
    closeButtons = popup.querySelectorAll(closeButtonSelector),
    popupDialog = popup.querySelector('.popup-dialog') || popup.children[0];

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'visible';

      let reqID = 0;
      const animate = () => {
        if (popupDialog.style.opacity < 1) {
          popupDialog.style.opacity = 0.05 + parseFloat(popupDialog.style.opacity);
          popupDialog.style.top = -1 + parseFloat(popupDialog.style.top) + '%';
        } else {
          cancelAnimationFrame(reqID);
          return;
        }
        reqID = requestAnimationFrame(animate);
      };
      if (document.documentElement.clientWidth > 768) {
        popupDialog.style.opacity = 0;
        popupDialog.style.top = 20 + '%';
        animate();
      }

    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'hidden';
    });
  });
};

export default togglePopup;
