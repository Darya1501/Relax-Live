import togglePhoneList from './modules/phoneList';
import toggleBurgerMenu from './modules/burgerMenu';
import smoothScroll from './modules/smoothScroll';
import phoneMask from './modules/phoneMask';
import togglePopup from './modules/togglePopup';

// Дополнительный номер в хедере
togglePhoneList();
// Бургер-меню
toggleBurgerMenu();
// Плавный скролл для ссылок-якорей
smoothScroll();
// Открытие полного списка услуг
togglePopup('.popup-privacy', '.link-privacy', '.close');
// Маска для полей с номерами телефона
phoneMask();
// Открытие политики конфиденциальности
togglePopup('.popup-repair-types', '.link-list', '.close');

