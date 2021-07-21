// ==UserScript==
        // @name         敏感词匹配
        // @namespace    http://mail.ugreen.com/
        // @version      0.1
        // @description  try to take over the world!
        // @author       You
        // @match        http://mail.ugreen.com/cgi-bin/frame_html*
        // @match        https://exmail.qq.com/cgi-bin/frame_html*
        // @icon         https://www.google.com/s2/favicons?domain=tampermonkey.net
        // @grant        none
        // ==/UserScript==
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config.js":
/*!***********************!*\
  !*** ./src/config.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keywords\": () => (/* binding */ keywords)\n/* harmony export */ });\n// 初始化插件\nvar ar = ['مراجعة', 'نجمة', 'معدل', 'سلبي', 'إيجابي', 'إزالة', 'حذف', 'تغيير', 'تتغير', 'تحديث', 'تعديل', 'تخلص من', 'خبرة التسوق', 'ردود الفعل', 'موقع الكتروني', 'حلقة الوصل', 'شكرا', 'شكرا لكم', 'إذا كنت بحاجة إلى أي مساعدة أخرى، فلا تتردد في الاتصال بنا', 'رقم التعريف الخاص بالطلب', 'عنوان', 'موقعك', 'خصم', 'ترقية وظيفية', 'السعر'];\nvar de = ['Bewertung', 'Sternen', 'Rezension', 'Comment', 'Kommentar', 'Negativ', 'Positiv', 'Schlecht', 'Gut', 'Entfernen', 'Löschen', 'Veränderung', 'Aktualisieren', 'Bearbeiten', 'Beseitigen, abschütteln', 'Kauffserfahrungen', 'Feedback', 'www.', 'Webseite', 'Verknüpfung', 'Danke, vielen dank, dankschön, ', 'Wenn Sie andere Hilfe brauchen, kontaktieren Sie bitte uns, werden wir Ihnen helfen. ', 'Bestellnummer', 'sku', 'Asin', 'Adresse', 'Ort', 'Rabatt', 'Coupon', 'Gutschein', 'Beförderung', 'Preis', 'herunterladen'];\nvar fr = ['Commentaire', 'Évaluation', 'Avis', 'Étoile', 'Taux', 'Négatif', 'Positif', 'Mauvais', 'Bon', 'Retirer', 'Changer', 'Renouveller', 'Mettre à jour', 'Éditer', 'Expérience d\\'achat', 'Feedback', 'www.', 'Site', 'Lien', 'Merci', 'Je vous remercie', 'si vous avez besoin d\\'une autre aide, n\\'hésitez pas à nous contacter', 'numéro de commande', 'sku', 'Asin', 'Adresse', 'Emplacement', 'Remise', 'Promotion', 'Code', 'Prix', 'Télécharger'];\nvar nl = ['Recensie', 'Ster', 'Klantenrecensies', 'Beoordeling', 'Negatief', 'Positief', 'Slecht', 'Verwijderen', 'Verandering', 'Bijwerken', 'Bewerk', 'Van afkomen', 'Koopervaring', 'terugkoppeling', 'www.', 'Website', 'Koppeling', 'bedankt', 'dank je', 'Als u nog andere hulp nodig heeft, neem dan gerust contact met ons op', 'Order ID', 'sku', 'Asin', 'Adres', 'Plaats', 'Korting', 'Promotie', 'Prijs', 'downloaden'];\nvar ja = ['レビュー', '評価', '星', '評定', '評点付け', 'ネガティブ', 'ポジティブ', '悪い', '低い', '削除', 'デリート', '交換', 'チェンジ', '更新', '修正', 'アップデート', '編集', 'エディット', '取り除く', 'ショッピング体験', 'フィードバック', 'www.', '注文ID', '注文番号', 'Sku ', 'Asin', '住所', 'アドレス', '割引', '値引き', 'ディスカウント', '販促', '販売促進', 'プロモーション', '値段', '価格', '保証'];\nvar sv = ['Recension', 'Stjärna', 'Betygsätta', 'Betyg', 'Negativ', 'Positiv', 'Dålig', 'Avlägsna', 'Radera', 'Förändra', 'Uppdatering', 'Redigera', 'Göra sig av med', 'Shoppingupplevelse', 'feed-back', 'www.', 'Hemsida', 'Länk', 'tack', 'tack', 'om du behöver någon annan hjälp är du välkommen att kontakta oss', 'Beställnings-ID', 'sku', 'Asin', 'Adress', 'Plats', 'Rabatt', 'Befordran', 'Pris', 'ladda ner'];\nvar es = ['review', 'reseña', 'Estrella', 'Ratio', 'Puntuación', 'Negativo', 'Positivo', 'Malo', 'Quitar', 'Eliminar', 'Cambiar', 'Actualizar', 'Editar', 'Quitar', 'Experiencia de compra', 'feedback', 'Valoración', 'www.', 'Sitio web', 'Enlace', 'Gracias', 'gracias', 'Si necesita alguna ayuda, no dude en ponerse en contacto con nosotros.', 'ID del pedido', 'sku', 'Asin', 'Dirección', 'Ubicación', 'Descuento', 'Promoción', 'Precio', 'descargar'];\nvar it = ['Recensione', 'Stella', 'Vota', 'Valutazione', 'Negativo', 'Positivo', 'Male', 'Rimuovere', 'Elimina', 'Modificare', 'Aggiornare', 'correggere', 'Liberarsi di', 'Esperienza di acquisto', 'feedback', 'www.', 'Sito web', 'Link', 'Grazie', 'grazie', 'se hai bisogno di altro aiuto, non esitare a contattarci', 'ID ordine', 'sku', 'Asin', 'Indirizzo', 'Posizione', 'Sconto', 'Promozione', 'Prezzo', 'Scarica'];\nvar en = ['Review', 'Star', 'Rate', 'Rating', 'Negative', 'Positive', 'Bad', 'Remove', 'Delete', 'Change', 'Update', 'Edit', 'Get rid of', 'Shopping experience', 'feedback', 'www.', 'Website', 'Link', 'thanks', 'thank you', 'if you need any other help', 'please feel free to contact us', 'Order ID', 'sku', 'Asin', 'Address', 'Location', 'Discount', 'Promotion', 'Price', 'download'];\nvar keywords = {\n  ar: ar,\n  de: de,\n  fr: fr,\n  nl: nl,\n  ja: ja,\n  sv: sv,\n  es: es,\n  it: it,\n  en: en\n};\n\n\n//# sourceURL=webpack:///./src/config.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n/* harmony import */ var _modules_match__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/match */ \"./src/modules/match.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config */ \"./src/config.js\");\n\n\n\nvar keywordMatch = new _modules_match__WEBPACK_IMPORTED_MODULE_1__.default(_config__WEBPACK_IMPORTED_MODULE_2__.keywords);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/element.js":
/*!********************************!*\
  !*** ./src/modules/element.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 仿 element ui 消息提示\nvar Message = /*#__PURE__*/function () {\n  function Message() {\n    _classCallCheck(this, Message);\n\n    // 消息队列\n    this.messageQueue = []; // 设置默认值\n\n    this.position = 'top';\n    this.message = '';\n    this.type = '';\n    this.duration = 3000;\n    this.body = document.getElementsByTagName('body')[0];\n    this.id = 0;\n  }\n\n  _createClass(Message, [{\n    key: \"setType\",\n    value: function setType(messageDom, type) {\n      if (type === '') {\n        messageDom.classList.add('ui-message-info');\n      } else if (type === 'success') {\n        messageDom.classList.add('ui-message-success');\n      } else if (type === 'warning') {\n        messageDom.classList.add('ui-message-warning');\n      } else if (type === 'error') {\n        messageDom.classList.add('ui-message-error');\n      } else {\n        messageDom.classList.add('ui-message-info'); // 默认值\n      }\n    }\n  }, {\n    key: \"createTextDom\",\n    value: function createTextDom(messageDom, message) {\n      var p = document.createElement('p');\n      p.classList.add('message-content');\n      p.textContent = message || this.message;\n      messageDom.appendChild(p);\n    }\n  }, {\n    key: \"removeMessageDom\",\n    value: function removeMessageDom(messageDom, targetId) {\n      var _this = this;\n\n      var startIndex = this.messageQueue.findIndex(function (message) {\n        return message.id === targetId;\n      });\n      this.messageQueue.splice(startIndex, 1);\n      this.updateMessageDom(startIndex); //增加移除动画\n\n      messageDom.classList.add('ui-message-leave');\n      setTimeout(function () {\n        _this.body.removeChild(messageDom);\n      }, 400);\n    }\n  }, {\n    key: \"setOption\",\n    value: function setOption(options) {\n      var _this2 = this;\n\n      if (_typeof(options) !== \"object\") {\n        options = {};\n      }\n\n      var messageDom = document.createElement('div');\n      messageDom.classList.add('ui-message');\n      messageDom.classList.add('ui-message-leave');\n\n      if (options.center === true) {\n        messageDom.classList.add('ui-message-center');\n      }\n\n      var targetId = this.id;\n      this.messageQueue.push({\n        id: targetId,\n        messageDom: messageDom\n      });\n      this.setType(messageDom, options.type);\n      this.createTextDom(messageDom, options.message);\n      this.setCurrentMessageDom();\n      this.body.appendChild(messageDom); //增加新增动画\n\n      setTimeout(function () {\n        messageDom.classList.remove('ui-message-leave');\n      }, 100);\n      var i = null;\n\n      if (options.showClose === true) {\n        i = document.createElement('i');\n        i.innerText = '×';\n        i.classList.add('close-button');\n        messageDom.appendChild(i);\n      }\n\n      var time = isNaN(Number(options.duration)) ? this.duration : Number(options.duration); // 如果duration为0则不需要setTimeout\n\n      var timeId = -1;\n\n      if (time !== 0) {\n        timeId = setTimeout(function () {\n          _this2.removeMessageDom(messageDom, targetId);\n        }, time);\n      }\n\n      if (options.showClose === true) {\n        i.addEventListener('click', function () {\n          _this2.removeMessageDom(messageDom, targetId);\n\n          if (targetId !== -1) {\n            clearTimeout(timeId);\n          }\n        });\n      }\n\n      this.id++;\n    }\n  }, {\n    key: \"setCurrentMessageDom\",\n    value: function setCurrentMessageDom() {\n      var index = this.messageQueue.length - 1;\n      var targetDom = this.messageQueue[index].messageDom;\n      targetDom.style.zIndex = \"\".concat(3000 + index);\n      targetDom.style.top = \"\".concat(64 * index + 20, \"px\");\n    }\n  }, {\n    key: \"updateMessageDom\",\n    value: function updateMessageDom(startIndex) {\n      for (var i = startIndex; i < this.messageQueue.length; i++) {\n        var messageDom = this.messageQueue[i].messageDom;\n        messageDom.style.zIndex = \"\".concat(3000 + i); // 暂不支持换行功能，换行后获取上一个元素的height和top来更新下一个元素的top\n\n        messageDom.style.top = \"\".concat(64 * i + 20, \"px\");\n      }\n    }\n  }]);\n\n  return Message;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);\n\n//# sourceURL=webpack:///./src/modules/element.js?");

/***/ }),

/***/ "./src/modules/match.js":
/*!******************************!*\
  !*** ./src/modules/match.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/index */ \"./src/utils/index.js\");\n/* harmony import */ var _modules_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/element */ \"./src/modules/element.js\");\n/* harmony import */ var _modules_tab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/tab */ \"./src/modules/tab.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/modal */ \"./src/modules/modal.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\nvar $message = new _modules_element__WEBPACK_IMPORTED_MODULE_1__.default(); // 关键词匹配功能\n\nvar KeywordMatch = /*#__PURE__*/function () {\n  function KeywordMatch(oRules) {\n    _classCallCheck(this, KeywordMatch);\n\n    // 将对象格式转化成数组并合并去重\n    var arr = Object.values(oRules);\n    var rules = arr.reduce(function (total, item) {\n      total = [].concat(_toConsumableArray(total), _toConsumableArray(item));\n      return total;\n    }, []);\n\n    var _rules = Array.from(new Set(rules));\n\n    this.oRules = oRules;\n    this.rules = _rules;\n    this.init();\n  } // 初始化\n\n\n  _createClass(KeywordMatch, [{\n    key: \"init\",\n    value: function init() {\n      var keywordMatch = document.createElement(\"div\");\n      var tpl = \"<div id=\\\"keywordMatchBtn\\\" class=\\\"keyword-btn\\\">\\u654F\\u611F\\u8BCD\\u68C0\\u6D4B</div><div id=\\\"keywordListBtn\\\" class=\\\"keyword-btn keyword-btn-yellow\\\">\\u654F\\u611F\\u8BCD\\u5217\\u8868</div>\";\n      keywordMatch.id = 'keywordMatch';\n      keywordMatch.innerHTML = tpl;\n      document.body.appendChild(keywordMatch); // 敏感词弹窗\n\n      this.$modal = new _modules_modal__WEBPACK_IMPORTED_MODULE_3__.default({\n        id: 'keywordRes',\n        title: '敏感词提示'\n      }); // 敏感词列表弹窗\n\n      this.$list = new _modules_modal__WEBPACK_IMPORTED_MODULE_3__.default({\n        id: 'keywordList',\n        title: '敏感词列表',\n        width: 720,\n        height: 680,\n        align: 'center'\n      });\n      this.setEvents();\n    } // 设置事件\n\n  }, {\n    key: \"setEvents\",\n    value: function setEvents() {\n      var _this = this;\n\n      var $keywordMatchBtn = document.querySelector('#keywordMatchBtn');\n      var $keywordListBtn = document.querySelector('#keywordListBtn');\n      $keywordMatchBtn.addEventListener('click', function () {\n        _this.startMatch();\n      });\n      $keywordListBtn.addEventListener('click', function () {\n        var content = \"<div id=\\\"uTabs\\\" class=\\\"u-tabs\\\"></div>\";\n        var $content = _utils_index__WEBPACK_IMPORTED_MODULE_0__.default.parseDom(content)[0]; // 选项卡\n\n        var $Tab = new _modules_tab__WEBPACK_IMPORTED_MODULE_2__.default({\n          $el: $content,\n          oData: _this.oRules\n        });\n\n        _this.$list.render($content);\n      });\n    } // 检查页面是否合规\n\n  }, {\n    key: \"checkPage\",\n    value: function checkPage() {\n      var iframeMain = document.querySelector('#mainFrame');\n      var iframeArea = iframeMain.contentDocument.querySelector('.QMEditorIfrmEditArea');\n\n      if (!iframeMain || !iframeArea) {\n        $message.setOption({\n          message: '请在编辑邮件页面操作',\n          type: \"error\",\n          duration: 5000\n        });\n        return false;\n      }\n\n      this.$iframeArea = iframeArea;\n      return true;\n    } // 开始匹配\n\n  }, {\n    key: \"startMatch\",\n    value: function startMatch() {\n      if (this.checkPage()) {\n        var word = this.$iframeArea.contentDocument.body.innerText;\n        console.log('当前匹配的文本：', word);\n\n        if (word) {\n          this.popMatch(word);\n        } else {\n          $message.setOption({\n            message: '注意：待检测文本为空，请填写正文后再检测，若依然出现问题，请联系开发！',\n            type: \"error\",\n            duration: 5000\n          });\n        }\n      }\n    } // 高亮匹配，目前对有设置过样式的文本会有BUG，先不用\n\n  }, {\n    key: \"lightMatch\",\n    value: function lightMatch(word) {\n      var _this2 = this;\n\n      var isMatch = false;\n      var regExp = this.rules.map(function (item) {\n        return _this2.getLightRegExp(item);\n      });\n      regExp.forEach(function (re) {\n        if (re.test(word)) {\n          isMatch = true;\n          word = word.replace(re, '<font class=\"light\" color=\"#ff0000\">$&</font>');\n        }\n      });\n\n      if (isMatch) {\n        this.$iframeArea.contentDocument.body.innerHTML = word;\n        $message.setOption({\n          message: '检测到敏感词，文本已显示成红色',\n          type: \"warning\",\n          duration: 3000\n        });\n      } else {\n        $message.setOption({\n          message: '没有检测到敏感词',\n          type: \"success\",\n          duration: 3000\n        });\n      }\n    } // 移除高亮匹配\n\n  }, {\n    key: \"unLightMatch\",\n    value: function unLightMatch(word) {\n      if (this.checkPage()) {\n        var re = new RegExp('(<font class=\"light\" color=\"#ff0000\">|<\\/font>)', 'g');\n        this.$iframeArea.contentDocument.body.innerHTML = word.replace(re, '');\n      }\n    } // 弹窗提示匹配\n\n  }, {\n    key: \"popMatch\",\n    value: function popMatch(word) {\n      var regExp = this.getPopRegExp(this.rules);\n      console.log('当前使用的正则：', regExp);\n      var matches = word.match(regExp);\n      var content = '';\n\n      if (matches && matches.length) {\n        matches.forEach(function (item) {\n          content += \"<li><span title=\\\"\".concat(item, \"\\\">\").concat(item, \"</span><i class=\\\"u-btn u-copy\\\">\\u590D\\u5236</i></li>\");\n        });\n        content = \"<ul>\".concat(content, \"</ul>\");\n        var $content = _utils_index__WEBPACK_IMPORTED_MODULE_0__.default.parseDom(content)[0];\n        $content.addEventListener('click', function (e) {\n          if (e.target.classList.contains('u-copy')) {\n            var text = e.target.previousSibling.innerText;\n            _utils_index__WEBPACK_IMPORTED_MODULE_0__.default.copy(text).then(function () {\n              $message.setOption({\n                message: '复制成功',\n                type: \"success\",\n                duration: 3000\n              });\n            })[\"catch\"](function (err) {\n              $message.setOption({\n                message: '复制出错，请手动复制',\n                type: \"warning\",\n                duration: 3000\n              });\n              console.log(err);\n            });\n          }\n        });\n        this.$modal.render($content);\n        $message.setOption({\n          message: '检测到敏感词，已弹窗显示',\n          type: \"warning\",\n          duration: 3000,\n          showClose: true\n        });\n      } else {\n        $message.setOption({\n          message: '没有检测到敏感词',\n          type: \"success\",\n          duration: 3000\n        });\n        this.$modal.remove();\n      }\n    } // 获取高亮正则\n\n  }, {\n    key: \"getLightRegExp\",\n    value: function getLightRegExp(str) {\n      var regstr = \"/\".concat(str, \"/g\");\n      return eval(regstr);\n    } // 获取弹窗正则\n\n  }, {\n    key: \"getPopRegExp\",\n    value: function getPopRegExp(arr) {\n      var _arr = arr.map(function (item) {\n        return item.replace(/\\s+/g, '\\\\s+').replace(/\\./g, '\\\\.');\n      });\n\n      var str = _arr.join('|');\n\n      var regstr = \"/\\\\['\".concat(str, \"'\\\\]/ig\");\n      return eval(regstr);\n    }\n  }]);\n\n  return KeywordMatch;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (KeywordMatch);\n\n//# sourceURL=webpack:///./src/modules/match.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 匹配列表弹窗\nvar Modal = /*#__PURE__*/function () {\n  function Modal(options) {\n    _classCallCheck(this, Modal);\n\n    var _options = {\n      id: '',\n      title: '提示',\n      content: '',\n      width: 360,\n      height: 480,\n      align: 'default'\n    };\n    this.options = Object.assign(_options, options);\n  }\n\n  _createClass(Modal, [{\n    key: \"render\",\n    value: function render($dom) {\n      var _this = this;\n\n      this.remove(); // 先清空之前的弹窗\n\n      var $modal = document.createElement('div');\n      var _this$options = this.options,\n          id = _this$options.id,\n          title = _this$options.title,\n          width = _this$options.width,\n          height = _this$options.height,\n          align = _this$options.align;\n      $modal.id = id;\n      $modal.classList.add('u-pop');\n\n      if (align === 'center') {\n        $modal.classList.add('center');\n      }\n\n      $modal.style.width = \"\".concat(width, \"px\");\n      $modal.style.height = \"\".concat(height, \"px\");\n      $modal.innerHTML = \"<div class=\\\"u-pop-header\\\"><h1>\".concat(title, \"</h1><i class=\\\"u-pop-close\\\">\\xD7</i></div><div class=\\\"u-pop-content\\\"></div>\");\n      var $header = $modal.children[0];\n      var $content = $modal.children[1];\n      $header.children[1].addEventListener('click', function () {\n        _this.remove();\n      });\n      $content.innerHTML = '';\n      document.body.appendChild($modal);\n      $content.appendChild($dom);\n      $dom = null;\n      this.$el = $modal;\n      this.open();\n    }\n  }, {\n    key: \"open\",\n    value: function open() {\n      if (this.$el) {\n        this.$el.classList.add('u-pop-show');\n        this.$el.classList.remove('u-pop-hide');\n      }\n    }\n  }, {\n    key: \"remove\",\n    value: function remove() {\n      if (this.$el) {\n        document.body.removeChild(this.$el);\n        this.$el = null;\n      }\n    }\n  }]);\n\n  return Modal;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);\n\n//# sourceURL=webpack:///./src/modules/modal.js?");

/***/ }),

/***/ "./src/modules/tab.js":
/*!****************************!*\
  !*** ./src/modules/tab.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// 选项卡\nvar Tab = /*#__PURE__*/function () {\n  function Tab(options) {\n    _classCallCheck(this, Tab);\n\n    var _options = {\n      $el: null,\n      oData: {}\n    };\n    this.options = Object.assign(_options, options);\n    this.render();\n  }\n\n  _createClass(Tab, [{\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var _this$options = this.options,\n          $el = _this$options.$el,\n          oData = _this$options.oData;\n\n      if ($el) {\n        $el.innerHTML = this.getTabs(oData);\n        var $headers = $el.querySelectorAll('.u-tabs-header-item');\n        var $contents = $el.querySelectorAll('.u-tabs-content-item');\n        $headers[0].classList.add('active');\n        $contents[0].classList.add('active');\n        $el.addEventListener('click', function (e) {\n          if (e.target.classList.contains('u-tabs-header-item')) {\n            var index = Array.from($el.querySelectorAll('.u-tabs-header-item')).indexOf(e.target);\n\n            _this.changeTab(index);\n          }\n\n          if (e.target.classList.contains('u-copy')) {\n            var text = e.target.previousSibling.innerText;\n            $utils.copy(text).then(function () {\n              $message.setOption({\n                message: '复制成功',\n                type: \"success\",\n                duration: 3000\n              });\n            })[\"catch\"](function (err) {\n              $message.setOption({\n                message: '复制出错，请手动复制',\n                type: \"warning\",\n                duration: 3000\n              });\n              console.log(err);\n            });\n          }\n        });\n        this.$headers = $headers;\n        this.$contents = $contents;\n        this.$el = $el;\n      }\n    }\n  }, {\n    key: \"changeTab\",\n    value: function changeTab(index) {\n      this.$headers.forEach(function (item, i) {\n        if (i === index) {\n          item.classList.add('active');\n        } else {\n          item.classList.remove('active');\n        }\n      });\n      this.$contents.forEach(function (item, i) {\n        if (i === index) {\n          item.classList.add('active');\n        } else {\n          item.classList.remove('active');\n        }\n      });\n    }\n  }, {\n    key: \"getTabs\",\n    value: function getTabs(oData) {\n      var arr = this.objToArr(oData);\n      var header = '';\n      var content = '';\n\n      if (arr && arr.length) {\n        arr.forEach(function (_ref) {\n          var title = _ref.title,\n              data = _ref.data;\n          var lis = '';\n          data.forEach(function (val) {\n            lis += \"<li><span title=\\\"\".concat(val, \"\\\">\").concat(val, \"</span><i class=\\\"u-btn u-copy\\\">\\u590D\\u5236</i></li>\");\n          });\n          header += \"<div class=\\\"u-tabs-header-item\\\">\".concat(title, \"</div>\");\n          content += \"<div class=\\\"u-tabs-content-item\\\"><ul>\".concat(lis, \"</ul></div>\");\n        });\n        return \"<div class=\\\"u-tabs-header\\\">\".concat(header, \"</div><div class=\\\"u-tabs-content\\\">\").concat(content, \"</div>\");\n      } else {\n        return '<div>暂无敏感词数据，请联系技术添加</div>';\n      }\n    }\n  }, {\n    key: \"objToArr\",\n    value: function objToArr(oData) {\n      var _this2 = this;\n\n      return Object.entries(oData).map(function (item) {\n        return {\n          title: _this2.getName(item[0]),\n          data: item[1]\n        };\n      });\n    }\n  }, {\n    key: \"getName\",\n    value: function getName(code) {\n      var res;\n\n      switch (code) {\n        case 'ar':\n          res = '阿拉伯';\n          break;\n\n        case 'de':\n          res = '德语';\n          break;\n\n        case 'fr':\n          res = '法语';\n          break;\n\n        case 'nl':\n          res = '荷兰语';\n          break;\n\n        case 'ja':\n          res = '日语';\n          break;\n\n        case 'sv':\n          res = '瑞典语';\n          break;\n\n        case 'es':\n          res = '西语';\n          break;\n\n        case 'it':\n          res = '意语';\n          break;\n\n        case 'en':\n          res = '英语';\n          break;\n\n        default:\n          res = '-';\n          break;\n      }\n\n      return res;\n    }\n  }]);\n\n  return Tab;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);\n\n//# sourceURL=webpack:///./src/modules/tab.js?");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// 工具类\nvar utils = {\n  // 转成虚拟dom\n  parseDom: function parseDom(arg) {\n    var $el = document.createElement(\"div\");\n    $el.innerHTML = arg;\n    return $el.childNodes;\n  },\n  // 需要https\n  copy: function copy(text) {\n    return new Promise(function (resolve, reject) {\n      navigator.clipboard.writeText(text).then(function () {\n        resolve();\n      }, function (err) {\n        reject(err);\n      });\n    });\n  } // 该功能暂未使用\n  // copy(text) {\n  //   const input = document.createElement('input');\n  //   input.setAttribute('readonly', 'readonly'); // 兼容在iOS环境下瞬间拉起键盘又缩回的闪烁；\n  //   input.setAttribute('value', text);\n  //   document.body.appendChild(input);\n  //   input.setSelectionRange(0, text.length); // 还是因为在iOS环境下，input.select()没有选中全部内容。\n  //   if (document.execCommand('copy')) {\n  //     document.execCommand('copy');\n  //     console.log('复制成功');\n  //   }\n  //   document.body.removeChild(input);\n  // }\n\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (utils);\n\n//# sourceURL=webpack:///./src/utils/index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \*****************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".u-tabs {\\n  height: 100%;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  border: 1px solid #dcdfe6;\\n  -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 0 6px 0 rgba(0, 0, 0, 0.4);\\n          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 0 6px 0 rgba(0, 0, 0, 0.4);\\n  padding-left: 120px;\\n  position: relative;\\n  overflow: hidden;\\n  background: #fff; }\\n\\n.u-tabs-header {\\n  width: 120px;\\n  background-color: #f5f7fa;\\n  overflow-x: hidden;\\n  overflow-y: auto;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  z-index: 1;\\n  height: 100%;\\n  border-right: 1px solid #dcdfe6; }\\n\\n.u-tabs-header-item {\\n  width: 100%;\\n  padding: 0 20px;\\n  height: 50px;\\n  line-height: 50px;\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box;\\n  font-size: 14px;\\n  font-weight: 500;\\n  text-align: center;\\n  position: relative;\\n  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\\n  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);\\n  border-bottom: 1px solid #dcdfe6;\\n  color: #909399;\\n  cursor: pointer; }\\n\\n.u-tabs-header-item.active {\\n  color: #409eff;\\n  background-color: #fff; }\\n\\n.u-tabs-header-item:first-child {\\n  border-top-color: transparent; }\\n\\n.u-tabs-content {\\n  height: 100%; }\\n\\n.u-tabs-content-item {\\n  display: none;\\n  overflow: auto;\\n  height: 100%; }\\n\\n.u-tabs-content-item.active {\\n  display: block; }\\n\\n.ui-message {\\n  min-width: 380px;\\n  border-width: 1px;\\n  border-style: solid;\\n  border-color: #EBEEf5;\\n  background-color: #edf2fc;\\n  -webkit-transform: translateX(-50%);\\n          transform: translateX(-50%);\\n  position: fixed;\\n  left: 50%;\\n  top: 20px;\\n  -webkit-transition: opacity .3s,top .4s,-webkit-transform .4s;\\n  transition: opacity .3s,top .4s,-webkit-transform .4s;\\n  transition: opacity .3s,transform .4s,top .4s;\\n  transition: opacity .3s,transform .4s,top .4s,-webkit-transform .4s;\\n  padding: 15px 15px 15px 20px;\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  border-radius: 4px;\\n  overflow: hidden; }\\n\\n.ui-message-center {\\n  -webkit-box-pack: center;\\n      -ms-flex-pack: center;\\n          justify-content: center; }\\n\\n.ui-message .message-content {\\n  margin-left: 16px;\\n  margin: 0;\\n  padding: 0;\\n  font-size: 14px; }\\n\\n.ui-message .close-button {\\n  font-style: normal;\\n  font-size: 24px;\\n  color: #999999;\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  right: 15px;\\n  -webkit-transform: translateY(-50%);\\n          transform: translateY(-50%);\\n  opacity: .8; }\\n\\n.ui-message-leave {\\n  opacity: 0;\\n  -webkit-transform: translate(-50%, -100%);\\n          transform: translate(-50%, -100%); }\\n\\n.ui-message-enter {\\n  opacity: 1;\\n  -webkit-transform: translate(-50%, -100%);\\n          transform: translate(-50%, -100%); }\\n\\n.ui-message-info .message-content {\\n  color: #909399; }\\n\\n.ui-message-success {\\n  background-color: #f0f9eb;\\n  border-color: #e1f3d8; }\\n\\n.ui-message-success .message-content {\\n  color: #67c23c; }\\n\\n.ui-message-warning {\\n  background-color: #fdf6ec;\\n  border-color: #faecd8; }\\n\\n.ui-message-warning .message-content {\\n  color: #e6a23c; }\\n\\n.ui-message-error {\\n  background-color: #fef0f0;\\n  border-color: #fde2e2; }\\n\\n.ui-message-error .message-content {\\n  color: #f56c6c; }\\n\\n.u-pop {\\n  border-radius: 5px;\\n  background: #ffffff;\\n  -webkit-box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);\\n          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5);\\n  position: fixed;\\n  top: 30px;\\n  right: 30px;\\n  z-index: 999;\\n  display: none;\\n  overflow: hidden; }\\n\\n.u-pop.center {\\n  top: 50%;\\n  right: 50%;\\n  -webkit-transform: translate(50%, -50%);\\n          transform: translate(50%, -50%); }\\n\\n.u-pop.u-pop-show {\\n  display: block; }\\n\\n.u-pop .u-pop-header {\\n  height: 20px;\\n  padding: 15px;\\n  background: #f5f5f5;\\n  overflow: hidden;\\n  position: relative; }\\n\\n.u-pop .u-pop-header h1 {\\n  font-size: 16px;\\n  margin: 0; }\\n\\n.u-pop .u-pop-header i {\\n  width: 24px;\\n  height: 24px;\\n  line-height: 20px;\\n  text-align: center;\\n  font-style: normal;\\n  font-size: 36px;\\n  cursor: pointer;\\n  position: absolute;\\n  top: 50%;\\n  right: 15px;\\n  -webkit-transform: translateY(-50%);\\n          transform: translateY(-50%); }\\n\\n.u-pop .u-pop-content {\\n  overflow-y: auto;\\n  height: calc(100% - 50px);\\n  -webkit-box-sizing: border-box;\\n          box-sizing: border-box; }\\n\\n.u-pop .u-pop-content ul {\\n  margin: 0;\\n  padding: 0; }\\n\\n.u-pop .u-pop-content ul li {\\n  display: -webkit-box;\\n  display: -ms-flexbox;\\n  display: flex;\\n  -webkit-box-pack: justify;\\n      -ms-flex-pack: justify;\\n          justify-content: space-between;\\n  -webkit-box-align: center;\\n      -ms-flex-align: center;\\n          align-items: center;\\n  font-size: 14px;\\n  list-style: none;\\n  padding: 8px 15px; }\\n\\n.u-pop .u-pop-content ul li + li {\\n  border-top: 1px dashed #cccccc; }\\n\\n.u-pop .u-pop-content ul li span {\\n  display: block;\\n  text-overflow: ellipsis;\\n  overflow: hidden;\\n  white-space: nowrap; }\\n\\n.u-btn {\\n  font-size: 12px;\\n  color: #fff;\\n  background-color: #409eff;\\n  border-color: #409eff;\\n  padding: 4px 8px;\\n  font-style: normal;\\n  border-radius: 4px;\\n  text-align: center;\\n  border: 1px solid #dcdfe6;\\n  cursor: pointer;\\n  -ms-flex-negative: 0;\\n      flex-shrink: 0;\\n  margin-left: 10px;\\n  text-decoration: none; }\\n\\n#keywordMatch {\\n  position: fixed;\\n  bottom: 30%;\\n  right: 65px;\\n  z-index: 999999; }\\n\\n.keyword-btn {\\n  font-size: 16px;\\n  text-align: center;\\n  letter-spacing: 2px;\\n  text-decoration: none;\\n  color: #fff;\\n  position: relative;\\n  padding: 10px 20px;\\n  cursor: pointer;\\n  border-radius: 5px; }\\n\\n.keyword-btn:active {\\n  top: 3px; }\\n\\n.keyword-btn {\\n  background-color: #3bb3e0;\\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #2ca0ca), color-stop(1, #3eb8e5));\\n  -webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999;\\n          box-shadow: inset 0px 1px 0px #2ab7ec, 0px 5px 0px 0px #156785, 0px 10px 5px #999; }\\n\\n.keyword-btn:active {\\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #3eb8e5), color-stop(1, #2ca0ca));\\n  -webkit-box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999;\\n          box-shadow: inset 0px 1px 0px #2ab7ec, 0px 2px 0px 0px #156785, 0px 5px 3px #999; }\\n\\n.keyword-btn-yellow {\\n  margin-top: 20px;\\n  background-color: #e0963b;\\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #ca8b2c), color-stop(1, #e5b93e));\\n  -webkit-box-shadow: inset 0px 1px 0px #eccb2a, 0px 5px 0px 0px #855815, 0px 10px 5px #999;\\n          box-shadow: inset 0px 1px 0px #eccb2a, 0px 5px 0px 0px #855815, 0px 10px 5px #999; }\\n\\n.keyword-btn-yellow:active {\\n  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0, #e5b93e), color-stop(1, #ca8b2c));\\n  -webkit-box-shadow: inset 0px 1px 0px #eccb2a, 0px 2px 0px 0px #855815, 0px 5px 3px #999;\\n          box-shadow: inset 0px 1px 0px #eccb2a, 0px 2px 0px 0px #855815, 0px 5px 3px #999; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("8d7bd3cc7b37561ed337")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;