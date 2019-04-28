(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/dashboard/Analysis.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components */ "./resources/src/components/index.js");
/* harmony import */ var _utils_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/mixin */ "./resources/src/utils/mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var rankList = [];

for (var i = 0; i < 7; i++) {
  rankList.push({
    name: '白鹭岛 ' + (i + 1) + ' 号店',
    total: 1234.56 - i * 100
  });
}

var searchUserData = [];

for (var _i = 0; _i < 7; _i++) {
  searchUserData.push({
    x: moment__WEBPACK_IMPORTED_MODULE_0___default()().add(_i, 'days').format('YYYY-MM-DD'),
    y: Math.ceil(Math.random() * 10)
  });
}

var searchUserScale = [{
  dataKey: 'x',
  alias: '时间'
}, {
  dataKey: 'y',
  alias: '用户数',
  min: 0,
  max: 10
}];
var searchTableColumns = [{
  dataIndex: 'index',
  title: '排名',
  width: 90
}, {
  dataIndex: 'keyword',
  title: '搜索关键词'
}, {
  dataIndex: 'count',
  title: '用户数'
}, {
  dataIndex: 'range',
  title: '周涨幅',
  align: 'right',
  sorter: function sorter(a, b) {
    return a.range - b.range;
  },
  scopedSlots: {
    customRender: 'range'
  }
}];
var searchData = [];

for (var _i2 = 0; _i2 < 50; _i2 += 1) {
  searchData.push({
    index: _i2 + 1,
    keyword: "\u641C\u7D22\u5173\u952E\u8BCD-".concat(_i2),
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor(Math.random() * 10 % 2)
  });
}

var DataSet = __webpack_require__(/*! @antv/data-set */ "./node_modules/@antv/data-set/build/data-set.js");

var sourceData = [{
  item: '家用电器',
  count: 32.2
}, {
  item: '食用酒水',
  count: 21
}, {
  item: '个护健康',
  count: 17
}, {
  item: '服饰箱包',
  count: 13
}, {
  item: '母婴产品',
  count: 9
}, {
  item: '其他',
  count: 7.8
}];
var pieScale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%'
}];
var dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent'
});
var pieData = dv.rows;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Analysis',
  mixins: [_utils_mixin__WEBPACK_IMPORTED_MODULE_2__["mixinDevice"]],
  components: {
    ChartCard: _components__WEBPACK_IMPORTED_MODULE_1__["ChartCard"],
    MiniArea: _components__WEBPACK_IMPORTED_MODULE_1__["MiniArea"],
    MiniBar: _components__WEBPACK_IMPORTED_MODULE_1__["MiniBar"],
    MiniProgress: _components__WEBPACK_IMPORTED_MODULE_1__["MiniProgress"],
    RankList: _components__WEBPACK_IMPORTED_MODULE_1__["RankList"],
    Bar: _components__WEBPACK_IMPORTED_MODULE_1__["Bar"],
    Trend: _components__WEBPACK_IMPORTED_MODULE_1__["Trend"],
    NumberInfo: _components__WEBPACK_IMPORTED_MODULE_1__["NumberInfo"],
    MiniSmoothArea: _components__WEBPACK_IMPORTED_MODULE_1__["MiniSmoothArea"]
  },
  data: function data() {
    return {
      loading: true,
      rankList: rankList,
      // 搜索用户数
      searchUserData: searchUserData,
      searchUserScale: searchUserScale,
      searchTableColumns: searchTableColumns,
      searchData: searchData,
      //
      pieScale: pieScale,
      pieData: pieData,
      sourceData: sourceData,
      pieStyle: {
        stroke: '#fff',
        lineWidth: 1
      }
    };
  },
  created: function created() {
    var _this = this;

    setTimeout(function () {
      _this.loading = !_this.loading;
    }, 1000);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".extra-wrapper[data-v-25ccf75b] {\n  line-height: 55px;\n  padding-right: 24px;\n}\n.extra-wrapper .extra-item[data-v-25ccf75b] {\n  display: inline-block;\n  margin-right: 24px;\n}\n.extra-wrapper .extra-item a[data-v-25ccf75b] {\n  margin-left: 24px;\n}\n.antd-pro-pages-dashboard-analysis-twoColLayout[data-v-25ccf75b] {\n  position: relative;\n  display: flex;\n  display: block;\n  flex-flow: row wrap;\n}\n.antd-pro-pages-dashboard-analysis-twoColLayout.desktop div[class^=ant-col][data-v-25ccf75b]:last-child {\n  position: absolute;\n  right: 0;\n  height: 100%;\n}\n.antd-pro-pages-dashboard-analysis-salesCard[data-v-25ccf75b] {\n  height: calc(100% - 24px);\n}\n.antd-pro-pages-dashboard-analysis-salesCard[data-v-25ccf75b] .ant-card-head {\n  position: relative;\n}\n.dashboard-analysis-iconGroup i[data-v-25ccf75b] {\n  margin-left: 16px;\n  color: rgba(0, 0, 0, 0.45);\n  cursor: pointer;\n  transition: color 0.32s;\n  color: black;\n}\n.analysis-salesTypeRadio[data-v-25ccf75b] {\n  position: absolute;\n  right: 54px;\n  bottom: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js??ref--10!../../../../node_modules/vue-loader/lib??vue-loader-options!./Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=template&id=25ccf75b&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/dashboard/Analysis.vue?vue&type=template&id=25ccf75b&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "page-header-index-wide" },
    [
      _c(
        "a-row",
        { attrs: { gutter: 24 } },
        [
          _c(
            "a-col",
            {
              style: { marginBottom: "24px" },
              attrs: { sm: 24, md: 12, xl: 6 }
            },
            [
              _c(
                "chart-card",
                {
                  attrs: {
                    loading: _vm.loading,
                    title: "总销售额",
                    total: "￥126,560"
                  }
                },
                [
                  _c(
                    "a-tooltip",
                    {
                      attrs: { slot: "action", title: "指标说明" },
                      slot: "action"
                    },
                    [_c("a-icon", { attrs: { type: "info-circle-o" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "trend",
                        {
                          staticStyle: { "margin-right": "16px" },
                          attrs: { flag: "up" }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "term" }, slot: "term" },
                            [_vm._v("周同比")]
                          ),
                          _vm._v("\n            12%\n          ")
                        ]
                      ),
                      _vm._v(" "),
                      _c("trend", { attrs: { flag: "down" } }, [
                        _c("span", { attrs: { slot: "term" }, slot: "term" }, [
                          _vm._v("日同比")
                        ]),
                        _vm._v("\n            11%\n          ")
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "footer" }, [
                    _vm._v("日均销售额"),
                    _c("span", [_vm._v("￥ 234.56")])
                  ])
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            {
              style: { marginBottom: "24px" },
              attrs: { sm: 24, md: 12, xl: 6 }
            },
            [
              _c(
                "chart-card",
                {
                  attrs: {
                    loading: _vm.loading,
                    title: "访问量",
                    total: _vm._f("NumberFormat")(8846)
                  }
                },
                [
                  _c(
                    "a-tooltip",
                    {
                      attrs: { slot: "action", title: "指标说明" },
                      slot: "action"
                    },
                    [_c("a-icon", { attrs: { type: "info-circle-o" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", [_c("mini-area")], 1),
                  _vm._v(" "),
                  _c("template", { slot: "footer" }, [
                    _vm._v("日访问量"),
                    _c("span", [
                      _vm._v(" " + _vm._s(_vm._f("NumberFormat")("1234")))
                    ])
                  ])
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            {
              style: { marginBottom: "24px" },
              attrs: { sm: 24, md: 12, xl: 6 }
            },
            [
              _c(
                "chart-card",
                {
                  attrs: {
                    loading: _vm.loading,
                    title: "支付笔数",
                    total: _vm._f("NumberFormat")(6560)
                  }
                },
                [
                  _c(
                    "a-tooltip",
                    {
                      attrs: { slot: "action", title: "指标说明" },
                      slot: "action"
                    },
                    [_c("a-icon", { attrs: { type: "info-circle-o" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", [_c("mini-bar")], 1),
                  _vm._v(" "),
                  _c("template", { slot: "footer" }, [
                    _vm._v("转化率 "),
                    _c("span", [_vm._v("60%")])
                  ])
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-col",
            {
              style: { marginBottom: "24px" },
              attrs: { sm: 24, md: 12, xl: 6 }
            },
            [
              _c(
                "chart-card",
                {
                  attrs: {
                    loading: _vm.loading,
                    title: "运营活动效果",
                    total: "78%"
                  }
                },
                [
                  _c(
                    "a-tooltip",
                    {
                      attrs: { slot: "action", title: "指标说明" },
                      slot: "action"
                    },
                    [_c("a-icon", { attrs: { type: "info-circle-o" } })],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c("mini-progress", {
                        attrs: {
                          color: "rgb(19, 194, 194)",
                          target: 80,
                          percentage: 78,
                          height: "8px"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "footer" },
                    [
                      _c(
                        "trend",
                        {
                          staticStyle: { "margin-right": "16px" },
                          attrs: { flag: "down" }
                        },
                        [
                          _c(
                            "span",
                            { attrs: { slot: "term" }, slot: "term" },
                            [_vm._v("同周比")]
                          ),
                          _vm._v("\n            12%\n          ")
                        ]
                      ),
                      _vm._v(" "),
                      _c("trend", { attrs: { flag: "up" } }, [
                        _c("span", { attrs: { slot: "term" }, slot: "term" }, [
                          _vm._v("日环比")
                        ]),
                        _vm._v("\n            80%\n          ")
                      ])
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-card",
        {
          attrs: {
            loading: _vm.loading,
            bordered: false,
            "body-style": { padding: "0" }
          }
        },
        [
          _c(
            "div",
            { staticClass: "salesCard" },
            [
              _c(
                "a-tabs",
                {
                  attrs: {
                    "default-active-key": "1",
                    size: "large",
                    "tab-bar-style": {
                      marginBottom: "24px",
                      paddingLeft: "16px"
                    }
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "extra-wrapper",
                      attrs: { slot: "tabBarExtraContent" },
                      slot: "tabBarExtraContent"
                    },
                    [
                      _c("div", { staticClass: "extra-item" }, [
                        _c("a", [_vm._v("今日")]),
                        _vm._v(" "),
                        _c("a", [_vm._v("本周")]),
                        _vm._v(" "),
                        _c("a", [_vm._v("本月")]),
                        _vm._v(" "),
                        _c("a", [_vm._v("本年")])
                      ]),
                      _vm._v(" "),
                      _c("a-range-picker", { style: { width: "256px" } })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-tab-pane",
                    { key: "1", attrs: { loading: "true", tab: "销售额" } },
                    [
                      _c(
                        "a-row",
                        [
                          _c(
                            "a-col",
                            {
                              attrs: { xl: 16, lg: 12, md: 12, sm: 24, xs: 24 }
                            },
                            [_c("bar", { attrs: { title: "销售额排行" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "a-col",
                            {
                              attrs: { xl: 8, lg: 12, md: 12, sm: 24, xs: 24 }
                            },
                            [
                              _c("rank-list", {
                                attrs: {
                                  title: "门店销售排行榜",
                                  list: _vm.rankList
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-tab-pane",
                    { key: "2", attrs: { tab: "访问量" } },
                    [
                      _c(
                        "a-row",
                        [
                          _c(
                            "a-col",
                            {
                              attrs: { xl: 16, lg: 12, md: 12, sm: 24, xs: 24 }
                            },
                            [_c("bar", { attrs: { title: "销售额趋势" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "a-col",
                            {
                              attrs: { xl: 8, lg: 12, md: 12, sm: 24, xs: 24 }
                            },
                            [
                              _c("rank-list", {
                                attrs: {
                                  title: "门店销售排行榜",
                                  list: _vm.rankList
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "antd-pro-pages-dashboard-analysis-twoColLayout",
          class: _vm.isDesktop() ? "desktop" : ""
        },
        [
          _c(
            "a-row",
            { attrs: { gutter: 24 } },
            [
              _c(
                "a-col",
                { attrs: { xl: 12, lg: 24, md: 24, sm: 24, xs: 24 } },
                [
                  _c(
                    "a-card",
                    {
                      style: { marginTop: "24px", minHeight: "500px" },
                      attrs: {
                        loading: _vm.loading,
                        bordered: false,
                        title: "线上热门搜索"
                      }
                    },
                    [
                      _c(
                        "a-dropdown",
                        {
                          attrs: {
                            slot: "extra",
                            trigger: ["click"],
                            placement: "bottomLeft"
                          },
                          slot: "extra"
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "ant-dropdown-link",
                              attrs: { href: "#" }
                            },
                            [_c("a-icon", { attrs: { type: "ellipsis" } })],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "a-menu",
                            { attrs: { slot: "overlay" }, slot: "overlay" },
                            [
                              _c("a-menu-item", [
                                _c("a", { attrs: { href: "javascript:;" } }, [
                                  _vm._v("操作一")
                                ])
                              ]),
                              _vm._v(" "),
                              _c("a-menu-item", [
                                _c("a", { attrs: { href: "javascript:;" } }, [
                                  _vm._v("操作二")
                                ])
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-row",
                        { attrs: { gutter: 68 } },
                        [
                          _c(
                            "a-col",
                            {
                              style: { marginBottom: " 24px" },
                              attrs: { xs: 24, sm: 12 }
                            },
                            [
                              _c(
                                "number-info",
                                { attrs: { total: 12321, "sub-total": 17.1 } },
                                [
                                  _c(
                                    "span",
                                    {
                                      attrs: { slot: "subtitle" },
                                      slot: "subtitle"
                                    },
                                    [
                                      _c("span", [_vm._v("搜索用户数")]),
                                      _vm._v(" "),
                                      _c(
                                        "a-tooltip",
                                        {
                                          attrs: {
                                            slot: "action",
                                            title: "指标说明"
                                          },
                                          slot: "action"
                                        },
                                        [
                                          _c("a-icon", {
                                            style: { marginLeft: "8px" },
                                            attrs: { type: "info-circle-o" }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _c("mini-smooth-area", {
                                    style: { height: "45px" },
                                    attrs: {
                                      dataSource: _vm.searchUserData,
                                      scale: _vm.searchUserScale
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "a-col",
                            {
                              style: { marginBottom: " 24px" },
                              attrs: { xs: 24, sm: 12 }
                            },
                            [
                              _c(
                                "number-info",
                                {
                                  attrs: {
                                    total: 2.7,
                                    "sub-total": 26.2,
                                    status: "down"
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      attrs: { slot: "subtitle" },
                                      slot: "subtitle"
                                    },
                                    [
                                      _c("span", [_vm._v("人均搜索次数")]),
                                      _vm._v(" "),
                                      _c(
                                        "a-tooltip",
                                        {
                                          attrs: {
                                            slot: "action",
                                            title: "指标说明"
                                          },
                                          slot: "action"
                                        },
                                        [
                                          _c("a-icon", {
                                            style: { marginLeft: "8px" },
                                            attrs: { type: "info-circle-o" }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                [
                                  _c("mini-smooth-area", {
                                    style: { height: "45px" },
                                    attrs: {
                                      dataSource: _vm.searchUserData,
                                      scale: _vm.searchUserScale
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "ant-table-wrapper" },
                        [
                          _c("a-table", {
                            attrs: {
                              "row-key": "index",
                              size: "small",
                              columns: _vm.searchTableColumns,
                              dataSource: _vm.searchData,
                              pagination: { pageSize: 5 }
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "range",
                                fn: function(text, record) {
                                  return _c(
                                    "span",
                                    {},
                                    [
                                      _c(
                                        "trend",
                                        {
                                          attrs: {
                                            flag:
                                              record.status === 0
                                                ? "up"
                                                : "down"
                                          }
                                        },
                                        [
                                          _vm._v(
                                            "\n                  " +
                                              _vm._s(text) +
                                              "%\n                "
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  )
                                }
                              }
                            ])
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-col",
                { attrs: { xl: 12, lg: 24, md: 24, sm: 24, xs: 24 } },
                [
                  _c(
                    "a-card",
                    {
                      staticClass:
                        "antd-pro-pages-dashboard-analysis-salesCard",
                      style: { marginTop: "24px", minHeight: "500px" },
                      attrs: {
                        loading: _vm.loading,
                        bordered: false,
                        title: "销售额类别占比"
                      }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticStyle: { height: "inherit" },
                          attrs: { slot: "extra" },
                          slot: "extra"
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "dashboard-analysis-iconGroup" },
                            [
                              _c(
                                "a-dropdown",
                                {
                                  attrs: {
                                    trigger: ["click"],
                                    placement: "bottomLeft"
                                  }
                                },
                                [
                                  _c("a-icon", {
                                    staticClass: "ant-dropdown-link",
                                    attrs: { type: "ellipsis" }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "a-menu",
                                    {
                                      attrs: { slot: "overlay" },
                                      slot: "overlay"
                                    },
                                    [
                                      _c("a-menu-item", [
                                        _c(
                                          "a",
                                          { attrs: { href: "javascript:;" } },
                                          [_vm._v("操作一")]
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c("a-menu-item", [
                                        _c(
                                          "a",
                                          { attrs: { href: "javascript:;" } },
                                          [_vm._v("操作二")]
                                        )
                                      ])
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "analysis-salesTypeRadio" },
                            [
                              _c(
                                "a-radio-group",
                                { attrs: { defaultValue: "a" } },
                                [
                                  _c(
                                    "a-radio-button",
                                    { attrs: { value: "a" } },
                                    [_vm._v("全部渠道")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a-radio-button",
                                    { attrs: { value: "b" } },
                                    [_vm._v("线上")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a-radio-button",
                                    { attrs: { value: "c" } },
                                    [_vm._v("门店")]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c("h4", [_vm._v("销售额")]),
                      _vm._v(" "),
                      _c("div", [
                        _c(
                          "div",
                          [
                            _c(
                              "v-chart",
                              {
                                attrs: {
                                  "force-fit": true,
                                  height: 405,
                                  data: _vm.pieData,
                                  scale: _vm.pieScale
                                }
                              },
                              [
                                _c("v-tooltip", {
                                  attrs: {
                                    showTitle: false,
                                    dataKey: "item*percent"
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-axis"),
                                _vm._v(" "),
                                _c("v-legend", { attrs: { dataKey: "item" } }),
                                _vm._v(" "),
                                _c("v-pie", {
                                  attrs: {
                                    position: "percent",
                                    color: "item",
                                    vStyle: _vm.pieStyle
                                  }
                                }),
                                _vm._v(" "),
                                _c("v-coord", {
                                  attrs: {
                                    type: "theta",
                                    radius: 0.75,
                                    innerRadius: 0.6
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/dashboard/Analysis.vue":
/*!****************************************************!*\
  !*** ./resources/src/views/dashboard/Analysis.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Analysis_vue_vue_type_template_id_25ccf75b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Analysis.vue?vue&type=template&id=25ccf75b&scoped=true& */ "./resources/src/views/dashboard/Analysis.vue?vue&type=template&id=25ccf75b&scoped=true&");
/* harmony import */ var _Analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Analysis.vue?vue&type=script&lang=js& */ "./resources/src/views/dashboard/Analysis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Analysis_vue_vue_type_style_index_0_id_25ccf75b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true& */ "./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Analysis_vue_vue_type_template_id_25ccf75b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Analysis_vue_vue_type_template_id_25ccf75b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "25ccf75b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/dashboard/Analysis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/dashboard/Analysis.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/src/views/dashboard/Analysis.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Analysis.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true& ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_style_index_0_id_25ccf75b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--8-2!../../../../node_modules/less-loader/dist/cjs.js!../../../../node_modules/less-loader/dist/cjs.js??ref--10!../../../../node_modules/vue-loader/lib??vue-loader-options!./Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=style&index=0&id=25ccf75b&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_style_index_0_id_25ccf75b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_style_index_0_id_25ccf75b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_style_index_0_id_25ccf75b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_style_index_0_id_25ccf75b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_style_index_0_id_25ccf75b_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/views/dashboard/Analysis.vue?vue&type=template&id=25ccf75b&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/src/views/dashboard/Analysis.vue?vue&type=template&id=25ccf75b&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_template_id_25ccf75b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Analysis.vue?vue&type=template&id=25ccf75b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/dashboard/Analysis.vue?vue&type=template&id=25ccf75b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_template_id_25ccf75b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Analysis_vue_vue_type_template_id_25ccf75b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);