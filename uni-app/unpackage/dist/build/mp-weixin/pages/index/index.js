(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1027:function(e,t,n){"use strict";(function(e){n("79c3");i(n("66fd"));var t=i(n("a6c9"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"3d1a":function(e,t,n){"use strict";var i=n("4c99"),r=n.n(i);r.a},"4c99":function(e,t,n){},"5e9c":function(e,t,n){"use strict";n.r(t);var i=n("f927"),r=n.n(i);for(var c in i)"default"!==c&&function(e){n.d(t,e,(function(){return i[e]}))}(c);t["default"]=r.a},a6c9:function(e,t,n){"use strict";n.r(t);var i=n("cde8"),r=n("5e9c");for(var c in r)"default"!==c&&function(e){n.d(t,e,(function(){return r[e]}))}(c);n("3d1a");var o,a=n("f0c5"),s=Object(a["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=s.exports},cde8:function(e,t,n){"use strict";var i,r=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}))},f927:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n("2f62");function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){n.e("pages/index/component/swipers").then(function(){return resolve(n("7c431"))}.bind(null,n)).catch(n.oe)},s=function(){n.e("pages/index/component/list").then(function(){return resolve(n("f2b7"))}.bind(null,n)).catch(n.oe)},u={data:function(){return{indexNavList:[],indexTellList:[]}},components:{swipers:a,lists:s},computed:c({},(0,i.mapState)(["indexsNavList","indexsTellList"])),mounted:function(){this.indexNavList=this.indexsNavList.list,this.indexTellList=this.indexsTellList.list},created:function(){},methods:{navigateGoTo:function(t){e.navigateTo({url:t})},switchTab:function(t){e.switchTab({url:t})},handleTabs:function(e,t){switch(t){case 0:this.navigateGoTo("/pages/my/component/web-view?path=https://map.sogou.com/m/webapp/m.html");break;case 1:this.switchTab("/pages/ship/ship");break;case 2:this.switchTab("/pages/goods/goods");break;case 3:this.navigateGoTo("/pages/index/order");break}}}};t.default=u}).call(this,n("543d")["default"])}},[["1027","common/runtime","common/vendor"]]]);