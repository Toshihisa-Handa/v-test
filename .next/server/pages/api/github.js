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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/github.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/github.js":
/*!*****************************!*\
  !*** ./pages/api/github.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_, res) => {\n  const userResponse = await fetch('https://api.github.com/users/leerob');\n  const userReposResponse = await fetch('https://api.github.com/users/leerob/repos');\n  const user = await userResponse.json();\n  const repositories = await userReposResponse.json();\n  const mine = repositories.filter(repo => !repo.fork);\n  const stars = mine.reduce((accumulator, repository) => {\n    return accumulator + repository['stargazers_count'];\n  }, 0);\n  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');\n  return res.status(200).json({\n    followers: user.followers,\n    stars\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2l0aHViLmpzPzQ2NDAiXSwibmFtZXMiOlsiXyIsInJlcyIsInVzZXJSZXNwb25zZSIsImZldGNoIiwidXNlclJlcG9zUmVzcG9uc2UiLCJ1c2VyIiwianNvbiIsInJlcG9zaXRvcmllcyIsIm1pbmUiLCJmaWx0ZXIiLCJyZXBvIiwiZm9yayIsInN0YXJzIiwicmVkdWNlIiwiYWNjdW11bGF0b3IiLCJyZXBvc2l0b3J5Iiwic2V0SGVhZGVyIiwic3RhdHVzIiwiZm9sbG93ZXJzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFlLHNFQUFPQSxDQUFQLEVBQVVDLEdBQVYsS0FBa0I7QUFDL0IsUUFBTUMsWUFBWSxHQUFHLE1BQU1DLEtBQUssQ0FBQyxxQ0FBRCxDQUFoQztBQUNBLFFBQU1DLGlCQUFpQixHQUFHLE1BQU1ELEtBQUssQ0FDbkMsMkNBRG1DLENBQXJDO0FBSUEsUUFBTUUsSUFBSSxHQUFHLE1BQU1ILFlBQVksQ0FBQ0ksSUFBYixFQUFuQjtBQUNBLFFBQU1DLFlBQVksR0FBRyxNQUFNSCxpQkFBaUIsQ0FBQ0UsSUFBbEIsRUFBM0I7QUFFQSxRQUFNRSxJQUFJLEdBQUdELFlBQVksQ0FBQ0UsTUFBYixDQUFxQkMsSUFBRCxJQUFVLENBQUNBLElBQUksQ0FBQ0MsSUFBcEMsQ0FBYjtBQUNBLFFBQU1DLEtBQUssR0FBR0osSUFBSSxDQUFDSyxNQUFMLENBQVksQ0FBQ0MsV0FBRCxFQUFjQyxVQUFkLEtBQTZCO0FBQ3JELFdBQU9ELFdBQVcsR0FBR0MsVUFBVSxDQUFDLGtCQUFELENBQS9CO0FBQ0QsR0FGYSxFQUVYLENBRlcsQ0FBZDtBQUlBZCxLQUFHLENBQUNlLFNBQUosQ0FDRSxlQURGLEVBRUUsbURBRkY7QUFLQSxTQUFPZixHQUFHLENBQUNnQixNQUFKLENBQVcsR0FBWCxFQUFnQlgsSUFBaEIsQ0FBcUI7QUFDMUJZLGFBQVMsRUFBRWIsSUFBSSxDQUFDYSxTQURVO0FBRTFCTjtBQUYwQixHQUFyQixDQUFQO0FBSUQsQ0F2QkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ2l0aHViLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKF8sIHJlcykgPT4ge1xuICBjb25zdCB1c2VyUmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9sZWVyb2InKTtcbiAgY29uc3QgdXNlclJlcG9zUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9sZWVyb2IvcmVwb3MnXG4gICk7XG5cbiAgY29uc3QgdXNlciA9IGF3YWl0IHVzZXJSZXNwb25zZS5qc29uKCk7XG4gIGNvbnN0IHJlcG9zaXRvcmllcyA9IGF3YWl0IHVzZXJSZXBvc1Jlc3BvbnNlLmpzb24oKTtcblxuICBjb25zdCBtaW5lID0gcmVwb3NpdG9yaWVzLmZpbHRlcigocmVwbykgPT4gIXJlcG8uZm9yayk7XG4gIGNvbnN0IHN0YXJzID0gbWluZS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCByZXBvc2l0b3J5KSA9PiB7XG4gICAgcmV0dXJuIGFjY3VtdWxhdG9yICsgcmVwb3NpdG9yeVsnc3RhcmdhemVyc19jb3VudCddO1xuICB9LCAwKTtcblxuICByZXMuc2V0SGVhZGVyKFxuICAgICdDYWNoZS1Db250cm9sJyxcbiAgICAncHVibGljLCBzLW1heGFnZT0xMjAwLCBzdGFsZS13aGlsZS1yZXZhbGlkYXRlPTYwMCdcbiAgKTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oe1xuICAgIGZvbGxvd2VyczogdXNlci5mb2xsb3dlcnMsXG4gICAgc3RhcnNcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/github.js\n");

/***/ })

/******/ });