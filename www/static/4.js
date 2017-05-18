webpackJsonp([4],{

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_IIFE_md__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_IIFE_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_IIFE_md__);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            md: __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_IIFE_md___default.a
        };
    }
});

/***/ }),

/***/ 32:
/***/ (function(module, exports) {

module.exports = "<h1 id=\"iife-immediately-invoked-function-expression-\">IIFE 立即执行函数表达式（Immediately-invoked Function Expression，立即执行函数表达式。）</h1>\n<p>#js/学习总结</p>\n<blockquote>\n<p><strong>IIFE</strong>的全称是Immediately-invoked Function Expression，立即执行函数表达式。  </p>\n</blockquote>\n<h2 id=\"-\">概念理解</h2>\n<h5 id=\"-test-\">这叫函数表达式，函数表达式中的函数可以为匿名函数，也可以有函数名，但是该函数实际上不能直接使用，只能通过表达式左边的变量test来调用。</h5>\n<pre><code class=\"lang-javascript\">var test = function(){\n    console.log(12);\n}\n</code></pre>\n<h5 id=\"-\">这叫函数声明</h5>\n<pre><code class=\"lang-javascript\">function test(){\n    console.log(12)\n}\n</code></pre>\n<h5 id=\"-\">调用执行</h5>\n<pre><code class=\"lang-javascript\">test(); // 12 \n\nfunction(){}()//SyntaxError:Unexpected token(\n//就会报错，这是因为浏览器引擎在解释JavaScript时，遇到function关键字时，会默认把它当做一个函数声明，而不是函数表达式。而函数声明如我们上面所说，需要一个函数名，所以浏览器会认为上面的代码为匿名函数声明，所以报错。\n\nfunction test(){}();//SyntaxError:Unexpected token )\n//在一个函数表达式后面加上括号，表示该表达式立即执行。但是如果是在一条语句后面加上括号，那么该括号只是用来控制优先级的。所以上面的代码相当于声明了一个函数，然后执行()语句，但是()中内容为空，所以报错。\n\n(function (){}());\n//这样就不会报错了，因为当解释器遇到(后，会认为其中的function不是函数声明而是函数表达式，所以就成功啦。\n</code></pre>\n<h2 id=\"-\">作用</h2>\n<ol>\n<li>立即执行；</li>\n<li>带来块状作用域，不污染全局</li>\n</ol>\n<h2 id=\"-\">其它多种方法立即执行匿名函数</h2>\n<pre><code class=\"lang-javascript\">    (function(){})(); \n    void function(){}(); //使用void \n    !function(){}();//使用一元运算符\n    ~function(){}();\n    -function(){}();\n    +function(){}();\n</code></pre>\n<h2 id=\"-\">最后，注意一下函数表达式和函数声明的使用。请看代码：</h2>\n<pre><code class=\"lang-javascript\">if (true) {\n    var foo = function(){\n        document.write( &quot;1&quot; );\n    }\n}\nelse {\n   var foo = function(){\n        document.write( &quot;2&quot; );\n    }\n}\nfoo();//1\n</code></pre>\n<p>输出结果为1，这个很好理解，那么我们调整一下执行foo的位置呢：</p>\n<pre><code class=\"lang-javascript\">foo();//undefined\nif (true) {\n    var foo = function(){\n        document.write( &quot;1&quot; );\n    }\n}\nelse {\n   var foo = function(){\n        document.write( &quot;2&quot; );\n    }\n}\n</code></pre>\n<p>这里就是未定义。这是由于<strong>变量提升</strong>。javascript解释器在解释代码时会将变量声明先提升到块级作用域最前端，也就是这个样子：</p>\n<pre><code class=\"lang-javascript\">var foo;\nfoo();//undefined\nif (true) {\n    foo = function(){\n        document.write( &quot;1&quot; );\n    }\n}\nelse {\n   foo = function(){\n        document.write( &quot;2&quot; );\n    }\n}\n</code></pre>\n<p>那么我们看看使用函数声明时的结果：</p>\n<pre><code class=\"lang-javascript\">if (true) {\n    function foo() {\n        document.write( &quot;1&quot; );\n    }\n}\nelse {\n    function foo() {\n        document.write( &quot;2&quot; );\n    }\n}\n\nfoo();      // 2\n</code></pre>\n<p>咦，这里怎么又输出2了呢？原来函数声明和变量一样，都有一个提升的过程，而和<strong>函数表达式只会提升声明不一样，函数声明即会提升声明，也会提升定义</strong>，所以第二个foo的定义把第一个foo给替换掉了。</p>\n<p>这里需要格外注意。</p>\n";

/***/ }),

/***/ 41:
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
     require("vue-hot-reload-api").rerender("data-v-f0a2fe00", module.exports)
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(27),
  /* template */
  __webpack_require__(41),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/tangjiang/Personal/Github/markit/app/views/javascript/IIFE立即执行函数表达式.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] IIFE立即执行函数表达式.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0a2fe00", Component.options)
  } else {
    hotAPI.reload("data-v-f0a2fe00", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});