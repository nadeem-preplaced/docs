"use strict";
exports.id = 646;
exports.ids = [646];
exports.modules = {

/***/ 96646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_spinner": () => (/* binding */ DyteSpinner)
/* harmony export */ });
/* harmony import */ var _index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13441);


const dyteSpinnerCss = ":host{box-sizing:border-box;display:block;height:var(--dyte-space-10, 40px);width:var(--dyte-space-10, 40px);--dyte-spinner-color:currentColor}.spinner{height:100%;width:100%}@-webkit-keyframes spin{to{transform:rotate(360deg)}}@keyframes spin{to{transform:rotate(360deg)}}.spinner{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite;border-radius:9999px;background-color:transparent;border:var(--dyte-border-width-sm, 1px) solid var(--dyte-spinner-color, rgb(var(--dyte-colors-brand-500, 33 96 253)));border-left:none;border-bottom:none;-webkit-animation-duration:0.7s;animation-duration:0.7s}";

const DyteSpinner = class {
  constructor(hostRef) {
    (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
  }
  render() {
    return ((0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "spinner" })));
  }
};
DyteSpinner.style = dyteSpinnerCss;




/***/ })

};
;