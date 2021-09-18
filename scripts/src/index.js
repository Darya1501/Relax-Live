import phoneMask from './modules/plugins/phoneMask.js';
import validate from './modules/plugins/validator.js';
import togglePopup from './modules/plugins/togglePopup.js';

import togglePhoneList from './modules/phoneList.js';
import toggleBurgerMenu from './modules/burgerMenu.js';
import smoothScroll from './modules/smoothScroll.js';
import showTooltip from './modules/showTooltip.js';
import typesRepairSliders from './modules/typesRepairSliders.js';
import porfolioSliders from './modules/porfolioSliders.js';
import transparencyBlock from './modules/transparencyBlock.js';
import reviewsSlider from './modules/reviewsSlider.js';
import accordion from './modules/accordion.js';
import sendForm from './modules/sendForm.js';
import fillRepairTypes from './modules/fillRepairTypes.js';
import serviceSlider from './modules/serviceSlider.js';


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
// Слайдеры и модальное окно в блоке "Портфолио"
porfolioSliders();
// Блок документы
transparencyBlock();
// Консультация
togglePopup('.popup-consultation', '.button_wide', '.close');
// Слайдер с отзывами
reviewsSlider();
// Аккордион с часто задаваемыми вопросами
accordion();
// Валидация
validate();
// Отправка форм
sendForm();
// Получение типов работ из базы данных
fillRepairTypes();
// Мобильный слайдер на главном экране
serviceSlider();
