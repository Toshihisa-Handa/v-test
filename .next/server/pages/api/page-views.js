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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/page-views.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/db-admin.js":
/*!*************************!*\
  !*** ./lib/db-admin.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const admin = __webpack_require__(/*! firebase-admin */ \"firebase-admin\");\n\ntry {\n  admin.initializeApp({\n    credential: admin.credential.cert({\n      client_email: process.env.FIREBASE_CLIENT_EMAIL,\n      private_key: process.env.FIREBASE_PRIVATE_KEY,\n      project_id: 'leerob-blog'\n    }),\n    databaseURL: 'https://leerob-blog.firebaseio.com'\n  });\n} catch (error) {\n  /*\n   * We skip the \"already exists\" message which is\n   * not an actual error when we're hot-reloading.\n   */\n  if (!/already exists/u.test(error.message)) {\n    // eslint-disable-next-line no-console\n    console.error('Firebase admin initialization error', error.stack);\n  }\n}\n\nmodule.exports = admin.database();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZGItYWRtaW4uanM/Y2VlOCJdLCJuYW1lcyI6WyJhZG1pbiIsInJlcXVpcmUiLCJpbml0aWFsaXplQXBwIiwiY3JlZGVudGlhbCIsImNlcnQiLCJjbGllbnRfZW1haWwiLCJwcm9jZXNzIiwiZW52IiwiRklSRUJBU0VfQ0xJRU5UX0VNQUlMIiwicHJpdmF0ZV9rZXkiLCJGSVJFQkFTRV9QUklWQVRFX0tFWSIsInByb2plY3RfaWQiLCJkYXRhYmFzZVVSTCIsImVycm9yIiwidGVzdCIsIm1lc3NhZ2UiLCJjb25zb2xlIiwic3RhY2siLCJtb2R1bGUiLCJleHBvcnRzIiwiZGF0YWJhc2UiXSwibWFwcGluZ3MiOiJBQUFBLE1BQU1BLEtBQUssR0FBR0MsbUJBQU8sQ0FBQyxzQ0FBRCxDQUFyQjs7QUFFQSxJQUFJO0FBQ0ZELE9BQUssQ0FBQ0UsYUFBTixDQUFvQjtBQUNsQkMsY0FBVSxFQUFFSCxLQUFLLENBQUNHLFVBQU4sQ0FBaUJDLElBQWpCLENBQXNCO0FBQ2hDQyxrQkFBWSxFQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBRE07QUFFaENDLGlCQUFXLEVBQUVILE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxvQkFGTztBQUdoQ0MsZ0JBQVUsRUFBRTtBQUhvQixLQUF0QixDQURNO0FBTWxCQyxlQUFXLEVBQUU7QUFOSyxHQUFwQjtBQVFELENBVEQsQ0FTRSxPQUFPQyxLQUFQLEVBQWM7QUFDZDtBQUNGO0FBQ0E7QUFDQTtBQUNFLE1BQUksQ0FBQyxrQkFBa0JDLElBQWxCLENBQXVCRCxLQUFLLENBQUNFLE9BQTdCLENBQUwsRUFBNEM7QUFDMUM7QUFDQUMsV0FBTyxDQUFDSCxLQUFSLENBQWMscUNBQWQsRUFBcURBLEtBQUssQ0FBQ0ksS0FBM0Q7QUFDRDtBQUNGOztBQUVEQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJuQixLQUFLLENBQUNvQixRQUFOLEVBQWpCIiwiZmlsZSI6Ii4vbGliL2RiLWFkbWluLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYWRtaW4gPSByZXF1aXJlKCdmaXJlYmFzZS1hZG1pbicpO1xuXG50cnkge1xuICBhZG1pbi5pbml0aWFsaXplQXBwKHtcbiAgICBjcmVkZW50aWFsOiBhZG1pbi5jcmVkZW50aWFsLmNlcnQoe1xuICAgICAgY2xpZW50X2VtYWlsOiBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTElFTlRfRU1BSUwsXG4gICAgICBwcml2YXRlX2tleTogcHJvY2Vzcy5lbnYuRklSRUJBU0VfUFJJVkFURV9LRVksXG4gICAgICBwcm9qZWN0X2lkOiAnbGVlcm9iLWJsb2cnXG4gICAgfSksXG4gICAgZGF0YWJhc2VVUkw6ICdodHRwczovL2xlZXJvYi1ibG9nLmZpcmViYXNlaW8uY29tJ1xuICB9KTtcbn0gY2F0Y2ggKGVycm9yKSB7XG4gIC8qXG4gICAqIFdlIHNraXAgdGhlIFwiYWxyZWFkeSBleGlzdHNcIiBtZXNzYWdlIHdoaWNoIGlzXG4gICAqIG5vdCBhbiBhY3R1YWwgZXJyb3Igd2hlbiB3ZSdyZSBob3QtcmVsb2FkaW5nLlxuICAgKi9cbiAgaWYgKCEvYWxyZWFkeSBleGlzdHMvdS50ZXN0KGVycm9yLm1lc3NhZ2UpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICBjb25zb2xlLmVycm9yKCdGaXJlYmFzZSBhZG1pbiBpbml0aWFsaXphdGlvbiBlcnJvcicsIGVycm9yLnN0YWNrKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkbWluLmRhdGFiYXNlKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/db-admin.js\n");

/***/ }),

/***/ "./pages/api/page-views.js":
/*!*********************************!*\
  !*** ./pages/api/page-views.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_db_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/db-admin */ \"./lib/db-admin.js\");\n/* harmony import */ var _lib_db_admin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_db_admin__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((req, res) => {\n  if (!req.query.id) {\n    return _lib_db_admin__WEBPACK_IMPORTED_MODULE_0___default.a.ref('views').once('value', snapshot => {\n      const views = snapshot.val();\n      const allViews = Object.values(views).reduce((total, value) => total + value);\n      return res.status(200).json({\n        total: allViews\n      });\n    });\n  }\n\n  const ref = _lib_db_admin__WEBPACK_IMPORTED_MODULE_0___default.a.ref('views').child(req.query.id);\n  return ref.once('value', snapshot => {\n    res.status(200).json({\n      total: snapshot.val()\n    });\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcGFnZS12aWV3cy5qcz80ZmM2Il0sIm5hbWVzIjpbInJlcSIsInJlcyIsInF1ZXJ5IiwiaWQiLCJkYiIsInJlZiIsIm9uY2UiLCJzbmFwc2hvdCIsInZpZXdzIiwidmFsIiwiYWxsVmlld3MiLCJPYmplY3QiLCJ2YWx1ZXMiLCJyZWR1Y2UiLCJ0b3RhbCIsInZhbHVlIiwic3RhdHVzIiwianNvbiIsImNoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGdFQUFDQSxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUMzQixNQUFJLENBQUNELEdBQUcsQ0FBQ0UsS0FBSixDQUFVQyxFQUFmLEVBQW1CO0FBQ2pCLFdBQU9DLG9EQUFFLENBQUNDLEdBQUgsQ0FBTyxPQUFQLEVBQWdCQyxJQUFoQixDQUFxQixPQUFyQixFQUErQkMsUUFBRCxJQUFjO0FBQ2pELFlBQU1DLEtBQUssR0FBR0QsUUFBUSxDQUFDRSxHQUFULEVBQWQ7QUFDQSxZQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjSixLQUFkLEVBQXFCSyxNQUFyQixDQUNmLENBQUNDLEtBQUQsRUFBUUMsS0FBUixLQUFrQkQsS0FBSyxHQUFHQyxLQURYLENBQWpCO0FBSUEsYUFBT2QsR0FBRyxDQUFDZSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJILGFBQUssRUFBRUo7QUFEbUIsT0FBckIsQ0FBUDtBQUdELEtBVE0sQ0FBUDtBQVVEOztBQUVELFFBQU1MLEdBQUcsR0FBR0Qsb0RBQUUsQ0FBQ0MsR0FBSCxDQUFPLE9BQVAsRUFBZ0JhLEtBQWhCLENBQXNCbEIsR0FBRyxDQUFDRSxLQUFKLENBQVVDLEVBQWhDLENBQVo7QUFFQSxTQUFPRSxHQUFHLENBQUNDLElBQUosQ0FBUyxPQUFULEVBQW1CQyxRQUFELElBQWM7QUFDckNOLE9BQUcsQ0FBQ2UsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CSCxXQUFLLEVBQUVQLFFBQVEsQ0FBQ0UsR0FBVDtBQURZLEtBQXJCO0FBR0QsR0FKTSxDQUFQO0FBS0QsQ0FyQkQiLCJmaWxlIjoiLi9wYWdlcy9hcGkvcGFnZS12aWV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkYiBmcm9tICdAL2xpYi9kYi1hZG1pbic7XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4ge1xuICBpZiAoIXJlcS5xdWVyeS5pZCkge1xuICAgIHJldHVybiBkYi5yZWYoJ3ZpZXdzJykub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICAgIGNvbnN0IHZpZXdzID0gc25hcHNob3QudmFsKCk7XG4gICAgICBjb25zdCBhbGxWaWV3cyA9IE9iamVjdC52YWx1ZXModmlld3MpLnJlZHVjZShcbiAgICAgICAgKHRvdGFsLCB2YWx1ZSkgPT4gdG90YWwgKyB2YWx1ZVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHtcbiAgICAgICAgdG90YWw6IGFsbFZpZXdzXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHJlZiA9IGRiLnJlZigndmlld3MnKS5jaGlsZChyZXEucXVlcnkuaWQpO1xuXG4gIHJldHVybiByZWYub25jZSgndmFsdWUnLCAoc25hcHNob3QpID0+IHtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICB0b3RhbDogc25hcHNob3QudmFsKClcbiAgICB9KTtcbiAgfSk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/page-views.js\n");

/***/ }),

/***/ "firebase-admin":
/*!*********************************!*\
  !*** external "firebase-admin" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"firebase-admin\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmaXJlYmFzZS1hZG1pblwiPzg5M2YiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiZmlyZWJhc2UtYWRtaW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmaXJlYmFzZS1hZG1pblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///firebase-admin\n");

/***/ })

/******/ });