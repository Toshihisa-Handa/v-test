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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/subscribers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/subscribers.js":
/*!**********************************!*\
  !*** ./pages/api/subscribers.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_, res) => {\n  const API_KEY = process.env.BUTTONDOWN_API_KEY;\n  const response = await fetch('https://api.buttondown.email/v1/subscribers', {\n    headers: {\n      Authorization: `Token ${API_KEY}`,\n      'Content-Type': 'application/json'\n    },\n    method: 'GET'\n  });\n  const {\n    count\n  } = await response.json();\n  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');\n  return res.status(200).json({\n    count\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvc3Vic2NyaWJlcnMuanM/ZjZiYiJdLCJuYW1lcyI6WyJfIiwicmVzIiwiQVBJX0tFWSIsInByb2Nlc3MiLCJlbnYiLCJCVVRUT05ET1dOX0FQSV9LRVkiLCJyZXNwb25zZSIsImZldGNoIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJtZXRob2QiLCJjb3VudCIsImpzb24iLCJzZXRIZWFkZXIiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQWUsc0VBQU9BLENBQVAsRUFBVUMsR0FBVixLQUFrQjtBQUMvQixRQUFNQyxPQUFPLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxrQkFBNUI7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLDZDQUFELEVBQWdEO0FBQzFFQyxXQUFPLEVBQUU7QUFDUEMsbUJBQWEsRUFBRyxTQUFRUCxPQUFRLEVBRHpCO0FBRVAsc0JBQWdCO0FBRlQsS0FEaUU7QUFLMUVRLFVBQU0sRUFBRTtBQUxrRSxHQUFoRCxDQUE1QjtBQVFBLFFBQU07QUFBRUM7QUFBRixNQUFZLE1BQU1MLFFBQVEsQ0FBQ00sSUFBVCxFQUF4QjtBQUVBWCxLQUFHLENBQUNZLFNBQUosQ0FDRSxlQURGLEVBRUUsbURBRkY7QUFLQSxTQUFPWixHQUFHLENBQUNhLE1BQUosQ0FBVyxHQUFYLEVBQWdCRixJQUFoQixDQUFxQjtBQUFFRDtBQUFGLEdBQXJCLENBQVA7QUFDRCxDQWxCRCIsImZpbGUiOiIuL3BhZ2VzL2FwaS9zdWJzY3JpYmVycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGFzeW5jIChfLCByZXMpID0+IHtcbiAgY29uc3QgQVBJX0tFWSA9IHByb2Nlc3MuZW52LkJVVFRPTkRPV05fQVBJX0tFWTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuYnV0dG9uZG93bi5lbWFpbC92MS9zdWJzY3JpYmVycycsIHtcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgVG9rZW4gJHtBUElfS0VZfWAsXG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSxcbiAgICBtZXRob2Q6ICdHRVQnXG4gIH0pO1xuXG4gIGNvbnN0IHsgY291bnQgfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXMuc2V0SGVhZGVyKFxuICAgICdDYWNoZS1Db250cm9sJyxcbiAgICAncHVibGljLCBzLW1heGFnZT0xMjAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTYwMCdcbiAgKTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBjb3VudCB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/subscribers.js\n");

/***/ })

/******/ });