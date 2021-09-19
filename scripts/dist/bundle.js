(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var n=function(){function t(i){var n,r=i.selector,o=i.pattern,s=void 0===o?{}:o,a=i.method;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.form=document.querySelector(r),this.pattern=s,this.method=a,this.elementsForm=(n=this.form.elements,function(t){if(Array.isArray(t))return e(t)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,i){if(t){if("string"==typeof t)return e(t,i);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,i):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).filter((function(t){return"button"!==t.tagName.toLowerCase()&&"button"!==t.type})),this.error=new Set}var n,r;return n=t,(r=[{key:"init",value:function(){var t=this;this.applyStyle(),this.setPattern(),this.elementsForm.forEach((function(e){return e.addEventListener("change",t.chekIt.bind(t))})),this.form.addEventListener("submit",(function(e){t.elementsForm.forEach((function(e){return t.chekIt({target:e})})),t.error.size?e.preventDefault():t.elementsForm.forEach((function(t){return t.classList.remove("success")}))}))}},{key:"isValid",value:function(t){var e=this,i={notEmpty:function(t){return""!==t.value.trim()},pattern:function(t,e){return e.test(t.value)}};if(this.method){var n=this.method[t.id];if(n)return n.every((function(n){return i[n[0]](t,e.pattern[n[1]])}))}return!0}},{key:"chekIt",value:function(t){var e=t.target;this.isValid(e)?(this.showSuccess(e),this.error.delete(e)):(this.showError(e),this.error.add(e))}},{key:"showError",value:function(t){if(t.classList.remove("success"),t.classList.add("error"),!t.nextElementSibling||!t.nextElementSibling.classList.contains("validator-error")){var e=document.createElement("div");e.textContent="Ошибка в этом поле",e.classList.add("validator-error"),t.insertAdjacentElement("afterend",e)}}},{key:"showSuccess",value:function(t){t.classList.remove("error"),t.classList.add("success"),t.nextElementSibling&&t.nextElementSibling.classList.contains("validator-error")&&t.nextElementSibling.remove()}},{key:"applyStyle",value:function(){var t=document.createElement("style");t.textContent="\n      input.success {\n        border-bottom: 2px solid green !important\n      }\n      input.error {\n        border-bottom: 2px solid red !important\n      }\n      .validator-error {\n        position: absolute;\n        bottom: -15px;\n        font-size: 14px;\n        color: red;\n        margin-top: -20px;\n      }\n    ",document.head.appendChild(t)}},{key:"setPattern",value:function(){this.pattern.phone||(this.pattern.phone=/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/),this.pattern.email||(this.pattern.email=/^\w+@\w+\.\w{2,}$/),this.pattern.name||(this.pattern.name=/^[а-я ]{2,}$/i),this.pattern.message||(this.pattern.message=/[а-я0-9 ]/i)}}])&&i(n.prototype,r),t}();const r=function(t,e,i){var n=document.querySelector(t),r=document.querySelectorAll(e),o=n.querySelector(".popup-dialog")||n.children[0];r.forEach((function(t){t.addEventListener("click",(function(){n.style.visibility="visible";var t=0;document.documentElement.clientWidth>768&&(o.style.opacity=0,o.style.top="20%",function e(){o.style.opacity<1?(o.style.opacity=.05+parseFloat(o.style.opacity),o.style.top=-1+parseFloat(o.style.top)+"%",t=requestAnimationFrame(e)):cancelAnimationFrame(t)}())}))})),n.addEventListener("click",(function(t){var e=t.target;e.closest(i)?n.style.visibility="hidden":e.closest(o)||(n.style.visibility="hidden")}))};function o(t,e){if(t){if("string"==typeof t)return s(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const l=function(){function t(e){var i=e.main,n=e.wrap,r=e.next,o=e.prev,s=e.infinity,a=void 0!==s&&s,l=e.position,c=void 0===l?0:l,d=e.slidesToShow,u=void 0===d?3:d,p=e.responsive,h=void 0===p?[]:p;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i&&n||console.warn('Slider-carousel: Необходимы свойства "main" и "wrap"!'),this.main=document.querySelector(i),this.wrap=document.querySelector(n),this.slides=document.querySelector(n).children,this.next=document.querySelector(r),this.prev=document.querySelector(o),this.slidesToShow=u,this.options={position:c,infinity:a,widthSlide:Math.floor(100/this.slidesToShow),maxSlide:this.slides.length-this.slidesToShow},this.responsive=h}var e,i;return e=t,(i=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.prev&&this.next&&this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){var t,e=function(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=o(t))){i&&(t=i);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==i.return||i.return()}finally{if(l)throw s}}}}(this.slides);try{for(e.s();!(t=e.n()).done;)t.value.classList.add("glo-slider__item")}catch(t){e.e(t)}finally{e.f()}this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap")}},{key:"addStyle",value:function(){var t=document.getElementById("".concat(this.main.classList[0],"-sliderCarousel-style"));t||((t=document.createElement("style")).id="".concat(this.main.classList[0],"-sliderCarousel-style")),t.textContent="\n      .".concat(this.main.classList[0],".glo-slider {\n        overflow: hidden;\n      }\n      .").concat(this.wrap.classList[0],".glo-slider__wrap {\n        display: flex;\n        align-items: flex-start;\n        transition: transform 0.5s;\n        will-change: transform;\n      }\n      .").concat(this.slides[0].classList[0],".glo-slider__item {\n        display: flex;\n        flex: 0 0 ").concat(this.options.widthSlide,"%;\n        position: relative;\n        top: inherit;\n        left: inherit;\n        transform: translate(0, 0);\n      }\n    "),document.head.appendChild(t)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){this.next.style.display="flex",(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxSlide),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"),0===this.options.position&&(this.prev.style.display="none"))}},{key:"nextSlider",value:function(){this.prev.style.display="flex",(this.options.infinity||this.options.position<this.options.maxSlide)&&(++this.options.position,this.options.position>this.options.maxSlide&&(this.options.position=0),this.wrap.style.transform="translateX(-".concat(this.options.position*this.options.widthSlide,"%)"),this.options.position===this.options.maxSlide&&(this.next.style.display="none"))}},{key:"responseInit",value:function(){var t,e=this,i=this.slidesToShow,n=this.responsive.map((function(t){return t.breakpoint})),r=Math.max.apply(Math,function(t){if(Array.isArray(t))return s(t)}(t=n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||o(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=function(){var t=document.documentElement.clientWidth;if(t<r)for(var o=0;o<n.length;o++)t<n[o]&&(e.slidesToShow=e.responsive[o].slidesToShow,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle());else e.slidesToShow=i,e.options.widthSlide=Math.floor(100/e.slidesToShow),e.addStyle()};a(),window.addEventListener("resize",a)}}])&&a(e.prototype,i),t}();function c(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}const d=function(){function t(e){var i=e.slides,n=e.prev,r=e.next,o=e.dotsWrapper,s=e.dots,a=e.infinity,l=void 0!==a&&a,c=e.currentSlide,d=void 0===c?0:c,u=e.activeClass,p=void 0===u?"active-slide":u,h=e.dotActiveClass,y=void 0===h?"active":h,f=e.counter,v=e.autoPlay,m=void 0!==v&&v;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.activeClass=p,this.slides=document.querySelectorAll(i),this.maxSlideIndex=this.slides.length-1,this.next=document.querySelector(r),this.prev=document.querySelector(n),this.dotsWrapper=document.querySelector(o),s&&(this.dots=Array.from(document.querySelectorAll(s))),this.dotsClass=s,this.dotActiveClass=y,this.counter=document.querySelector(f),this.currentSlide=d,this.infinity=l,this.autoPlay=m}var e,i;return e=t,(i=[{key:"init",value:function(){var t=this;this.slides.forEach((function(e){return e.classList.remove(t.activeClass)})),this.slides[this.currentSlide].classList.add(this.activeClass),this.prev&&this.next&&(!this.infinity&&(this.prev.style.display="none"),this.controlArrow()),this.dotsWrapper&&this.dots&&this.controlDots(),this.counter&&(this.currentCouner=this.counter.querySelector(".slider-counter-content__current"),this.totalCouner=this.counter.querySelector(".slider-counter-content__total"),this.currentCouner.textContent=this.currentSlide+1,this.totalCouner.textContent=this.slides.length),this.autoPlay&&setInterval((function(){var e=t.currentSlide===t.maxSlideIndex?0:t.currentSlide+1;t.changeSlide(e)}),3e3)}},{key:"changeCurrentSlide",value:function(t){var e=this;this.currentSlide=t,this.slides.forEach((function(t){return t.classList.remove(e.activeClass)})),this.slides[this.currentSlide].classList.add(this.activeClass),this.currentCouner&&(this.currentCouner.textContent=this.currentSlide+1)}},{key:"controlArrow",value:function(){this.prev.addEventListener("click",this.prevSlide.bind(this)),this.next.addEventListener("click",this.nextSlide.bind(this))}},{key:"controlDots",value:function(){var t=this;this.dotsWrapper.addEventListener("click",(function(e){e.target.matches(t.dotsClass)&&t.changeSlide(t.dots.indexOf(e.target))}))}},{key:"checkArrow",value:function(t){this.prev.style.display="flex",this.next.style.display="flex",0===t&&(this.prev.style.display="none"),t===this.maxSlideIndex&&(this.next.style.display="none")}},{key:"changeSlide",value:function(t){this.dots&&this.dots[this.currentSlide].classList.remove(this.dotActiveClass),this.slides[this.currentSlide].classList.remove(this.activeClass),this.currentSlide=t,this.prev&&this.next&&!this.infinity&&this.checkArrow(this.currentSlide),this.currentCouner&&(this.currentCouner.textContent=this.currentSlide+1),this.dots&&this.dots[this.currentSlide].classList.add(this.dotActiveClass),this.slides[this.currentSlide].classList.add(this.activeClass)}},{key:"prevSlide",value:function(){this.slides[this.currentSlide].classList.remove(this.activeClass),this.dots&&this.dots[this.currentSlide].classList.remove(this.dotActiveClass),this.currentSlide--,this.infinity?this.currentSlide<0&&(this.currentSlide=this.maxSlideIndex):this.checkArrow(this.currentSlide),this.slides[this.currentSlide].classList.add(this.activeClass),this.dots&&this.dots[this.currentSlide].classList.add(this.dotActiveClass),this.currentCouner&&(this.currentCouner.textContent=this.currentSlide+1)}},{key:"nextSlide",value:function(){this.slides[this.currentSlide].classList.remove(this.activeClass),this.dots&&this.dots[this.currentSlide].classList.remove(this.dotActiveClass),this.currentSlide++,this.infinity?this.currentSlide>this.maxSlideIndex&&(this.currentSlide=0):this.checkArrow(this.currentSlide),this.slides[this.currentSlide].classList.add(this.activeClass),this.dots&&this.dots[this.currentSlide].classList.add(this.dotActiveClass),this.currentCouner&&(this.currentCouner.textContent=this.currentSlide+1)}}])&&c(e.prototype,i),t}();function u(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h,y,f,v,m,S,b,w,g,_,x,E,L,k,A,C,q;A=document.querySelector(".header-contacts__phone-number-accord"),C=A.querySelector("a"),(q=document.querySelector(".header-contacts__arrow")).addEventListener("click",(function(){"rotate(180deg)"===q.style.transform?(q.style.transform="rotate(0deg)",A.style.top=0,C.style.opacity=0):(q.style.transform="rotate(180deg)",A.style.top="30px",C.style.opacity=1)})),_=document.querySelector(".popup-menu"),x=_.querySelector(".popup-dialog-menu"),E=document.querySelectorAll(".menu"),L=x.querySelector(".close-menu"),k=function(){_.style.visibility="hidden";var t=document.documentElement.clientWidth>576?"translate3d(645px, 0, 0)":"translate3d(0, -655px, 0)";x.style.transform=t},E.forEach((function(t){t.addEventListener("click",(function(){_.style.visibility="visible",x.style.transform="translate3d(0, 0, 0)"}))})),_.addEventListener("click",(function(t){var e=t.target;"A"===e.tagName||e===L?k():e.closest(".row")||k()})),document.querySelectorAll('a[href*="#"]').forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault();var i=t.getAttribute("href").substr(1),n=document.getElementById(i);n&&n.scrollIntoView({behavior:"smooth",block:"start"})}))})),r(".popup-privacy",".link-privacy",".close"),function(){function e(t){if(null!==t.data){var e="+7 (___) ___-__-__",i=this.value.replace(/\D/g,""),n=0,r=e.replace(/[_\d]/g,(function(t){return n<i.length?i.charAt(n++):t}));-1!==(n=r.indexOf("_"))&&(r=r.slice(0,n));var o=e.substr(0,this.value.length).replace(/_+/g,(function(t){return"\\d{1,"+t.length+"}"})).replace(/[+()]/g,"\\$&");(!(o=new RegExp("^"+o+"$")).test(this.value)||this.value.length<18)&&(this.value=r),"blur"===t.type&&this.value.length<18&&(this.value="")}else this.value=this.value.slice(0,this.value.length)}var i,n=function(e,i){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,i){if(e){if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,i):void 0}}(e))||i&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var t=n.next();return a=t.done,t},e:function(t){l=!0,s=t},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw s}}}}(document.querySelectorAll('input[name="phone"]'));try{for(n.s();!(i=n.n()).done;){var r=i.value;r.addEventListener("input",e),r.addEventListener("focus",e),r.addEventListener("blur",e)}}catch(t){n.e(t)}finally{n.f()}}(),r(".popup-repair-types",".link-list",".close"),function t(){var e=document.querySelector(".formula>.mobile-hide");if(document.documentElement.clientWidth>1024)e.addEventListener("mouseover",(function(t){var e=t.target.closest(".formula-item");if(e){e.classList.add("active-item");var i=e.querySelector(".formula-item-popup");e.getBoundingClientRect().top<i.offsetHeight+5&&(e.closest(".row").style.zIndex=1,i.classList.add("updown-popup"),i.style.bottom="-".concat(i.offsetHeight+10,"px")),i.style.visibility="visible",i.style.opacity=1}})),e.addEventListener("mouseout",(function(t){var e=t.target.closest(".formula-item");if(e){e.classList.remove("active-item");var i=e.querySelector(".formula-item-popup");i.classList.remove("updown-popup"),i.style.bottom="90px",e.closest(".row").style.zIndex=0,i.style.visibility="hidden",i.style.opacity=.1}})),window.addEventListener("resize",(function(){document.documentElement.clientWidth>1024||t()}));else{var i=document.querySelector(".formula-slider-wrap"),n=document.querySelectorAll(".formula-slider__slide");if(document.documentElement.clientWidth<769?(n[0].style.display="none",n[7].style.display="none"):(n[0].style.display="block",n[7].style.display="block"),i.classList.contains("activate"))return;i.classList.add("activate"),new l({main:".formula-slider-wrap",wrap:".formula-slider",next:".slider-arrow_right-formula",prev:".slider-arrow_left-formula",slidesToShow:3,responsive:[{breakpoint:768,slidesToShow:1}]}).init(),new d({slides:"div.formula-slider__slide",prev:".slider-arrow_left-formula",next:".slider-arrow_right-formula",activeClass:"active-item"}).init(),window.addEventListener("resize",t)}}(),function(){var t=document.querySelectorAll(".types-repair"),e=document.querySelector(".nav-list-repair"),i=Array.from(e.children),n=e.querySelector("active"),r=document.querySelector("#repair-types-arrow_left"),o=document.querySelector("#repair-types-arrow_right"),s=document.querySelector(".slider-counter-content__current"),a=document.querySelector(".slider-counter-content__total"),l=n?i.indexOf(n):0,c=t[l],d=Array.from(c.querySelectorAll(".repair-types-slider__slide")),u=c.querySelector("repair-types-slider__slide--active"),p=u?d.indexOf(u):0,h=function(t,e,i){t[e].classList.remove(i)},y=function(t,e,i){t[e].classList.add(i)};if(0!==p&&(h(d,p,"repair-types-slider__slide--active"),p=0),s.textContent=p+1,y(d,p,"repair-types-slider__slide--active"),r.style.display="none",o.style.display="flex",a.textContent=d.length,e.addEventListener("click",(function(e){var n=e.target;n.matches(".repair-types-nav__item")&&(h(i,l,"active"),h(t,l,"types-repair-active"),l=i.indexOf(n),y(i,l,"active"),y(t,l,"types-repair-active"),c=t[l],d=Array.from(c.querySelectorAll(".repair-types-slider__slide")),a.textContent=d.length,u=c.querySelector(".repair-types-slider__slide--active"),0!==(p=u?d.indexOf(u):0)&&(h(d,p,"repair-types-slider__slide--active"),p=0),s.textContent=p+1,y(d,p,"repair-types-slider__slide--active"),r.style.display="none",o.style.display="flex")})),r.addEventListener("click",(function(){p===d.length-1&&(o.style.display="flex"),h(d,p,"repair-types-slider__slide--active"),p--,s.textContent=p+1,y(d,p,"repair-types-slider__slide--active"),0===p&&(r.style.display="none")})),o.addEventListener("click",(function(){0===p&&(r.style.display="flex"),h(d,p,"repair-types-slider__slide--active"),p++,s.textContent=p+1,y(d,p,"repair-types-slider__slide--active"),p===d.length-1&&(o.style.display="none")})),document.documentElement.clientWidth<=1024){var f=document.querySelector("#nav-arrow-repair-left_base"),v=document.querySelector("#nav-arrow-repair-right_base"),m=document.querySelector(".repair-types-nav");e.style.transform="translateX(50px)";var S=0;f.addEventListener("click",(function(){S>1?(--S,e.style.transform="translateX(-".concat(200*S,"px)")):e.style.transform="translateX(50px)"})),v.addEventListener("click",(function(){200*S<e.offsetWidth-m.offsetWidth&&(++S,e.style.transform="translateX(-".concat(200*S+50,"px)"))}))}}(),function t(){var e=document.querySelector(".portfolio");if(document.documentElement.clientWidth>575){var i=document.querySelector(".portfolio-slider");if(i.classList.contains("activate"))return;i.classList.add("activate"),new l({main:".portfolio-slider",wrap:".plug",prev:"#portfolio-arrow_left",next:"#portfolio-arrow_right",slidesToShow:3,responsive:[{breakpoint:1024,slidesToShow:2},{breakpoint:900,slidesToShow:1}]}).init(),window.addEventListener("resize",(function(){document.documentElement.clientWidth>575||t()}))}else{var n=document.querySelector(".portfolio-slider-mobile");if(n.classList.contains("activate"))return;n.classList.add("activate"),new d({slides:".portfolio-slider-mobile .portfolio-slider__slide-frame",prev:"#portfolio-arrow-mobile_left",next:"#portfolio-arrow-mobile_right",counter:"#portfolio-counter",infinity:!0}).init(),window.addEventListener("resize",(function(){document.documentElement.clientWidth<=575||t()}))}var r=new d({slides:".popup-portfolio-slider__slide",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",counter:"#popup-portfolio-counter",infinity:!0});r.init();var o=new d({slides:".popup-portfolio-text",prev:"#popup_portfolio_left",next:"#popup_portfolio_right",infinity:!0});o.init();var s=document.querySelector(".popup-portfolio");s.querySelectorAll(".close"),e.addEventListener("click",(function(t){var e=t.target;if(e.matches(".portfolio-slider__slide-frame")){var i=e.closest(".portfolio-slider")||e.closest(".portfolio-slider-mobile"),n=Array.from(i.querySelectorAll(".portfolio-slider__slide-frame")).indexOf(e);r.changeCurrentSlide(n),o.changeCurrentSlide(n),s.style.visibility="visible";var a=s.querySelector(".popup-dialog"),l=0;document.documentElement.clientWidth>768&&(a.style.opacity=0,a.style.top="20%",function t(){a.style.opacity<1?(a.style.opacity=.05+parseFloat(a.style.opacity),a.style.top=-1+parseFloat(a.style.top)+"%",l=requestAnimationFrame(t)):cancelAnimationFrame(l)}())}})),s.addEventListener("click",(function(t){var e=t.target;e.closest(".close")?s.style.visibility="hidden":e.closest(".popup-dialog")||(s.style.visibility="hidden")}))}(),function t(){if(document.documentElement.clientWidth<=1090){var e=document.querySelector(".transparency-item");if(e.classList.contains("activate"))return;e.classList.add("activate"),new d({slides:".transparency-item",prev:"#transparency-arrow_left",next:"#transparency-arrow_right"}).init()}window.addEventListener("resize",t);var i=new d({slides:".popup-transparency-slider__slide",prev:"#transparency_left",next:"#transparency_right",counter:"#transparency-popup-counter",infinity:!0});i.init();var n=document.querySelector(".popup-transparency"),r=(n.querySelectorAll(".close"),document.querySelector(".transparency-slider"));r.addEventListener("click",(function(t){var e=t.target;if(e.matches(".transparency-item__img")){var o=e.closest(".transparency-item"),s=Array.from(r.querySelectorAll(".transparency-item")).indexOf(o);i.changeCurrentSlide(s),n.style.visibility="visible";var a=n.querySelector(".popup-dialog-transparency"),l=0;document.documentElement.clientWidth>768&&(a.style.opacity=0,a.style.top="20%",function t(){a.style.opacity<1?(a.style.opacity=.05+parseFloat(a.style.opacity),a.style.top=-1+parseFloat(a.style.top)+"%",l=requestAnimationFrame(t)):cancelAnimationFrame(l)}())}})),n.addEventListener("click",(function(t){var e=t.target;e.closest(".close")?n.style.visibility="hidden":e.closest(".popup-dialog-transparency")||(n.style.visibility="hidden")}))}(),r(".popup-consultation",".button_wide",".close"),new d({slides:".reviews-slider__slide",prev:"#reviews-arrow_left",next:"#reviews-arrow_right",dotsWrapper:".slider-dots",dots:".dot-reviews",dotActiveClass:"dot_active"}).init(),S=document.querySelector(".accordion"),b=Array.from(S.querySelectorAll("h2")),w=Array.from(S.querySelectorAll(".msg")),g=0,S.addEventListener("click",(function(t){var e,i=t.target;i.matches("h2")&&(b[e=g].classList.remove("msg-active"),w[e].maxHeight=0,g=b.indexOf(i),function(t,e,i){t[e].classList.add("msg-active")}(b,g))})),new n({selector:"#feedback1",pattern:{},method:{"feedback-input1":[["notEmpty"],["pattern","phone"]]}}).init(),new n({selector:"#feedback2",pattern:{},method:{name2:[["notEmpty"],["pattern","name"]],"feedback-input2":[["notEmpty"],["pattern","phone"]]}}).init(),new n({selector:"#feedback3",pattern:{},method:{"feedback-input3":[["notEmpty"],["pattern","phone"]]}}).init(),new n({selector:"#feedback4",pattern:{},method:{name4:[["notEmpty"],["pattern","name"]],"feedback-input4":[["notEmpty"],["pattern","phone"]]}}).init(),new n({selector:"#feedback5",pattern:{},method:{name5:[["notEmpty"],["pattern","name"]],"feedback-input5":[["notEmpty"],["pattern","phone"]]}}).init(),new n({selector:"#feedback6",pattern:{},method:{"feedback-input6":[["notEmpty"],["pattern","phone"]]}}).init(),v=document.querySelector(".popup-thank"),m=v.querySelectorAll(".close"),document.querySelectorAll("form").forEach((function(t){!function(t){t.addEventListener("submit",(function(e){e.preventDefault();var i=u(t.elements).filter((function(t){return t.classList.contains("error")})),n=u(t.elements).filter((function(t){return"checkbox"===t.type}));if(!n[0].checked){var r=n[0].closest(".checkbox").querySelector("label");return r.style.borderColor="red",void(r.style.borderWidth="2px")}if(n[0].closest(".checkbox").querySelector("label").style.border="1px solid #322823",!i.length){var o=new FormData(t),s={};o.forEach((function(t,e){s[e]=t})),function(t){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})}(s).then((function(e){if(200!==e.status)throw new Error("Status network not 200");v.style.visibility="visible",m.forEach((function(t){t.addEventListener("click",(function(){v.style.visibility="hidden"}))})),t.reset(),"feedback6"===t.id&&(document.querySelector(".popup-consultation").style.visibility="hidden")})).catch((function(t){console.log("error: ",t)}))}}))}(t)})),h=document.querySelector(".nav-list-popup-repair"),y=document.querySelector(".popup-repair-types-content-table"),f=document.getElementById("switch-inner"),fetch("../crm-backend/db.json").then((function(t){if(200!==t.status)throw new Error("Status network not 200");return t.json()})).then((function(t){var e=[];t.forEach((function(t){t.type&&e.push(t.type)}));var i,n=new Set(e);return i="",n.forEach((function(t){i+='<button class="button_o popup-repair-types-nav__item">'.concat(t,"</button>")})),h.insertAdjacentHTML("beforeend",i),h.querySelector("button").classList.add("active"),function(t,e){var i={};e.forEach((function(t){return i[t]=[]})),t.forEach((function(t){return i[t.type].push(t)}));var n="";for(var r in i)n+='<table class="popup-repair-types-content-table__list">',i[r].forEach((function(t){n+='\n          <tr class="mobile-row showHide">\n            <td class="repair-types-name">'.concat(t.name,'</td>\n            <td class="mobile-col-title tablet-hide desktop-hide">Ед.измерения</td>\n            <td class="mobile-col-title tablet-hide desktop-hide">Цена за ед.</td>\n            <td class="repair-types-value">').concat(t.units,'</sup></td>\n            <td class="repair-types-value">').concat(t.cost,"</td>\n          </tr>\n        ")})),n+="</table>";y.insertAdjacentHTML("afterbegin",n),function(){new d({slides:".popup-repair-types-content-table__list",dotsWrapper:".nav-list-popup-repair",dots:".popup-repair-types-nav__item",dotActiveClass:"active"}).init(),h.addEventListener("click",(function(t){t.target.matches(".popup-repair-types-nav__item")&&(f.textContent=t.target.textContent)})),document.documentElement.clientWidth<1025&&(new d({slides:".popup-repair-types-nav__item",prev:"#nav-arrow-popup-repair_left",next:"#nav-arrow-popup-repair_right"}).init(),new d({slides:".popup-repair-types-content-table__list",prev:"#nav-arrow-popup-repair_left",next:"#nav-arrow-popup-repair_right"}).init());var t=document.querySelector("#nav-arrow-popup-repair_left"),e=document.querySelector("#nav-arrow-popup-repair_right");t.addEventListener("click",(function(){return f.textContent=h.querySelector(".active").textContent})),e.addEventListener("click",(function(){return f.textContent=h.querySelector(".active").textContent}))}()}(t,n),t})).catch((function(t){return console.error(t)})),function t(){if(document.documentElement.clientWidth<576){var e=document.querySelector(".services-slider");if(e.classList.contains("activate"))return;e.classList.add("activate"),new d({slides:".services-slider__slide",autoPlay:!0,infinity:!0}).init()}window.addEventListener("resize",t)}()})();