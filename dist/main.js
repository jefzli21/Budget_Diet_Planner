/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_appleCharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/appleCharts */ \"./src/scripts/appleCharts.js\");\n// import * as d3 from \"d3\";\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // appleChart();\n  const men = document.getElementsByClassName(\"menu\")[0];\n  men.addEventListener('click', e => {\n    console.log(e.target.name);\n  });\n});\nconst menuItems = document.getElementsByClassName(\"summary-items\")[0];\nconst lsItems = JSON.parse(localStorage.getItem('menu-items')) || [];\nconst items = document.getElementsByClassName(\"items\");\n\nconst addItem = e => {\n  e.preventDefault();\n  let input = document.querySelector(\".adding\"); // let value = \n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBR0FDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQTZDLFlBQVU7RUFFbkQ7RUFFSixNQUFNQyxHQUFHLEdBQUdGLFFBQVEsQ0FBQ0csc0JBQVQsQ0FBZ0MsTUFBaEMsRUFBd0MsQ0FBeEMsQ0FBWjtFQUNBRCxHQUFHLENBQUNELGdCQUFKLENBQXFCLE9BQXJCLEVBQStCRyxDQUFELElBQUs7SUFDL0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsSUFBckI7RUFDSCxDQUZEO0FBSUMsQ0FURDtBQVlBLE1BQU1DLFNBQVMsR0FBR1QsUUFBUSxDQUFDRyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRCxDQUFqRCxDQUFsQjtBQUVBLE1BQU1PLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixZQUFyQixDQUFYLEtBQWtELEVBQWxFO0FBRUEsTUFBTUMsS0FBSyxHQUFHZixRQUFRLENBQUNHLHNCQUFULENBQWdDLE9BQWhDLENBQWQ7O0FBS0EsTUFBTWEsT0FBTyxHQUFJWixDQUFELElBQU87RUFDbkJBLENBQUMsQ0FBQ2EsY0FBRjtFQUNBLElBQUlDLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ21CLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBWixDQUZtQixDQUduQjtBQUNILENBSkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWRnZXRfZGlldF9wbGFubmVyLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgZDMgZnJvbSBcImQzXCI7XG5pbXBvcnQge2FwcGxlQ2hhcnR9IGZyb20gXCIuL3NjcmlwdHMvYXBwbGVDaGFydHNcIlxuXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsZnVuY3Rpb24oKXtcbiAgICBcbiAgICAvLyBhcHBsZUNoYXJ0KCk7XG4gICAgXG5jb25zdCBtZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWVudVwiKVswXVxubWVuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQubmFtZSlcbn0pXG4gICAgXG59KVxuXG5cbmNvbnN0IG1lbnVJdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJzdW1tYXJ5LWl0ZW1zXCIpWzBdXG5cbmNvbnN0IGxzSXRlbXMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZW51LWl0ZW1zJykpIHx8IFtdO1xuXG5jb25zdCBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtc1wiKVxuXG5cblxuXG5jb25zdCBhZGRJdGVtID0gKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRpbmdcIilcbiAgICAvLyBsZXQgdmFsdWUgPSBcbn1cblxuIl0sIm5hbWVzIjpbImFwcGxlQ2hhcnQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtZW4iLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJuYW1lIiwibWVudUl0ZW1zIiwibHNJdGVtcyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpdGVtcyIsImFkZEl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwicXVlcnlTZWxlY3RvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/appleCharts.js":
/*!************************************!*\
  !*** ./src/scripts/appleCharts.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appleChart\": function() { return /* binding */ appleChart; }\n/* harmony export */ });\nasync function appleChart() {\n  var query = 'apple';\n  let url2 = 'https://api.calorieninjas.com/v1/nutrition?query=' + query;\n  const options2 = {\n    method: 'GET',\n    headers: {\n      'X-Api-Key': 'YBlM6hoP9sss2TahZxMmzQ==7bCcDDaLTNDilKG4'\n    },\n    contentType: 'application/json'\n  };\n  let extract = await fetch(url2, options2).then(response => response.json()).catch(err => console.error(err));\n  console.log(extract);\n  const data1 = [{\n    name: \"carbohydrates_total_g\",\n    value: extract.items[0].carbohydrates_total_g\n  }, {\n    name: \"fat_total_g\",\n    value: extract.items[0].fat_total_g\n  }, {\n    name: \"protein_g\",\n    value: extract.items[0].protein_g\n  }];\n  const data = [extract.items[0].carbohydrates_total_g, extract.items[0].fat_total_g, extract.items[0].protein_g];\n  let chickenBreast = document.getElementById('total').getContext('2d');\n  let pieChart = new Chart(chickenBreast, {\n    type: 'pie',\n    // bar,horizontal bar, pie, line doughnut, radar, polarArea\n    data: {\n      labels: ['carbohydrates_total_g', 'fat_total_g', 'protein_g'],\n      datasets: [{\n        label: 'Nutritions',\n        data: [extract.items[0].carbohydrates_total_g, extract.items[0].fat_total_g, extract.items[0].protein_g],\n        backgroundColor: ['green', 'red', 'purple'] //   radius:[100]\n\n      }]\n    },\n    options: {\n      responsive: true,\n      maintainAspectRatio: true\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9hcHBsZUNoYXJ0cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sZUFBZUEsVUFBZixHQUEyQjtFQUNsQyxJQUFJQyxLQUFLLEdBQUcsT0FBWjtFQUNBLElBQUlDLElBQUksR0FBRyxzREFBc0RELEtBQWpFO0VBRUEsTUFBTUUsUUFBUSxHQUFHO0lBQ2JDLE1BQU0sRUFBRSxLQURLO0lBRWJDLE9BQU8sRUFBRTtNQUFFLGFBQWE7SUFBZixDQUZJO0lBR2JDLFdBQVcsRUFBRTtFQUhBLENBQWpCO0VBTUEsSUFBSUMsT0FBTyxHQUFHLE1BQU1DLEtBQUssQ0FBQ04sSUFBRCxFQUFNQyxRQUFOLENBQUwsQ0FDWE0sSUFEVyxDQUNOQyxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsSUFBVCxFQUROLEVBRVhDLEtBRlcsQ0FFTEMsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEtBQVIsQ0FBY0YsR0FBZCxDQUZGLENBQXBCO0VBSVFDLE9BQU8sQ0FBQ0UsR0FBUixDQUFZVCxPQUFaO0VBR1IsTUFBTVUsS0FBSyxHQUFHLENBQ1Y7SUFBQ0MsSUFBSSx5QkFBTDtJQUFnQ0MsS0FBSyxFQUFFWixPQUFPLENBQUNhLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQztFQUF4RCxDQURVLEVBRVY7SUFBQ0gsSUFBSSxlQUFMO0lBQXNCQyxLQUFLLEVBQUVaLE9BQU8sQ0FBQ2EsS0FBUixDQUFjLENBQWQsRUFBaUJFO0VBQTlDLENBRlUsRUFHVjtJQUFDSixJQUFJLGFBQUw7SUFBb0JDLEtBQUssRUFBRVosT0FBTyxDQUFDYSxLQUFSLENBQWMsQ0FBZCxFQUFpQkc7RUFBNUMsQ0FIVSxDQUFkO0VBTUEsTUFBTUMsSUFBSSxHQUFHLENBQUNqQixPQUFPLENBQUNhLEtBQVIsQ0FBYyxDQUFkLEVBQWlCQyxxQkFBbEIsRUFBd0NkLE9BQU8sQ0FBQ2EsS0FBUixDQUFjLENBQWQsRUFBaUJFLFdBQXpELEVBQXFFZixPQUFPLENBQUNhLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRyxTQUF0RixDQUFiO0VBR0EsSUFBSUUsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLFVBQWpDLENBQTRDLElBQTVDLENBQXBCO0VBRUEsSUFBSUMsUUFBUSxHQUFHLElBQUlDLEtBQUosQ0FBVUwsYUFBVixFQUF5QjtJQUN0Q00sSUFBSSxFQUFDLEtBRGlDO0lBQzFCO0lBQ1pQLElBQUksRUFBQztNQUNIUSxNQUFNLEVBQUMsQ0FBQyx1QkFBRCxFQUF5QixhQUF6QixFQUF1QyxXQUF2QyxDQURKO01BRUhDLFFBQVEsRUFBQyxDQUFDO1FBQ1JDLEtBQUssRUFBRSxZQURDO1FBRVJWLElBQUksRUFBQyxDQUFDakIsT0FBTyxDQUFDYSxLQUFSLENBQWMsQ0FBZCxFQUFpQkMscUJBQWxCLEVBQXdDZCxPQUFPLENBQUNhLEtBQVIsQ0FBYyxDQUFkLEVBQWlCRSxXQUF6RCxFQUFxRWYsT0FBTyxDQUFDYSxLQUFSLENBQWMsQ0FBZCxFQUFpQkcsU0FBdEYsQ0FGRztRQUdSWSxlQUFlLEVBQUUsQ0FBQyxPQUFELEVBQVMsS0FBVCxFQUFlLFFBQWYsQ0FIVCxDQUlWOztNQUpVLENBQUQ7SUFGTixDQUZpQztJQVd0Q0MsT0FBTyxFQUFDO01BQ05DLFVBQVUsRUFBRSxJQUROO01BRU5DLG1CQUFtQixFQUFFO0lBRmY7RUFYOEIsQ0FBekIsQ0FBZjtBQWtCQyIsInNvdXJjZXMiOlsid2VicGFjazovL2J1ZGdldF9kaWV0X3BsYW5uZXIvLi9zcmMvc2NyaXB0cy9hcHBsZUNoYXJ0cy5qcz9lMzc4Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gYXBwbGVDaGFydCgpe1xudmFyIHF1ZXJ5ID0gJ2FwcGxlJ1xubGV0IHVybDIgPSAnaHR0cHM6Ly9hcGkuY2Fsb3JpZW5pbmphcy5jb20vdjEvbnV0cml0aW9uP3F1ZXJ5PScgKyBxdWVyeVxuXG5jb25zdCBvcHRpb25zMiA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIGhlYWRlcnM6IHsgJ1gtQXBpLUtleSc6ICdZQmxNNmhvUDlzc3MyVGFoWnhNbXpRPT03YkNjRERhTFRORGlsS0c0J30sXG4gICAgY29udGVudFR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJ1xufTtcblxubGV0IGV4dHJhY3QgPSBhd2FpdCBmZXRjaCh1cmwyLG9wdGlvbnMyKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhleHRyYWN0KVxuXG5cbmNvbnN0IGRhdGExID0gW1xuICAgIHtuYW1lOiBgY2FyYm9oeWRyYXRlc190b3RhbF9nYCwgdmFsdWU6IGV4dHJhY3QuaXRlbXNbMF0uY2FyYm9oeWRyYXRlc190b3RhbF9nfSxcbiAgICB7bmFtZTogYGZhdF90b3RhbF9nYCwgdmFsdWU6IGV4dHJhY3QuaXRlbXNbMF0uZmF0X3RvdGFsX2d9LFxuICAgIHtuYW1lOiBgcHJvdGVpbl9nYCwgdmFsdWU6IGV4dHJhY3QuaXRlbXNbMF0ucHJvdGVpbl9nfVxuXVxuXG5jb25zdCBkYXRhID0gW2V4dHJhY3QuaXRlbXNbMF0uY2FyYm9oeWRyYXRlc190b3RhbF9nLGV4dHJhY3QuaXRlbXNbMF0uZmF0X3RvdGFsX2csZXh0cmFjdC5pdGVtc1swXS5wcm90ZWluX2ddXG5cblxubGV0IGNoaWNrZW5CcmVhc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKS5nZXRDb250ZXh0KCcyZCcpO1xuXG5sZXQgcGllQ2hhcnQgPSBuZXcgQ2hhcnQoY2hpY2tlbkJyZWFzdCwge1xuICB0eXBlOidwaWUnLCAvLyBiYXIsaG9yaXpvbnRhbCBiYXIsIHBpZSwgbGluZSBkb3VnaG51dCwgcmFkYXIsIHBvbGFyQXJlYVxuICBkYXRhOntcbiAgICBsYWJlbHM6WydjYXJib2h5ZHJhdGVzX3RvdGFsX2cnLCdmYXRfdG90YWxfZycsJ3Byb3RlaW5fZyddLFxuICAgIGRhdGFzZXRzOlt7XG4gICAgICBsYWJlbDogJ051dHJpdGlvbnMnLFxuICAgICAgZGF0YTpbZXh0cmFjdC5pdGVtc1swXS5jYXJib2h5ZHJhdGVzX3RvdGFsX2csZXh0cmFjdC5pdGVtc1swXS5mYXRfdG90YWxfZyxleHRyYWN0Lml0ZW1zWzBdLnByb3RlaW5fZ10sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFsnZ3JlZW4nLCdyZWQnLCdwdXJwbGUnXSxcbiAgICAvLyAgIHJhZGl1czpbMTAwXVxuICAgIH1dXG4gIH0sXG4gIG9wdGlvbnM6e1xuICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogdHJ1ZVxuICB9XG59KTtcblxuXG59XG5cblxuIl0sIm5hbWVzIjpbImFwcGxlQ2hhcnQiLCJxdWVyeSIsInVybDIiLCJvcHRpb25zMiIsIm1ldGhvZCIsImhlYWRlcnMiLCJjb250ZW50VHlwZSIsImV4dHJhY3QiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImxvZyIsImRhdGExIiwibmFtZSIsInZhbHVlIiwiaXRlbXMiLCJjYXJib2h5ZHJhdGVzX3RvdGFsX2ciLCJmYXRfdG90YWxfZyIsInByb3RlaW5fZyIsImRhdGEiLCJjaGlja2VuQnJlYXN0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJwaWVDaGFydCIsIkNoYXJ0IiwidHlwZSIsImxhYmVscyIsImRhdGFzZXRzIiwibGFiZWwiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsIm1haW50YWluQXNwZWN0UmF0aW8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/appleCharts.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9idWRnZXRfZGlldF9wbGFubmVyLy4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;