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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "sqlite3":
/*!**************************!*\
  !*** external "sqlite3" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("sqlite3");

/***/ }),

/***/ "(api)/./pages/api/login.js":
/*!****************************!*\
  !*** ./pages/api/login.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sqlite3 */ \"sqlite3\");\n/* harmony import */ var sqlite3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sqlite3__WEBPACK_IMPORTED_MODULE_0__);\n\nconst db = new (sqlite3__WEBPACK_IMPORTED_MODULE_0___default().Database)(\"./database/demo.db\");\nfunction handler(req, res) {\n    const { email, password, next } = req.body || {};\n    // ❌ VULNERABLE SQL (login bypass enabled)\n    const query = \"SELECT * FROM users WHERE email = '\" + email + \"'\";\n    db.get(query, (err, user)=>{\n        if (err) {\n            return res.json({\n                success: false,\n                message: \"DB Error\"\n            });\n        }\n        // ======================================================\n        // 🔥 LOGIN BYPASS CONDITION\n        // ======================================================\n        // If attacker enters:  ' OR '1'='1\n        // Then user becomes FIRST record in database\n        // So password check must be skipped if SQLi is detected\n        // ======================================================\n        const isSQLi = email.includes(\"' OR '1'='1\") || email.includes('\" OR \"1\"=\"1');\n        if (!user && !isSQLi) {\n            return res.json({\n                success: false,\n                message: \"<b>User Not Found:</b> No account exists with <u>\" + email + \"</u>\"\n            });\n        }\n        // If SQLi triggered → force-select user ID = 1\n        if (isSQLi) {\n            user = {\n                id: 1,\n                email: \"student@jdsecacademy.com\",\n                name: \"JDSEC Student\"\n            };\n        }\n        // ❌ Password check skipped on SQL injection\n        if (!isSQLi && user.password !== password) {\n            return res.json({\n                success: false,\n                message: \"<b>Incorrect Password</b> for user <u>\" + email + \"</u>\"\n            });\n        }\n        // Generate predictable vulnerable session ID\n        const sid = \"jdsec-\" + user.id + \"-\" + Math.random().toString(36).substring(2);\n        // Set weak cookie (kept intentionally)\n        res.setHeader(\"Set-Cookie\", `sid=${sid}; Path=/`);\n        // Redirect to next or dashboard\n        return res.json({\n            success: true,\n            redirect: next || \"/dashboard\"\n        });\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQThCO0FBQzlCLE1BQU1DLEtBQUssSUFBSUQseURBQWdCLENBQUM7QUFFakIsU0FBU0csUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQ3RDLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQUVDLElBQUksRUFBRSxHQUFHSixJQUFJSyxJQUFJLElBQUksQ0FBQztJQUUvQywwQ0FBMEM7SUFDMUMsTUFBTUMsUUFBUSx3Q0FBd0NKLFFBQVE7SUFFOURMLEdBQUdVLEdBQUcsQ0FBQ0QsT0FBTyxDQUFDRSxLQUFLQztRQUNsQixJQUFJRCxLQUFLO1lBQ1AsT0FBT1AsSUFBSVMsSUFBSSxDQUFDO2dCQUFFQyxTQUFTO2dCQUFPQyxTQUFTO1lBQVc7UUFDeEQ7UUFFQSx5REFBeUQ7UUFDekQsNEJBQTRCO1FBQzVCLHlEQUF5RDtRQUN6RCxtQ0FBbUM7UUFDbkMsNkNBQTZDO1FBQzdDLHdEQUF3RDtRQUN4RCx5REFBeUQ7UUFDekQsTUFBTUMsU0FBU1gsTUFBTVksUUFBUSxDQUFDLGtCQUFrQlosTUFBTVksUUFBUSxDQUFDO1FBRS9ELElBQUksQ0FBQ0wsUUFBUSxDQUFDSSxRQUFRO1lBQ3BCLE9BQU9aLElBQUlTLElBQUksQ0FBQztnQkFDZEMsU0FBUztnQkFDVEMsU0FDRSxzREFBc0RWLFFBQVE7WUFDbEU7UUFDRjtRQUVBLCtDQUErQztRQUMvQyxJQUFJVyxRQUFRO1lBQ1ZKLE9BQU87Z0JBQUVNLElBQUk7Z0JBQUdiLE9BQU87Z0JBQTRCYyxNQUFNO1lBQWdCO1FBQzNFO1FBRUEsNENBQTRDO1FBQzVDLElBQUksQ0FBQ0gsVUFBVUosS0FBS04sUUFBUSxLQUFLQSxVQUFVO1lBQ3pDLE9BQU9GLElBQUlTLElBQUksQ0FBQztnQkFDZEMsU0FBUztnQkFDVEMsU0FBUywyQ0FBMkNWLFFBQVE7WUFDOUQ7UUFDRjtRQUVBLDZDQUE2QztRQUM3QyxNQUFNZSxNQUFNLFdBQVdSLEtBQUtNLEVBQUUsR0FBRyxNQUFNRyxLQUFLQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQyxJQUFJQyxTQUFTLENBQUM7UUFFNUUsdUNBQXVDO1FBQ3ZDcEIsSUFBSXFCLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFTCxJQUFJLFFBQVEsQ0FBQztRQUVoRCxnQ0FBZ0M7UUFDaEMsT0FBT2hCLElBQUlTLElBQUksQ0FBQztZQUNkQyxTQUFTO1lBQ1RZLFVBQVVuQixRQUFRO1FBQ3BCO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2pkc2VjLXVsdGltYXRlLWxhYi12Mi8uL3BhZ2VzL2FwaS9sb2dpbi5qcz9hZTg4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzcWxpdGUzIGZyb20gXCJzcWxpdGUzXCI7XG5jb25zdCBkYiA9IG5ldyBzcWxpdGUzLkRhdGFiYXNlKFwiLi9kYXRhYmFzZS9kZW1vLmRiXCIpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgZW1haWwsIHBhc3N3b3JkLCBuZXh0IH0gPSByZXEuYm9keSB8fCB7fTtcblxuICAvLyDinYwgVlVMTkVSQUJMRSBTUUwgKGxvZ2luIGJ5cGFzcyBlbmFibGVkKVxuICBjb25zdCBxdWVyeSA9IFwiU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSBlbWFpbCA9ICdcIiArIGVtYWlsICsgXCInXCI7XG5cbiAgZGIuZ2V0KHF1ZXJ5LCAoZXJyLCB1c2VyKSA9PiB7XG4gICAgaWYgKGVycikge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IFwiREIgRXJyb3JcIiB9KTtcbiAgICB9XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyDwn5SlIExPR0lOIEJZUEFTUyBDT05ESVRJT05cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBJZiBhdHRhY2tlciBlbnRlcnM6ICAnIE9SICcxJz0nMVxuICAgIC8vIFRoZW4gdXNlciBiZWNvbWVzIEZJUlNUIHJlY29yZCBpbiBkYXRhYmFzZVxuICAgIC8vIFNvIHBhc3N3b3JkIGNoZWNrIG11c3QgYmUgc2tpcHBlZCBpZiBTUUxpIGlzIGRldGVjdGVkXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgY29uc3QgaXNTUUxpID0gZW1haWwuaW5jbHVkZXMoXCInIE9SICcxJz0nMVwiKSB8fCBlbWFpbC5pbmNsdWRlcyhcIlxcXCIgT1IgXFxcIjFcXFwiPVxcXCIxXCIpO1xuXG4gICAgaWYgKCF1c2VyICYmICFpc1NRTGkpIHtcbiAgICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICAgIHN1Y2Nlc3M6IGZhbHNlLFxuICAgICAgICBtZXNzYWdlOlxuICAgICAgICAgIFwiPGI+VXNlciBOb3QgRm91bmQ6PC9iPiBObyBhY2NvdW50IGV4aXN0cyB3aXRoIDx1PlwiICsgZW1haWwgKyBcIjwvdT5cIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIElmIFNRTGkgdHJpZ2dlcmVkIOKGkiBmb3JjZS1zZWxlY3QgdXNlciBJRCA9IDFcbiAgICBpZiAoaXNTUUxpKSB7XG4gICAgICB1c2VyID0geyBpZDogMSwgZW1haWw6IFwic3R1ZGVudEBqZHNlY2FjYWRlbXkuY29tXCIsIG5hbWU6IFwiSkRTRUMgU3R1ZGVudFwiIH07XG4gICAgfVxuXG4gICAgLy8g4p2MIFBhc3N3b3JkIGNoZWNrIHNraXBwZWQgb24gU1FMIGluamVjdGlvblxuICAgIGlmICghaXNTUUxpICYmIHVzZXIucGFzc3dvcmQgIT09IHBhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gcmVzLmpzb24oe1xuICAgICAgICBzdWNjZXNzOiBmYWxzZSxcbiAgICAgICAgbWVzc2FnZTogXCI8Yj5JbmNvcnJlY3QgUGFzc3dvcmQ8L2I+IGZvciB1c2VyIDx1PlwiICsgZW1haWwgKyBcIjwvdT5cIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIHByZWRpY3RhYmxlIHZ1bG5lcmFibGUgc2Vzc2lvbiBJRFxuICAgIGNvbnN0IHNpZCA9IFwiamRzZWMtXCIgKyB1c2VyLmlkICsgXCItXCIgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHJpbmcoMik7XG5cbiAgICAvLyBTZXQgd2VhayBjb29raWUgKGtlcHQgaW50ZW50aW9uYWxseSlcbiAgICByZXMuc2V0SGVhZGVyKFwiU2V0LUNvb2tpZVwiLCBgc2lkPSR7c2lkfTsgUGF0aD0vYCk7XG5cbiAgICAvLyBSZWRpcmVjdCB0byBuZXh0IG9yIGRhc2hib2FyZFxuICAgIHJldHVybiByZXMuanNvbih7XG4gICAgICBzdWNjZXNzOiB0cnVlLFxuICAgICAgcmVkaXJlY3Q6IG5leHQgfHwgXCIvZGFzaGJvYXJkXCIsXG4gICAgfSk7XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbInNxbGl0ZTMiLCJkYiIsIkRhdGFiYXNlIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImVtYWlsIiwicGFzc3dvcmQiLCJuZXh0IiwiYm9keSIsInF1ZXJ5IiwiZ2V0IiwiZXJyIiwidXNlciIsImpzb24iLCJzdWNjZXNzIiwibWVzc2FnZSIsImlzU1FMaSIsImluY2x1ZGVzIiwiaWQiLCJuYW1lIiwic2lkIiwiTWF0aCIsInJhbmRvbSIsInRvU3RyaW5nIiwic3Vic3RyaW5nIiwic2V0SGVhZGVyIiwicmVkaXJlY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.js"));
module.exports = __webpack_exports__;

})();