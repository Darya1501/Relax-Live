const togglePopup = (popupSelector, openButtonsSelector, closeButtonSelector) => {
  const popup = document.querySelector(popupSelector),
    openButtons = document.querySelectorAll(openButtonsSelector),
    closeButtons = popup.querySelectorAll(closeButtonSelector);

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'visible';
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'hidden';
    });
  });
};

export default togglePopup;
