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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/top-tracks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/spotify.js":
/*!************************!*\
  !*** ./lib/spotify.js ***!
  \************************/
/*! exports provided: getNowPlaying, getTopTracks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getNowPlaying\", function() { return getNowPlaying; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTopTracks\", function() { return getTopTracks; });\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ \"querystring\");\n/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_0__);\n\nconst {\n  SPOTIFY_CLIENT_ID: client_id,\n  SPOTIFY_CLIENT_SECRET: client_secret,\n  SPOTIFY_REFRESH_TOKEN: refresh_token\n} = process.env;\nconst basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');\nconst NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;\nconst TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`;\nconst TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;\n\nconst getAccessToken = async () => {\n  const response = await fetch(TOKEN_ENDPOINT, {\n    method: 'POST',\n    headers: {\n      Authorization: `Basic ${basic}`,\n      'Content-Type': 'application/x-www-form-urlencoded'\n    },\n    body: querystring__WEBPACK_IMPORTED_MODULE_0___default.a.stringify({\n      grant_type: 'refresh_token',\n      refresh_token\n    })\n  });\n  return response.json();\n};\n\nconst getNowPlaying = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(NOW_PLAYING_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};\nconst getTopTracks = async () => {\n  const {\n    access_token\n  } = await getAccessToken();\n  return fetch(TOP_TRACKS_ENDPOINT, {\n    headers: {\n      Authorization: `Bearer ${access_token}`\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9saWIvc3BvdGlmeS5qcz84OTRkIl0sIm5hbWVzIjpbIlNQT1RJRllfQ0xJRU5UX0lEIiwiY2xpZW50X2lkIiwiU1BPVElGWV9DTElFTlRfU0VDUkVUIiwiY2xpZW50X3NlY3JldCIsIlNQT1RJRllfUkVGUkVTSF9UT0tFTiIsInJlZnJlc2hfdG9rZW4iLCJwcm9jZXNzIiwiZW52IiwiYmFzaWMiLCJCdWZmZXIiLCJmcm9tIiwidG9TdHJpbmciLCJOT1dfUExBWUlOR19FTkRQT0lOVCIsIlRPUF9UUkFDS1NfRU5EUE9JTlQiLCJUT0tFTl9FTkRQT0lOVCIsImdldEFjY2Vzc1Rva2VuIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsInF1ZXJ5c3RyaW5nIiwic3RyaW5naWZ5IiwiZ3JhbnRfdHlwZSIsImpzb24iLCJnZXROb3dQbGF5aW5nIiwiYWNjZXNzX3Rva2VuIiwiZ2V0VG9wVHJhY2tzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNO0FBQ0pBLG1CQUFpQixFQUFFQyxTQURmO0FBRUpDLHVCQUFxQixFQUFFQyxhQUZuQjtBQUdKQyx1QkFBcUIsRUFBRUM7QUFIbkIsSUFJRkMsT0FBTyxDQUFDQyxHQUpaO0FBTUEsTUFBTUMsS0FBSyxHQUFHQyxNQUFNLENBQUNDLElBQVAsQ0FBYSxHQUFFVCxTQUFVLElBQUdFLGFBQWMsRUFBMUMsRUFBNkNRLFFBQTdDLENBQXNELFFBQXRELENBQWQ7QUFDQSxNQUFNQyxvQkFBb0IsR0FBSSx3REFBOUI7QUFDQSxNQUFNQyxtQkFBbUIsR0FBSSwwQ0FBN0I7QUFDQSxNQUFNQyxjQUFjLEdBQUksd0NBQXhCOztBQUVBLE1BQU1DLGNBQWMsR0FBRyxZQUFZO0FBQ2pDLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQUNILGNBQUQsRUFBaUI7QUFDM0NJLFVBQU0sRUFBRSxNQURtQztBQUUzQ0MsV0FBTyxFQUFFO0FBQ1BDLG1CQUFhLEVBQUcsU0FBUVosS0FBTSxFQUR2QjtBQUVQLHNCQUFnQjtBQUZULEtBRmtDO0FBTTNDYSxRQUFJLEVBQUVDLGtEQUFXLENBQUNDLFNBQVosQ0FBc0I7QUFDMUJDLGdCQUFVLEVBQUUsZUFEYztBQUUxQm5CO0FBRjBCLEtBQXRCO0FBTnFDLEdBQWpCLENBQTVCO0FBWUEsU0FBT1csUUFBUSxDQUFDUyxJQUFULEVBQVA7QUFDRCxDQWREOztBQWdCTyxNQUFNQyxhQUFhLEdBQUcsWUFBWTtBQUN2QyxRQUFNO0FBQUVDO0FBQUYsTUFBbUIsTUFBTVosY0FBYyxFQUE3QztBQUVBLFNBQU9FLEtBQUssQ0FBQ0wsb0JBQUQsRUFBdUI7QUFDakNPLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFHLFVBQVNPLFlBQWE7QUFEL0I7QUFEd0IsR0FBdkIsQ0FBWjtBQUtELENBUk07QUFVQSxNQUFNQyxZQUFZLEdBQUcsWUFBWTtBQUN0QyxRQUFNO0FBQUVEO0FBQUYsTUFBbUIsTUFBTVosY0FBYyxFQUE3QztBQUVBLFNBQU9FLEtBQUssQ0FBQ0osbUJBQUQsRUFBc0I7QUFDaENNLFdBQU8sRUFBRTtBQUNQQyxtQkFBYSxFQUFHLFVBQVNPLFlBQWE7QUFEL0I7QUFEdUIsR0FBdEIsQ0FBWjtBQUtELENBUk0iLCJmaWxlIjoiLi9saWIvc3BvdGlmeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxdWVyeXN0cmluZyBmcm9tICdxdWVyeXN0cmluZyc7XG5cbmNvbnN0IHtcbiAgU1BPVElGWV9DTElFTlRfSUQ6IGNsaWVudF9pZCxcbiAgU1BPVElGWV9DTElFTlRfU0VDUkVUOiBjbGllbnRfc2VjcmV0LFxuICBTUE9USUZZX1JFRlJFU0hfVE9LRU46IHJlZnJlc2hfdG9rZW5cbn0gPSBwcm9jZXNzLmVudjtcblxuY29uc3QgYmFzaWMgPSBCdWZmZXIuZnJvbShgJHtjbGllbnRfaWR9OiR7Y2xpZW50X3NlY3JldH1gKS50b1N0cmluZygnYmFzZTY0Jyk7XG5jb25zdCBOT1dfUExBWUlOR19FTkRQT0lOVCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5ZXIvY3VycmVudGx5LXBsYXlpbmdgO1xuY29uc3QgVE9QX1RSQUNLU19FTkRQT0lOVCA9IGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS90b3AvdHJhY2tzYDtcbmNvbnN0IFRPS0VOX0VORFBPSU5UID0gYGh0dHBzOi8vYWNjb3VudHMuc3BvdGlmeS5jb20vYXBpL3Rva2VuYDtcblxuY29uc3QgZ2V0QWNjZXNzVG9rZW4gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goVE9LRU5fRU5EUE9JTlQsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBBdXRob3JpemF0aW9uOiBgQmFzaWMgJHtiYXNpY31gLFxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgfSxcbiAgICBib2R5OiBxdWVyeXN0cmluZy5zdHJpbmdpZnkoe1xuICAgICAgZ3JhbnRfdHlwZTogJ3JlZnJlc2hfdG9rZW4nLFxuICAgICAgcmVmcmVzaF90b2tlblxuICAgIH0pXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZS5qc29uKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm93UGxheWluZyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IGdldEFjY2Vzc1Rva2VuKCk7XG5cbiAgcmV0dXJuIGZldGNoKE5PV19QTEFZSU5HX0VORFBPSU5ULCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gXG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRUb3BUcmFja3MgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgYWNjZXNzX3Rva2VuIH0gPSBhd2FpdCBnZXRBY2Nlc3NUb2tlbigpO1xuXG4gIHJldHVybiBmZXRjaChUT1BfVFJBQ0tTX0VORFBPSU5ULCB7XG4gICAgaGVhZGVyczoge1xuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc190b2tlbn1gXG4gICAgfVxuICB9KTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/spotify.js\n");

/***/ }),

/***/ "./pages/api/top-tracks.js":
/*!*********************************!*\
  !*** ./pages/api/top-tracks.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _lib_spotify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/spotify */ \"./lib/spotify.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (_, res) => {\n  const response = await Object(_lib_spotify__WEBPACK_IMPORTED_MODULE_0__[\"getTopTracks\"])();\n  const {\n    items\n  } = await response.json();\n  const tracks = items.slice(0, 10).map(track => ({\n    artist: track.artists.map(_artist => _artist.name).join(', '),\n    songUrl: track.external_urls.spotify,\n    title: track.name\n  }));\n  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=43200');\n  return res.status(200).json({\n    tracks\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvdG9wLXRyYWNrcy5qcz9lM2FiIl0sIm5hbWVzIjpbIl8iLCJyZXMiLCJyZXNwb25zZSIsImdldFRvcFRyYWNrcyIsIml0ZW1zIiwianNvbiIsInRyYWNrcyIsInNsaWNlIiwibWFwIiwidHJhY2siLCJhcnRpc3QiLCJhcnRpc3RzIiwiX2FydGlzdCIsIm5hbWUiLCJqb2luIiwic29uZ1VybCIsImV4dGVybmFsX3VybHMiLCJzcG90aWZ5IiwidGl0bGUiLCJzZXRIZWFkZXIiLCJzdGF0dXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUVlLHNFQUFPQSxDQUFQLEVBQVVDLEdBQVYsS0FBa0I7QUFDL0IsUUFBTUMsUUFBUSxHQUFHLE1BQU1DLGlFQUFZLEVBQW5DO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQVksTUFBTUYsUUFBUSxDQUFDRyxJQUFULEVBQXhCO0FBRUEsUUFBTUMsTUFBTSxHQUFHRixLQUFLLENBQUNHLEtBQU4sQ0FBWSxDQUFaLEVBQWUsRUFBZixFQUFtQkMsR0FBbkIsQ0FBd0JDLEtBQUQsS0FBWTtBQUNoREMsVUFBTSxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0gsR0FBZCxDQUFtQkksT0FBRCxJQUFhQSxPQUFPLENBQUNDLElBQXZDLEVBQTZDQyxJQUE3QyxDQUFrRCxJQUFsRCxDQUR3QztBQUVoREMsV0FBTyxFQUFFTixLQUFLLENBQUNPLGFBQU4sQ0FBb0JDLE9BRm1CO0FBR2hEQyxTQUFLLEVBQUVULEtBQUssQ0FBQ0k7QUFIbUMsR0FBWixDQUF2QixDQUFmO0FBTUFaLEtBQUcsQ0FBQ2tCLFNBQUosQ0FDRSxlQURGLEVBRUUsc0RBRkY7QUFLQSxTQUFPbEIsR0FBRyxDQUFDbUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JmLElBQWhCLENBQXFCO0FBQUVDO0FBQUYsR0FBckIsQ0FBUDtBQUNELENBaEJEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL3RvcC10cmFja3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRUb3BUcmFja3MgfSBmcm9tICdAL2xpYi9zcG90aWZ5JztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKF8sIHJlcykgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGdldFRvcFRyYWNrcygpO1xuICBjb25zdCB7IGl0ZW1zIH0gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgY29uc3QgdHJhY2tzID0gaXRlbXMuc2xpY2UoMCwgMTApLm1hcCgodHJhY2spID0+ICh7XG4gICAgYXJ0aXN0OiB0cmFjay5hcnRpc3RzLm1hcCgoX2FydGlzdCkgPT4gX2FydGlzdC5uYW1lKS5qb2luKCcsICcpLFxuICAgIHNvbmdVcmw6IHRyYWNrLmV4dGVybmFsX3VybHMuc3BvdGlmeSxcbiAgICB0aXRsZTogdHJhY2submFtZVxuICB9KSk7XG5cbiAgcmVzLnNldEhlYWRlcihcbiAgICAnQ2FjaGUtQ29udHJvbCcsXG4gICAgJ3B1YmxpYywgcy1tYXhhZ2U9ODY0MDAsIHN0YWxlLXdoaWxlLXJldmFsaWRhdGU9NDMyMDAnXG4gICk7XG5cbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdHJhY2tzIH0pO1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/top-tracks.js\n");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"querystring\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeXN0cmluZ1wiPzMwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicXVlcnlzdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///querystring\n");

/***/ })

/******/ });