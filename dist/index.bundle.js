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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0px;\\n    font-family: 'Signika Negative', 'Trebuchet MS', sans-serif;\\n}\\n\\n#menu {\\n    background-color: rgb(150, 176, 157);\\n    display: flex;\\n    justify-content: center;\\n    gap: 20px;\\n    padding: 20px;\\n}\\n\\n#content {\\n    background-color: white;\\n    width: 600px;\\n    height: auto;\\n    margin: auto;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    min-height: 70vh;\\n}\\n\\n#footer {\\n    background-color: rgb(150, 176, 157);\\n    position: relative;\\n    bottom: 0;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    gap: 20px;\\n    padding: 10px;\\n    align-items: center;\\n    margin-top: 20px;\\n}\\n\\nh1 {\\n    margin: 0px;\\n    padding: 20px;\\n}\\n\\nh2 {\\n    margin: 0px;\\n    padding: 20px;\\n}\\n\\nh3 {\\n    margin: 0px;\\n    font-size: 18px;\\n    font-weight: 600;\\n}\\n\\n.btn-menu {\\n    background-color: rgb(90, 120, 97);\\n    border: none;\\n    color: white;\\n    padding: 15px 32px;\\n    text-align: center;\\n    text-decoration: none;\\n    display: inline-block;\\n    font-size: 16px;\\n}\\n\\n.btn-menu:hover, .btn-footer:hover {\\n    background-color: rgb(237, 147, 69);\\n    cursor: pointer;\\n}\\n\\n.btn-footer {\\n    background-color: rgb(90, 120, 97);\\n    border: none;\\n    color: white;\\n    padding: 10px 20px;\\n    text-align: center;\\n    text-decoration: none;\\n    display: inline-block;\\n    font-size: 10px;\\n}\\n\\n.img-bistro {\\n    max-width: 800px;\\n}\\n\\n.div-under-img {\\n    padding-top: 20px;\\n}\\n\\n.text-menu {\\n    margin-bottom: 10px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant_page/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant_page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _renderHomepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderHomepage */ \"./src/js/renderHomepage.js\");\n/* harmony import */ var _renderMenuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderMenuPage */ \"./src/js/renderMenuPage.js\");\n/* harmony import */ var _renderContactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderContactPage */ \"./src/js/renderContactPage.js\");\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style/style.css */ \"./src/style/style.css\");\n\n\n\n\n\nconst buttonHome = document.getElementById(\"btn-home\");\nconst buttonOurMenu = document.getElementById(\"btn-our-menu\");\nconst buttonContact = document.getElementById(\"btn-contact\");\n\nbuttonHome.addEventListener(\"click\", _renderHomepage__WEBPACK_IMPORTED_MODULE_0__.renderHomepage);\nbuttonOurMenu.addEventListener(\"click\", _renderMenuPage__WEBPACK_IMPORTED_MODULE_1__.renderMenuPage);\nbuttonContact.addEventListener(\"click\", _renderContactPage__WEBPACK_IMPORTED_MODULE_2__.renderContactPage);\n\n(0,_renderHomepage__WEBPACK_IMPORTED_MODULE_0__.renderHomepage)();\n\n//# sourceURL=webpack://restaurant_page/./src/js/app.js?");

/***/ }),

/***/ "./src/js/renderContactPage.js":
/*!*************************************!*\
  !*** ./src/js/renderContactPage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContactPage\": () => (/* binding */ renderContactPage)\n/* harmony export */ });\n/* harmony import */ var _images_contact_smaller_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/contact-smaller.jpg */ \"./src/images/contact-smaller.jpg\");\n\n\nfunction renderContactPage() {\n    const contentDiv = document.getElementById(\"content\");\n\n    contentDiv.innerHTML = \"\";\n\n    const headingOneContact = document.createElement(\"h1\");\n    headingOneContact.innerHTML = \"Contact\";\n    contentDiv.appendChild(headingOneContact);\n\n    const image = document.createElement(\"img\");\n    image.src = _images_contact_smaller_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.setAttribute(\"class\", \"img-bistro\");\n    contentDiv.appendChild(image);\n\n    const contact = document.createElement(\"div\");\n    contact.innerHTML = \"You can catch us on +420 800 800 800 or on nikca@nikcasbistro.com\";\n    contact.setAttribute(\"class\", \"div-under-img\")\n    contentDiv.appendChild(contact);\n\n    const headingTwoOpen = document.createElement(\"h2\");\n    headingTwoOpen.innerHTML = \"Opening hours\";\n    contentDiv.appendChild(headingTwoOpen);\n\n    const textHours = document.createElement(\"div\");\n    textHours.innerHTML = \"Monday to Friday: 10:00???20:00\";\n    contentDiv.appendChild(textHours);\n\n    const headingTwoLocation = document.createElement(\"h2\");\n    headingTwoLocation.innerHTML = \"Location\";\n    contentDiv.appendChild(headingTwoLocation);\n\n    const textLocation = document.createElement(\"div\");\n    textLocation.innerHTML = \"Namesti Svobody 11, Brno\";\n    contentDiv.appendChild(textLocation);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/js/renderContactPage.js?");

/***/ }),

/***/ "./src/js/renderHomepage.js":
/*!**********************************!*\
  !*** ./src/js/renderHomepage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHomepage\": () => (/* binding */ renderHomepage)\n/* harmony export */ });\n/* harmony import */ var _images_bistro_smaller_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/bistro-smaller.jpg */ \"./src/images/bistro-smaller.jpg\");\n\n \n function renderHomepage() {\n    const contentDiv = document.getElementById(\"content\");\n\n    contentDiv.innerHTML = \"\";\n\n    const headingOneName = document.createElement(\"h1\");\n    headingOneName.innerHTML = \"Nikca's Bistro\";\n    contentDiv.appendChild(headingOneName);\n\n    const image = document.createElement(\"img\");\n    image.src = _images_bistro_smaller_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.setAttribute(\"class\", \"img-bistro\");\n    contentDiv.appendChild(image);\n\n    const headingTwo = document.createElement(\"h2\");\n    headingTwo.innerHTML = \"The best bistro in Brno!\";\n    contentDiv.appendChild(headingTwo);\n\n    const textAboutRestaurant = document.createElement(\"div\");\n    textAboutRestaurant.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Class aptent taciti sociosqu ad litora torquent pe conubia nostra, per inceptos hymenaeos. In enim a arcu imperdiet malesuada. Phasellus et lorem id felis nonummy placerat. Duis viverra diam non justo. Etiam neque. Praesent vitae arcu tempor neque lacinia pretium.\";\n    contentDiv.appendChild(textAboutRestaurant);\n\n    const headingTwoOpen = document.createElement(\"h2\");\n    headingTwoOpen.innerHTML = \"Opening hours\";\n    contentDiv.appendChild(headingTwoOpen);\n\n    const textHours = document.createElement(\"div\");\n    textHours.innerHTML = \"Monday to Friday: 10:00???20:00\";\n    contentDiv.appendChild(textHours);\n\n    const headingTwoLocation = document.createElement(\"h2\");\n    headingTwoLocation.innerHTML = \"Location\";\n    contentDiv.appendChild(headingTwoLocation);\n\n    const textLocation = document.createElement(\"div\");\n    textLocation.innerHTML = \"Namesti Svobody 11, Brno\";\n    contentDiv.appendChild(textLocation);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/js/renderHomepage.js?");

/***/ }),

/***/ "./src/js/renderMenuPage.js":
/*!**********************************!*\
  !*** ./src/js/renderMenuPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenuPage\": () => (/* binding */ renderMenuPage)\n/* harmony export */ });\n/* harmony import */ var _images_food_smaller_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/food-smaller.jpg */ \"./src/images/food-smaller.jpg\");\n\n\nfunction renderMenuPage() {\n    const contentDiv = document.getElementById(\"content\");\n\n    contentDiv.innerHTML = \"\";\n\n    const headingOneMenu = document.createElement(\"h1\");\n    headingOneMenu.innerHTML = \"Menu\";\n    contentDiv.appendChild(headingOneMenu);\n\n    const image = document.createElement(\"img\");\n    image.src = _images_food_smaller_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    image.setAttribute(\"class\", \"img-bistro\");\n    contentDiv.appendChild(image);\n\n    // apetizers\n    const headingTwoApetizers = document.createElement(\"h2\");\n    headingTwoApetizers.innerHTML = \"Apetizers\";\n    contentDiv.appendChild(headingTwoApetizers);\n\n    const apetizerOne = document.createElement(\"h3\");\n    apetizerOne.innerHTML = \"Apetizer One\";\n    contentDiv.appendChild(apetizerOne);\n\n    const apetizerOneText = document.createElement(\"div\");\n    apetizerOneText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    apetizerOneText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(apetizerOneText);\n\n    const apetizerTwo = document.createElement(\"h3\");\n    apetizerTwo.innerHTML = \"Apetizer Two\";\n    contentDiv.appendChild(apetizerTwo);\n\n    const apetizerTwoText = document.createElement(\"div\");\n    apetizerTwoText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    apetizerTwoText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(apetizerTwoText);\n\n    //main dishes\n    const headingTwoMainDishes = document.createElement(\"h2\");\n    headingTwoMainDishes.innerHTML = \"Main dishes\";\n    contentDiv.appendChild(headingTwoMainDishes);\n\n    const mainDishOne = document.createElement(\"h3\");\n    mainDishOne.innerHTML = \"Main dish One\";\n    contentDiv.appendChild(mainDishOne);\n\n    const mainDishOneText = document.createElement(\"div\");\n    mainDishOneText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    mainDishOneText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(mainDishOneText);\n\n    const mainDishTwo = document.createElement(\"h3\");\n    mainDishTwo.innerHTML = \"Main dish Two\";\n    contentDiv.appendChild(mainDishTwo);\n\n    const mainDishTwoText = document.createElement(\"div\");\n    mainDishTwoText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    mainDishTwoText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(mainDishTwoText);\n\n    const mainDishThree = document.createElement(\"h3\");\n    mainDishThree.innerHTML = \"Main dish Three\";\n    contentDiv.appendChild(mainDishThree);\n\n    const mainDishThreeText = document.createElement(\"div\");\n    mainDishThreeText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    mainDishThreeText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(mainDishThreeText);\n\n    //desserts\n    const headingTwoDesserts = document.createElement(\"h2\");\n    headingTwoDesserts.innerHTML = \"Desserts\";\n    contentDiv.appendChild(headingTwoDesserts);\n\n    const dessertOne = document.createElement(\"h3\");\n    dessertOne.innerHTML = \"Dessert One\";\n    contentDiv.appendChild(dessertOne);\n\n    const dessertOneText = document.createElement(\"div\");\n    dessertOneText.innerHTML = \"Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\";\n    dessertOneText.setAttribute(\"class\", \"text-menu\");\n    contentDiv.appendChild(dessertOneText);\n}\n\n//# sourceURL=webpack://restaurant_page/./src/js/renderMenuPage.js?");

/***/ }),

/***/ "./src/images/bistro-smaller.jpg":
/*!***************************************!*\
  !*** ./src/images/bistro-smaller.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d4c05e8e69b4dac27fac.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/bistro-smaller.jpg?");

/***/ }),

/***/ "./src/images/contact-smaller.jpg":
/*!****************************************!*\
  !*** ./src/images/contact-smaller.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"4dae6be0f7ee62531b3b.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/contact-smaller.jpg?");

/***/ }),

/***/ "./src/images/food-smaller.jpg":
/*!*************************************!*\
  !*** ./src/images/food-smaller.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"310e2475239a0066997a.jpg\";\n\n//# sourceURL=webpack://restaurant_page/./src/images/food-smaller.jpg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;