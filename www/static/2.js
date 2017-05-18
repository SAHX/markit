webpackJsonp([2],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(29),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/tangjiang/Personal/Github/markit/app/views/linux/Linux常用指令.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Linux常用指令.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fb0dfe4", Component.options)
  } else {
    hotAPI.reload("data-v-3fb0dfe4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_Linux_md__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_Linux_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_Linux_md__);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            md: __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_Linux_md___default.a
        };
    }
});

/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = "<h3 id=\"linux-\">Linux常用指令</h3>\n<p>linux分区:</p>\n<p>/dev/sda3\n第一块scsi硬盘的第三个主分区\n/dev/sdb7\n第二块scsi硬盘的第三个逻辑分区\ndf\n查看已经挂载的分区\n13.系统结构树</p>\n<p>linux基本指令:</p>\n<p>1.cd 切换目录\n2.pwd 查看当前路径\n3.ls 查看当前目录下的所有文件,-l查看属性，-a查看隐藏文件\n4.cat file1|wc -l 查看文件行数，-l行数\n5.cat file1 |wc -c 查看文件字符数,-c字符数\n6.du -sh file1 查看文件大小,-sh帮你换算单位k,m,g</p>\n<p>文件管理:</p>\n<p>1.新建文件\ntouch file1\ntouch file{1..10}\n2.删除文件\nrm -rf file1\n3.编辑文件\nvi file1\n4.复制\ncp file1 /mnt/file2\n5.移动\nmv file1 /mnt/file1\n6.查看文件内容\ncat file1\n查看文件内容\nmore file2\n从第一页往下查看\ntree dir\n递归查看目录下的所有子目录和文件\nls -lR\n递归查看目录下的所有子目录和文件</p>\n<p>文件或目录权限:</p>\n<p>1.查看文件权限\nls -l dir1\n2.修改权限\nchmod 755 dir\n7 = rwx =421\nchmod o+w dir\nu,g,o=a</p>\n<p>系统结构树:</p>\n<p>1.home\n普通用户的家目录\n2.mnt\n空目录\n3.media\n挂载光盘用的\n4.bin\n所有用户都可以执行的命令\n5.sbin\n只有root才可以执行的命令\n6.usr\n自定义安装的软件的执行程序，帮助手册\n7.var\n日志,缓存\n8.proc\n内存镜像文件\n9.dev\n硬盘设备文件\n10.etc\n软件的配置文件\n11.boot\n启动文件,包括linux内核，init进程镜像文件\n12.tmp\n临时目录\n13.root\n超级用户的家目录</p>\n<p>目录管理:</p>\n<p>1.创建目录\nmkdir dir\n2.删除目录\nrm -rf dir\n3.mkdir -p a/b/c/d/e/g\nmkdir -p aa/bb/cc/dd/ee/gg\ncd - #记忆近两次使用的目录</p>\n<p>用户管理:</p>\n<p>1.新建用户\nuseradd user1\n2.删除用户\nuserdel -r user1\n3.设置密码\npasswd user1\n4.查看用户\nid user1</p>\n<p>文件搜索:</p>\n<p>1.find\nfind /root -name file1\n在/root下查找file1\nfind /root -name file1 -exec rm -rf {} \\;\n在/root下查找file1并删除\n2.which\nwhich ls\n3.locate\n1)形成数据库\nupdatedb\n2)用locate查找\nlocate httpd.conf</p>\n<p>内容搜索:</p>\n<p>1.grep\ncat file|grep linux\n搜索file中包含linux的行\ncat file1 |grep -E &quot;php|linux&quot;\n搜索file1中包含php或linux的行</p>\n<p>系统管理:</p>\n<p>1.关机\ninit 0\n2.重启\ninit 6</p>\n<p>shell常用技巧:</p>\n<p>1.tab补全\n2.| 管道</p>\n<p>网络设置:</p>\n<p>ip的配置方法\n1.临时\nifconfig eth0 192.168.200.1</p>\n<p>2.永久\nvi /etc/sysconfig/network-scripts/ifcfg-eth0\nIPADDR=192.168.100.1\nNETMASK=255.255.255.0\nONBOOT=yes</p>\n<p>service network restart\n以面ip网卡配置马上生效\n3.查看ip\nifconfig eth0</p>\n<p>压缩包</p>\n<p>1.gz压缩包\n1)制作\ntar czf file1.tar.gz file1\n2)解压\ntar xzf file1.tar.gz\n2.bz2压缩包\n1)制作\ntar cjf file1.tar.bz2 file1\n2)解压\ntar xjf file1.tar.bz2\n3.gzip压缩包\n1)制作\nzip file.zip file1 file2 file3\nzip -r file.zip /dir\n2)解压\nunzip file.zip</p>\n<p>帮助:</p>\n<p>1.-h\n2.--help\n3.man</p>\n";

/***/ }),

/***/ 38:
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
     require("vue-hot-reload-api").rerender("data-v-3fb0dfe4", module.exports)
  }
}

/***/ })

});