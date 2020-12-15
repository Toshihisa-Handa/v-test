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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/gumroad.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/gumroad.js":
/*!******************************!*\
  !*** ./pages/api/gumroad.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! big.js */ \"big.js\");\n/* harmony import */ var big_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(big_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst getProductSales = async id => {\n  const response = await fetch(`https://api.gumroad.com/v2/products/${id}`, {\n    headers: {\n      Authorization: `Bearer ${process.env.GUMROAD_API_KEY}`,\n      'Content-Type': 'application/json'\n    },\n    method: 'GET'\n  });\n  const {\n    product\n  } = await response.json();\n  return new big_js__WEBPACK_IMPORTED_MODULE_0___default.a(product.sales_usd_cents).div(100);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_, res) => {\n  const masteringNextSales = await getProductSales('sDpG');\n  const react2025Sales = await getProductSales('TifxZ');\n  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');\n  return res.status(200).json({\n    sales: masteringNextSales.plus(react2025Sales).toFixed(0)\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ3Vtcm9hZC5qcz8yMjkwIl0sIm5hbWVzIjpbImdldFByb2R1Y3RTYWxlcyIsImlkIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwicHJvY2VzcyIsImVudiIsIkdVTVJPQURfQVBJX0tFWSIsIm1ldGhvZCIsInByb2R1Y3QiLCJqc29uIiwiQmlnIiwic2FsZXNfdXNkX2NlbnRzIiwiZGl2IiwiXyIsInJlcyIsIm1hc3RlcmluZ05leHRTYWxlcyIsInJlYWN0MjAyNVNhbGVzIiwic2V0SGVhZGVyIiwic3RhdHVzIiwic2FsZXMiLCJwbHVzIiwidG9GaXhlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE1BQU9DLEVBQVAsSUFBYztBQUNwQyxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFFLHVDQUFzQ0YsRUFBRyxFQUEzQyxFQUE4QztBQUN4RUcsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsVUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLGVBQWdCLEVBRDlDO0FBRVAsc0JBQWdCO0FBRlQsS0FEK0Q7QUFLeEVDLFVBQU0sRUFBRTtBQUxnRSxHQUE5QyxDQUE1QjtBQVFBLFFBQU07QUFBRUM7QUFBRixNQUFjLE1BQU1SLFFBQVEsQ0FBQ1MsSUFBVCxFQUExQjtBQUVBLFNBQU8sSUFBSUMsNkNBQUosQ0FBUUYsT0FBTyxDQUFDRyxlQUFoQixFQUFpQ0MsR0FBakMsQ0FBcUMsR0FBckMsQ0FBUDtBQUNELENBWkQ7O0FBY2Usc0VBQU9DLENBQVAsRUFBVUMsR0FBVixLQUFrQjtBQUMvQixRQUFNQyxrQkFBa0IsR0FBRyxNQUFNakIsZUFBZSxDQUFDLE1BQUQsQ0FBaEQ7QUFDQSxRQUFNa0IsY0FBYyxHQUFHLE1BQU1sQixlQUFlLENBQUMsT0FBRCxDQUE1QztBQUVBZ0IsS0FBRyxDQUFDRyxTQUFKLENBQ0UsZUFERixFQUVFLG1EQUZGO0FBS0EsU0FBT0gsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQlQsSUFBaEIsQ0FBcUI7QUFDMUJVLFNBQUssRUFBRUosa0JBQWtCLENBQUNLLElBQW5CLENBQXdCSixjQUF4QixFQUF3Q0ssT0FBeEMsQ0FBZ0QsQ0FBaEQ7QUFEbUIsR0FBckIsQ0FBUDtBQUdELENBWkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3Vtcm9hZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCaWcgZnJvbSAnYmlnLmpzJztcblxuY29uc3QgZ2V0UHJvZHVjdFNhbGVzID0gYXN5bmMgKGlkKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLmd1bXJvYWQuY29tL3YyL3Byb2R1Y3RzLyR7aWR9YCwge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtwcm9jZXNzLmVudi5HVU1ST0FEX0FQSV9LRVl9YCxcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9LFxuICAgIG1ldGhvZDogJ0dFVCdcbiAgfSk7XG5cbiAgY29uc3QgeyBwcm9kdWN0IH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIG5ldyBCaWcocHJvZHVjdC5zYWxlc191c2RfY2VudHMpLmRpdigxMDApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKF8sIHJlcykgPT4ge1xuICBjb25zdCBtYXN0ZXJpbmdOZXh0U2FsZXMgPSBhd2FpdCBnZXRQcm9kdWN0U2FsZXMoJ3NEcEcnKTtcbiAgY29uc3QgcmVhY3QyMDI1U2FsZXMgPSBhd2FpdCBnZXRQcm9kdWN0U2FsZXMoJ1RpZnhaJyk7XG5cbiAgcmVzLnNldEhlYWRlcihcbiAgICAnQ2FjaGUtQ29udHJvbCcsXG4gICAgJ3B1YmxpYywgcy1tYXhhZ2U9MTIwMCwgc3RhbGUtd2hpbGUtcmV2YWxpZGF0ZT02MDAnXG4gICk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICBzYWxlczogbWFzdGVyaW5nTmV4dFNhbGVzLnBsdXMocmVhY3QyMDI1U2FsZXMpLnRvRml4ZWQoMClcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/gumroad.js\n");

/***/ }),

/***/ "big.js":
/*!*************************!*\
  !*** external "big.js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"big.js\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiaWcuanNcIj9jZDk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImJpZy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJpZy5qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///big.js\n");

/***/ })

/******/ });