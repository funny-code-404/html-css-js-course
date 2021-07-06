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

/***/ "./styles/portfolio.css":
/*!******************************!*\
  !*** ./styles/portfolio.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./styles/portfolio.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_portfolio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @styles/portfolio */ \"./styles/portfolio.css\");\n/* harmony import */ var _jsfiles_to_do_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jsfiles/to-do-list */ \"./jsfiles/to-do-list.js\");\n/* harmony import */ var _jsfiles_calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsfiles/calendar */ \"./jsfiles/calendar.js\");\n/* harmony import */ var _jsfiles_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./jsfiles/portfolio */ \"./jsfiles/portfolio.js\");\n\r\n\r\n\r\n\r\n\r\n  \r\nfunction render (hash) {\r\n  switch(hash.slice(1)) {\r\n    case 'home': \r\nreturn (0,_jsfiles_to_do_list__WEBPACK_IMPORTED_MODULE_1__.renderHome)();\r\ncase 'about':\r\n  return (0,_jsfiles_calendar__WEBPACK_IMPORTED_MODULE_2__.renderAbout)();\r\n  case 'portfolio':\r\n    return (0,_jsfiles_portfolio__WEBPACK_IMPORTED_MODULE_3__.renderPortfolio)();\r\n  }\r\n}\r\n  \r\nnav.addEventListener('click', (e) => {\r\n  e.preventDefault();\r\n\r\n  if (e.target.tagName === 'A') {\r\n    location.hash = e.target.id;\r\n  };\r\n});\r\n\r\nwindow.onhashchange = () => {\r\n  render(location.hash);\r\n};\r\n\r\nrender(location.hash);\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./jsfiles/calendar.js":
/*!*****************************!*\
  !*** ./jsfiles/calendar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderAbout\": () => (/* binding */ renderAbout)\n/* harmony export */ });\nfunction renderAbout() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n    let element = document.createElement(\"div\");\r\n    element.id = 'calendar';\r\n    content.appendChild(element);\r\n    \r\n  \r\n      function createCalendar(htmlElement, year, month) {\r\n  \r\n          let mon = month - 1; \r\n          let d = new Date(year, mon);\r\n        \r\n          let table = '<table><tr><th>Mondey</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th><th>Sunday</th></tr><tr>';\r\n        \r\n          for (let i = 0; i < getDay(d); i++) {\r\n            table += '<td></td>';\r\n          }\r\n        \r\n          while (d.getMonth() == mon) {\r\n            table += '<td>' + d.getDate() + '</td>';\r\n        \r\n            if (getDay(d) % 7 == 6) { \r\n              table += '</tr><tr>';\r\n            }\r\n        \r\n            d.setDate(d.getDate() + 1);\r\n          }\r\n        \r\n          if (getDay(d) != 0) {\r\n            for (let i = getDay(d); i < 7; i++) {\r\n              table += '<td></td>';\r\n            }\r\n          }\r\n        \r\n          table += '</tr></table>';\r\n        \r\n          htmlElement.innerHTML = table;\r\n        }\r\n        \r\n        function getDay(date) { \r\n          let day = date.getDay();\r\n          if (day == 0) day = 7; \r\n          return day - 1;\r\n        }\r\n        \r\n        createCalendar(calendar, 2021, 6);\r\n        \r\n  };\n\n//# sourceURL=webpack:///./jsfiles/calendar.js?");

/***/ }),

/***/ "./jsfiles/portfolio.js":
/*!******************************!*\
  !*** ./jsfiles/portfolio.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderPortfolio\": () => (/* binding */ renderPortfolio)\n/* harmony export */ });\nfunction renderPortfolio() {\r\n  const content = document.getElementById('content');\r\n  content.innerHTML = '';\r\n  let element = document.createElement(\"div\");\r\n  element.id = 'portfolio'; \r\n  element.classList.add('portfolio');\r\n  content.appendChild(element);\r\n  const spanText = document.createElement('span');\r\n  spanText.innerHTML = '<h1>О себе...</h1>';\r\n  content.appendChild(spanText);\r\n  spanText.classList.add('spanText');\r\n  const text = document.createElement('p');\r\n  text.classList.add('p');\r\n  spanText.appendChild(text);\r\n  text.innerHTML = '<h2>33 Года.</br> Работаю на жд. по професии \"осмотрщик-ремонтник вагонов\"</br> окончил Пту, ГГКЖТ, БелГУТ. (Магистр технических наук)</br> Решил сменить професиию на IT Front end</br> (так как нет дальнейшего роста и развития в нынешней професии)</br> </h2>'\r\n};\n\n//# sourceURL=webpack:///./jsfiles/portfolio.js?");

/***/ }),

/***/ "./jsfiles/to-do-list.js":
/*!*******************************!*\
  !*** ./jsfiles/to-do-list.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\nfunction renderHome() {\r\n    const content = document.getElementById('content');\r\n    content.innerHTML = '';\r\n    let element = document.createElement(\"div\");\r\n    element.id = 'to-do-list';\r\n    content.appendChild(element);\r\n  const el = document.getElementById('to-do-list');\r\n  const ul = document.createElement('ul');\r\n  el.classList.add('ul');\r\n  el.appendChild(ul);\r\n  \r\n  const input = document.createElement('input');\r\n  input.id = 'text';\r\n  input.type = \"text\";\r\n  el.appendChild(input);\r\n    \r\n  \r\n  let todos = [];\r\n  \r\n  function render (todos) {\r\n      ul.innerHTML = '';\r\n      for (let i = 0; i < todos.length; i++) {\r\n          const li = document.createElement('li');\r\n          li.classList.add('li');\r\n          const textSpan = document.createElement('span');\r\n          textSpan.classList.add('todo-text');\r\n          textSpan.innerHTML = todos[i].value;\r\n  \r\n          const buttonClose = document.createElement('button');\r\n          textSpan.appendChild(buttonClose);\r\n          buttonClose.classList.add('close');\r\n          buttonClose.id = todos[i].id;\r\n  \r\n          buttonClose.addEventListener('click', function (e) {\r\n              deleteTodo(e.target.id);\r\n          })\r\n  \r\n          ul.appendChild(li).append(textSpan);\r\n      };\r\n  }\r\n  \r\n  function createTodo() {\r\n      const todo = {\r\n          id: todos.length + 1,\r\n          value: input.value,\r\n      }\r\n  \r\n      todos.push(todo);\r\n  \r\n      render(todos);\r\n  }\r\n  \r\n  function deleteTodo(id) {\r\n      todos = todos.filter((item) => item.id !== Number(id));\r\n      render(todos);\r\n  }\r\n  \r\n  input.addEventListener(\"keypress\", (keyPressed) => {\r\n      const keyEnter = 13;\r\n      if (keyPressed.which == keyEnter) {\r\n          createTodo();\r\n          text.value = '';\r\n      }\r\n  });\r\n  };\n\n//# sourceURL=webpack:///./jsfiles/to-do-list.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;