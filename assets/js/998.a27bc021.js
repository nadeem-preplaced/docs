"use strict";
exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 24998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_name_tag": () => (/* binding */ DyteNameTag)
/* harmony export */ });
/* harmony import */ var _index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13441);
/* harmony import */ var _string_739d5cc6_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10620);
/* harmony import */ var _index_a651ed73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10670);




const dyteNameTagCss = ":host{display:inline-flex;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-items:center;padding-top:var(--dyte-space-1, 4px);padding-bottom:var(--dyte-space-1, 4px);padding-left:var(--dyte-space-1\\.5, 6px);padding-right:var(--dyte-space-1\\.5, 6px);font-size:14px;border-radius:var(--dyte-border-radius-sm, 4px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-700, 44 44 44) / var(--tw-bg-opacity));color:rgb(var(--dyte-colors-text-900, 255 255 255 / 0.88))}::slotted(dyte-audio-visualizer[slot='start']){margin-right:var(--dyte-space-1\\.5, 6px)}::slotted(dyte-audio-visualizer[slot='end']){margin-left:var(--dyte-space-1\\.5, 6px)}:host([size='sm']){font-size:14px}";

const DyteNameTag = class {
  constructor(hostRef) {
    (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Maximum length of the name */
    this.maxLength = 20;
    /** Language */
    this.t = (0,_index_a651ed73_js__WEBPACK_IMPORTED_MODULE_1__.u)();
  }
  render() {
    const name = (0,_string_739d5cc6_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.peer.name);
    const isSelf = this.peer.id === this.meeting.self.id;
    return ((0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: { [this.size]: this.size !== undefined }, title: name }, (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "start" }), isSelf ? `${(0,_string_739d5cc6_js__WEBPACK_IMPORTED_MODULE_2__.s)(name, 13)} (${this.t('you')})` : (0,_string_739d5cc6_js__WEBPACK_IMPORTED_MODULE_2__.s)(name, 16), (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", { name: "end" })));
  }
};
DyteNameTag.style = dyteNameTagCss;




/***/ }),

/***/ 10670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getLangData),
/* harmony export */   "u": () => (/* binding */ useLanguage)
/* harmony export */ });
const defaultLanguage = {
  chat: 'Chat',
  participants: 'Participants',
  polls: 'Polls',
  plugins: 'Plugins',
  mic_off: 'Mic Off',
  mic_on: 'Mic On',
  video_off: 'Video Off',
  video_on: 'Video On',
  left_meeting: 'You left the meeting',
  share_screen_start: 'Share Screen',
  share_screen_stop: 'Stop Sharing',
  leave: 'Leave',
  dismiss: 'Dismiss',
  page: 'Page',
  settings: 'Settings',
  audio: 'Audio',
  video: 'Video',
  connection: 'Connection',
  leave_confirmation: 'Are you sure you want to leave the call?',
  end_meeting_for_all: 'End meeting for all',
  cancel: 'Cancel',
};

// Replace with cdn base path in prod
const LANG_BASE_URL = 'http://localhost:5000';
const getLangData = async (lang) => {
  if (lang == null || lang === 'en' || lang.trim() === '') {
    return defaultLanguage;
  }
  try {
    const res = await fetch(`${LANG_BASE_URL}/${lang}.json`);
    if (!res.ok) {
      return defaultLanguage;
    }
    // merge fetched language with defaultLanguage to avoid empty properties
    return Object.assign({}, defaultLanguage, await res.json());
  }
  catch (_) {
    return defaultLanguage;
  }
};
/**
 * Creates an i18n instance from a language dictionary/object.
 * @param lang The language dictionary
 * @returns A function which handles i18n
 */
const useLanguage = (lang = defaultLanguage) => {
  return (key) => {
    var _a;
    return (_a = lang[key]) !== null && _a !== void 0 ? _a : key;
  };
};




/***/ }),

/***/ 10620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ sanitizeLink),
/* harmony export */   "f": () => (/* binding */ formatName),
/* harmony export */   "h": () => (/* binding */ hasOnlyEmojis),
/* harmony export */   "s": () => (/* binding */ shorten)
/* harmony export */ });
/**
 * Shorten a string upto a maximum length of characters and add `...` as suffix if it exceeds the maximum length
 * @param str The The string you want to shorten
 * @param maxLength Maximum length of character
 * @returns Formatted shortedned string
 */
const shorten = (str, maxLength = 20) => {
  if (str == null)
    return '';
  if (str.length > maxLength) {
    return `${str.substring(0, maxLength)}...`;
  }
  return str;
};
/**
 * Checks if a given string consists of only emojis.
 *
 * However this classifies a string with numbers as emoji as well.
 * Which works in our favour for now in chat as it enlarges messages with just numbers.
 * @param str String on which to perform the check on
 * @returns A Boolean value which indicates if string consists of only emojis
 */
const hasOnlyEmojis = (str) => {
  const re = /^\p{Emoji}+$/u;
  return re.test(str);
};
const sanitizeLink = (link) => {
  // TODO: needs more work
  if (link.trim().toLowerCase().startsWith('javascript:')) {
    return 'https://dyte.io';
  }
  return link;
};
/**
 * Formats a given name and returns **Participant** for unnamed participants.
 * @param name Name of participant
 * @returns Name to use in the UI
 */
const formatName = (name) => {
  name = name.trim();
  if (name === '')
    return 'Participant';
  return name;
};




/***/ })

};
;