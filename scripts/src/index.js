import togglePhoneList from './modules/phoneList';
import toggleBurgerMenu from './modules/burgerMenu';
import smoothScroll from './modules/smoothScroll';
import phoneMask from './modules/phoneMask';
import togglePopup from './modules/togglePopup';
import showTooltip from './modules/showTooltip';
import typesRepairSliders from './modules/typesRepairSliders.js';

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
// Подсказки при наведении в секции "Формула успеха"
showTooltip();
// Слайдер в типах ремонта
typesRepairSliders();



