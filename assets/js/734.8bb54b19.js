"use strict";
exports.id = 734;
exports.ids = [734];
exports.modules = {

/***/ 58734:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_text_field": () => (/* binding */ DyteTextField)
/* harmony export */ });
/* harmony import */ var _index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13441);


const dyteTextFieldCss = "input{display:block;height:var(--dyte-space-10, 40px);padding-left:var(--dyte-space-3, 12px);padding-right:var(--dyte-space-3, 12px);font-family:var(--dyte-font-family, sans-serif);font-size:14px;border-width:var(--dyte-border-width-md, 2px);border-style:solid;border-color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64));--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}input::-moz-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input:-ms-input-placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input::placeholder{color:rgb(var(--dyte-colors-text-700, 255 255 255 / 0.64))}input:focus{color:rgb(var(--dyte-colors-text-1000, 255 255 255))}input{border-radius:var(--dyte-border-radius-sm, 4px);outline:2px solid transparent;outline-offset:2px;transition-property:color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}input:focus{--tw-border-opacity:1;border-color:rgba(var(--dyte-colors-brand-500, 33 96 253) / var(--tw-border-opacity))}input:disabled{cursor:not-allowed}";

const DyteTextField = class {
  constructor(hostRef) {
    (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    /** Input type */
    this.type = 'text';
    /** Placeholder text */
    this.placeholder = '';
    /** Disabled */
    this.disabled = false;
  }
  connectedCallback() {
    this.stateUpdate.emit({ abc: false });
  }
  get value() {
    return this.input.value;
  }
  render() {
    return ((0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("input", { ref: (el) => (this.input = el), type: this.type, placeholder: this.placeholder, disabled: this.disabled })));
  }
};
DyteTextField.style = dyteTextFieldCss;




/***/ })

};
;