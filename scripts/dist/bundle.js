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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_phoneList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/phoneList */ \"./src/modules/phoneList.js\");\n/* harmony import */ var _modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burgerMenu */ \"./src/modules/burgerMenu.js\");\n/* harmony import */ var _modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/smoothScroll */ \"./src/modules/smoothScroll.js\");\n/* harmony import */ var _modules_phoneMask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/phoneMask */ \"./src/modules/phoneMask.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n\n\n\n\n // Дополнительный номер в хедере\n\n(0,_modules_phoneList__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Бургер-меню\n\n(0,_modules_burgerMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Плавный скролл для ссылок-якорей\n\n(0,_modules_smoothScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Открытие полного списка услуг\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.popup-privacy', '.link-privacy', '.close'); // Маска для полей с номерами телефона\n\n(0,_modules_phoneMask__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Открытие политики конфиденциальности\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_4__[\"default\"])('.popup-repair-types', '.link-list', '.close');\n\n//# sourceURL=webpack://RelaxLive/./src/index.js?");

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