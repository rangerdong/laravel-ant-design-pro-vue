(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/other/PermissionList.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/other/PermissionList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components */ "./resources/src/components/index.js");



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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'TableList',
  components: {
    STable: _components__WEBPACK_IMPORTED_MODULE_3__["STable"]
  },
  data: function data() {
    var _this = this;

    return {
      description: '列表使用场景：后台管理中的权限管理以及角色管理，可用于基于 RBAC 设计的角色权限控制，颗粒度细到每一个操作类型。',
      visible: false,
      labelCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 5
        }
      },
      wrapperCol: {
        xs: {
          span: 24
        },
        sm: {
          span: 16
        }
      },
      form: null,
      mdl: {},
      // 高级搜索 展开/关闭
      advanced: false,
      // 查询参数
      queryParam: {},
      // 表头
      columns: [{
        title: '唯一识别码',
        dataIndex: 'id'
      }, {
        title: '权限名称',
        dataIndex: 'name'
      }, {
        title: '可操作权限',
        dataIndex: 'actions',
        scopedSlots: {
          customRender: 'actions'
        }
      }, {
        title: '状态',
        dataIndex: 'status',
        scopedSlots: {
          customRender: 'status'
        }
      }, {
        title: '操作',
        width: '150px',
        dataIndex: 'action',
        scopedSlots: {
          customRender: 'action'
        }
      }],
      // 向后端拉取可以用的操作列表
      permissionList: null,
      // 加载数据方法 必须为 Promise 对象
      loadData: function loadData(parameter) {
        return _this.$http.get('/permission', {
          params: _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()(parameter, _this.queryParam)
        }).then(function (res) {
          var result = res.result;
          result.data.map(function (permission) {
            permission.actionList = JSON.parse(permission.actionData);
            return permission;
          });
          return result;
        });
      },
      selectedRowKeys: [],
      selectedRows: []
    };
  },
  filters: {
    statusFilter: function statusFilter(status) {
      var statusMap = {
        1: '正常',
        2: '禁用'
      };
      return statusMap[status];
    }
  },
  created: function created() {
    this.loadPermissionList();
  },
  methods: {
    loadPermissionList: function loadPermissionList() {
      var _this2 = this;

      // permissionList
      new _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve) {
        var data = [{
          label: '新增',
          value: 'add',
          defaultChecked: false
        }, {
          label: '查询',
          value: 'get',
          defaultChecked: false
        }, {
          label: '修改',
          value: 'update',
          defaultChecked: false
        }, {
          label: '列表',
          value: 'query',
          defaultChecked: false
        }, {
          label: '删除',
          value: 'delete',
          defaultChecked: false
        }, {
          label: '导入',
          value: 'import',
          defaultChecked: false
        }, {
          label: '导出',
          value: 'export',
          defaultChecked: false
        }];
        setTimeout(resolve(data), 1500);
      }).then(function (res) {
        _this2.permissionList = res;
      });
    },
    handleEdit: function handleEdit(record) {
      this.mdl = _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, record);
      console.log(this.mdl);
      this.visible = true;
    },
    handleOk: function handleOk() {},
    onChange: function onChange(selectedRowKeys, selectedRows) {
      this.selectedRowKeys = selectedRowKeys;
      this.selectedRows = selectedRows;
    },
    toggleAdvanced: function toggleAdvanced() {
      this.advanced = !this.advanced;
    }
  },
  watch: {
    /*
      'selectedRows': function (selectedRows) {
        this.needTotalList = this.needTotalList.map(item => {
          return {
            ...item,
            total: selectedRows.reduce( (sum, val) => {
              return sum + val[item.dataIndex]
            }, 0)
          }
        })
      }
      */
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/other/PermissionList.vue?vue&type=template&id=3fc81dd0&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/other/PermissionList.vue?vue&type=template&id=3fc81dd0& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var this$1 = this
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a-card",
    { attrs: { bordered: false } },
    [
      _c(
        "div",
        { staticClass: "table-page-search-wrapper" },
        [
          _c(
            "a-form",
            { attrs: { layout: "inline" } },
            [
              _c(
                "a-row",
                { attrs: { gutter: 48 } },
                [
                  _c(
                    "a-col",
                    { attrs: { md: 8, sm: 24 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "角色ID" } },
                        [_c("a-input", { attrs: { placeholder: "请输入" } })],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "a-col",
                    { attrs: { md: 8, sm: 24 } },
                    [
                      _c(
                        "a-form-item",
                        { attrs: { label: "状态" } },
                        [
                          _c(
                            "a-select",
                            {
                              attrs: {
                                placeholder: "请选择",
                                "default-value": "0"
                              }
                            },
                            [
                              _c("a-select-option", { attrs: { value: "0" } }, [
                                _vm._v("全部")
                              ]),
                              _vm._v(" "),
                              _c("a-select-option", { attrs: { value: "1" } }, [
                                _vm._v("关闭")
                              ]),
                              _vm._v(" "),
                              _c("a-select-option", { attrs: { value: "2" } }, [
                                _vm._v("运行中")
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
                  _c("a-col", { attrs: { md: 8, sm: 24 } }, [
                    _c(
                      "span",
                      { staticClass: "table-page-search-submitButtons" },
                      [
                        _c("a-button", { attrs: { type: "primary" } }, [
                          _vm._v("查询")
                        ]),
                        _vm._v(" "),
                        _c(
                          "a-button",
                          { staticStyle: { "margin-left": "8px" } },
                          [_vm._v("重置")]
                        )
                      ],
                      1
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
      _c("s-table", {
        attrs: { columns: _vm.columns, data: _vm.loadData },
        scopedSlots: _vm._u([
          {
            key: "actions",
            fn: function(text, record) {
              return _c(
                "span",
                {},
                _vm._l(record.actionList, function(action, index) {
                  return _c("a-tag", { key: index }, [
                    _vm._v(_vm._s(action.describe))
                  ])
                }),
                1
              )
            }
          },
          {
            key: "status",
            fn: function(text) {
              return _c("span", {}, [
                _vm._v(
                  "\n      " + _vm._s(_vm._f("statusFilter")(text)) + "\n    "
                )
              ])
            }
          },
          {
            key: "action",
            fn: function(text, record) {
              return _c(
                "span",
                {},
                [
                  _c(
                    "a",
                    {
                      on: {
                        click: function($event) {
                          return _vm.handleEdit(record)
                        }
                      }
                    },
                    [_vm._v("编辑")]
                  ),
                  _vm._v(" "),
                  _c("a-divider", { attrs: { type: "vertical" } }),
                  _vm._v(" "),
                  _c(
                    "a-dropdown",
                    [
                      _c(
                        "a",
                        { staticClass: "ant-dropdown-link" },
                        [
                          _vm._v("\n          更多 "),
                          _c("a-icon", { attrs: { type: "down" } })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu",
                        { attrs: { slot: "overlay" }, slot: "overlay" },
                        [
                          _c("a-menu-item", [
                            _c("a", { attrs: { href: "javascript:;" } }, [
                              _vm._v("详情")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("a-menu-item", [
                            _c("a", { attrs: { href: "javascript:;" } }, [
                              _vm._v("禁用")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("a-menu-item", [
                            _c("a", { attrs: { href: "javascript:;" } }, [
                              _vm._v("删除")
                            ])
                          ])
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
          }
        ])
      }),
      _vm._v(" "),
      _c(
        "a-modal",
        {
          attrs: { title: "操作", width: 800 },
          on: { ok: _vm.handleOk },
          model: {
            value: _vm.visible,
            callback: function($$v) {
              _vm.visible = $$v
            },
            expression: "visible"
          }
        },
        [
          _c(
            "a-form",
            {
              attrs: {
                autoFormCreate: function(form) {
                  this$1.form = form
                }
              }
            },
            [
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "唯一识别码",
                    hasFeedback: "",
                    validateStatus: "success"
                  }
                },
                [
                  _c("a-input", {
                    attrs: {
                      placeholder: "唯一识别码",
                      id: "no",
                      disabled: "disabled"
                    },
                    model: {
                      value: _vm.mdl.id,
                      callback: function($$v) {
                        _vm.$set(_vm.mdl, "id", $$v)
                      },
                      expression: "mdl.id"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "权限名称",
                    hasFeedback: "",
                    validateStatus: "success"
                  }
                },
                [
                  _c("a-input", {
                    attrs: { placeholder: "起一个名字", id: "permission_name" },
                    model: {
                      value: _vm.mdl.name,
                      callback: function($$v) {
                        _vm.$set(_vm.mdl, "name", $$v)
                      },
                      expression: "mdl.name"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "状态",
                    hasFeedback: "",
                    validateStatus: "warning"
                  }
                },
                [
                  _c(
                    "a-select",
                    {
                      model: {
                        value: _vm.mdl.status,
                        callback: function($$v) {
                          _vm.$set(_vm.mdl, "status", $$v)
                        },
                        expression: "mdl.status"
                      }
                    },
                    [
                      _c("a-select-option", { attrs: { value: "1" } }, [
                        _vm._v("正常")
                      ]),
                      _vm._v(" "),
                      _c("a-select-option", { attrs: { value: "2" } }, [
                        _vm._v("禁用")
                      ])
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "描述",
                    hasFeedback: ""
                  }
                },
                [
                  _c("a-textarea", {
                    attrs: { rows: 5, placeholder: "...", id: "describe" },
                    model: {
                      value: _vm.mdl.describe,
                      callback: function($$v) {
                        _vm.$set(_vm.mdl, "describe", $$v)
                      },
                      expression: "mdl.describe"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("a-divider"),
              _vm._v(" "),
              _c(
                "a-form-item",
                {
                  attrs: {
                    labelCol: _vm.labelCol,
                    wrapperCol: _vm.wrapperCol,
                    label: "赋予权限",
                    hasFeedback: ""
                  }
                },
                [
                  _c(
                    "a-select",
                    {
                      staticStyle: { width: "100%" },
                      attrs: { mode: "multiple", allowClear: true },
                      model: {
                        value: _vm.mdl.actions,
                        callback: function($$v) {
                          _vm.$set(_vm.mdl, "actions", $$v)
                        },
                        expression: "mdl.actions"
                      }
                    },
                    _vm._l(_vm.permissionList, function(action, index) {
                      return _c(
                        "a-select-option",
                        { key: index, attrs: { value: action.value } },
                        [_vm._v(_vm._s(action.label))]
                      )
                    }),
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/other/PermissionList.vue":
/*!******************************************************!*\
  !*** ./resources/src/views/other/PermissionList.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PermissionList_vue_vue_type_template_id_3fc81dd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PermissionList.vue?vue&type=template&id=3fc81dd0& */ "./resources/src/views/other/PermissionList.vue?vue&type=template&id=3fc81dd0&");
/* harmony import */ var _PermissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PermissionList.vue?vue&type=script&lang=js& */ "./resources/src/views/other/PermissionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PermissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PermissionList_vue_vue_type_template_id_3fc81dd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PermissionList_vue_vue_type_template_id_3fc81dd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/other/PermissionList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/other/PermissionList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/src/views/other/PermissionList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/other/PermissionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/other/PermissionList.vue?vue&type=template&id=3fc81dd0&":
/*!*************************************************************************************!*\
  !*** ./resources/src/views/other/PermissionList.vue?vue&type=template&id=3fc81dd0& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionList_vue_vue_type_template_id_3fc81dd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PermissionList.vue?vue&type=template&id=3fc81dd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/other/PermissionList.vue?vue&type=template&id=3fc81dd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionList_vue_vue_type_template_id_3fc81dd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PermissionList_vue_vue_type_template_id_3fc81dd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);