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
exports.id = "pages/api/me";
exports.ids = ["pages/api/me"];
exports.modules = {

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ "(api)/./pages/api/me.js":
/*!*************************!*\
  !*** ./pages/api/me.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)(\"./database/demo.db\");\nfunction handler(req, res) {\n    const cookie = req.headers.cookie || \"\";\n    const sid = cookie.split(\"sid=\")[1];\n    if (!sid) {\n        return res.json({\n            auth: false,\n            ok: false\n        });\n    }\n    const parts = sid.split(\"-\");\n    const userId = parts[1];\n    if (!userId) {\n        return res.json({\n            auth: false,\n            ok: false\n        });\n    }\n    db.get(\"SELECT * FROM users WHERE id = \" + userId, (err, user)=>{\n        if (!user) return res.json({\n            auth: false,\n            ok: false\n        });\n        return res.json({\n            auth: true,\n            ok: true,\n            user: {\n                id: user.id,\n                email: user.email,\n                name: user.name\n            }\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBQzlCLE1BQU1DLEtBQUssSUFBSUQseURBQWdCLENBQUM7QUFFakIsU0FBU0csUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3RDLE1BQU1DLFNBQVNGLElBQUlHLE9BQU8sQ0FBQ0QsTUFBTSxJQUFJO0lBRXJDLE1BQU1FLE1BQU1GLE9BQU9HLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtJQUVuQyxJQUFJLENBQUNELEtBQUs7UUFDUixPQUFPSCxJQUFJSyxJQUFJLENBQUM7WUFBRUMsTUFBTTtZQUFPQyxJQUFJO1FBQU07SUFDM0M7SUFFQSxNQUFNQyxRQUFRTCxJQUFJQyxLQUFLLENBQUM7SUFDeEIsTUFBTUssU0FBU0QsS0FBSyxDQUFDLEVBQUU7SUFFdkIsSUFBSSxDQUFDQyxRQUFRO1FBQ1gsT0FBT1QsSUFBSUssSUFBSSxDQUFDO1lBQUVDLE1BQU07WUFBT0MsSUFBSTtRQUFNO0lBQzNDO0lBRUFYLEdBQUdjLEdBQUcsQ0FBQyxvQ0FBb0NELFFBQVEsQ0FBQ0UsS0FBS0M7UUFDdkQsSUFBSSxDQUFDQSxNQUFNLE9BQU9aLElBQUlLLElBQUksQ0FBQztZQUFFQyxNQUFNO1lBQU9DLElBQUk7UUFBTTtRQUVwRCxPQUFPUCxJQUFJSyxJQUFJLENBQUM7WUFDZEMsTUFBTTtZQUNOQyxJQUFJO1lBQ0pLLE1BQU07Z0JBQ0pDLElBQUlELEtBQUtDLEVBQUU7Z0JBQ1hDLE9BQU9GLEtBQUtFLEtBQUs7Z0JBQ2pCQyxNQUFNSCxLQUFLRyxJQUFJO1lBQ2pCO1FBQ0Y7SUFDRjtBQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamRzZWMtdWx0aW1hdGUtbGFiLXYyLy4vcGFnZXMvYXBpL21lLmpzP2MxNzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHNxbGl0ZTMgZnJvbSBcInNxbGl0ZTNcIjtcbmNvbnN0IGRiID0gbmV3IHNxbGl0ZTMuRGF0YWJhc2UoXCIuL2RhdGFiYXNlL2RlbW8uZGJcIik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgY29va2llID0gcmVxLmhlYWRlcnMuY29va2llIHx8IFwiXCI7XG5cbiAgY29uc3Qgc2lkID0gY29va2llLnNwbGl0KFwic2lkPVwiKVsxXTtcblxuICBpZiAoIXNpZCkge1xuICAgIHJldHVybiByZXMuanNvbih7IGF1dGg6IGZhbHNlLCBvazogZmFsc2UgfSk7XG4gIH1cblxuICBjb25zdCBwYXJ0cyA9IHNpZC5zcGxpdChcIi1cIik7XG4gIGNvbnN0IHVzZXJJZCA9IHBhcnRzWzFdO1xuXG4gIGlmICghdXNlcklkKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKHsgYXV0aDogZmFsc2UsIG9rOiBmYWxzZSB9KTtcbiAgfVxuXG4gIGRiLmdldChcIlNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgaWQgPSBcIiArIHVzZXJJZCwgKGVyciwgdXNlcikgPT4ge1xuICAgIGlmICghdXNlcikgcmV0dXJuIHJlcy5qc29uKHsgYXV0aDogZmFsc2UsIG9rOiBmYWxzZSB9KTtcblxuICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICBhdXRoOiB0cnVlLFxuICAgICAgb2s6IHRydWUsICAgLy8g4pyFIFJFUVVJUkVEIGZvciBkYXNoYm9hcmQgKyBwcm9maWxlXG4gICAgICB1c2VyOiB7XG4gICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgbmFtZTogdXNlci5uYW1lXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInNxbGl0ZTMiLCJkYiIsIkRhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvb2tpZSIsImhlYWRlcnMiLCJzaWQiLCJzcGxpdCIsImpzb24iLCJhdXRoIiwib2siLCJwYXJ0cyIsInVzZXJJZCIsImdldCIsImVyciIsInVzZXIiLCJpZCIsImVtYWlsIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/me.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/me.js"));
module.exports = __webpack_exports__;

})();