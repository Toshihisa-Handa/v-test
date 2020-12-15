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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/youtube.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/google/auth.js":
/*!****************************!*\
  !*** ./lib/google/auth.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _decret_secret__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./decret-secret */ \"./lib/google/decret-secret.js\");\n\n\nconst googleAuth = new googleapis__WEBPACK_IMPORTED_MODULE_0__[\"google\"].auth.GoogleAuth({\n  credentials: Object(_decret_secret__WEBPACK_IMPORTED_MODULE_1__[\"getDecryptedSecret\"])(),\n  scopes: ['https://www.googleapis.com/auth/analytics.readonly', 'https://www.googleapis.com/auth/youtube.readonly']\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (googleAuth);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ29vZ2xlL2F1dGguanM/YTUyOCJdLCJuYW1lcyI6WyJnb29nbGVBdXRoIiwiZ29vZ2xlIiwiYXV0aCIsIkdvb2dsZUF1dGgiLCJjcmVkZW50aWFscyIsImdldERlY3J5cHRlZFNlY3JldCIsInNjb3BlcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUEsTUFBTUEsVUFBVSxHQUFHLElBQUlDLGlEQUFNLENBQUNDLElBQVAsQ0FBWUMsVUFBaEIsQ0FBMkI7QUFDNUNDLGFBQVcsRUFBRUMseUVBQWtCLEVBRGE7QUFFNUNDLFFBQU0sRUFBRSxDQUNOLG9EQURNLEVBRU4sa0RBRk07QUFGb0MsQ0FBM0IsQ0FBbkI7QUFRZU4seUVBQWYiLCJmaWxlIjoiLi9saWIvZ29vZ2xlL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnb29nbGUgfSBmcm9tICdnb29nbGVhcGlzJztcblxuaW1wb3J0IHsgZ2V0RGVjcnlwdGVkU2VjcmV0IH0gZnJvbSAnLi9kZWNyZXQtc2VjcmV0JztcblxuY29uc3QgZ29vZ2xlQXV0aCA9IG5ldyBnb29nbGUuYXV0aC5Hb29nbGVBdXRoKHtcbiAgY3JlZGVudGlhbHM6IGdldERlY3J5cHRlZFNlY3JldCgpLFxuICBzY29wZXM6IFtcbiAgICAnaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC9hbmFseXRpY3MucmVhZG9ubHknLFxuICAgICdodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUucmVhZG9ubHknXG4gIF1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBnb29nbGVBdXRoO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/google/auth.js\n");

/***/ }),

/***/ "./lib/google/decret-secret.js":
/*!*************************************!*\
  !*** ./lib/google/decret-secret.js ***!
  \*************************************/
/*! exports provided: getDecryptedSecret */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getDecryptedSecret\", function() { return getDecryptedSecret; });\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _service_account_enc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service-account.enc */ \"./lib/google/service-account.enc.js\");\n/* harmony import */ var _service_account_enc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_service_account_enc__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst algorithm = 'aes-128-cbc';\nconst decipher = crypto__WEBPACK_IMPORTED_MODULE_0___default.a.createDecipheriv(algorithm, process.env.GOOGLE_ENCRYPTION_KEY, process.env.GOOGLE_ENCRYPTION_IV);\nconst getDecryptedSecret = () => {\n  let decrypted = decipher.update(_service_account_enc__WEBPACK_IMPORTED_MODULE_1__[\"encrypted\"], 'base64', 'utf8');\n  decrypted += decipher.final('utf8');\n  return JSON.parse(decrypted);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ29vZ2xlL2RlY3JldC1zZWNyZXQuanM/MzE1MiJdLCJuYW1lcyI6WyJhbGdvcml0aG0iLCJkZWNpcGhlciIsImNyeXB0byIsImNyZWF0ZURlY2lwaGVyaXYiLCJwcm9jZXNzIiwiZW52IiwiR09PR0xFX0VOQ1JZUFRJT05fS0VZIiwiR09PR0xFX0VOQ1JZUFRJT05fSVYiLCJnZXREZWNyeXB0ZWRTZWNyZXQiLCJkZWNyeXB0ZWQiLCJ1cGRhdGUiLCJlbmNyeXB0ZWQiLCJmaW5hbCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBLE1BQU1BLFNBQVMsR0FBRyxhQUFsQjtBQUNBLE1BQU1DLFFBQVEsR0FBR0MsNkNBQU0sQ0FBQ0MsZ0JBQVAsQ0FDZkgsU0FEZSxFQUVmSSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMscUJBRkcsRUFHZkYsT0FBTyxDQUFDQyxHQUFSLENBQVlFLG9CQUhHLENBQWpCO0FBTU8sTUFBTUMsa0JBQWtCLEdBQUcsTUFBTTtBQUN0QyxNQUFJQyxTQUFTLEdBQUdSLFFBQVEsQ0FBQ1MsTUFBVCxDQUFnQkMsOERBQWhCLEVBQTJCLFFBQTNCLEVBQXFDLE1BQXJDLENBQWhCO0FBRUFGLFdBQVMsSUFBSVIsUUFBUSxDQUFDVyxLQUFULENBQWUsTUFBZixDQUFiO0FBRUEsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLFNBQVgsQ0FBUDtBQUNELENBTk0iLCJmaWxlIjoiLi9saWIvZ29vZ2xlL2RlY3JldC1zZWNyZXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3J5cHRvIGZyb20gJ2NyeXB0byc7XG5cbmltcG9ydCB7IGVuY3J5cHRlZCB9IGZyb20gJy4vc2VydmljZS1hY2NvdW50LmVuYyc7XG5cbmNvbnN0IGFsZ29yaXRobSA9ICdhZXMtMTI4LWNiYyc7XG5jb25zdCBkZWNpcGhlciA9IGNyeXB0by5jcmVhdGVEZWNpcGhlcml2KFxuICBhbGdvcml0aG0sXG4gIHByb2Nlc3MuZW52LkdPT0dMRV9FTkNSWVBUSU9OX0tFWSxcbiAgcHJvY2Vzcy5lbnYuR09PR0xFX0VOQ1JZUFRJT05fSVZcbik7XG5cbmV4cG9ydCBjb25zdCBnZXREZWNyeXB0ZWRTZWNyZXQgPSAoKSA9PiB7XG4gIGxldCBkZWNyeXB0ZWQgPSBkZWNpcGhlci51cGRhdGUoZW5jcnlwdGVkLCAnYmFzZTY0JywgJ3V0ZjgnKTtcblxuICBkZWNyeXB0ZWQgKz0gZGVjaXBoZXIuZmluYWwoJ3V0ZjgnKTtcblxuICByZXR1cm4gSlNPTi5wYXJzZShkZWNyeXB0ZWQpO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/google/decret-secret.js\n");

/***/ }),

/***/ "./lib/google/service-account.enc.js":
/*!*******************************************!*\
  !*** ./lib/google/service-account.enc.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\n  encrypted: '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'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvZ29vZ2xlL3NlcnZpY2UtYWNjb3VudC5lbmMuanM/YTZhZiJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiZW5jcnlwdGVkIl0sIm1hcHBpbmdzIjoiQUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLFdBQVMsRUFDUDtBQUZhLENBQWpCIiwiZmlsZSI6Ii4vbGliL2dvb2dsZS9zZXJ2aWNlLWFjY291bnQuZW5jLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGVuY3J5cHRlZDpcbiAgICAnZFJDOWVVQkphejVIakV2SEtYR2U4SnhwMWI5V3I3MVVVMEFSZVczM0Q3TlZaZGNGN2wrb3ZWUExBcUtKRmFIdldSMmxiRktqUUtFWm80a1pKZmwvSUJKR2NXeU1jS3V0U1VtM2sxbTB5MlN5OEhUam8zSW15dHJHNzNvbkhHRVcvNys3VnhnRUxZcktDRGFZK2tEV1F2OGFNL0NzbHJYTW5oZUNTenBxdjFtMHFBMlNYU214V3lIMzhLVFFNdThwTFVBdGdvZ3BaSjR6aXVUT3hiQVlsMHIwTXl6ZzgxWXhyZWhXNGNqaHFXTHFCMEpGNXp2Y0FDd0FjUzBiblUxQ2VPN2pScEtCNm4wYW0vNkc2T3NxQjhIL1pQdXJnVlRVTjZpUDNuTWxMYy83RHgwOVh4QWpmK29ZcXNha082SWlHbU8vb25kekg4YVZ3cStFRmJWbTdETmN6WmRYR2d6bm52OFRzeWV1bmZsVmRZSitFeGhoZVoyb3Jta0o4Z0VtbEZ3UUU3VFNMeHRUcFhXYWZNSTVKTDI1blp0MmRkc2RMQ0VOemloN0dSVzVJaWNtQkxJMmhPUWhzOTl5TElaNVpqU1pIODdDOC92SGs0V2loUHJpRWt3czBPQ01kUDlPYS9aS3pJMUlxZno1Y2pZZmZXNUJkOG9hcm9kanRKRlZ5QmwxQm84K1VJRndQcWhBTFFaY3NTVm5BWVlkaUl2VVU2MlJ5aHkycEFZaTMrUnR2MFBJUkFGNytSYTYyR1pnejFnM0duUGJ1TitkUWFWQnpCbCtkeU5JNHUvOTg1ZXovNjdyZUtwWU14VHFFRVVJZVZIeUtuMTdBaENXZWRBamp4clNudVRlRUhEaFdSSFY1cGRjdFhjell2bnQybVl5T0g5K2dGeUl5NzFzdXlLZkd5NVJwSEcwL0hpaWRncVRaWjM0WHdZRjMzbE1ydTlPMzNXK3FjbXoxVlV5OEIwQnB5NkxYQWFPc3ByakxyVGY4MFN2Q2hHby9sdDVGMHBXd2k4QTE4bzdPWlFpelh5TmFham5FT2hKZ2ZGdHJVR2o2NU9IS3lMaS9XM3h1N0I0OEl0b1M5cm9lTCtMTG03Q2hNWUk3ZDV2Ylg1eElCcUE3dHAreUNRVVAyZUUrNGV2TjlIM3JrcUhJQnRWRTM4bm9aOEljRUN4MTZqQ3ZkbEc5MnAxWHprRHdtQ3R4VE5aNHgreEZaeVQxSDRidjJ5dGtFNDQrZ244KzNOemZPU2FXeEowbmxkZ1l1OFJQYmNLZTFsMXlTd3EyUXBjRzQ1R2NYL0ltTEhsdGVESjE1d3dyeU0zS0lOdmMvd041MEF3TVJhcnJyNFgxN3VWZk9JdjJ1QWRwQU01N2w3UUNBUmVMZktXWWw4czJwMUdmdlVFUmJtR3F6UmgyOEVnejNxdDlzR1RUNFB1dytFeUxlTGtBTHVGWnFFRXdWanVLVVM4TmVBZnQ0R3dDTyt1T3NzelNScU1FcWtTNEk2SGFHeW1IcjdVL2RTNVhCZzRJbzJpdXhsdUQvZGh6ZktXTGpkbUE5SnBXWHZtM1BPUFRHMk5YazVuRzR2aXFoODZrZms2N1Q0VW53dDM4N0xUa0ZPbnJIOEZVNzBtWXNrekUvenBNNzNQYXNtUm9peWtIMUs0aE1YSGhwZC9MNFBKeE91OGlhbFllS0E3akFSZEdTVDhUL05jRkhvNWI3K2NuU0lkVGR3TGRFa3BNc1poWXcvYUw0bE0wQ0FvLzRoSEhrYkxrUEdPSHlXakdjSFBmdit3dkNmN1dXcDd2dlo0b0lzQWQ0ZWhLVkYyVzl6SnZ4MkZONXp3dytYZldwczNtZzZ4dmRvbU1zRzV5NjVkUlprY2pMVWJJNTcveFREMnVVWDErN1YrRURIaVB0VmlmeWY4cmpOUW1aUzY0UGR1OElxOUFLbDRud05KOWt4MDZUeTZpaUZ6L1N3Y09mM2czSG1PTnY2dURISlJ1dG0zbU5HNTZHdzlsWTM2dmI5cEMvSzdMVnFYNVAraXFobmJwN29JTFdjc3R5SEJjMDZPT3pxejFTNTluWXpLQjVJdUVwUlpJczdaYjJPTWkxNnNLc2xwSWRkNkhXaXdOcGkyRDZuL2xKWmJZZDBYVExxYlVySmxLMUwyS2xHR3dtakd5VUQ2dno3a1QyMi9aRXVDRXJrc1BuQ1YyQWRZem95QXlzVVFDU3J1K2UzbGdqdFdNdFNOVTFFS0V4aFBzak1lSDM5Y0t1Q1M4SThrbWxsNkVoUlN3QmdkaVI0QnlHTk15SkxxWW93VS9adzlYM1psMjltNzY3Q0FUVGpSQmlOcTh3R1dOQzRKcCtGM1EwZmNJcEs2QjBmSnF3cU9ReGNXMFZMK2cvR0JLQmhiWVBDWTdTR3YvSHFRV3NNRzMzeXk2c0ZIRzBJbm5DNDByajBQRGpWbHYwUHNuNVNIbkxZKzZpWU5iS2dnaDliYzc5L0J5ZzZSdC9MWDBjUXo1and0WmtlZ1h5QUhWV3hLMGRuT1RCWHlyVHhHY2Jmcnh0SHRYNVpEZEdJSFdLNS9hZHlPZnY3OXdkRFNEVTdLK3ppN1JEMjlJVkhRVE5wWWVCOTNwNTZTb3lyZHROU2lZcUkvaW05VUcvRjBPN0wzYzN5VkZDY3J6NWZVYXgxeEpUcWtMY0l3MVNYSDI1cmlIMWo3Y09mWS81QkQvSG9uUFErUzRJbFJJQ0ZQa1F5OXVvZTlPeThHSUZLb3BpZ3MrcnZHN1NXUS9yenZJaW9DYS84VzBHRERnd3lEWXZMZVdPU1Yxd1dMVm1EVUtKZGZoeVpIS005MHdSQmRMK3FqTWNvMW1CSGludU51Q1ZQOEJpYVBzZTZRaU43aXF6RUtYZ2g1UUFXa2dXd1BPb3c3QnJGR2x1bXNmd0srWkE5VWt4dlRLcmRoRWVUdW1ySlREMDJGNXdCUjN3cjhsRnIzN2ZJTFY4TVEwNFROSnlUc1FGNXh3Sm03N2NCc2ZIQ2lvUExsc1FzdUtMR2JFMzlZamIwWFBnbnpGS0ZPaTVTWlozWk0rNHV2QTNaeGRKWk0wWkNBQmhQT2w2SGpleklYVjRVRzMwU21KNHJQNVlCRWU4QlZJWXBBWng0OW1hRjE5cjRsNFViNnNIeEc5T3R2NFJHamhNVlBoZCtOM1BiRXB3UU9GMW9iTmh6Nllybnd5ZU11QVcyWEl6RW9aYlVGbHVHNUxraDJVT2laaXIwQTI2eThGYzZHUkVPTHJzWlBZTHVCYU5EekEvZTJwdEpLcGJEWUFxMWl6R1JLblpFRnFmb2g3bHVuYTljZmhlS3VLQWI0cVVyKytKeENKUT09J1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/google/service-account.enc.js\n");

/***/ }),

/***/ "./pages/api/youtube.js":
/*!******************************!*\
  !*** ./pages/api/youtube.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! googleapis */ \"googleapis\");\n/* harmony import */ var googleapis__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(googleapis__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_google_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/google/auth */ \"./lib/google/auth.js\");\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_, res) => {\n  const auth = await _lib_google_auth__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getClient();\n  const youtube = googleapis__WEBPACK_IMPORTED_MODULE_0__[\"google\"].youtube({\n    auth,\n    version: 'v3'\n  });\n  const response = await youtube.channels.list({\n    id: 'UCZMli3czZnd1uoc1ShTouQw',\n    part: 'statistics'\n  });\n  const channel = response.data.items[0];\n  const {\n    subscriberCount,\n    viewCount\n  } = channel.statistics;\n  res.setHeader('Cache-Control', 'public, s-maxage=1200, stale-while-revalidate=600');\n  return res.status(200).json({\n    subscriberCount,\n    viewCount\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkveW91dHViZS5qcz8xNzYxIl0sIm5hbWVzIjpbIl8iLCJyZXMiLCJhdXRoIiwiZ29vZ2xlQXV0aCIsImdldENsaWVudCIsInlvdXR1YmUiLCJnb29nbGUiLCJ2ZXJzaW9uIiwicmVzcG9uc2UiLCJjaGFubmVscyIsImxpc3QiLCJpZCIsInBhcnQiLCJjaGFubmVsIiwiZGF0YSIsIml0ZW1zIiwic3Vic2NyaWJlckNvdW50Iiwidmlld0NvdW50Iiwic3RhdGlzdGljcyIsInNldEhlYWRlciIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVlLHNFQUFPQSxDQUFQLEVBQVVDLEdBQVYsS0FBa0I7QUFDL0IsUUFBTUMsSUFBSSxHQUFHLE1BQU1DLHdEQUFVLENBQUNDLFNBQVgsRUFBbkI7QUFDQSxRQUFNQyxPQUFPLEdBQUdDLGlEQUFNLENBQUNELE9BQVAsQ0FBZTtBQUM3QkgsUUFENkI7QUFFN0JLLFdBQU8sRUFBRTtBQUZvQixHQUFmLENBQWhCO0FBS0EsUUFBTUMsUUFBUSxHQUFHLE1BQU1ILE9BQU8sQ0FBQ0ksUUFBUixDQUFpQkMsSUFBakIsQ0FBc0I7QUFDM0NDLE1BQUUsRUFBRSwwQkFEdUM7QUFFM0NDLFFBQUksRUFBRTtBQUZxQyxHQUF0QixDQUF2QjtBQUtBLFFBQU1DLE9BQU8sR0FBR0wsUUFBUSxDQUFDTSxJQUFULENBQWNDLEtBQWQsQ0FBb0IsQ0FBcEIsQ0FBaEI7QUFDQSxRQUFNO0FBQUVDLG1CQUFGO0FBQW1CQztBQUFuQixNQUFpQ0osT0FBTyxDQUFDSyxVQUEvQztBQUVBakIsS0FBRyxDQUFDa0IsU0FBSixDQUNFLGVBREYsRUFFRSxtREFGRjtBQUtBLFNBQU9sQixHQUFHLENBQUNtQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDMUJMLG1CQUQwQjtBQUUxQkM7QUFGMEIsR0FBckIsQ0FBUDtBQUlELENBeEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3lvdXR1YmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnb29nbGUgfSBmcm9tICdnb29nbGVhcGlzJztcblxuaW1wb3J0IGdvb2dsZUF1dGggZnJvbSAnQC9saWIvZ29vZ2xlL2F1dGgnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoXywgcmVzKSA9PiB7XG4gIGNvbnN0IGF1dGggPSBhd2FpdCBnb29nbGVBdXRoLmdldENsaWVudCgpO1xuICBjb25zdCB5b3V0dWJlID0gZ29vZ2xlLnlvdXR1YmUoe1xuICAgIGF1dGgsXG4gICAgdmVyc2lvbjogJ3YzJ1xuICB9KTtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHlvdXR1YmUuY2hhbm5lbHMubGlzdCh7XG4gICAgaWQ6ICdVQ1pNbGkzY3pabmQxdW9jMVNoVG91UXcnLFxuICAgIHBhcnQ6ICdzdGF0aXN0aWNzJ1xuICB9KTtcblxuICBjb25zdCBjaGFubmVsID0gcmVzcG9uc2UuZGF0YS5pdGVtc1swXTtcbiAgY29uc3QgeyBzdWJzY3JpYmVyQ291bnQsIHZpZXdDb3VudCB9ID0gY2hhbm5lbC5zdGF0aXN0aWNzO1xuXG4gIHJlcy5zZXRIZWFkZXIoXG4gICAgJ0NhY2hlLUNvbnRyb2wnLFxuICAgICdwdWJsaWMsIHMtbWF4YWdlPTEyMDAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGU9NjAwJ1xuICApO1xuXG4gIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgc3Vic2NyaWJlckNvdW50LFxuICAgIHZpZXdDb3VudFxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/youtube.js\n");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjcnlwdG9cIj80Yzc2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImNyeXB0by5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///crypto\n");

/***/ }),

/***/ "googleapis":
/*!*****************************!*\
  !*** external "googleapis" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"googleapis\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGVhcGlzXCI/MzExYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJnb29nbGVhcGlzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ29vZ2xlYXBpc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///googleapis\n");

/***/ })

/******/ });