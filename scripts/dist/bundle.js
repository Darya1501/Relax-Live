/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_phoneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/phoneList */ \"./src/modules/phoneList.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/phoneMask */ \"./src/modules/phoneMask.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_showTooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showTooltip */ \"./src/modules/showTooltip.js\");\n/* harmony import */ var _modules_typesRepairSliders_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/typesRepairSliders.js */ \"./src/modules/typesRepairSliders.js\");\n\n\n\n\n\n\n // Дополнительный номер в хедере\n\n(0,_modules_phoneList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Бургер-меню\n\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Плавный скролл для ссылок-якорей\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Открытие полного списка услуг\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.popup-privacy', '.link-privacy', '.close'); // Маска для полей с номерами телефона\n\n(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Открытие политики конфиденциальности\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.popup-repair-types', '.link-list', '.close'); // Подсказки при наведении в секции \"Формула успеха\"\n\n(0,_modules_showTooltip__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(); // Слайдер в типах ремонта\n\n(0,_modules_typesRepairSliders_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//# sourceURL=webpack://RelaxLive/./src/index.js?");

/***/ }),

/***/ "./src/modules/burgerMenu.js":
/*!***********************************!*\
  !*** ./src/modules/burgerMenu.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleBurgerMenu = function toggleBurgerMenu() {\n  var menu = document.querySelector('.popup-menu'),\n      menuDialog = menu.querySelector('.popup-dialog-menu'),\n      menuButtons = document.querySelectorAll('.menu'),\n      closeButton = menuDialog.querySelector('.close-menu');\n\n  var showMenu = function showMenu() {\n    menu.style.visibility = 'visible';\n    menuDialog.style.transform = 'translate3d(0, 0, 0)';\n  };\n\n  var hideMenu = function hideMenu() {\n    menu.style.visibility = 'hidden';\n    var transform = document.documentElement.clientWidth > 576 ? 'translate3d(645px, 0, 0)' : 'translate3d(0, -655px, 0)';\n    menuDialog.style.transform = transform;\n  };\n\n  menuButtons.forEach(function (button) {\n    button.addEventListener('click', function () {\n      showMenu();\n    });\n  });\n  menu.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.tagName === 'A' || target === closeButton) {\n      hideMenu();\n    } else if (!target.closest('.row')) {\n      hideMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleBurgerMenu);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/burgerMenu.js?");

/***/ }),

/***/ "./src/modules/phoneList.js":
/*!**********************************!*\
  !*** ./src/modules/phoneList.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePhoneList = function togglePhoneList() {\n  var accordion = document.querySelector('.header-contacts__phone-number-accord'),\n      accordionLink = accordion.querySelector('a'),\n      arrowButton = document.querySelector('.header-contacts__arrow');\n  arrowButton.addEventListener('click', function () {\n    if (arrowButton.style.transform === 'rotate(180deg)') {\n      arrowButton.style.transform = 'rotate(0deg)';\n      accordion.style.top = 0;\n      accordionLink.style.opacity = 0;\n    } else {\n      arrowButton.style.transform = 'rotate(180deg)';\n      accordion.style.top = '30px';\n      accordionLink.style.opacity = 1;\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePhoneList);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/phoneList.js?");

/***/ }),

/***/ "./src/modules/phoneMask.js":
/*!**********************************!*\
  !*** ./src/modules/phoneMask.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar phoneMask = function phoneMask() {\n  var elems = document.querySelectorAll('input[name=\"phone\"]');\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = '+7 (___) ___-__-__',\n        def = template.replace(/\\D/g, ''),\n        val = this.value.replace(/\\D/g, '');\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf('_');\n\n    if (i !== -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return '\\\\d{1,' + a.length + '}';\n    }).replace(/[+()]/g, '\\\\$&');\n    reg = new RegExp('^' + reg + '$');\n\n    if (!reg.test(this.value) || this.value.length < 18 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type === 'blur' && this.value.length < 18) {\n      this.value = '';\n    }\n  }\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener('input', mask);\n      elem.addEventListener('focus', mask);\n      elem.addEventListener('blur', mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (phoneMask);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/phoneMask.js?");

/***/ }),

/***/ "./src/modules/showTooltip.js":
/*!************************************!*\
  !*** ./src/modules/showTooltip.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _sliderCarousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderCarousel */ \"./src/modules/sliderCarousel.js\");\n\n\nvar showTooltip = function showTooltip() {\n  var wrapper = document.querySelector('.formula>.mobile-hide');\n\n  if (document.documentElement.clientWidth > 1024) {\n    wrapper.addEventListener('mouseover', function (event) {\n      var item = event.target.closest('.formula-item');\n\n      if (item) {\n        item.classList.add('active-item');\n        var tooltip = item.querySelector('.formula-item-popup');\n\n        if (item.getBoundingClientRect().top < tooltip.offsetHeight + 5) {\n          item.closest('.row').style.zIndex = 1;\n          tooltip.classList.add('updown-popup');\n          tooltip.style.bottom = \"-\".concat(tooltip.offsetHeight + 10, \"px\");\n        }\n\n        tooltip.style.visibility = 'visible';\n        tooltip.style.opacity = 1;\n      }\n    });\n    wrapper.addEventListener('mouseout', function (event) {\n      var item = event.target.closest('.formula-item');\n\n      if (item) {\n        item.classList.remove('active-item');\n        var tooltip = item.querySelector('.formula-item-popup');\n        tooltip.classList.remove('updown-popup');\n        tooltip.style.bottom = \"90px\";\n        item.closest('.row').style.zIndex = 0;\n        tooltip.style.visibility = 'hidden';\n        tooltip.style.opacity = 0.1;\n      }\n    });\n  } else {\n    var slider = new _sliderCarousel__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      main: \".formula-slider-wrap\",\n      wrap: \".formula-slider\",\n      next: \".slider-arrow_right-formula\",\n      prev: \".slider-arrow_left-formula\",\n      slidesToShow: 3,\n      responsive: [{\n        breakpoint: 768,\n        slidesToShow: 1\n      }]\n    });\n    slider.init();\n    var slides = document.querySelectorAll('.formula-slider__slide'),\n        arrowLeft = document.querySelector('.slider-arrow_left-formula'),\n        arrowRight = document.querySelector('.slider-arrow_right-formula');\n\n    var prevSlide = function prevSlide(elem, index, strclass) {\n      elem[index].classList.remove(strclass);\n    };\n\n    var nextSlide = function nextSlide(elem, index, strclass) {\n      elem[index].classList.add(strclass);\n    };\n\n    if (document.documentElement.clientWidth < 769) {\n      slides[0].style.display = 'none';\n      slides[7].style.display = 'none';\n    }\n\n    var currentSlide = 1;\n    nextSlide(slides, currentSlide, 'active-item');\n    arrowLeft.style.display = 'none';\n    arrowLeft.addEventListener('click', function () {\n      if (currentSlide === 6) arrowRight.style.display = 'flex';\n      prevSlide(slides, currentSlide, 'active-item');\n      currentSlide--;\n      nextSlide(slides, currentSlide, 'active-item');\n      if (currentSlide === 1) arrowLeft.style.display = 'none';\n    });\n    arrowRight.addEventListener('click', function () {\n      if (currentSlide === 1) arrowLeft.style.display = 'flex';\n      prevSlide(slides, currentSlide, 'active-item');\n      currentSlide++;\n      nextSlide(slides, currentSlide, 'active-item');\n      if (currentSlide === 6) arrowRight.style.display = 'none';\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTooltip);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/showTooltip.js?");

/***/ }),

/***/ "./src/modules/sliderCarousel.js":
/*!***************************************!*\
  !*** ./src/modules/sliderCarousel.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar SliderCarousel = /*#__PURE__*/function () {\n  function SliderCarousel(_ref) {\n    var main = _ref.main,\n        wrap = _ref.wrap,\n        next = _ref.next,\n        prev = _ref.prev,\n        _ref$infinity = _ref.infinity,\n        infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n        _ref$position = _ref.position,\n        position = _ref$position === void 0 ? 0 : _ref$position,\n        _ref$slidesToShow = _ref.slidesToShow,\n        slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n        _ref$responsive = _ref.responsive,\n        responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n    _classCallCheck(this, SliderCarousel);\n\n    if (!main || !wrap) {\n      console.warn('Slider-carousel: Необходимы свойства \"main\" и \"wrap\"!');\n    }\n\n    this.main = document.querySelector(main);\n    this.wrap = document.querySelector(wrap);\n    this.slides = document.querySelector(wrap).children;\n    this.next = document.querySelector(next);\n    this.prev = document.querySelector(prev);\n    this.slidesToShow = slidesToShow;\n    this.options = {\n      position: position,\n      infinity: infinity,\n      widthSlide: Math.floor(100 / this.slidesToShow),\n      maxSlide: this.slides.length - this.slidesToShow\n    };\n    this.responsive = responsive;\n  }\n\n  _createClass(SliderCarousel, [{\n    key: \"init\",\n    value: function init() {\n      this.addGloClass();\n      this.addStyle();\n\n      if (this.prev && this.next) {\n        this.controlSlider();\n      }\n\n      if (this.responsive) {\n        this.responseInit();\n      }\n    }\n  }, {\n    key: \"addGloClass\",\n    value: function addGloClass() {\n      var _iterator = _createForOfIteratorHelper(this.slides),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var item = _step.value;\n          item.classList.add('glo-slider__item');\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.main.classList.add('glo-slider');\n      this.wrap.classList.add('glo-slider__wrap');\n    }\n  }, {\n    key: \"addStyle\",\n    value: function addStyle() {\n      var style = document.getElementById('sliderCarousel-style');\n\n      if (!style) {\n        style = document.createElement('style');\n        style.id = 'sliderCarousel-style';\n      }\n\n      style.textContent = \"\\n      .glo-slider {\\n        overflow: hidden;\\n      }\\n      .glo-slider__wrap {\\n        display: flex;\\n        align-items: flex-start;\\n        transition: transform 0.5s;\\n        will-change: transform;\\n      }\\n      .glo-slider__item {\\n        display: flex;\\n        flex: 0 0 \".concat(this.options.widthSlide, \"%;\\n        position: relative;\\n        top: inherit;\\n        left: inherit;\\n        transform: translate(0, 0);\\n      }\\n    \");\n      document.head.appendChild(style);\n    }\n  }, {\n    key: \"controlSlider\",\n    value: function controlSlider() {\n      this.prev.addEventListener('click', this.prevSlider.bind(this));\n      this.next.addEventListener('click', this.nextSlider.bind(this));\n    }\n  }, {\n    key: \"prevSlider\",\n    value: function prevSlider() {\n      if (this.options.infinity || this.options.position > 0) {\n        --this.options.position;\n        console.log('this.options.position: ', this.options.position);\n\n        if (this.options.position < 0) {\n          this.options.position = this.options.maxSlide;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"nextSlider\",\n    value: function nextSlider() {\n      if (this.options.infinity || this.options.position < this.options.maxSlide) {\n        ++this.options.position;\n\n        if (this.options.position > this.options.maxSlide) {\n          this.options.position = 0;\n        }\n\n        this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n      }\n    }\n  }, {\n    key: \"responseInit\",\n    value: function responseInit() {\n      var _this = this;\n\n      var slidesToShowDefault = this.slidesToShow;\n      var allResponse = this.responsive.map(function (item) {\n        return item.breakpoint;\n      });\n      var maxResponse = Math.max.apply(Math, _toConsumableArray(allResponse));\n\n      var checkResponse = function checkResponse() {\n        var widthWindow = document.documentElement.clientWidth;\n\n        if (widthWindow < maxResponse) {\n          for (var i = 0; i < allResponse.length; i++) {\n            if (widthWindow < allResponse[i]) {\n              _this.slidesToShow = _this.responsive[i].slidesToShow;\n              _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n              _this.addStyle();\n            }\n          }\n        } else {\n          _this.slidesToShow = slidesToShowDefault;\n          _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n          _this.addStyle();\n        }\n      };\n\n      checkResponse();\n      window.addEventListener('resize', checkResponse);\n    }\n  }]);\n\n  return SliderCarousel;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderCarousel);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/sliderCarousel.js?");

/***/ }),

/***/ "./src/modules/smoothScroll.js":
/*!*************************************!*\
  !*** ./src/modules/smoothScroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar smoothScroll = function smoothScroll() {\n  var anchors = document.querySelectorAll('a[href*=\"#\"]');\n  anchors.forEach(function (anchor) {\n    anchor.addEventListener('click', function (event) {\n      event.preventDefault();\n      var blockID = anchor.getAttribute('href').substr(1);\n      var block = document.getElementById(blockID);\n      if (block) block.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/smoothScroll.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup(popupSelector, openButtonsSelector, closeButtonSelector) {\n  var popup = document.querySelector(popupSelector),\n      openButtons = document.querySelectorAll(openButtonsSelector),\n      closeButton = popup.querySelector(closeButtonSelector);\n  openButtons.forEach(function (button) {\n    button.addEventListener('click', function () {\n      popup.style.visibility = 'visible';\n    });\n  });\n  closeButton.addEventListener('click', function () {\n    popup.style.visibility = 'hidden';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/typesRepairSliders.js":
/*!*******************************************!*\
  !*** ./src/modules/typesRepairSliders.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar activateSlider = function activateSlider(activeSlider) {\n  var slides = activeSlider.querySelectorAll('.repair-types-slider__slide'),\n      arrowLeft = document.querySelector('#repair-types-arrow_left'),\n      arrowRight = document.querySelector('#repair-types-arrow_right'),\n      counter = document.querySelector('.slider-counter-content__current');\n  document.querySelector('.slider-counter-content__total').textContent = slides.length;\n\n  var prevSlide = function prevSlide(elem, index, strclass) {\n    elem[index].classList.remove(strclass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strclass) {\n    elem[index].classList.add(strclass);\n  };\n\n  var currentSlide = 0;\n  counter.textContent = currentSlide + 1;\n  nextSlide(slides, currentSlide, 'repair-types-slider__slide--active');\n  arrowLeft.style.display = 'none';\n  arrowRight.style.display = 'flex';\n  arrowLeft.addEventListener('click', function () {\n    if (currentSlide === slides.length - 1) arrowRight.style.display = 'flex';\n    prevSlide(slides, currentSlide, 'repair-types-slider__slide--active');\n    currentSlide--;\n    counter.textContent = currentSlide + 1;\n    nextSlide(slides, currentSlide, 'repair-types-slider__slide--active');\n    if (currentSlide === 0) arrowLeft.style.display = 'none';\n  });\n  arrowRight.addEventListener('click', function () {\n    if (currentSlide === 0) arrowLeft.style.display = 'flex';\n    prevSlide(slides, currentSlide, 'repair-types-slider__slide--active');\n    currentSlide++;\n    counter.textContent = currentSlide + 1;\n    nextSlide(slides, currentSlide, 'repair-types-slider__slide--active');\n    if (currentSlide === slides.length - 1) arrowRight.style.display = 'none';\n  });\n};\n\nvar typesRepairSliders = function typesRepairSliders() {\n  var slides = document.querySelectorAll('.types-repair'),\n      dotsWrapper = document.querySelector('.nav-list-repair'),\n      dots = Array.from(dotsWrapper.children),\n      firstDot = dotsWrapper.querySelector('active');\n  var currentSlide = firstDot ? dots.indexOf(firstDot) : 0;\n  activateSlider(slides[currentSlide]);\n\n  var prevSlide = function prevSlide(elem, index, strclass) {\n    elem[index].classList.remove(strclass);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strclass) {\n    elem[index].classList.add(strclass);\n  };\n\n  dotsWrapper.addEventListener('click', function (event) {\n    var target = event.target;\n    if (!target.matches('.repair-types-nav__item')) return;\n    prevSlide(dots, currentSlide, 'active');\n    prevSlide(slides, currentSlide, 'types-repair-active');\n    currentSlide = dots.indexOf(target);\n    activateSlider(slides[currentSlide]);\n    nextSlide(dots, currentSlide, 'active');\n    nextSlide(slides, currentSlide, 'types-repair-active');\n  });\n\n  if (document.documentElement.clientWidth <= 1024) {\n    var arrowLeft = document.querySelector('#nav-arrow-repair-left_base'),\n        arrowRight = document.querySelector('#nav-arrow-repair-right_base'),\n        wrapper = document.querySelector('.repair-types-nav');\n    dotsWrapper.style.transform = 'translateX(50px)';\n    var currentPosition = 0;\n\n    var prevSlider = function prevSlider() {\n      if (currentPosition > 1) {\n        --currentPosition;\n        dotsWrapper.style.transform = \"translateX(-\".concat(currentPosition * 200, \"px)\");\n      } else {\n        dotsWrapper.style.transform = 'translateX(50px)';\n      }\n    };\n\n    var nextSlider = function nextSlider() {\n      if (currentPosition * 200 < dotsWrapper.offsetWidth - wrapper.offsetWidth) {\n        ++currentPosition;\n        dotsWrapper.style.transform = \"translateX(-\".concat(currentPosition * 200 + 50, \"px)\");\n      }\n    };\n\n    arrowLeft.addEventListener('click', function () {\n      return prevSlider();\n    });\n    arrowRight.addEventListener('click', function () {\n      return nextSlider();\n    });\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (typesRepairSliders);\n\n//# sourceURL=webpack://RelaxLive/./src/modules/typesRepairSliders.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;