(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{530:function(e,t,v){"use strict";v.r(t);var _=v(4),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h3",{attrs:{id:"起因"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[e._v("#")]),e._v(" 起因")]),e._v(" "),v("p",[e._v("刚开始只用到了普通的命令简单的把一张表全部导出")]),e._v(" "),v("p",[e._v("后面表的数据越来越大 导出一张表的数据变得很慢")]),e._v(" "),v("p",[e._v("网上查了一下 导出命令可以支持查询条件")]),e._v(" "),v("p",[v("code",[e._v("--query")]),e._v(" 或缩写 "),v("code",[e._v("-q")])]),e._v(" "),v("p",[e._v("命令行必须是json格式 "),v("code",[e._v('\'{"code": "DB"}\'')])]),e._v(" "),v("p",[e._v("试了一下有效果 很不错！！！")]),e._v(" "),v("p",[e._v("然后又试了一下 "),v("code",[e._v('-q \'{"company": ObjectId("5bf50760facb21000721eaed")}\'')])]),e._v(" "),v("p",[e._v("发现竟然不支持 然后谷歌一下 "),v("code",[e._v("ObjectId")]),e._v("写法是这样的")]),e._v(" "),v("p",[v("code",[e._v('-q \'{"company":{"$oid":"5bf50760facb21000721eaed"}}\'')])]),e._v(" "),v("p",[e._v("完美")]),e._v(" "),v("h4",{attrs:{id:"后记"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#后记"}},[e._v("#")]),e._v(" 后记")]),e._v(" "),v("p",[v("code",[e._v("ISODate")]),e._v(" 查询")]),e._v(" "),v("p",[v("code",[e._v('-q \'{"createdAt":{"$gt": {"$date": "2020-02-26T01:00:00.000Z"}}}\'')])])])}),[],!1,null,null,null);t.default=a.exports}}]);