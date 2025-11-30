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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ "(api)/./pages/api/user.js":
/*!***************************!*\
  !*** ./pages/api/user.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)(\"./database/demo.db\");\nfunction handler(req, res) {\n    const id = req.query.id;\n    // ❌ SQL Injection vulnerability intentionally kept\n    const query = \"SELECT id, email, name FROM users WHERE id = \" + id;\n    db.get(query, (err, row)=>{\n        if (err) {\n            return res.status(500).json({\n                error: \"DB error\"\n            });\n        }\n        // If user does not exist\n        if (!row) {\n            return res.status(404).json({\n                error: \"User not found\"\n            });\n        }\n        // Return the user object directly (IDOR!)\n        return res.json({\n            ok: true,\n            user: row\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBOEI7QUFDOUIsTUFBTUMsS0FBSyxJQUFJRCx5REFBZ0IsQ0FBQztBQUVqQixTQUFTRyxRQUFRQyxHQUFHLEVBQUVDLEdBQUc7SUFDdEMsTUFBTUMsS0FBS0YsSUFBSUcsS0FBSyxDQUFDRCxFQUFFO0lBRXZCLG1EQUFtRDtJQUNuRCxNQUFNQyxRQUFRLGtEQUFrREQ7SUFFaEVMLEdBQUdPLEdBQUcsQ0FBQ0QsT0FBTyxDQUFDRSxLQUFLQztRQUNsQixJQUFJRCxLQUFLO1lBQ1AsT0FBT0osSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBRUMsT0FBTztZQUFXO1FBQ2xEO1FBRUEseUJBQXlCO1FBQ3pCLElBQUksQ0FBQ0gsS0FBSztZQUNSLE9BQU9MLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBaUI7UUFDeEQ7UUFFQSwwQ0FBMEM7UUFDMUMsT0FBT1IsSUFBSU8sSUFBSSxDQUFDO1lBQ2RFLElBQUk7WUFDSkMsTUFBTUw7UUFDUjtJQUNGO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qZHNlYy11bHRpbWF0ZS1sYWItdjIvLi9wYWdlcy9hcGkvdXNlci5qcz84YTZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcWxpdGUzIGZyb20gXCJzcWxpdGUzXCI7XHJcbmNvbnN0IGRiID0gbmV3IHNxbGl0ZTMuRGF0YWJhc2UoXCIuL2RhdGFiYXNlL2RlbW8uZGJcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgY29uc3QgaWQgPSByZXEucXVlcnkuaWQ7XHJcblxyXG4gIC8vIOKdjCBTUUwgSW5qZWN0aW9uIHZ1bG5lcmFiaWxpdHkgaW50ZW50aW9uYWxseSBrZXB0XHJcbiAgY29uc3QgcXVlcnkgPSBcIlNFTEVDVCBpZCwgZW1haWwsIG5hbWUgRlJPTSB1c2VycyBXSEVSRSBpZCA9IFwiICsgaWQ7XHJcblxyXG4gIGRiLmdldChxdWVyeSwgKGVyciwgcm93KSA9PiB7XHJcbiAgICBpZiAoZXJyKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIkRCIGVycm9yXCIgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdXNlciBkb2VzIG5vdCBleGlzdFxyXG4gICAgaWYgKCFyb3cpIHtcclxuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgZXJyb3I6IFwiVXNlciBub3QgZm91bmRcIiB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBSZXR1cm4gdGhlIHVzZXIgb2JqZWN0IGRpcmVjdGx5IChJRE9SISlcclxuICAgIHJldHVybiByZXMuanNvbih7XHJcbiAgICAgIG9rOiB0cnVlLFxyXG4gICAgICB1c2VyOiByb3dcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJzcWxpdGUzIiwiZGIiLCJEYXRhYmFzZSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpZCIsInF1ZXJ5IiwiZ2V0IiwiZXJyIiwicm93Iiwic3RhdHVzIiwianNvbiIsImVycm9yIiwib2siLCJ1c2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/user.js"));
module.exports = __webpack_exports__;

})();