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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderHomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderHomepage */ \"./src/renderHomepage.js\");\n/* harmony import */ var _renderMenuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMenuPage */ \"./src/renderMenuPage.js\");\n/* harmony import */ var _renderContactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderContactPage */ \"./src/renderContactPage.js\");\n\n\n\n\nconst buttonHome = document.getElementById(\"btn-home\");\nconst buttonOurMenu = document.getElementById(\"btn-our-menu\");\nconst buttonContact = document.getElementById(\"btn-contact\");\n\nbuttonHome.addEventListener(\"click\", _renderHomepage__WEBPACK_IMPORTED_MODULE_0__.renderHomepage);\nbuttonOurMenu.addEventListener(\"click\", _renderMenuPage__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage);\nbuttonContact.addEventListener(\"click\", _renderContactPage__WEBPACK_IMPORTED_MODULE_2__.renderContactPage);\n\n(0,_renderHomepage__WEBPACK_IMPORTED_MODULE_0__.renderHomepage)();\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/renderContactPage.js":
/*!**********************************!*\
  !*** ./src/renderContactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\nfunction renderContactPage() {\n    const contentDiv = document.getElementById(\"content\");\n\n    contentDiv.innerHTML = \"\";\n\n    const headingOneContact = document.createElement(\"h1\");\n    headingOneContact.innerHTML = \"Contact\";\n    contentDiv.appendChild(headingOneContact);\n\n    const image = document.createElement(\"img\");\n    image.src = \"../src/contact-smaller.jpg\";\n    image.setAttribute(\"class\", \"img-bistro\");\n    contentDiv.appendChild(image);\n\n    const contact = document.createElement(\"div\");\n    contact.innerHTML = \"You can catch us on +420 800 800 800 or on nikca@nikcasbistro.com\";\n    contact.setAttribute(\"class\", \"div-under-img\")\n    contentDiv.appendChild(contact);\n\n    const headingTwoOpen = document.createElement(\"h2\");\n    headingTwoOpen.innerHTML = \"Opening hours\";\n    contentDiv.appendChild(headingTwoOpen);\n\n    const textHours = document.createElement(\"div\");\n    textHours.innerHTML = \"Monday to Friday: 10:00–20:00\";\n    contentDiv.appendChild(textHours);\n\n    const headingTwoLocation = document.createElement(\"h2\");\n    headingTwoLocation.innerHTML = \"Location\";\n    contentDiv.appendChild(headingTwoLocation);\n\n    const textLocation = document.createElement(\"div\");\n    textLocation.innerHTML = \"Namesti Svobody 11, Brno\";\n    contentDiv.appendChild(textLocation);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/renderContactPage.js?");

/***/ }),

/***/ "./src/renderHomepage.js":
/*!*******************************!*\
  !*** ./src/renderHomepage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomepage\": () => (/* binding */ renderHomepage)\n/* harmony export */ });\n function renderHomepage() {\n    const contentDiv = document.getElementById(\"content\");\n\n    contentDiv.innerHTML = \"\";\n\n    const headingOneName = document.createElement(\"h1\");\n    headingOneName.innerHTML = \"Nikca's Bistro\";\n    contentDiv.appendChild(headingOneName);\n\n    const image = document.createElement(\"img\");\n    image.src = \"../src/bistro-smaller.jpg\";\n    image.setAttribute(\"class\", \"img-bistro\");\n    contentDiv.appendChild(image);\n\n    const headingTwo = document.createElement(\"h2\");\n    headingTwo.innerHTML = \"The best bistro in Brno!\";\n    contentDiv.appendChild(headingTwo);\n\n    const textAboutRestaurant = document.createElement(\"div\");\n    textAboutRestaurant.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Class aptent taciti sociosqu ad litora torquent pe conubia nostra, per inceptos hymenaeos. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis nonummy placerat. Duis viverra diam non justo. Etiam neque. Praesent vitae arcu tempor neque lacinia pretium.\";\n    contentDiv.appendChild(textAboutRestaurant);\n\n    const headingTwoOpen = document.createElement(\"h2\");\n    headingTwoOpen.innerHTML = \"Opening hours\";\n    contentDiv.appendChild(headingTwoOpen);\n\n    const textHours = document.createElement(\"div\");\n    textHours.innerHTML = \"Monday to Friday: 10:00–20:00\";\n    contentDiv.appendChild(textHours);\n\n    const headingTwoLocation = document.createElement(\"h2\");\n    headingTwoLocation.innerHTML = \"Location\";\n    contentDiv.appendChild(headingTwoLocation);\n\n    const textLocation = document.createElement(\"div\");\n    textLocation.innerHTML = \"Namesti Svobody 11, Brno\";\n    contentDiv.appendChild(textLocation);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/renderHomepage.js?");

/***/ }),

/***/ "./src/renderMenuPage.js":
/*!*******************************!*\
  !*** ./src/renderMenuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\nfunction renderMenuPage() {\n    const contentDiv = document.getElementById(\"content\");\n\n    contentDiv.innerHTML = \"\";\n\n    const headingOneMenu = document.createElement(\"h1\");\n    headingOneMenu.innerHTML = \"Menu\";\n    contentDiv.appendChild(headingOneMenu);\n\n    const image = document.createElement(\"img\");\n    image.src = \"../src/food-smaller.jpg\";\n    image.setAttribute(\"class\", \"img-bistro\");\n    contentDiv.appendChild(image);\n\n    // apetizers\n    const headingTwoApetizers = document.createElement(\"h2\");\n    headingTwoApetizers.innerHTML = \"Apetizers\";\n    contentDiv.appendChild(headingTwoApetizers);\n\n    const apetizerOne = document.createElement(\"h3\");\n    apetizerOne.innerHTML = \"Apetizer One\";\n    contentDiv.appendChild(apetizerOne);\n\n    const apetizerOneText = document.createElement(\"div\");\n    apetizerOneText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    apetizerOneText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(apetizerOneText);\n\n    const apetizerTwo = document.createElement(\"h3\");\n    apetizerTwo.innerHTML = \"Apetizer Two\";\n    contentDiv.appendChild(apetizerTwo);\n\n    const apetizerTwoText = document.createElement(\"div\");\n    apetizerTwoText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    apetizerTwoText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(apetizerTwoText);\n\n    //main dishes\n    const headingTwoMainDishes = document.createElement(\"h2\");\n    headingTwoMainDishes.innerHTML = \"Main dishes\";\n    contentDiv.appendChild(headingTwoMainDishes);\n\n    const mainDishOne = document.createElement(\"h3\");\n    mainDishOne.innerHTML = \"Main dish One\";\n    contentDiv.appendChild(mainDishOne);\n\n    const mainDishOneText = document.createElement(\"div\");\n    mainDishOneText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    mainDishOneText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(mainDishOneText);\n\n    const mainDishTwo = document.createElement(\"h3\");\n    mainDishTwo.innerHTML = \"Main dish Two\";\n    contentDiv.appendChild(mainDishTwo);\n\n    const mainDishTwoText = document.createElement(\"div\");\n    mainDishTwoText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    mainDishTwoText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(mainDishTwoText);\n\n    const mainDishThree = document.createElement(\"h3\");\n    mainDishThree.innerHTML = \"Main dish Three\";\n    contentDiv.appendChild(mainDishThree);\n\n    const mainDishThreeText = document.createElement(\"div\");\n    mainDishThreeText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    mainDishThreeText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(mainDishThreeText);\n\n    //desserts\n    const headingTwoDesserts = document.createElement(\"h2\");\n    headingTwoDesserts.innerHTML = \"Desserts\";\n    contentDiv.appendChild(headingTwoDesserts);\n\n    const dessertOne = document.createElement(\"h3\");\n    dessertOne.innerHTML = \"Dessert One\";\n    contentDiv.appendChild(dessertOne);\n\n    const dessertOneText = document.createElement(\"div\");\n    dessertOneText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    dessertOneText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(dessertOneText);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/renderMenuPage.js?");

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