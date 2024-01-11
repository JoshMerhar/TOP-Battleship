/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: rgb(30, 100, 100);\n}\n\n#container {\n    color: whitesmoke;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.top-banner {\n    display: flex;\n    justify-content: center;\n    font-size: 64px;\n    font-weight: bold;\n}\n\n#action-message {\n    font-size: 36px;\n    padding: 15px 0px;\n}\n\n.board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 1200px;\n    gap: 50px;\n}\n\n.board-title {\n    font-size: 32px;\n    font-weight: bold;\n}\n\n#player-board,\n#computer-board {\n    display: grid;\n    grid-template-rows: repeat(10, 1fr);\n    height: 60vh;\n    width: 60vh;\n    border: 5px solid black;\n}\n\n#player-board {\n    background-color: lime;\n}\n\n#computer-board {\n    background-color: darkred;\n}\n\n.gameboard {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.board-row {\n    display: flex;\n}\n\n.board-space {\n    border: 2px solid black;\n    width: 100%;\n    height: 100%;\n    background-color: rgb(0, 201, 201);\n    border-radius: 8px;\n}\n\n.computer-board:hover {\n    background-color: rgb(0, 175, 108);\n}\n\n.ship-space {\n    background-color: darkslategray;\n    border-radius: 8px;\n}\n\n.hit-space {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: red;\n}\n\n#computer-board .hit-space:hover {\n    background-color: darkred;\n}\n\n.missed-space {\n    background-color: lightgray;\n}\n\n#computer-board .missed-space:hover {\n    background-color: darkgray;\n}\n\n#display-axis {\n    font-size: 24px;\n    font-weight: bold;\n}\n\n.button-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 25px;\n}\n\n.button {\n    border: 4px solid whitesmoke;\n    background-color: darkslategray;\n    border-radius: 5px;\n    font-size: 24px;\n    font-weight: bold;\n    margin: 25px auto;\n    padding: 5px 10px;\n    transition: .15s;\n}\n\n.button:hover {\n    cursor: pointer;\n    transform: scale(1.2);\n    border-radius: 20px;\n}\n\n#toggle-axis {\n    display: none;\n}\n\n.board-cover {\n    position: fixed;\n    height: 100%;\n    width: 100%;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://top-battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://top-battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\nconst Game = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\nconst domHandler = __webpack_require__(/*! ./scripts/domHandler */ \"./src/scripts/domHandler.js\");\n\nconst newGameButton = document.getElementById('new-game');\nnewGameButton.addEventListener('click', Game.newGame);\n\ndomHandler.renderDummyBoards();\n\n//# sourceURL=webpack://top-battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/domHandler.js":
/*!***********************************!*\
  !*** ./src/scripts/domHandler.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const domHandler = (() => {\n\n    function renderBoard(boardSpaces, boardName) {\n        let offset = 0;\n        const boardIdChar = boardName[0];\n        const board = document.getElementById(`${boardName}`);\n        for (let i = 0; i < 10; i++) {\n            const row = board.appendChild(document.createElement('div'));\n            row.classList.add('board-row');\n            for (let j = 0; j < 10; j++) {\n                const space = document.createElement('div');\n                space.classList.add('board-space');\n                space.id = boardIdChar + boardSpaces[j + offset];\n                if (boardName === 'computer-board') {\n                    space.classList.add('computer-board');\n                    space.addEventListener('click', registerAttack);\n                }\n                row.appendChild(space);\n            }\n            offset += 10;\n            board.appendChild(row);\n        }\n    }\n\n    function renderDummyBoards() {\n        const playerBoard = document.getElementById('player-board');\n        const computerBoard = document.getElementById('computer-board');\n        for (let i = 0; i < 10; i++) {\n            const playerRow = playerBoard.appendChild(document.createElement('div'));\n            const computerRow = computerBoard.appendChild(document.createElement('div'));\n            playerRow.classList.add('board-row');\n            computerRow.classList.add('board-row');\n            for (let j = 0; j < 10; j++) {\n                const playerSpace = document.createElement('div');\n                const computerSpace = document.createElement('div');\n                playerSpace.classList.add('board-space');\n                computerSpace.classList.add('board-space');\n                playerRow.appendChild(playerSpace);\n                computerRow.appendChild(computerSpace);\n            }\n            playerBoard.appendChild(playerRow);\n            computerBoard.appendChild(computerRow);\n        }\n    }\n\n    function showAxisButton() {\n        const axisButton = document.getElementById('toggle-axis');\n        axisButton.style.display = 'block';\n        axisButton.addEventListener('click', changeAxis);\n\n        const buttonContainer = document.querySelector('.button-container');\n        const displayAxis = document.createElement('div');\n        displayAxis.id = 'display-axis';\n        if (xAxis) displayAxis.textContent = 'Current axis: X axis';\n        else displayAxis.textContent = 'Current axis: Y axis';\n        buttonContainer.appendChild(displayAxis);\n\n        const newGameButton = document.getElementById('new-game');\n        newGameButton.style.display = 'none';\n    }\n\n    function hideAxisButton() {\n        const axisButton = document.getElementById('toggle-axis');\n        axisButton.style.display = 'none'; \n\n        const displayAxis = document.getElementById('display-axis');\n        displayAxis.remove();\n\n        const newGameButton = document.getElementById('new-game');\n        newGameButton.style.display = 'block';\n    }\n\n    let xAxis = true;\n    function changeAxis() {\n        if (xAxis) xAxis = false;\n        else xAxis = true;\n\n        const displayedAxis = document.getElementById('display-axis');\n        if (xAxis) displayedAxis.textContent = 'Current axis: X axis';\n        else displayedAxis.textContent = 'Current axis: Y axis';\n    }\n\n    function renderPlayerShips(ships) {\n        ships.forEach(ship => {\n            const positions = ship.positions;\n            for (let i = 0; i < positions.length; i++) {\n                const space = document.getElementById('p' + positions[i]);\n                space.classList.add('ship-space');\n            }\n        })\n    }\n\n    function registerAttack(event) {\n        let targetSpace = event.target.id;\n        targetSpace = targetSpace.slice(1);\n        \n        const Game = __webpack_require__(/*! ../scripts/game */ \"./src/scripts/game.js\");\n        Game.playGame(targetSpace);\n    }\n\n    function updateBoard(gameboard, letter) {\n        const misses = gameboard.missedShots;\n        const hits = gameboard.hitShots;\n\n        misses.forEach(miss => {\n            const missedSpace = document.getElementById(letter + miss);\n            missedSpace.classList.add('missed-space');\n            missedSpace.removeEventListener('click', registerAttack);\n        });\n\n        hits.forEach(hit => {\n            const hitSpace = document.getElementById(letter + hit);\n            hitSpace.classList.add('hit-space');\n            hitSpace.removeEventListener('click', registerAttack);\n        });\n    }\n\n    function clearBoards() {\n        const playerBoard = document.getElementById('player-board');\n        const computerBoard = document.getElementById('computer-board');\n        const message = document.getElementById('action-message');\n        playerBoard.innerHTML = '';\n        computerBoard.innerHTML = '';\n        message.textContent = 'Sink all enemy ships to win';\n    }\n    \n    function displayMessage(customMessage) {\n        const message = document.getElementById('action-message');\n        message.textContent = customMessage;\n    }\n\n    function displayMiss(shot) {\n        const message = document.getElementById('action-message');\n        message.textContent = `${shot}... Miss.`\n    }\n\n    function displayHit(shot) {\n        const message = document.getElementById('action-message');\n        message.textContent = `${shot}... It's a hit!`;\n    }\n\n    function displaySunkShip(shipName) {\n        const message = document.getElementById('action-message');\n        message.textContent = `The ${shipName} has been obliterated!`;\n    }\n    \n    function displayWinner(winner) {\n        const message = document.getElementById('action-message');\n        message.textContent = winner;\n    }\n\n    // Disables enemy board so player can't spam fire shots\n    function coverBoard() {\n        const container = document.getElementById('container');\n        const cover = document.createElement('div');\n        cover.classList.add('board-cover');\n        cover.id = 'board-cover';\n        container.appendChild(cover);\n    }\n\n    // Enables enemy board during player's turn\n    function revealBoard() {\n        const cover = document.getElementById('board-cover');\n        cover.remove();\n    }\n\n    return { \n        renderBoard, \n        renderDummyBoards, \n        showAxisButton, \n        hideAxisButton, \n        renderPlayerShips, \n        updateBoard, \n        clearBoards, \n        displayMessage, \n        displayMiss, \n        displayHit, \n        displaySunkShip, \n        displayWinner, \n        coverBoard, \n        revealBoard \n    };\n})();\n\nmodule.exports = domHandler;\n\n//# sourceURL=webpack://top-battleship/./src/scripts/domHandler.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Gameboard = __webpack_require__(/*! ../scripts/gameboard */ \"./src/scripts/gameboard.js\");\nconst Player = __webpack_require__(/*! ../scripts/player */ \"./src/scripts/player.js\");\nconst domHandler = __webpack_require__(/*! ../scripts/domHandler */ \"./src/scripts/domHandler.js\");\n\nconst Game = (() => {\n    \n    let player = '';\n    let computer = '';\n    let playerBoard = '';\n    let computerBoard = '';\n\n    let gameOver = false;\n    let turnNumber = 1;\n    \n    function newGame() {\n        domHandler.clearBoards();\n\n        player = Player();\n        computer = Player();\n        playerBoard = Gameboard();\n        computerBoard = Gameboard();\n\n        domHandler.renderBoard(playerBoard.boardSpaces, 'player-board');\n        domHandler.renderBoard(computerBoard.boardSpaces, 'computer-board');\n        \n        domHandler.displayMessage('Player - place your ships');\n        domHandler.showAxisButton();\n        playerBoard.activatePlacement();\n        setTimeout(() => domHandler.displayMessage('Place your carrier - 5 spaces'), 2000);\n\n        computerBoard.autoPlaceShip('carrier', 5);\n        computerBoard.autoPlaceShip('battleship', 4);\n        computerBoard.autoPlaceShip('cruiser', 3);\n        computerBoard.autoPlaceShip('submarine', 3);\n        computerBoard.autoPlaceShip('destroyer', 2);\n\n        gameOver = false;\n        turnNumber = 1;\n    }\n\n    function playGame(attack) {\n        if (gameOver === false) {\n            if (turnNumber % 2 !== 0 && attack !== '') {\n                const boardSpace = attack;\n                player.pickSpace(boardSpace, computerBoard);\n                domHandler.updateBoard(computerBoard, 'c');\n                domHandler.coverBoard();\n            } else {\n                computer.autoPickSpace(playerBoard);\n                domHandler.updateBoard(playerBoard, 'p');\n            }\n            if (computerBoard.allShipsSunk() || playerBoard.allShipsSunk()) gameOver = true;\n        }\n        if (gameOver) return checkWinner(playerBoard, computerBoard);\n        turnNumber++;\n        if (turnNumber % 2 === 0 && !gameOver) {\n            setTimeout(() => playGame(''), 1250);\n            setTimeout(() => domHandler.revealBoard(), 1250);\n        }\n        return;\n    }\n\n    function checkWinner(playerBoard, computerBoard) {\n        let winner = '';\n        if (computerBoard.allShipsSunk()) winner = 'You win!';\n        if (playerBoard.allShipsSunk()) winner = 'The AI overlords win...';\n        domHandler.revealBoard();\n        return domHandler.displayWinner(winner);\n    }\n\n    return { newGame, playGame };\n})();\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://top-battleship/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ../scripts/shipHandler */ \"./src/scripts/shipHandler.js\");\nconst domHandler = __webpack_require__(/*! ./domHandler */ \"./src/scripts/domHandler.js\");\n\nconst Gameboard = () => {\n    \n    function buildBoard() {\n        const board = [];\n        const letterA = 'A';\n        let letterCode = letterA.charCodeAt(0);\n        for (let i = 0; i < 10; i++) {\n            for (let j = 1; j < 11; j++) {\n                const rowLetter = String.fromCharCode(letterCode + i);\n                board.push(rowLetter + j);\n            }\n        }\n        return board;\n    }\n\n    const boardSpaces = buildBoard();\n\n    const allShips = [];\n    const allPositions = [];\n\n    function placeShip(shipName, length, boardSpace, axis) {\n        const rootIndex = boardSpaces.indexOf(boardSpace);\n        const ship = Ship(shipName, length);\n        let shipPositions = [];\n        \n        if (axis === 'yAxis') {\n            let indexOffset = 0;\n            for (let i = 0; i < ship.length; i++) {\n                let spaceIndex = rootIndex + indexOffset;\n                if (spaceIndex > 99) break;\n                shipPositions.push(boardSpaces[spaceIndex]);\n                indexOffset += 10;\n            }\n        } else {\n            shipPositions = boardSpaces.slice(rootIndex, rootIndex + ship.length);\n        }\n        if (checkValidity(ship, shipPositions, axis)) {\n            updatePositions(ship, shipPositions);\n            allShips.push(ship);\n        } else {\n            if (pickedSpaces.length > 0) pickedSpaces.pop();\n            return shipPositions = [];\n        }\n        allPositions.push(...shipPositions);\n        return shipPositions;\n    }\n\n    // Enables players to position ships on their own board\n    function activatePlacement() {\n        const playerSpaces = document.querySelectorAll('#player-board .board-space');\n        playerSpaces.forEach(space => space.addEventListener('click', pickShipSpace));\n        playerSpaces.forEach(space => space.classList.add('computer-board'));\n    }\n\n    // Disables player's board after all ships have been placed\n    function deactivatePlacement() {\n        const playerSpaces = document.querySelectorAll('#player-board .board-space');\n        playerSpaces.forEach(space => space.removeEventListener('click', pickShipSpace));\n        playerSpaces.forEach(space => space.classList.remove('computer-board'));\n    }\n\n    const pickedSpaces = [];\n    function pickShipSpace(event) {\n        let shipRoot = event.target.id;\n        shipRoot = shipRoot.slice(1);\n\n        let axis = '';\n        const displayedAxis = document.getElementById('display-axis');\n        if (displayedAxis.textContent === 'Current axis: X axis') axis = 'xAxis';\n        else axis = 'yAxis';\n        pickedSpaces.push([shipRoot, axis]);\n\n        // I know this looks like a ridiculous amount of redundancy, but I promice it isn't\n        if (pickedSpaces.length === 1) placeShip('carrier', 5, shipRoot, axis);\n        if (pickedSpaces.length === 1) domHandler.displayMessage('Place your battleship - 4 spaces');\n        if (pickedSpaces.length === 2) placeShip('battleship', 4, shipRoot, axis);\n        if (pickedSpaces.length === 2) domHandler.displayMessage('Place your cruiser - 3 spaces');\n        if (pickedSpaces.length === 3) placeShip('cruiser', 3, shipRoot, axis);\n        if (pickedSpaces.length === 3) domHandler.displayMessage('Place your submarine - 3 spaces');\n        if (pickedSpaces.length === 4) placeShip('submarine', 3, shipRoot, axis);\n        if (pickedSpaces.length === 4) domHandler.displayMessage('Place your destroyer - 2 spaces');\n        if (pickedSpaces.length === 5) placeShip('destroyer', 2, shipRoot, axis);\n        if (pickedSpaces.length === 5) domHandler.displayMessage('Sink all enemy ships to win!');\n        if (pickedSpaces.length === 5) {\n            domHandler.hideAxisButton();\n            deactivatePlacement();\n        }\n        domHandler.renderPlayerShips(allShips);\n    }\n\n    function autoPlaceShip(shipName, length) {\n        const ship = Ship(shipName, length);\n        const axis = ['xAxis', 'yAxis'];\n        const randomIndex = Math.floor(Math.random() * 100);\n        const boardSpace = boardSpaces[randomIndex];\n        const axisIndex = Math.floor(Math.random() * 2);\n        const shipAxis = axis[axisIndex];\n\n        let shipPositions = [];\n        if (shipAxis === 'yAxis') {\n            let indexOffset = 0;\n            for (let i = 0; i < ship.length; i++) {\n                let spaceIndex = boardSpaces.indexOf(boardSpace) + indexOffset;\n                if (spaceIndex > 99) break;\n                shipPositions.push(boardSpaces[spaceIndex]);\n                indexOffset += 10;\n            }\n        } else {\n            shipPositions = boardSpaces.slice(randomIndex, randomIndex + ship.length);\n        }\n        if (checkValidity(ship, shipPositions, shipAxis)) {\n            updatePositions(ship, shipPositions);\n            allShips.push(ship);\n        } else {\n            return autoPlaceShip(shipName, length);\n        }\n        allPositions.push(...shipPositions);\n        return shipPositions;\n    }\n\n    function checkValidity(ship, shipPositions, axis) {\n        let positionsValid = true;\n        const positions = shipPositions;\n        const firstSpace = positions[0];\n        const lastSpace = positions[positions.length - 1];\n        if (axis === 'xAxis') {\n            if (firstSpace[0] !== lastSpace[0] || positions.length !== ship.length) positionsValid = false;\n        } \n        if (axis === 'yAxis') {\n            if (firstSpace[1] !== lastSpace[1] || positions.length !== ship.length) positionsValid = false;\n        }\n        for (let i = 0; i < positions.length; i++) {\n            for (let j = 0; j < allPositions.length; j++) {\n                if (allPositions[j] === positions[i]) positionsValid = false;\n            }\n        }\n        return positionsValid;\n    }\n\n    function updatePositions(ship, shipPositions) {\n        for (let i = 0; i < ship.length; i++) {\n            ship.positions[i] = shipPositions[i];\n        }\n    }\n\n    const allShots = [];\n    const missedShots = [];\n    const hitShots = [];\n\n    function receiveAttack(boardSpace) { \n        let hit = false;\n        allShips.forEach(ship => {\n            const positions = ship.positions;\n            for (let i = 0; i < positions.length; i++) {\n                if (boardSpace === positions[i]) {\n                    hit = true;\n                    hitShots.push(boardSpace);\n                    const spaceIndex = positions.indexOf(boardSpace);\n                    ship.hit(spaceIndex);\n                    domHandler.displayHit(boardSpace);\n                    checkShipStatus(ship);\n                }\n            }\n        });\n        if (!hit) {\n            missedShots.push(boardSpace);\n            domHandler.displayMiss(boardSpace);\n        }\n        allShots.push(boardSpace);\n    }\n\n    function checkShipStatus(ship) {\n        if (ship.isSunk()) domHandler.displaySunkShip(ship.name);\n    }\n\n    function allShipsSunk() {\n        let sunkShips = 0;\n        allShips.forEach(ship => {\n            if (ship.isSunk()) sunkShips++;\n        });\n        if (sunkShips === allShips.length) return true;\n    }\n\n    return { \n        boardSpaces, \n        allShips, \n        activatePlacement,\n        deactivatePlacement,\n        placeShip, \n        autoPlaceShip, \n        allShots, \n        missedShots, \n        hitShots, \n        receiveAttack, \n        allShipsSunk \n    };\n}\n\nmodule.exports = Gameboard;\n\n//# sourceURL=webpack://top-battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((module) => {

eval("const Player = () => {\n    function pickSpace(boardSpace, enemyBoard) {\n        enemyBoard.receiveAttack(boardSpace);\n    }\n\n    function autoPickSpace(enemyBoard) {\n        let alreadyPicked = false;\n        const enemySpaces = enemyBoard.boardSpaces;\n        const prevShots = enemyBoard.allShots;\n        const randomNum = Math.floor(Math.random() * 100);\n        const randomSpace = enemySpaces[randomNum];\n        for (let i = 0; i < prevShots.length; i++) {\n            if (randomSpace === prevShots[i]) {\n                alreadyPicked = true;\n                return autoPickSpace(enemyBoard);\n            }\n        }\n        if (!alreadyPicked) enemyBoard.receiveAttack(randomSpace);\n    }\n\n    return { pickSpace, autoPickSpace }\n};\n\nmodule.exports = Player;\n\n//# sourceURL=webpack://top-battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/shipHandler.js":
/*!************************************!*\
  !*** ./src/scripts/shipHandler.js ***!
  \************************************/
/***/ ((module) => {

eval("const Ship = (shipName, shipLength) => {\n    const name = shipName;\n    const length = shipLength;\n    const positions = [...Array(shipLength).keys()];\n\n    const hit = (shot) => {\n        if (positions[shot] !== 'hit') positions.splice(shot, 1, 'hit');\n        return false;\n    };\n\n    const isSunk = () => {\n        let hitCount = 0;\n        positions.forEach(space => {\n            if (space === 'hit') hitCount++;\n            return false;\n        });\n        if (hitCount === length) return true;\n        return false;\n    };\n\n    return { name, length, positions, hit, isSunk };\n}\n\nmodule.exports = Ship;\n\n//# sourceURL=webpack://top-battleship/./src/scripts/shipHandler.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;