/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./server/app.js":
/*!***********************!*\
  !*** ./server/app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/server/app.js: Support for the experimental syntax 'jsx' isn't currently enabled (17:45):\\n\\n\\u001b[0m \\u001b[90m 15 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 16 |\\u001b[39m app\\u001b[33m.\\u001b[39m\\u001b[36mget\\u001b[39m(\\u001b[32m'/rooms/:id'\\u001b[39m\\u001b[33m,\\u001b[39m (req\\u001b[33m,\\u001b[39m res) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 17 |\\u001b[39m   \\u001b[36mconst\\u001b[39m app \\u001b[33m=\\u001b[39m \\u001b[33mReactDOMServer\\u001b[39m\\u001b[33m.\\u001b[39mrenderToString(\\u001b[33m<\\u001b[39m\\u001b[33mApp\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    |\\u001b[39m                                             \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 18 |\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 19 |\\u001b[39m   \\u001b[36mconst\\u001b[39m indexFile \\u001b[33m=\\u001b[39m path\\u001b[33m.\\u001b[39mresolve(\\u001b[32m'./public/index.html'\\u001b[39m)\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 20 |\\u001b[39m   fs\\u001b[33m.\\u001b[39mreadFile(indexFile\\u001b[33m,\\u001b[39m \\u001b[32m'utf8'\\u001b[39m\\u001b[33m,\\u001b[39m (err\\u001b[33m,\\u001b[39m data) \\u001b[33m=>\\u001b[39m {\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:776:17)\\n    at Parser.raiseWithData (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:769:17)\\n    at Parser.expectOnePlugin (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:9751:18)\\n    at Parser.parseExprAtom (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:11126:22)\\n    at Parser.parseExprSubscripts (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10709:23)\\n    at Parser.parseUpdate (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10689:21)\\n    at Parser.parseMaybeUnary (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10667:23)\\n    at Parser.parseExprOps (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10524:23)\\n    at Parser.parseMaybeConditional (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10498:23)\\n    at Parser.parseMaybeAssign (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10461:21)\\n    at /Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10428:39\\n    at Parser.allowInAnd (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:12105:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10428:17)\\n    at Parser.parseExprListItem (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:11865:18)\\n    at Parser.parseCallExpressionArguments (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10907:22)\\n    at Parser.parseCoverCallAndAsyncArrowHead (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10817:29)\\n    at Parser.parseSubscript (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10753:19)\\n    at Parser.parseSubscripts (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10726:19)\\n    at Parser.parseExprSubscripts (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10715:17)\\n    at Parser.parseUpdate (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10689:21)\\n    at Parser.parseMaybeUnary (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10667:23)\\n    at Parser.parseExprOps (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10524:23)\\n    at Parser.parseMaybeConditional (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10498:23)\\n    at Parser.parseMaybeAssign (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10461:21)\\n    at /Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10428:39\\n    at Parser.allowInAnd (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:12105:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:10428:17)\\n    at Parser.parseVar (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:12927:70)\\n    at Parser.parseVarStatement (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:12741:10)\\n    at Parser.parseStatementContent (/Users/christophertulin/Hack-Reactor/course/SDC/chris-proxy/node_modules/@babel/parser/lib/index.js:12327:21)\");\n\n//# sourceURL=webpack:///./server/app.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.js */ \"./server/app.js\");\n\nconst PORT = process.env.PORT || 5000; // import newrelic from 'newrelic';\n// import '@babel/register';\n\n_app_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].listen(PORT, () => {\n  console.log(`Serving app at http://localhost:${PORT}`);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ })

/******/ });