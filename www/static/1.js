webpackJsonp([1],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(30),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/tangjiang/Personal/Github/markit/app/views/linux/linux下的文件结构.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] linux下的文件结构.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f34df8c", Component.options)
  } else {
    hotAPI.reload("data-v-2f34df8c", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_linux_md__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_linux_md___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_linux_md__);
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            md: __WEBPACK_IMPORTED_MODULE_0__Users_tangjiang_Personal_Github_markit_pages_linux_linux_md___default.a
        };
    }
});

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

module.exports = "<h1 id=\"linux-\">linux下的文件结构</h1>\n<p>#Linux</p>\n<p>Linux继承了unix操作系统结构清晰的特点。在linux下的文件结构非常有条理。但是，上述的优点只有在对linux相当熟悉时，才能体会到。 </p>\n<p>/vmlinuz</p>\n<pre><code> 我们已经知道，每一个linux都有一个内核（vmlinuz），我们在这个内核上添加上可以完成各种特定功能的模块，每个模块就体现在 linux中各种不同的目录上。当然，各种不同的发行套件，其目录有细小的差别，但主要结构都是一样的。我们还要将linux的功能模块和各种应用程序结合起来，这样，才能使你的 linux系统为你服务。在/vmlinuz目录下存放的就是系统的内核。还记得我们在配置lilo时，提到过这个内核吗？\n</code></pre><p>/bin \n　　显而易见，bin 就是二进制（binary）英文缩写。在一般的系统当中，你都可以在这个目录下找到linux常用的命令。在有的版本中你还会找到一些和根目录下相同的目录。</p>\n<p>/boot \n　　在这个目录下存放的都是系统启动时要用到的程序。我们在使用lilo引导linux的时候，会用到这里的一些信息。</p>\n<p>/dev \n　　dev 是设备(device)的英文缩写。这个目录对所有的用户都十分重要。因为在这个目录中包含了所有linux系统中使用的外部设备。但是这里并不是放的外部设备的驱动程序。这一点和我们常用的windows, dos操作系统不一样。它实际上是一个访问这些外部设备的端口。我们可以非常方便地去访问这些外部设备，和访问一个文件，一个目录没有任何区别。 例如：我们在系统中键入：cd _dev_cdrom 我们就可以看到光驱中的文件了。同样道理，我们键入：cd _dev_mouse 就可以看看鼠标的相关文件。在这个目录下，有一个null设备，这个东西本身没有任何意义。如果你向这个目录写入文件或内容，他们统统有去无回。命令重定向中有 ：ls -al 1&gt; list.right 2&gt; _dev_null</p>\n<p>/cdrom \n　　这个目录在你刚刚安装系统的时候是空的。你可以将光驱文件系统挂在这个目录下。例如：mount _dev_cdrom /cdrom</p>\n<p>/etc \n　　etc这个目录是linux系统中最重要的目录之一。在这个目录下存放了系统管理时要用到的各种配置文件和子目录。我们要用到的网络配置文件，文件系统，x系统配置文件，设备配置信息，设置用户信息等都在这个目录下。</p>\n<p>/sbin \n　　这个目录是用来存放系统管理员的系统管理程序。</p>\n<p>/home \n　　如果我们建立一个用户，用户名是&quot;xx&quot;,那么在_home目录下就有一个对应的_home/xx路径，用来存放用户的主目录。</p>\n<p>/lib \n　　lib是库（library）英文缩写。这个目录是用来存放系统动态连接共享库的。几乎所有的应用程序都会用到这个目录下的共享库。因此，千万不要轻易对这个目录进行什么操作，一旦发生问题，你的系统就不能工作了。</p>\n<p>/lost+found \n　　这个目录在大多数情况下都是空的。但是如果你正在工作突然停电，或是没有用正常方式关机，在你重新启动机器的时候，有些文件就会找不到应该存放的地方，对于这些文件，系统将他们放在这个目录下，就象为无家可归的人提供一个临时住所。</p>\n<p>/mnt \n　　这个目录在一般情况下也是空的。你可以临时将别的文件系统挂在这个目录下。</p>\n<p>/proc \n　　可以在这个目录下获取系统信息。这些信息是在内存中，由系统自己产生的。</p>\n<p>/root \n　　如果你是以超级用户的身份登录的，这个就是超级用户的主目录。</p>\n<p>/tmp \n　　用来存放不同程序执行时产生的临时文件。</p>\n<p>/usr \n　　这是linux系统中占用硬盘空间最大的目录。用户的很多应用程序和文件都存放在这个目录下。</p>\n<p>补充资料:\n/              根目录<br>bin            系统中最主要的可执行文件的存放，Linux中常用的命令,一般用户和超级用户常用的命令，如ls,su,mout<br>boot           存放系统启动时的内核文件和其他的一些信息文件<br>dev            这个目录中的所有文件都是特殊文件（设备文件），Linux把所有的外设都看成是一个文件。就是说，用户对代表该               外设的文件的操作，就表示对该外设的操作。所以，_dev对于系统而言相当重要。比如，要对软盘进行EXT2文件系               统的格式化，就要这样做：mke2fs /dev_fd0<br>etc            这是系统内部存放配置文件的主要位置，一般与系统关系十分密切的配置文件都放在该目录下。也就是说，对系统               的配置主要是对该目录中的文件进行修改。在该目录中，大多是文本文件，如inittab,lilo.conf<br>home           这是系统缺省普通用户的主目录的要目录，也就是普通用户的主目录设置为：<em>home</em>[userid]目录<br>initrd         使用RAM Disk方式启动时用于挂载RAM设备文件<br>lib            存放系统的链接库文件。若没有该目录，则系统就无法正常运行。<br>lost+found     文件系统恢复时使用<br>misc           备用目录<br>mnt            这是系统提供安装额外文件系统时候的安装目录，如挂载软驱，光驱等。其主要的目的是为了不打乱原来的目录系                 统结构<br>opt            用于安装一些给所有用户使用的文件或程序<br>proc           这个目录中的文件其实不是存放在磁盘上的，该目录的文件系统叫做proc文件系统，是系统内核的映象。也就是说               ，该目录里的文件存放在系统内存中。可以通过查看这些文件来了解系统的运行情况，同时也可能通过修改这些文               件改变某些内核运行参数。<br>root           超级用户root的缺省主目录，对一般用户来说是没有该目录的写权限的。一般用户自已的文件都拷贝到自已的主目               录下，以免打乱原来的系统层次结构<br>sbin           与/bin一样，主要是存放可执行文件，只不过这里的可执行文件主要是给超用户管理系统时使用的，普通用户几乎                 没有权限执行其中的程序。其中的文件有mke2fs,ifconfig等<br>tftpboot       TFTP（普通文件传输协议）服务器缺省文件主目录<br>tmp            与DOS或WINDOWS的TEMP目录相同，该目录中存放临时文件<br>usr            这个目录是Linux系统中占用磁盘最大的目录，有许多应用程序，其子目录也比较复杂<br>var            存放一些系统记录文件，HTTP和FTP服务器的数据也存放在这个目录的子目录中。</p>\n";

/***/ }),

/***/ 37:
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
     require("vue-hot-reload-api").rerender("data-v-2f34df8c", module.exports)
  }
}

/***/ })

});