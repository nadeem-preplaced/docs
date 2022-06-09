"use strict";
exports.id = 324;
exports.ids = [324];
exports.modules = {

/***/ 91399:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dyte_peers_audio": () => (/* binding */ DytePeersAudio)
/* harmony export */ });
/* harmony import */ var _index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13441);
/* harmony import */ var _logger_5472d03c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88876);
/* harmony import */ var _index_a651ed73_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10670);




/**
 * Handles audio from peers in a meeting
 */
class DyteAudio {
  constructor() {
    this.audio = document.createElement('audio');
    this.audio.autoplay = true;
    this.audioStream = new MediaStream();
    this.audio.srcObject = this.audioStream;
    this.audioTracks = [];
  }
  addTrack(id, track) {
    if (!this.audioTracks.some((a) => a.id === id)) {
      this.audioTracks.push({ id, track });
      this.audioStream.addTrack(track);
      this.play();
    }
  }
  removeTrack(id) {
    const track = this.audioTracks.find((a) => a.id === id);
    if (track != null) {
      this.audioStream.removeTrack(track.track);
      this.audioTracks = this.audioTracks.filter((a) => a.id !== id);
    }
  }
  async play() {
    var _a;
    this.audio.srcObject = this.audioStream;
    await ((_a = this.audio.play()) === null || _a === void 0 ? void 0 : _a.catch((err) => {
      if (err.name === 'NotAllowedError') {
        if (this._onError != null) {
          this._onError();
        }
      }
      else if (err.name !== 'AbortError') {
        _logger_5472d03c_js__WEBPACK_IMPORTED_MODULE_1__.l.error('[dyte-audio] play() error\n', err);
      }
    }));
  }
  async setDevice(id) {
    var _a, _b, _c;
    await ((_c = (_b = (_a = this.audio).setSinkId) === null || _b === void 0 ? void 0 : _b.call(_a, id)) === null || _c === void 0 ? void 0 : _c.catch((err) => {
      _logger_5472d03c_js__WEBPACK_IMPORTED_MODULE_1__.l.error('[dyte-audio] setSinkId() error\n', err);
    }));
  }
  onError(onError) {
    this._onError = onError;
  }
}

const dytePeersAudioCss = ":host{display:block}.overlay{position:fixed;top:var(--dyte-space-0, 0px);right:var(--dyte-space-0, 0px);bottom:var(--dyte-space-0, 0px);left:var(--dyte-space-0, 0px);display:flex;align-items:center;justify-content:center;padding-left:var(--dyte-space-4, 16px);padding-right:var(--dyte-space-4, 16px);background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / 0.5);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px)}.overlay .modal{width:100%;max-width:var(--dyte-space-96, 384px);padding:var(--dyte-space-4, 16px);border-radius:var(--dyte-border-radius-md, 8px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-1000, 8 8 8) / var(--tw-bg-opacity))}.overlay .modal h3{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px);font-size:24px;font-weight:500}.overlay .modal p{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-6, 24px)}.overlay .modal dyte-button{width:100%}";

const DytePeersAudio = class {
  constructor(hostRef) {
    (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    /** Language */
    this.t = (0,_index_a651ed73_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.playStatus = 'playing';
  }
  componentDidLoad() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    if (this.meeting == null)
      return;
    this.audioUpdateListener &&
      this.meeting.participants.active.removeListener('audioUpdate', this.audioUpdateListener);
    this.screenShareUpdateListener &&
      this.meeting.participants.joined.removeListener('screenShareUpdate', this.screenShareUpdateListener);
    this.participantLeftListener &&
      this.meeting.participants.joined.removeListener('participantLeft', this.participantLeftListener);
    this.deviceUpdateListener &&
      this.meeting.self.removeListener('deviceUpdate', this.deviceUpdateListener);
  }
  async meetingChanged(meeting) {
    if (meeting != null) {
      this.audio = new DyteAudio();
      this.audio.onError(() => {
        this.playStatus = 'aborted';
      });
      this.audio.play();
      const currentDevices = meeting.self.getCurrentDevices();
      if (currentDevices.speaker != null) {
        await this.audio.setDevice(currentDevices.speaker.deviceId);
      }
      this.audioUpdateListener = ({ id, audioEnabled, audioTrack }) => {
        const audioId = `audio-${id}`;
        if (audioEnabled && audioTrack != null) {
          this.audio.addTrack(audioId, audioTrack);
        }
        else {
          this.audio.removeTrack(audioId);
        }
      };
      {
        const participants = meeting.participants.active.toArray();
        for (const participant of participants) {
          this.audioUpdateListener(participant);
        }
      }
      this.participantLeftListener = ({ id }) => {
        this.audio.removeTrack(`audio-${id}`);
        this.audio.removeTrack(`screenshare-${id}`);
      };
      this.screenShareUpdateListener = ({ id, screenShareEnabled, screenShareTracks }) => {
        const audioId = `screenshare-${id}`;
        if (screenShareEnabled && screenShareTracks.audio != null) {
          this.audio.addTrack(audioId, screenShareTracks.audio);
        }
        else {
          this.audio.removeTrack(audioId);
        }
      };
      this.deviceUpdateListener = ({ device, preview }) => {
        if (preview)
          return;
        if (device.kind === 'audiooutput') {
          this.audio.setDevice(device.deviceId);
        }
      };
      meeting.participants.active.addListener('audioUpdate', this.audioUpdateListener);
      meeting.participants.joined.addListener('screenShareUpdate', this.screenShareUpdateListener);
      meeting.participants.joined.addListener('participantLeft', this.participantLeftListener);
      meeting.self.addListener('deviceUpdate', this.deviceUpdateListener);
    }
  }
  render() {
    return ((0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.H, null, this.playStatus === 'aborted' && ((0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "overlay" }, (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("div", { class: "modal" }, (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("h3", null, this.t('Allow Audio Playback')), (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("p", null, this.t('In order to play audio properly on your device, click the button below')), (0,_index_da7bf46b_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-button", { onClick: () => {
        this.audio.play();
        this.playStatus = 'playing';
      }, title: this.t('Play Audio') }, this.t('Play Audio')))))));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DytePeersAudio.style = dytePeersAudioCss;




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

/***/ 88876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ loglevel)
/* harmony export */ });
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire();
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var loglevel = createCommonjsModule(function (module) {
/*
* loglevel - https://github.com/pimterry/loglevel
*
* Copyright (c) 2013 Tim Perry
* Licensed under the MIT license.
*/
(function (root, definition) {
    if (module.exports) {
        module.exports = definition();
    } else {
        root.log = definition();
    }
}(commonjsGlobal, function () {

    // Slightly dubious tricks to cut down minimized file size
    var noop = function() {};
    var undefinedType = "undefined";
    var isIE = (typeof window !== undefinedType) && (typeof window.navigator !== undefinedType) && (
        /Trident\/|MSIE /.test(window.navigator.userAgent)
    );

    var logMethods = [
        "trace",
        "debug",
        "info",
        "warn",
        "error"
    ];

    // Cross-browser bind equivalent that works at least back to IE6
    function bindMethod(obj, methodName) {
        var method = obj[methodName];
        if (typeof method.bind === 'function') {
            return method.bind(obj);
        } else {
            try {
                return Function.prototype.bind.call(method, obj);
            } catch (e) {
                // Missing bind shim or IE8 + Modernizr, fallback to wrapping
                return function() {
                    return Function.prototype.apply.apply(method, [obj, arguments]);
                };
            }
        }
    }

    // Trace() doesn't print the message in IE, so for that case we need to wrap it
    function traceForIE() {
        if (console.log) {
            if (console.log.apply) {
                console.log.apply(console, arguments);
            } else {
                // In old IE, native console methods themselves don't have apply().
                Function.prototype.apply.apply(console.log, [console, arguments]);
            }
        }
        if (console.trace) console.trace();
    }

    // Build the best logging method possible for this env
    // Wherever possible we want to bind, not wrap, to preserve stack traces
    function realMethod(methodName) {
        if (methodName === 'debug') {
            methodName = 'log';
        }

        if (typeof console === undefinedType) {
            return false; // No method possible, for now - fixed later by enableLoggingWhenConsoleArrives
        } else if (methodName === 'trace' && isIE) {
            return traceForIE;
        } else if (console[methodName] !== undefined) {
            return bindMethod(console, methodName);
        } else if (console.log !== undefined) {
            return bindMethod(console, 'log');
        } else {
            return noop;
        }
    }

    // These private functions always need `this` to be set properly

    function replaceLoggingMethods(level, loggerName) {
        /*jshint validthis:true */
        for (var i = 0; i < logMethods.length; i++) {
            var methodName = logMethods[i];
            this[methodName] = (i < level) ?
                noop :
                this.methodFactory(methodName, level, loggerName);
        }

        // Define log.log as an alias for log.debug
        this.log = this.debug;
    }

    // In old IE versions, the console isn't present until you first open it.
    // We build realMethod() replacements here that regenerate logging methods
    function enableLoggingWhenConsoleArrives(methodName, level, loggerName) {
        return function () {
            if (typeof console !== undefinedType) {
                replaceLoggingMethods.call(this, level, loggerName);
                this[methodName].apply(this, arguments);
            }
        };
    }

    // By default, we use closely bound real methods wherever possible, and
    // otherwise we wait for a console to appear, and then try again.
    function defaultMethodFactory(methodName, level, loggerName) {
        /*jshint validthis:true */
        return realMethod(methodName) ||
               enableLoggingWhenConsoleArrives.apply(this, arguments);
    }

    function Logger(name, defaultLevel, factory) {
      var self = this;
      var currentLevel;
      defaultLevel = defaultLevel == null ? "WARN" : defaultLevel;

      var storageKey = "loglevel";
      if (typeof name === "string") {
        storageKey += ":" + name;
      } else if (typeof name === "symbol") {
        storageKey = undefined;
      }

      function persistLevelIfPossible(levelNum) {
          var levelName = (logMethods[levelNum] || 'silent').toUpperCase();

          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage[storageKey] = levelName;
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=" + levelName + ";";
          } catch (ignore) {}
      }

      function getPersistedLevel() {
          var storedLevel;

          if (typeof window === undefinedType || !storageKey) return;

          try {
              storedLevel = window.localStorage[storageKey];
          } catch (ignore) {}

          // Fallback to cookies if local storage gives us nothing
          if (typeof storedLevel === undefinedType) {
              try {
                  var cookie = window.document.cookie;
                  var location = cookie.indexOf(
                      encodeURIComponent(storageKey) + "=");
                  if (location !== -1) {
                      storedLevel = /^([^;]+)/.exec(cookie.slice(location))[1];
                  }
              } catch (ignore) {}
          }

          // If the stored level is not valid, treat it as if nothing was stored.
          if (self.levels[storedLevel] === undefined) {
              storedLevel = undefined;
          }

          return storedLevel;
      }

      function clearPersistedLevel() {
          if (typeof window === undefinedType || !storageKey) return;

          // Use localStorage if available
          try {
              window.localStorage.removeItem(storageKey);
              return;
          } catch (ignore) {}

          // Use session cookie as fallback
          try {
              window.document.cookie =
                encodeURIComponent(storageKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch (ignore) {}
      }

      /*
       *
       * Public logger API - see https://github.com/pimterry/loglevel for details
       *
       */

      self.name = name;

      self.levels = { "TRACE": 0, "DEBUG": 1, "INFO": 2, "WARN": 3,
          "ERROR": 4, "SILENT": 5};

      self.methodFactory = factory || defaultMethodFactory;

      self.getLevel = function () {
          return currentLevel;
      };

      self.setLevel = function (level, persist) {
          if (typeof level === "string" && self.levels[level.toUpperCase()] !== undefined) {
              level = self.levels[level.toUpperCase()];
          }
          if (typeof level === "number" && level >= 0 && level <= self.levels.SILENT) {
              currentLevel = level;
              if (persist !== false) {  // defaults to true
                  persistLevelIfPossible(level);
              }
              replaceLoggingMethods.call(self, level, name);
              if (typeof console === undefinedType && level < self.levels.SILENT) {
                  return "No console available for logging";
              }
          } else {
              throw "log.setLevel() called with invalid level: " + level;
          }
      };

      self.setDefaultLevel = function (level) {
          defaultLevel = level;
          if (!getPersistedLevel()) {
              self.setLevel(level, false);
          }
      };

      self.resetLevel = function () {
          self.setLevel(defaultLevel, false);
          clearPersistedLevel();
      };

      self.enableAll = function(persist) {
          self.setLevel(self.levels.TRACE, persist);
      };

      self.disableAll = function(persist) {
          self.setLevel(self.levels.SILENT, persist);
      };

      // Initialize with the right level
      var initialLevel = getPersistedLevel();
      if (initialLevel == null) {
          initialLevel = defaultLevel;
      }
      self.setLevel(initialLevel, false);
    }

    /*
     *
     * Top-level API
     *
     */

    var defaultLogger = new Logger();

    var _loggersByName = {};
    defaultLogger.getLogger = function getLogger(name) {
        if ((typeof name !== "symbol" && typeof name !== "string") || name === "") {
          throw new TypeError("You must supply a name when creating a logger.");
        }

        var logger = _loggersByName[name];
        if (!logger) {
          logger = _loggersByName[name] = new Logger(
            name, defaultLogger.getLevel(), defaultLogger.methodFactory);
        }
        return logger;
    };

    // Grab the current global log variable in case of overwrite
    var _log = (typeof window !== undefinedType) ? window.log : undefined;
    defaultLogger.noConflict = function() {
        if (typeof window !== undefinedType &&
               window.log === defaultLogger) {
            window.log = _log;
        }

        return defaultLogger;
    };

    defaultLogger.getLoggers = function getLoggers() {
        return _loggersByName;
    };

    // ES6 default export, for compatibility
    defaultLogger['default'] = defaultLogger;

    return defaultLogger;
}));
});

loglevel.enableAll();




/***/ })

};
;