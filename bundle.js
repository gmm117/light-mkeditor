/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _public_index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony import */ var _public_index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_AppLogo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var _img_AppLogo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_AppLogo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_Hongs_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18);
/* harmony import */ var _img_Hongs_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_Hongs_png__WEBPACK_IMPORTED_MODULE_3__);




new _main__WEBPACK_IMPORTED_MODULE_0__["default"]();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return main; });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var main =
/*#__PURE__*/
function () {
  function main() {
    _classCallCheck(this, main);

    this.that = this;
    this.preview = null;
    this.editor = null;
    this.initialize();
  }

  _createClass(main, [{
    key: "initialize",
    value: function initialize() {
      this.editor = document.getElementById('editor');
      this.preview = document.getElementById('preview');
      this.editor.focus();

      if (this.editor !== undefined && this.preview !== undefined) {
        var eventType = /Trident/.test(navigator.userAgent) ? 'textinput' : 'input';
        this.editor.addEventListener(eventType, this.updateEditChange.bind(this));
        this.initializeButton();
        this.updateEditText(_util__WEBPACK_IMPORTED_MODULE_1__["markInitText"]);
        this.updatePreview(_util__WEBPACK_IMPORTED_MODULE_1__["markInitText"]);
      }
    }
  }, {
    key: "initializeButton",
    value: function initializeButton() {
      var _this = this;

      var bold = document.getElementById('Bold');

      if (bold !== undefined) {
        bold.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["boldExam"]);
        });
      }

      var italic = document.getElementById('italic');

      if (italic !== undefined) {
        italic.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["italicExam"]);
        });
      }

      var H1 = document.getElementById('H1');

      if (H1 !== undefined) {
        H1.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["H1Exam"]);
        });
      }

      var H2 = document.getElementById('H2');

      if (H2 !== undefined) {
        H2.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["H2Exam"]);
        });
      }

      var H3 = document.getElementById('H3');

      if (H3 !== undefined) {
        H3.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["H3Exam"]);
        });
      }

      var Bullet = document.getElementById('bullet');

      if (Bullet !== undefined) {
        Bullet.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["BulletExam"]);
        });
      }

      var Numbering = document.getElementById('numbering');

      if (Numbering !== undefined) {
        Numbering.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["NumberingExam"]);
        });
      }

      var Image = document.getElementById('image');

      if (Image !== undefined) {
        Image.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["ImageExam"]);
        });
      }

      var Link = document.getElementById('link');

      if (Link !== undefined) {
        Link.addEventListener('click', function (e) {
          _this.updateMarkDownButton(_util__WEBPACK_IMPORTED_MODULE_1__["LinkExam"]);
        });
      }
    }
  }, {
    key: "updateMarkDownButton",
    value: function updateMarkDownButton(buttonExam) {
      var _getCaretPosition = Object(_util__WEBPACK_IMPORTED_MODULE_1__["getCaretPosition"])(this.editor),
          line = _getCaretPosition.line,
          curPos = _getCaretPosition.curPos,
          totPos = _getCaretPosition.totPos,
          isEndHtmlTag = _getCaretPosition.isEndHtmlTag;

      var text,
          editText = '';

      for (var node in this.editor.childNodes) {
        if (this.editor.childNodes[node].nodeType === 3) {
          editText += this.editor.childNodes[node].textContent;
        } else if (this.editor.childNodes[node].nodeType === 1) {
          // br태그일경우
          editText += '\n';
        }
      }

      text = editText.substr(0, totPos) + buttonExam + editText.substr(totPos);
      this.updateEditText(text);
      this.updatePreview(text);
      Object(_util__WEBPACK_IMPORTED_MODULE_1__["setCaretPosition"])(this.editor, isEndHtmlTag === true ? line + 1 : line, curPos + buttonExam.length);
      this.editor.focus();
    }
  }, {
    key: "updateEditText",
    value: function updateEditText(text) {
      this.editor.innerText = text;
    }
  }, {
    key: "updatePreview",
    value: function updatePreview(text) {
      this.preview.innerHTML = marked__WEBPACK_IMPORTED_MODULE_0___default()(text);
    }
  }, {
    key: "updateEditChange",
    value: function updateEditChange(e) {
      this.updatePreview(e.target.innerText);
    }
  }]);

  return main;
}();


window["main"] = main;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Lexer = __webpack_require__(3);

var Parser = __webpack_require__(7);

var Renderer = __webpack_require__(8);

var TextRenderer = __webpack_require__(11);

var InlineLexer = __webpack_require__(10);

var Slugger = __webpack_require__(9);

var _require = __webpack_require__(6),
    merge = _require.merge,
    checkSanitizeDeprecation = _require.checkSanitizeDeprecation,
    escape = _require.escape;

var _require2 = __webpack_require__(4),
    getDefaults = _require2.getDefaults,
    changeDefaults = _require2.changeDefaults,
    defaults = _require2.defaults;
/**
 * Marked
 */


function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }

  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
  }

  if (callback || typeof opt === 'function') {
    var _ret = function () {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});
      checkSanitizeDeprecation(opt);
      var highlight = opt.highlight;
      var tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return {
          v: callback(e)
        };
      }

      pending = tokens.length;

      var done = function done(err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return {
          v: done()
        };
      }

      delete opt.highlight;
      if (!pending) return {
        v: done()
      };

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== 'code') {
            return --pending || done();
          }

          return highlight(token.text, token.lang, function (err, code) {
            if (err) return done(err);

            if (code == null || code === token.text) {
              return --pending || done();
            }

            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return {
        v: void 0
      };
    }();

    if (_typeof(_ret) === "object") return _ret.v;
  }

  try {
    opt = merge({}, marked.defaults, opt || {});
    checkSanitizeDeprecation(opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';

    if ((opt || marked.defaults).silent) {
      return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
    }

    throw e;
  }
}
/**
 * Options
 */


marked.options = marked.setOptions = function (opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;
marked.defaults = defaults;
/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;
marked.Slugger = Slugger;
marked.parse = marked;
module.exports = marked;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(4),
    defaults = _require.defaults;

var _require2 = __webpack_require__(5),
    block = _require2.block;

var _require3 = __webpack_require__(6),
    rtrim = _require3.rtrim,
    splitCells = _require3.splitCells,
    escape = _require3.escape;
/**
 * Block Lexer
 */


module.exports =
/*#__PURE__*/
function () {
  function Lexer(options) {
    _classCallCheck(this, Lexer);

    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.rules = block.normal;

    if (this.options.pedantic) {
      this.rules = block.pedantic;
    } else if (this.options.gfm) {
      this.rules = block.gfm;
    }
  }
  /**
   * Expose Block Rules
   */


  _createClass(Lexer, [{
    key: "lex",

    /**
     * Preprocessing
     */
    value: function lex(src) {
      src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ');
      return this.token(src, true);
    }
  }, {
    key: "token",

    /**
     * Lexing
     */
    value: function token(src, top) {
      src = src.replace(/^ +$/gm, '');
      var next, loose, cap, bull, b, item, listStart, listItems, t, space, i, tag, l, isordered, istask, ischecked;

      while (src) {
        // newline
        if (cap = this.rules.newline.exec(src)) {
          src = src.substring(cap[0].length);

          if (cap[0].length > 1) {
            this.tokens.push({
              type: 'space'
            });
          }
        } // code


        if (cap = this.rules.code.exec(src)) {
          var lastToken = this.tokens[this.tokens.length - 1];
          src = src.substring(cap[0].length); // An indented code block cannot interrupt a paragraph.

          if (lastToken && lastToken.type === 'paragraph') {
            lastToken.text += '\n' + cap[0].trimRight();
          } else {
            cap = cap[0].replace(/^ {4}/gm, '');
            this.tokens.push({
              type: 'code',
              codeBlockStyle: 'indented',
              text: !this.options.pedantic ? rtrim(cap, '\n') : cap
            });
          }

          continue;
        } // fences


        if (cap = this.rules.fences.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'code',
            lang: cap[2] ? cap[2].trim() : cap[2],
            text: cap[3] || ''
          });
          continue;
        } // heading


        if (cap = this.rules.heading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[1].length,
            text: cap[2]
          });
          continue;
        } // table no leading pipe (gfm)


        if (cap = this.rules.nptable.exec(src)) {
          item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            src = src.substring(cap[0].length);

            for (i = 0; i < item.align.length; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = splitCells(item.cells[i], item.header.length);
            }

            this.tokens.push(item);
            continue;
          }
        } // hr


        if (cap = this.rules.hr.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'hr'
          });
          continue;
        } // blockquote


        if (cap = this.rules.blockquote.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'blockquote_start'
          });
          cap = cap[0].replace(/^ *> ?/gm, ''); // Pass `top` to keep the current
          // "toplevel" state. This is exactly
          // how markdown.pl works.

          this.token(cap, top);
          this.tokens.push({
            type: 'blockquote_end'
          });
          continue;
        } // list


        if (cap = this.rules.list.exec(src)) {
          src = src.substring(cap[0].length);
          bull = cap[2];
          isordered = bull.length > 1;
          listStart = {
            type: 'list_start',
            ordered: isordered,
            start: isordered ? +bull : '',
            loose: false
          };
          this.tokens.push(listStart); // Get each top-level item.

          cap = cap[0].match(this.rules.item);
          listItems = [];
          next = false;
          l = cap.length;
          i = 0;

          for (; i < l; i++) {
            item = cap[i]; // Remove the list item's bullet
            // so it is seen as the next token.

            space = item.length;
            item = item.replace(/^ *([*+-]|\d+\.) */, ''); // Outdent whatever the
            // list item contains. Hacky.

            if (~item.indexOf('\n ')) {
              space -= item.length;
              item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
            } // Determine whether the next list item belongs here.
            // Backpedal if it does not belong in this list.


            if (i !== l - 1) {
              b = block.bullet.exec(cap[i + 1])[0];

              if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
                src = cap.slice(i + 1).join('\n') + src;
                i = l - 1;
              }
            } // Determine whether item is loose or not.
            // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
            // for discount behavior.


            loose = next || /\n\n(?!\s*$)/.test(item);

            if (i !== l - 1) {
              next = item.charAt(item.length - 1) === '\n';
              if (!loose) loose = next;
            }

            if (loose) {
              listStart.loose = true;
            } // Check for task list items


            istask = /^\[[ xX]\] /.test(item);
            ischecked = undefined;

            if (istask) {
              ischecked = item[1] !== ' ';
              item = item.replace(/^\[[ xX]\] +/, '');
            }

            t = {
              type: 'list_item_start',
              task: istask,
              checked: ischecked,
              loose: loose
            };
            listItems.push(t);
            this.tokens.push(t); // Recurse.

            this.token(item, false);
            this.tokens.push({
              type: 'list_item_end'
            });
          }

          if (listStart.loose) {
            l = listItems.length;
            i = 0;

            for (; i < l; i++) {
              listItems[i].loose = true;
            }
          }

          this.tokens.push({
            type: 'list_end'
          });
          continue;
        } // html


        if (cap = this.rules.html.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: this.options.sanitize ? 'paragraph' : 'html',
            pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
          });
          continue;
        } // def


        if (top && (cap = this.rules.def.exec(src))) {
          src = src.substring(cap[0].length);
          if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
          tag = cap[1].toLowerCase().replace(/\s+/g, ' ');

          if (!this.tokens.links[tag]) {
            this.tokens.links[tag] = {
              href: cap[2],
              title: cap[3]
            };
          }

          continue;
        } // table (gfm)


        if (cap = this.rules.table.exec(src)) {
          item = {
            type: 'table',
            header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
            align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
            cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
          };

          if (item.header.length === item.align.length) {
            src = src.substring(cap[0].length);

            for (i = 0; i < item.align.length; i++) {
              if (/^ *-+: *$/.test(item.align[i])) {
                item.align[i] = 'right';
              } else if (/^ *:-+: *$/.test(item.align[i])) {
                item.align[i] = 'center';
              } else if (/^ *:-+ *$/.test(item.align[i])) {
                item.align[i] = 'left';
              } else {
                item.align[i] = null;
              }
            }

            for (i = 0; i < item.cells.length; i++) {
              item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
            }

            this.tokens.push(item);
            continue;
          }
        } // lheading


        if (cap = this.rules.lheading.exec(src)) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'heading',
            depth: cap[2].charAt(0) === '=' ? 1 : 2,
            text: cap[1]
          });
          continue;
        } // top-level paragraph


        if (top && (cap = this.rules.paragraph.exec(src))) {
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'paragraph',
            text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
          });
          continue;
        } // text


        if (cap = this.rules.text.exec(src)) {
          // Top-level should never reach here.
          src = src.substring(cap[0].length);
          this.tokens.push({
            type: 'text',
            text: cap[0]
          });
          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return this.tokens;
    }
  }], [{
    key: "lex",

    /**
     * Static Lex Method
     */
    value: function lex(src, options) {
      var lexer = new Lexer(options);
      return lexer.lex(src);
    }
  }, {
    key: "rules",
    get: function get() {
      return block;
    }
  }]);

  return Lexer;
}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    xhtml: false
  };
}

function changeDefaults(newDefaults) {
  module.exports.defaults = newDefaults;
}

module.exports = {
  defaults: getDefaults(),
  getDefaults: getDefaults,
  changeDefaults: changeDefaults
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(6),
    noopTest = _require.noopTest,
    edit = _require.edit,
    merge = _require.merge;
/**
 * Block-Level Grammar
 */


var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: /^ {0,3}(`{3,}|~{3,})([^`~\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
  hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6}) +([^\n]*?)(?: +#+)? *(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: '^ {0,3}(?:' // optional indentation
  + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
  + '|comment[^\\n]*(\\n+|$)' // (2)
  + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
  + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
  + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
  + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
  + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
  + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
  + ')',
  def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
  nptable: noopTest,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}\.)/;
block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?-->/;
block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace('hr', block.hr).replace('heading', ' {0,3}#{1,6} +').replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
.replace('blockquote', ' {0,3}>').replace('fences', ' {0,3}(?:`{3,}|~{3,})[^`\\n]*\\n').replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
.replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)').replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
.getRegex();
block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);
/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
  table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
});
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
  + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
  fences: noopTest,
  // fences not supported
  paragraph: edit(block.normal._paragraph).replace('hr', block.hr).replace('heading', ' *#{1,6} *[^\n]').replace('lheading', block.lheading).replace('blockquote', ' {0,3}>').replace('|fences', '').replace('|list', '').replace('|html', '').getRegex()
});
/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
  + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
  + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
  + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
  + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
  // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
  nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
  strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
  em: /^_([^\s_])_(?!_)|^\*([^\s*<\[])\*(?!\*)|^_([^\s<][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_<][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s<"][\s\S]*?[^\s\*])\*(?!\*|[^\spunctuation])|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
}; // list of punctuation marks from common mark spec
// without ` and ] to workaround Rule 17 (inline code blocks/links)

inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
inline._label = /(?:\[[^\[\]]*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();
/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);
/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
});
/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^~+(?=\S)([\s\S]*?\S)~+/,
  text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
});
inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text).replace('\\b_', '\\b_| {2,}\\n').replace(/\{2,\}/g, '*').getRegex()
});
module.exports = {
  block: block,
  inline: inline
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Helpers
 */
var escapeTest = /[&<>"']/;
var escapeReplace = /[&<>"']/g;
var escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
var escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
var escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};

var getEscapeReplacement = function getEscapeReplacement(ch) {
  return escapeReplacements[ch];
};

function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

var unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

function unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, function (_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';

    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }

    return '';
  });
}

var caret = /(^|[^\[])\^/g;

function edit(regex, opt) {
  regex = regex.source || regex;
  opt = opt || '';
  var obj = {
    replace: function replace(name, val) {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: function getRegex() {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

var nonWordAndColonTest = /[^\w:]/g;
var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    var prot;

    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, '').toLowerCase();
    } catch (e) {
      return null;
    }

    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }

  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }

  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }

  return href;
}

var baseUrls = {};
var justDomain = /^[^:]+:\/*[^/]*$/;
var protocol = /^([^:]+:)[\s\S]*$/;
var domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }

  base = baseUrls[' ' + base];
  var relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }

    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }

    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

var noopTest = {
  exec: function noopTest() {}
};

function merge(obj) {
  var i = 1,
      target,
      key;

  for (; i < arguments.length; i++) {
    target = arguments[i];

    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  var row = tableRow.replace(/\|/g, function (match, offset, str) {
    var escaped = false,
        curr = offset;

    while (--curr >= 0 && str[curr] === '\\') {
      escaped = !escaped;
    }

    if (escaped) {
      // odd number of slashes means | is escaped
      // so we leave it alone
      return '|';
    } else {
      // add space before unescaped |
      return ' |';
    }
  }),
      cells = row.split(/ \|/);
  var i = 0;

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) {
      cells.push('');
    }
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }

  return cells;
} // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
// /c*$/ is vulnerable to REDOS.
// invert: Remove suffix of non-c chars instead. Default falsey.


function rtrim(str, c, invert) {
  var l = str.length;

  if (l === 0) {
    return '';
  } // Length of suffix matching the invert condition.


  var suffLen = 0; // Step left until we fail to match the invert condition.

  while (suffLen < l) {
    var currChar = str.charAt(l - suffLen - 1);

    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.substr(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }

  var l = str.length;
  var level = 0,
      i = 0;

  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;

      if (level < 0) {
        return i;
      }
    }
  }

  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

module.exports = {
  escape: escape,
  unescape: unescape,
  edit: edit,
  cleanUrl: cleanUrl,
  resolveUrl: resolveUrl,
  noopTest: noopTest,
  merge: merge,
  splitCells: splitCells,
  rtrim: rtrim,
  findClosingBracket: findClosingBracket,
  checkSanitizeDeprecation: checkSanitizeDeprecation
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer = __webpack_require__(8);

var Slugger = __webpack_require__(9);

var InlineLexer = __webpack_require__(10);

var TextRenderer = __webpack_require__(11);

var _require = __webpack_require__(4),
    defaults = _require.defaults;

var _require2 = __webpack_require__(6),
    merge = _require2.merge,
    unescape = _require2.unescape;
/**
 * Parsing & Compiling
 */


module.exports =
/*#__PURE__*/
function () {
  function Parser(options) {
    _classCallCheck(this, Parser);

    this.tokens = [];
    this.token = null;
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  _createClass(Parser, [{
    key: "parse",

    /**
     * Parse Loop
     */
    value: function parse(tokens) {
      this.inline = new InlineLexer(tokens.links, this.options); // use an InlineLexer with a TextRenderer to extract pure text

      this.inlineText = new InlineLexer(tokens.links, merge({}, this.options, {
        renderer: new TextRenderer()
      }));
      this.tokens = tokens.reverse();
      var out = '';

      while (this.next()) {
        out += this.tok();
      }

      return out;
    }
  }, {
    key: "next",

    /**
     * Next Token
     */
    value: function next() {
      this.token = this.tokens.pop();
      return this.token;
    }
  }, {
    key: "peek",

    /**
     * Preview Next Token
     */
    value: function peek() {
      return this.tokens[this.tokens.length - 1] || 0;
    }
  }, {
    key: "parseText",

    /**
     * Parse Text Tokens
     */
    value: function parseText() {
      var body = this.token.text;

      while (this.peek().type === 'text') {
        body += '\n' + this.next().text;
      }

      return this.inline.output(body);
    }
  }, {
    key: "tok",

    /**
     * Parse Current Token
     */
    value: function tok() {
      var body = '';

      switch (this.token.type) {
        case 'space':
          {
            return '';
          }

        case 'hr':
          {
            return this.renderer.hr();
          }

        case 'heading':
          {
            return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape(this.inlineText.output(this.token.text)), this.slugger);
          }

        case 'code':
          {
            return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
          }

        case 'table':
          {
            var header = '',
                i,
                row,
                cell,
                j; // header

            cell = '';

            for (i = 0; i < this.token.header.length; i++) {
              cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
                header: true,
                align: this.token.align[i]
              });
            }

            header += this.renderer.tablerow(cell);

            for (i = 0; i < this.token.cells.length; i++) {
              row = this.token.cells[i];
              cell = '';

              for (j = 0; j < row.length; j++) {
                cell += this.renderer.tablecell(this.inline.output(row[j]), {
                  header: false,
                  align: this.token.align[j]
                });
              }

              body += this.renderer.tablerow(cell);
            }

            return this.renderer.table(header, body);
          }

        case 'blockquote_start':
          {
            body = '';

            while (this.next().type !== 'blockquote_end') {
              body += this.tok();
            }

            return this.renderer.blockquote(body);
          }

        case 'list_start':
          {
            body = '';
            var ordered = this.token.ordered,
                start = this.token.start;

            while (this.next().type !== 'list_end') {
              body += this.tok();
            }

            return this.renderer.list(body, ordered, start);
          }

        case 'list_item_start':
          {
            body = '';
            var loose = this.token.loose;
            var checked = this.token.checked;
            var task = this.token.task;

            if (this.token.task) {
              if (loose) {
                if (this.peek().type === 'text') {
                  var nextToken = this.peek();
                  nextToken.text = this.renderer.checkbox(checked) + ' ' + nextToken.text;
                } else {
                  this.tokens.push({
                    type: 'text',
                    text: this.renderer.checkbox(checked)
                  });
                }
              } else {
                body += this.renderer.checkbox(checked);
              }
            }

            while (this.next().type !== 'list_item_end') {
              body += !loose && this.token.type === 'text' ? this.parseText() : this.tok();
            }

            return this.renderer.listitem(body, task, checked);
          }

        case 'html':
          {
            // TODO parse inline content if parameter markdown=1
            return this.renderer.html(this.token.text);
          }

        case 'paragraph':
          {
            return this.renderer.paragraph(this.inline.output(this.token.text));
          }

        case 'text':
          {
            return this.renderer.paragraph(this.parseText());
          }

        default:
          {
            var errMsg = 'Token with "' + this.token.type + '" type was not found.';

            if (this.options.silent) {
              console.log(errMsg);
            } else {
              throw new Error(errMsg);
            }
          }
      }
    }
  }], [{
    key: "parse",
    value: function parse(tokens, options) {
      var parser = new Parser(options);
      return parser.parse(tokens);
    }
  }]);

  return Parser;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(4),
    defaults = _require.defaults;

var _require2 = __webpack_require__(6),
    cleanUrl = _require2.cleanUrl,
    escape = _require2.escape;
/**
 * Renderer
 */


module.exports =
/*#__PURE__*/
function () {
  function Renderer(options) {
    _classCallCheck(this, Renderer);

    this.options = options || defaults;
  }

  _createClass(Renderer, [{
    key: "code",
    value: function code(_code, infostring, escaped) {
      var lang = (infostring || '').match(/\S*/)[0];

      if (this.options.highlight) {
        var out = this.options.highlight(_code, lang);

        if (out != null && out !== _code) {
          escaped = true;
          _code = out;
        }
      }

      if (!lang) {
        return '<pre><code>' + (escaped ? _code : escape(_code, true)) + '</code></pre>';
      }

      return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? _code : escape(_code, true)) + '</code></pre>\n';
    }
  }, {
    key: "blockquote",
    value: function blockquote(quote) {
      return '<blockquote>\n' + quote + '</blockquote>\n';
    }
  }, {
    key: "html",
    value: function html(_html) {
      return _html;
    }
  }, {
    key: "heading",
    value: function heading(text, level, raw, slugger) {
      if (this.options.headerIds) {
        return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
      } // ignore IDs


      return '<h' + level + '>' + text + '</h' + level + '>\n';
    }
  }, {
    key: "hr",
    value: function hr() {
      return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
    }
  }, {
    key: "list",
    value: function list(body, ordered, start) {
      var type = ordered ? 'ol' : 'ul',
          startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
      return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
    }
  }, {
    key: "listitem",
    value: function listitem(text) {
      return '<li>' + text + '</li>\n';
    }
  }, {
    key: "checkbox",
    value: function checkbox(checked) {
      return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
    }
  }, {
    key: "paragraph",
    value: function paragraph(text) {
      return '<p>' + text + '</p>\n';
    }
  }, {
    key: "table",
    value: function table(header, body) {
      if (body) body = '<tbody>' + body + '</tbody>';
      return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
    }
  }, {
    key: "tablerow",
    value: function tablerow(content) {
      return '<tr>\n' + content + '</tr>\n';
    }
  }, {
    key: "tablecell",
    value: function tablecell(content, flags) {
      var type = flags.header ? 'th' : 'td';
      var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
      return tag + content + '</' + type + '>\n';
    }
  }, {
    key: "strong",
    // span level renderer
    value: function strong(text) {
      return '<strong>' + text + '</strong>';
    }
  }, {
    key: "em",
    value: function em(text) {
      return '<em>' + text + '</em>';
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return '<code>' + text + '</code>';
    }
  }, {
    key: "br",
    value: function br() {
      return this.options.xhtml ? '<br/>' : '<br>';
    }
  }, {
    key: "del",
    value: function del(text) {
      return '<del>' + text + '</del>';
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<a href="' + escape(href) + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += '>' + text + '</a>';
      return out;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

      if (href === null) {
        return text;
      }

      var out = '<img src="' + href + '" alt="' + text + '"';

      if (title) {
        out += ' title="' + title + '"';
      }

      out += this.options.xhtml ? '/>' : '>';
      return out;
    }
  }, {
    key: "text",
    value: function text(_text) {
      return _text;
    }
  }]);

  return Renderer;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Slugger generates header id
 */
module.exports =
/*#__PURE__*/
function () {
  function Slugger() {
    _classCallCheck(this, Slugger);

    this.seen = {};
  }
  /**
   * Convert string to unique id
   */


  _createClass(Slugger, [{
    key: "slug",
    value: function slug(value) {
      var slug = value.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

      if (this.seen.hasOwnProperty(slug)) {
        var originalSlug = slug;

        do {
          this.seen[originalSlug]++;
          slug = originalSlug + '-' + this.seen[originalSlug];
        } while (this.seen.hasOwnProperty(slug));
      }

      this.seen[slug] = 0;
      return slug;
    }
  }]);

  return Slugger;
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Renderer = __webpack_require__(8);

var _require = __webpack_require__(4),
    defaults = _require.defaults;

var _require2 = __webpack_require__(5),
    inline = _require2.inline;

var _require3 = __webpack_require__(6),
    findClosingBracket = _require3.findClosingBracket,
    escape = _require3.escape;
/**
 * Inline Lexer & Compiler
 */


module.exports =
/*#__PURE__*/
function () {
  function InlineLexer(links, options) {
    _classCallCheck(this, InlineLexer);

    this.options = options || defaults;
    this.links = links;
    this.rules = inline.normal;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.pedantic) {
      this.rules = inline.pedantic;
    } else if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    }
  }
  /**
   * Expose Inline Rules
   */


  _createClass(InlineLexer, [{
    key: "output",

    /**
     * Lexing/Compiling
     */
    value: function output(src) {
      var out = '',
          link,
          text,
          href,
          title,
          cap,
          prevCapZero;

      while (src) {
        // escape
        if (cap = this.rules.escape.exec(src)) {
          src = src.substring(cap[0].length);
          out += escape(cap[1]);
          continue;
        } // tag


        if (cap = this.rules.tag.exec(src)) {
          if (!this.inLink && /^<a /i.test(cap[0])) {
            this.inLink = true;
          } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
            this.inLink = false;
          }

          if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.inRawBlock = true;
          } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
            this.inRawBlock = false;
          }

          src = src.substring(cap[0].length);
          out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
          continue;
        } // link


        if (cap = this.rules.link.exec(src)) {
          var lastParenIndex = findClosingBracket(cap[2], '()');

          if (lastParenIndex > -1) {
            var start = cap[0].indexOf('!') === 0 ? 5 : 4;
            var linkLen = start + cap[1].length + lastParenIndex;
            cap[2] = cap[2].substring(0, lastParenIndex);
            cap[0] = cap[0].substring(0, linkLen).trim();
            cap[3] = '';
          }

          src = src.substring(cap[0].length);
          this.inLink = true;
          href = cap[2];

          if (this.options.pedantic) {
            link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

            if (link) {
              href = link[1];
              title = link[3];
            } else {
              title = '';
            }
          } else {
            title = cap[3] ? cap[3].slice(1, -1) : '';
          }

          href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
          out += this.outputLink(cap, {
            href: InlineLexer.escapes(href),
            title: InlineLexer.escapes(title)
          });
          this.inLink = false;
          continue;
        } // reflink, nolink


        if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
          src = src.substring(cap[0].length);
          link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
          link = this.links[link.toLowerCase()];

          if (!link || !link.href) {
            out += cap[0].charAt(0);
            src = cap[0].substring(1) + src;
            continue;
          }

          this.inLink = true;
          out += this.outputLink(cap, link);
          this.inLink = false;
          continue;
        } // strong


        if (cap = this.rules.strong.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
          continue;
        } // em


        if (cap = this.rules.em.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
          continue;
        } // code


        if (cap = this.rules.code.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.codespan(escape(cap[2].trim(), true));
          continue;
        } // br


        if (cap = this.rules.br.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.br();
          continue;
        } // del (gfm)


        if (cap = this.rules.del.exec(src)) {
          src = src.substring(cap[0].length);
          out += this.renderer.del(this.output(cap[1]));
          continue;
        } // autolink


        if (cap = this.rules.autolink.exec(src)) {
          src = src.substring(cap[0].length);

          if (cap[2] === '@') {
            text = escape(this.mangle(cap[1]));
            href = 'mailto:' + text;
          } else {
            text = escape(cap[1]);
            href = text;
          }

          out += this.renderer.link(href, null, text);
          continue;
        } // url (gfm)


        if (!this.inLink && (cap = this.rules.url.exec(src))) {
          if (cap[2] === '@') {
            text = escape(cap[0]);
            href = 'mailto:' + text;
          } else {
            // do extended autolink path validation
            do {
              prevCapZero = cap[0];
              cap[0] = this.rules._backpedal.exec(cap[0])[0];
            } while (prevCapZero !== cap[0]);

            text = escape(cap[0]);

            if (cap[1] === 'www.') {
              href = 'http://' + text;
            } else {
              href = text;
            }
          }

          src = src.substring(cap[0].length);
          out += this.renderer.link(href, null, text);
          continue;
        } // text


        if (cap = this.rules.text.exec(src)) {
          src = src.substring(cap[0].length);

          if (this.inRawBlock) {
            out += this.renderer.text(this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]);
          } else {
            out += this.renderer.text(escape(this.smartypants(cap[0])));
          }

          continue;
        }

        if (src) {
          throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
        }
      }

      return out;
    }
  }, {
    key: "outputLink",

    /**
     * Compile Link
     */
    value: function outputLink(cap, link) {
      var href = link.href,
          title = link.title ? escape(link.title) : null;
      return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
    }
    /**
     * Smartypants Transformations
     */

  }, {
    key: "smartypants",
    value: function smartypants(text) {
      if (!this.options.smartypants) return text;
      return text // em-dashes
      .replace(/---/g, "\u2014") // en-dashes
      .replace(/--/g, "\u2013") // opening singles
      .replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018") // closing singles & apostrophes
      .replace(/'/g, "\u2019") // opening doubles
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C") // closing doubles
      .replace(/"/g, "\u201D") // ellipses
      .replace(/\.{3}/g, "\u2026");
    }
    /**
     * Mangle Links
     */

  }, {
    key: "mangle",
    value: function mangle(text) {
      if (!this.options.mangle) return text;
      var l = text.length;
      var out = '',
          i = 0,
          ch;

      for (; i < l; i++) {
        ch = text.charCodeAt(i);

        if (Math.random() > 0.5) {
          ch = 'x' + ch.toString(16);
        }

        out += '&#' + ch + ';';
      }

      return out;
    }
  }], [{
    key: "output",

    /**
     * Static Lexing/Compiling Method
     */
    value: function output(src, links, options) {
      var inline = new InlineLexer(links, options);
      return inline.output(src);
    }
  }, {
    key: "escapes",
    value: function escapes(text) {
      return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
    }
  }, {
    key: "rules",
    get: function get() {
      return inline;
    }
  }]);

  return InlineLexer;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * TextRenderer
 * returns only the textual part of the token
 */
module.exports =
/*#__PURE__*/
function () {
  function TextRenderer() {
    _classCallCheck(this, TextRenderer);
  }

  _createClass(TextRenderer, [{
    key: "strong",
    // no need for block level renderers
    value: function strong(text) {
      return text;
    }
  }, {
    key: "em",
    value: function em(text) {
      return text;
    }
  }, {
    key: "codespan",
    value: function codespan(text) {
      return text;
    }
  }, {
    key: "del",
    value: function del(text) {
      return text;
    }
  }, {
    key: "text",
    value: function text(_text) {
      return _text;
    }
  }, {
    key: "link",
    value: function link(href, title, text) {
      return '' + text;
    }
  }, {
    key: "image",
    value: function image(href, title, text) {
      return '' + text;
    }
  }, {
    key: "br",
    value: function br() {
      return '';
    }
  }]);

  return TextRenderer;
}();

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "markInitText", function() { return markInitText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boldExam", function() { return boldExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "italicExam", function() { return italicExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1Exam", function() { return H1Exam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2Exam", function() { return H2Exam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3Exam", function() { return H3Exam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BulletExam", function() { return BulletExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NumberingExam", function() { return NumberingExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageExam", function() { return ImageExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkExam", function() { return LinkExam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaretPosition", function() { return getCaretPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCaretPosition", function() { return setCaretPosition; });
var markInitText = "\nType **Hong's Markdown** here.\n\n---\n# Headline 1\n## Headline 2\n### Headline 3 \n#### Headline 4 ####\n##### Headline 5 #####\n###### Headline 6 ######\n\n---\n*Emphasize* _emphasize_\n\n---\n**Strong** __Strong__\n\n---    \nA [Hong's Blog](https://gmm117.github.io/ \"Hong's Blog\").\n\nSome text with [Google][1] and\nanother [Naver][2].\n\n[1]: https://www.google.co.kr// \"google\"\n[2]: https://www.naver.com// \"naver\"\n\n---\nLogo: ![Alt](./img/Hongs.png \"Title\")\n\n---\nLogo: ![Alt][3]\n\n[3]: ./img/Hongs.png \"Title\"\n\n---\nLinked logo: [![alt text](./img/Hongs.png)](https://gmm117.github.io/portfolio/ \"Title\")\n\n---\n* Item\n* Item\n- Item\n- Item\n\n---\n1. Item\n2. Item\n\n---\n1. Item\n2. Item\n    * Mixed\n    * Mixed  \n3. Item\n\n---\n> Quoted text.\n> > Quoted quote.\n\n> * Quoted \n> * List\n\n---\n`This is code`\n\n~~~~\nThis is a \npiece of code \nin a block\n~~~~\n\n```\nThis too\n```\n\n```css\n#button {\n    border: none;\n}\n```\n";
var boldExam = " **Strong** ";
var italicExam = " *Emphasize* ";
var H1Exam = " # Headline 1 ";
var H2Exam = " ## Headline 2 ";
var H3Exam = " ### Headline 3 ";
var BulletExam = " * Item ";
var NumberingExam = " 1. Item ";
var ImageExam = " ![Alt Text](link \"Title\")";
var LinkExam = " [Title](link)";

function getCaretPosition(node) {
  var range = window.getSelection().getRangeAt(0),
      preCaretRange = range.cloneRange(),
      rangeCount = 0,
      tmp = document.createElement("div"),
      startOffset = 0,
      isEndHtmlTag = false;
  preCaretRange.selectNodeContents(node);
  preCaretRange.setEnd(range.endContainer, range.endOffset);
  tmp.appendChild(preCaretRange.cloneContents());
  var childNodes = tmp.childNodes;

  for (var i = 0; i < childNodes.length; i++) {
    if (childNodes[i].outerHTML) {
      rangeCount += childNodes[i].outerHTML.replace(/<br>|<br\/>|<br \/>/g, ' ').length;
      startOffset = 0;
      isEndHtmlTag = true;
    } else if (childNodes[i].nodeType == 3) {
      rangeCount += childNodes[i].textContent.length;
      startOffset = range.startOffset;
      isEndHtmlTag = false;
    }
  }

  return {
    curPos: startOffset,
    totPos: rangeCount,
    line: i === 0 ? i : i - 1,
    isEndHtmlTag: isEndHtmlTag
  };
}

function setCaretPosition(node, line, pos) {
  var range = document.createRange();
  var sel = window.getSelection();
  range.setStart(node.childNodes[line], pos);
  range.collapse(true);
  sel.removeAllRanges();
  sel.addRange(range);
}




/***/ }),
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/AppLogo.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./img/Hongs.png";

/***/ })
/******/ ]);