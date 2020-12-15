module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/unsplash.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/unsplash.js":
/*!*******************************!*\
  !*** ./pages/api/unsplash.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unsplash-js */ \"unsplash-js\");\n/* harmony import */ var unsplash_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(unsplash_js__WEBPACK_IMPORTED_MODULE_0__);\n\nlet unsplash;\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_, res) => {\n  if (!unsplash) {\n    unsplash = new unsplash_js__WEBPACK_IMPORTED_MODULE_0___default.a({\n      accessKey: process.env.UNSPLASH_ACCESS_KEY\n    });\n  }\n\n  const userStats = await unsplash.users.statistics('leerob');\n  const {\n    downloads,\n    views\n  } = await Object(unsplash_js__WEBPACK_IMPORTED_MODULE_0__[\"toJson\"])(userStats);\n  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');\n  return res.status(200).json({\n    downloads: downloads.total,\n    views: views.total\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdW5zcGxhc2guanM/NjUzZiJdLCJuYW1lcyI6WyJ1bnNwbGFzaCIsIl8iLCJyZXMiLCJVbnNwbGFzaCIsImFjY2Vzc0tleSIsInByb2Nlc3MiLCJlbnYiLCJVTlNQTEFTSF9BQ0NFU1NfS0VZIiwidXNlclN0YXRzIiwidXNlcnMiLCJzdGF0aXN0aWNzIiwiZG93bmxvYWRzIiwidmlld3MiLCJ0b0pzb24iLCJzZXRIZWFkZXIiLCJzdGF0dXMiLCJqc29uIiwidG90YWwiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBSUEsUUFBSjtBQUVlLHNFQUFPQyxDQUFQLEVBQVVDLEdBQVYsS0FBa0I7QUFDL0IsTUFBSSxDQUFDRixRQUFMLEVBQWU7QUFDYkEsWUFBUSxHQUFHLElBQUlHLGtEQUFKLENBQWE7QUFDdEJDLGVBQVMsRUFBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDO0FBREQsS0FBYixDQUFYO0FBR0Q7O0FBRUQsUUFBTUMsU0FBUyxHQUFHLE1BQU1SLFFBQVEsQ0FBQ1MsS0FBVCxDQUFlQyxVQUFmLENBQTBCLFFBQTFCLENBQXhCO0FBQ0EsUUFBTTtBQUFFQyxhQUFGO0FBQWFDO0FBQWIsTUFBdUIsTUFBTUMsMERBQU0sQ0FBQ0wsU0FBRCxDQUF6QztBQUVBTixLQUFHLENBQUNZLFNBQUosQ0FDRSxlQURGLEVBRUUsbURBRkY7QUFLQSxTQUFPWixHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQjtBQUMxQkwsYUFBUyxFQUFFQSxTQUFTLENBQUNNLEtBREs7QUFFMUJMLFNBQUssRUFBRUEsS0FBSyxDQUFDSztBQUZhLEdBQXJCLENBQVA7QUFJRCxDQW5CRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS91bnNwbGFzaC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVbnNwbGFzaCwgeyB0b0pzb24gfSBmcm9tICd1bnNwbGFzaC1qcyc7XG5cbmxldCB1bnNwbGFzaDtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKF8sIHJlcykgPT4ge1xuICBpZiAoIXVuc3BsYXNoKSB7XG4gICAgdW5zcGxhc2ggPSBuZXcgVW5zcGxhc2goe1xuICAgICAgYWNjZXNzS2V5OiBwcm9jZXNzLmVudi5VTlNQTEFTSF9BQ0NFU1NfS0VZXG4gICAgfSk7XG4gIH1cblxuICBjb25zdCB1c2VyU3RhdHMgPSBhd2FpdCB1bnNwbGFzaC51c2Vycy5zdGF0aXN0aWNzKCdsZWVyb2InKTtcbiAgY29uc3QgeyBkb3dubG9hZHMsIHZpZXdzIH0gPSBhd2FpdCB0b0pzb24odXNlclN0YXRzKTtcblxuICByZXMuc2V0SGVhZGVyKFxuICAgICdDYWNoZS1Db250cm9sJyxcbiAgICAncHVibGljLCBzLW1heGFnZT0xMjAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTYwMCdcbiAgKTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIGRvd25sb2FkczogZG93bmxvYWRzLnRvdGFsLFxuICAgIHZpZXdzOiB2aWV3cy50b3RhbFxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/unsplash.js\n");

/***/ }),

/***/ "unsplash-js":
/*!******************************!*\
  !*** external "unsplash-js" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"unsplash-js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1bnNwbGFzaC1qc1wiPzdmYjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoidW5zcGxhc2gtanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1bnNwbGFzaC1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///unsplash-js\n");

/***/ })

/******/ });