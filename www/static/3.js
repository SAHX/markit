webpackJsonp([3],{

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_md__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_md__);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            md: __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_md___default.a
        };
    }
});

/***/ }),

/***/ 33:
/***/ (function(module, exports) {

module.exports = "<h1 id=\"-\">创建对象的几种模式</h1>\n<p>#js/学习总结#</p>\n<h3 id=\"-\">一、工厂模式</h3>\n<pre><code class=\"lang-javascript\">function createPerson(name,age,job){\n    var o = new Object();\n    o.name = name;\n    o.age = age;\n    o.job = job;\n    o.sayName = function(){\n        alert(this.name);\n    }\n    return o;\n}\n\nvar person1 = createPerson(&#39;luce&#39;,26,&#39;software engineer&#39;)\n</code></pre>\n<h3 id=\"-\">二、构造函数模式</h3>\n<blockquote>\n<p>函数名使用大写字母  </p>\n</blockquote>\n<pre><code class=\"lang-javascript\">function Person(name,age,job){\n    this.name = name;\n    this.age = age;\n    this.job = job;\n    this.sayName = function(){\n        alert(this.name)\n    };\n}\n\nvar person1 = new Person(&#39;luce&#39;,25,&#39;doctor&#39;)\n</code></pre>\n";

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [_c('div', {
    domProps: {
      "innerHTML": _vm._s(_vm.md)
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29f137be", module.exports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(28),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/tangjiang/Personal/Github/markit/app/views/javascript/创建对象的几种模式.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 创建对象的几种模式.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29f137be", Component.options)
  } else {
    hotAPI.reload("data-v-29f137be", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});