const togglePopup = (popupSelector, openButtonsSelector, closeButtonSelector) => {
  const popup = document.querySelector(popupSelector),
    openButtons = document.querySelectorAll(openButtonsSelector),
    closeButton = popup.querySelector(closeButtonSelector);

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      popup.style.visibility = 'visible';
    });
  });

  closeButton.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
  });
};

export default togglePopup;
