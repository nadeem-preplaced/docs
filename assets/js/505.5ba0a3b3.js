"use strict";
exports.id = 505;
exports.ids = [505];
exports.modules = {

/***/ 44505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_meeting_title": () => (/* binding */ DyteMeetingTitle)
/* harmony export */ });
/* harmony import */ var _index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13441);


const dyteMeetingTitleCss = ":host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:var(--dyte-font-family, sans-serif);font-size:16px}.title{text-align:center;overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1}";

const DyteMeetingTitle = class {
  constructor(hostRef) {
    (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.title = '';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  meetingChanged(meeting) {
    if (meeting != null) {
      // update title
      this.title = meeting.meta.meetingTitle;
    }
  }
  render() {
    return ((0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabIndex: 0, role: "banner", "aria-label": this.title }, (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-tooltip", { label: this.title }, (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "title" }, this.title))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteMeetingTitle.style = dyteMeetingTitleCss;




/***/ })

};
;