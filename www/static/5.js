webpackJsonp([5],{

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_AMD_CMD_md__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_AMD_CMD_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_AMD_CMD_md__);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            md: __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_javascript_AMD_CMD_md___default.a
        };
    }
});

/***/ }),

/***/ 31:
/***/ (function(module, exports) {

module.exports = "<h1 id=\"amd-cmd-\">AMD/CMD概念和区别</h1>\n<p>#js/学习总结#</p>\n<blockquote>\n<p>AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。<br>CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。  </p>\n</blockquote>\n<h2 id=\"-\">共同之处</h2>\n<p>RequireJS 和 Sea.js 都是模块加载器，倡导模块化开发理念，核心价值是让 JavaScript 的模块化开发变得简单自然。</p>\n<h2 id=\"-\">不同之处</h2>\n<h4 id=\"-\">两者的主要区别如下：</h4>\n<ol>\n<li><strong>定位有差异。</strong>RequireJS 想成为浏览器端的模块加载器，同时也想成为 Rhino / Node 等环境的模块加载器。Sea.js 则专注于 Web 浏览器端，同时通过 Node 扩展的方式可以很方便跑在 Node 环境中。</li>\n<li><strong>遵循的规范不同。</strong>RequireJS 遵循 AMD（异步模块定义）规范，Sea.js 遵循 CMD （通用模块定义）规范。规范的不同，导致了两者 API 不同。Sea.js 更贴近 CommonJS Modules/1.1 和 Node Modules 规范。</li>\n<li><strong>推广理念有差异。</strong>RequireJS 在尝试让第三方类库修改自身来支持 RequireJS，目前只有少数社区采纳。Sea.js 不强推，采用自主封装的方式来“海纳百川”，目前已有较成熟的封装策略。</li>\n<li><strong>对开发调试的支持有差异。</strong>Sea.js 非常关注代码的开发调试，有 nocache、debug 等用于调试的插件。RequireJS 无这方面的明显支持。</li>\n<li><strong>插件机制不同。</strong>RequireJS 采取的是在源码中预留接口的形式，插件类型比较单一。Sea.js 采取的是通用事件机制，插件类型更丰富。</li>\n</ol>\n<p>还有不少差异，涉及具体使用方式和源码实现，欢迎有兴趣者研究并发表看法。</p>\n<p>总之，如果说 RequireJS 是 Prototype 类库的话，则 Sea.js 致力于成为 jQuery 类库。</p>\n<h2 id=\"-\">解释说明</h2>\n<p>两者的主要区别，CMD推崇依赖就近，可以把依赖写进你的代码中的任意一行，例：</p>\n<pre><code class=\"lang-javascript\">define(function(require, exports, module) {\n  var a = require(&#39;./a&#39;)\n  a.doSomething()\n  var b = require(&#39;./b&#39;)\n  b.doSomething()\n})\n</code></pre>\n<p>代码在运行时，首先是不知道依赖的，需要遍历所有的require关键字，找出后面的依赖。具体做法是将function toString后，用正则匹配出require关键字后面的依赖。显然，这是一种牺牲性能来换取更多开发便利的方法。而AMD是依赖前置的，换句话说，在解析和执行当前模块之前，模块作者必须指明当前模块所依赖的模块，表现在require函数的调用结构上为：</p>\n<pre><code class=\"lang-javascript\">define([&#39;./a&#39;,&#39;./b&#39;],function(a,b){\n   a.doSomething()\n   b.doSomething()\n})\n</code></pre>\n<p>代码在一旦运行到此处，能立即知晓依赖。而无需遍历整个函数体找到它的依赖，因此性能有所提升，缺点就是开发者必须显式得指明依赖——这会使得开发工作量变大，比如：当你写到函数体内部几百上千行的时候，忽然发现需要增加一个依赖，你不得不回到函数顶端来将这个依赖添加进数组。细心的读者可能发现，到目前位置我讨论的AMD和CMD的思想的关于依赖的部分，都只讨论的“硬依赖”，也就是执行前肯定需要的依赖，但是这不是全部的情况。有的时候情况是这样的：</p>\n<pre><code class=\"lang-javascript\">// 函数体内：\nif(status){\n  a.doSomething()\n}\n</code></pre>\n<p>在这个函数体内，可能依赖a，也可能不依赖a，我把这种可能的依赖成为“软依赖”。对于软依赖当然可以直接当硬依赖处理，但是这样不经济，因为依赖是不一定的，有可能加载了此处的依赖而实际上没有用上。对于软依赖的处理，我推荐依赖前置+回调函数的实现形式。上面的例子简单表述如下：</p>\n<pre><code class=\"lang-javascript\">//函数体内：\nif(status){\n  async([&#39;a&#39;],function(a){\n    a.doSomething()\n  })\n}\n</code></pre>\n<p>至此可以对由commonJS衍生出来的方案做出总结了。在浏览器端来设计模块加载机制，需要考虑依赖的问题。我们先把依赖分为两种，“强依赖” —— 肯定需要 和“弱依赖” —— 可能需要。对于强依赖，如果要性能优先，则考虑参照依赖前置的思想设计你的模块加载器，我个人也更推崇这个方案一些；如果考虑开发成本优先，则考虑按照依赖就近的思想设计你的模块加载器。对于弱依赖，只需要将弱依赖的部分改写到回调函数内即可。如果现在我要实现一个模块加载器，我会将强依赖前置，弱依赖采用异步回调函数的形式，其它的方法我认为都只是语法糖而已，仅此就够了。</p>\n";

/***/ }),

/***/ 40:
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
     require("vue-hot-reload-api").rerender("data-v-c5d84188", module.exports)
  }
}

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(40),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/tangjiang/Personal/Github/markit/app/views/javascript/AMD:CMD概念和区别.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] AMD:CMD概念和区别.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c5d84188", Component.options)
  } else {
    hotAPI.reload("data-v-c5d84188", Component.options)
  }
})()}

module.exports = Component.exports


/***/ })

});