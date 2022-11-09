"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction HomePage() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Menu, {}, void 0, false, {\n                fileName: \"/workspace/alure-tube/pages/index.jsx\",\n                lineNumber: 8,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {}, void 0, false, {\n                fileName: \"/workspace/alure-tube/pages/index.jsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TimeLine, {\n                playlists: _config_json__WEBPACK_IMPORTED_MODULE_1__.playlist\n            }, void 0, false, {\n                fileName: \"/workspace/alure-tube/pages/index.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/alure-tube/pages/index.jsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\nfunction Menu() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Menu\"\n    }, void 0, false, {\n        fileName: \"/workspace/alure-tube/pages/index.jsx\",\n        lineNumber: 17,\n        columnNumber: 10\n    }, this);\n}\nconst Styledheader = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({\n    displayName: \"pages__Styledheader\",\n    componentId: \"sc-d7931c2d-0\"\n})`\n  img {\n    height: 80px;\n    width: 80px;\n    border-radius: 50%;\n  }\n  .user-info {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    padding: 16px 32px;\n    gap: 16px;\n  }\n`;\nfunction Header() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Styledheader, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"user-info\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: `https://github.com/${_config_json__WEBPACK_IMPORTED_MODULE_1__.github}.png`\n                }, void 0, false, {\n                    fileName: \"/workspace/alure-tube/pages/index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            children: _config_json__WEBPACK_IMPORTED_MODULE_1__.name\n                        }, void 0, false, {\n                            fileName: \"/workspace/alure-tube/pages/index.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: _config_json__WEBPACK_IMPORTED_MODULE_1__.job\n                        }, void 0, false, {\n                            fileName: \"/workspace/alure-tube/pages/index.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/workspace/alure-tube/pages/index.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/workspace/alure-tube/pages/index.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/workspace/alure-tube/pages/index.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\nfunction TimeLine(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Timeline\"\n    }, void 0, false, {\n        fileName: \"/workspace/alure-tube/pages/index.jsx\",\n        lineNumber: 51,\n        columnNumber: 10\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBb0M7QUFDRztBQUd2QyxTQUFTRSxXQUFXO0lBQ2xCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDOzs7OzswQkFDRCw4REFBQ0M7Ozs7OzBCQUNELDhEQUFDQztnQkFBU0MsV0FBV1Asa0RBQWU7Ozs7Ozs7Ozs7OztBQUcxQztBQUNBLGlFQUFlRSxRQUFRQSxFQUFDO0FBRXhCLFNBQVNFLE9BQU87SUFDZCxxQkFBTyw4REFBQ0Q7a0JBQUk7Ozs7OztBQUNkO0FBRUEsTUFBTU0sZUFBZVIsdUVBQVU7OztFQUFBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUFhaEMsQ0FBQztBQUVELFNBQVNJLFNBQVM7SUFDaEIscUJBQ0UsOERBQUNJO2tCQUVDLDRFQUFDQztZQUFRQyxXQUFVOzs4QkFDakIsOERBQUNDO29CQUFJQyxLQUFLLENBQUMsbUJBQW1CLEVBQUViLGdEQUFhLENBQUMsSUFBSSxDQUFDOzs7Ozs7OEJBQ25ELDhEQUFDRzs7c0NBQ0MsOERBQUNZO3NDQUFJZiw4Q0FBVzs7Ozs7O3NDQUNoQiw4REFBQ2lCO3NDQUFHakIsNkNBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3hCO0FBRUEsU0FBU00sU0FBU2EsS0FBSyxFQUFFO0lBQ3ZCLHFCQUFPLDhEQUFDaEI7a0JBQUk7Ozs7OztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanN4PzdmZmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi4vY29uZmlnLmpzb25cIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxNZW51IC8+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8VGltZUxpbmUgcGxheWxpc3RzPXtjb25maWcucGxheWxpc3R9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcblxuZnVuY3Rpb24gTWVudSgpIHtcbiAgcmV0dXJuIDxkaXY+TWVudTwvZGl2Pjtcbn1cblxuY29uc3QgU3R5bGVkaGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIC51c2VyLWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxNnB4IDMycHg7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5gO1xuXG5mdW5jdGlvbiBIZWFkZXIoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZGhlYWRlcj5cbiAgICAgIHsvKiA8aW1nIHNyYz1cImJhbm5lclwiIC8+ICovfVxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidXNlci1pbmZvXCI+XG4gICAgICAgIDxpbWcgc3JjPXtgaHR0cHM6Ly9naXRodWIuY29tLyR7Y29uZmlnLmdpdGh1Yn0ucG5nYH0gLz5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDI+e2NvbmZpZy5uYW1lfTwvaDI+XG4gICAgICAgICAgPHA+e2NvbmZpZy5qb2J9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L1N0eWxlZGhlYWRlcj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gVGltZUxpbmUocHJvcHMpIHtcbiAgcmV0dXJuIDxkaXY+VGltZWxpbmU8L2Rpdj47XG59XG4iXSwibmFtZXMiOlsiY29uZmlnIiwic3R5bGVkIiwiSG9tZVBhZ2UiLCJkaXYiLCJNZW51IiwiSGVhZGVyIiwiVGltZUxpbmUiLCJwbGF5bGlzdHMiLCJwbGF5bGlzdCIsIlN0eWxlZGhlYWRlciIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJnaXRodWIiLCJoMiIsIm5hbWUiLCJwIiwiam9iIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "./config.json":
/*!*********************!*\
  !*** ./config.json ***!
  \*********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"Patrick Alexander ","job":"softwer dev ","github":"vanderpatrick","playlist":{"games":[{"title":"some title","url":"url","thumb":"video thumbnail"}],"frontend":[{"title":"some title","url":"url","thumb":"video thumbnail"}]}}');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();