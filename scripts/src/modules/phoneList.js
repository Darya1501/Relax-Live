const togglePhoneList = () => {
  const accordion = document.querySelector('.header-contacts__phone-number-accord'),
    accordionLink = accordion.querySelector('a'),
    arrowButton = document.querySelector('.header-contacts__arrow');

  arrowButton.addEventListener('click', () => {
    if (arrowButton.style.transform === 'rotate(180deg)') {
      arrowButton.style.transform = 'rotate(0deg)';
      accordion.style.top = 0;
      accordionLink.style.opacity = 0;
    } else {
      arrowButton.style.transform = 'rotate(180deg)';
      accordion.style.top = '30px';
      accordionLink.style.opacity = 1;
    }
  });
};

export default togglePhoneList;
