/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domFactory/domFactory.js":
/*!**************************************!*\
  !*** ./src/domFactory/domFactory.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ domFactory)
/* harmony export */ });
class domFactory {
	static createDiv({ elementName, text = null, parent }) {
		const trimElementName = elementName.trim();
		this.elementName = document.createElement('div');
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementName);
		return this.elementName;
	}
	static createButton({ elementName, text = null, parent }) {
		const trimElementName = elementName.trim();
		this.elementName = document.createElement('button');
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementName);
		return this.elementName;
	}
	static createElement({ elementName, type = 'div', text = null, parent }) {
		const trimElementName = elementName.trim();
		this.elementName = document.createElement(type);
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementName);
		return this.elementName;
	}
	static createElementWithParent({
		elementName,
		parentName,
		type = 'div',
		text = null,
		parent,
	}) {
		const trimElementName = elementName.trim();
		this.elementParent = document.createElement('div');
		this.elementParent.classList.add(parentName);
		this.elementName = document.createElement(type);
		this.elementName.classList.add(trimElementName);
		this.elementName.textContent = text;
		parent.appendChild(this.elementParent);
		this.elementParent.appendChild(this.elementName);
		return this.elementName;
	}
}


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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _domFactory_domFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domFactory/domFactory */ "./src/domFactory/domFactory.js");


class UI {
	static init() {
		this.parent = document.querySelector('#container');
		this.wrapper = _domFactory_domFactory__WEBPACK_IMPORTED_MODULE_0__.default.createDiv({
			elementName: 'mydiv',
			text: 'hello',
			parent: this.parent,
		});
		_domFactory_domFactory__WEBPACK_IMPORTED_MODULE_0__.default.createDiv({
			elementName: 'hi',
			text: 'howdy',
			parent: this.wrapper,
		});
	}
}

UI.init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZixvQkFBb0Isa0NBQWtDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLGtDQUFrQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBZ0Q7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTmlEOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUVBQW9CO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFLHFFQUFvQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL215dG9kby8uL3NyYy9kb21GYWN0b3J5L2RvbUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vbXl0b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215dG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbXl0b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXl0b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbXl0b2RvLy4vc3JjL3NjcmlwdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBkb21GYWN0b3J5IHtcblx0c3RhdGljIGNyZWF0ZURpdih7IGVsZW1lbnROYW1lLCB0ZXh0ID0gbnVsbCwgcGFyZW50IH0pIHtcblx0XHRjb25zdCB0cmltRWxlbWVudE5hbWUgPSBlbGVtZW50TmFtZS50cmltKCk7XG5cdFx0dGhpcy5lbGVtZW50TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRoaXMuZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZCh0cmltRWxlbWVudE5hbWUpO1xuXHRcdHRoaXMuZWxlbWVudE5hbWUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnROYW1lKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50TmFtZTtcblx0fVxuXHRzdGF0aWMgY3JlYXRlQnV0dG9uKHsgZWxlbWVudE5hbWUsIHRleHQgPSBudWxsLCBwYXJlbnQgfSkge1xuXHRcdGNvbnN0IHRyaW1FbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnRyaW0oKTtcblx0XHR0aGlzLmVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cdFx0dGhpcy5lbGVtZW50TmFtZS5jbGFzc0xpc3QuYWRkKHRyaW1FbGVtZW50TmFtZSk7XG5cdFx0dGhpcy5lbGVtZW50TmFtZS50ZXh0Q29udGVudCA9IHRleHQ7XG5cdFx0cGFyZW50LmFwcGVuZENoaWxkKHRoaXMuZWxlbWVudE5hbWUpO1xuXHRcdHJldHVybiB0aGlzLmVsZW1lbnROYW1lO1xuXHR9XG5cdHN0YXRpYyBjcmVhdGVFbGVtZW50KHsgZWxlbWVudE5hbWUsIHR5cGUgPSAnZGl2JywgdGV4dCA9IG51bGwsIHBhcmVudCB9KSB7XG5cdFx0Y29uc3QgdHJpbUVsZW1lbnROYW1lID0gZWxlbWVudE5hbWUudHJpbSgpO1xuXHRcdHRoaXMuZWxlbWVudE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXHRcdHRoaXMuZWxlbWVudE5hbWUuY2xhc3NMaXN0LmFkZCh0cmltRWxlbWVudE5hbWUpO1xuXHRcdHRoaXMuZWxlbWVudE5hbWUudGV4dENvbnRlbnQgPSB0ZXh0O1xuXHRcdHBhcmVudC5hcHBlbmRDaGlsZCh0aGlzLmVsZW1lbnROYW1lKTtcblx0XHRyZXR1cm4gdGhpcy5lbGVtZW50TmFtZTtcblx0fVxuXHRzdGF0aWMgY3JlYXRlRWxlbWVudFdpdGhQYXJlbnQoe1xuXHRcdGVsZW1lbnROYW1lLFxuXHRcdHBhcmVudE5hbWUsXG5cdFx0dHlwZSA9ICdkaXYnLFxuXHRcdHRleHQgPSBudWxsLFxuXHRcdHBhcmVudCxcblx0fSkge1xuXHRcdGNvbnN0IHRyaW1FbGVtZW50TmFtZSA9IGVsZW1lbnROYW1lLnRyaW0oKTtcblx0XHR0aGlzLmVsZW1lbnRQYXJlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHR0aGlzLmVsZW1lbnRQYXJlbnQuY2xhc3NMaXN0LmFkZChwYXJlbnROYW1lKTtcblx0XHR0aGlzLmVsZW1lbnROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0eXBlKTtcblx0XHR0aGlzLmVsZW1lbnROYW1lLmNsYXNzTGlzdC5hZGQodHJpbUVsZW1lbnROYW1lKTtcblx0XHR0aGlzLmVsZW1lbnROYW1lLnRleHRDb250ZW50ID0gdGV4dDtcblx0XHRwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50UGFyZW50KTtcblx0XHR0aGlzLmVsZW1lbnRQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50TmFtZSk7XG5cdFx0cmV0dXJuIHRoaXMuZWxlbWVudE5hbWU7XG5cdH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGRvbUZhY3RvcnkgZnJvbSAnLi9kb21GYWN0b3J5L2RvbUZhY3RvcnknO1xuXG5jbGFzcyBVSSB7XG5cdHN0YXRpYyBpbml0KCkge1xuXHRcdHRoaXMucGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpO1xuXHRcdHRoaXMud3JhcHBlciA9IGRvbUZhY3RvcnkuY3JlYXRlRGl2KHtcblx0XHRcdGVsZW1lbnROYW1lOiAnbXlkaXYnLFxuXHRcdFx0dGV4dDogJ2hlbGxvJyxcblx0XHRcdHBhcmVudDogdGhpcy5wYXJlbnQsXG5cdFx0fSk7XG5cdFx0ZG9tRmFjdG9yeS5jcmVhdGVEaXYoe1xuXHRcdFx0ZWxlbWVudE5hbWU6ICdoaScsXG5cdFx0XHR0ZXh0OiAnaG93ZHknLFxuXHRcdFx0cGFyZW50OiB0aGlzLndyYXBwZXIsXG5cdFx0fSk7XG5cdH1cbn1cblxuVUkuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9