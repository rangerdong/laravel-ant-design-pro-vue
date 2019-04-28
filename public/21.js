(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/role/RoleList.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/role/RoleList.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_manage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/manage */ "./resources/src/api/manage.js");
/* harmony import */ var _utils_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/mixin */ "./resources/src/utils/mixin.js");
/* harmony import */ var _utils_permissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/permissions */ "./resources/src/utils/permissions.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lodash.pick */ "./node_modules/lodash.pick/index.js");
/* harmony import */ var lodash_pick__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash_pick__WEBPACK_IMPORTED_MODULE_7__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RoleList',
  mixins: [_utils_mixin__WEBPACK_IMPORTED_MODULE_5__["mixinDevice"]],
  components: {},
  data: function data() {
    return {
      form: this.$form.createForm(this),
      mdl: {},
      roles: [],
      permissions: []
    };
  },
  created: function created() {
    var _this = this;

    Object(_api_manage__WEBPACK_IMPORTED_MODULE_4__["getRoleList"])().then(function (res) {
      _this.roles = res.result.data;

      _this.roles.push({
        id: '-1',
        name: '新增角色',
        describe: '新增一个角色'
      });

      console.log('this.roles', _this.roles);
    });
    this.loadPermissions();
  },
  methods: {
    callback: function callback(val) {
      console.log(val);
    },
    add: function add() {
      this.edit({
        id: 0
      });
    },
    edit: function edit(record) {
      var _this2 = this;

      this.mdl = _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()({}, record); // 有权限表，处理勾选

      if (this.mdl.permissions && this.permissions) {
        // 先处理要勾选的权限结构
        var permissionsAction = {};
        this.mdl.permissions.forEach(function (permission) {
          permissionsAction[permission.permissionId] = permission.actionEntitySet.map(function (entity) {
            return entity.action;
          });
        });
        console.log('permissionsAction', permissionsAction); // 把权限表遍历一遍，设定要勾选的权限 action

        this.permissions.forEach(function (permission) {
          var selected = permissionsAction[permission.id];
          permission.selected = selected || [];

          _this2.onChangeCheck(permission);
        });
        console.log('this.permissions', this.permissions);
      }

      this.$nextTick(function () {
        _this2.form.setFieldsValue(lodash_pick__WEBPACK_IMPORTED_MODULE_7___default()(_this2.mdl, 'id', 'name', 'status', 'describe'));
      });
      console.log('this.mdl', this.mdl);
    },
    onChangeCheck: function onChangeCheck(permission) {
      permission.indeterminate = !!permission.selected.length && permission.selected.length < permission.actionsOptions.length;
      permission.checkedAll = permission.selected.length === permission.actionsOptions.length;
    },
    onChangeCheckAll: function onChangeCheckAll(e, permission) {
      console.log('permission:', permission);

      _Users_donghuaibin_Codes_dnmp_codes_ticket_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_3___default()(permission, {
        selected: e.target.checked ? permission.actionsOptions.map(function (obj) {
          return obj.value;
        }) : [],
        indeterminate: false,
        checkedAll: e.target.checked
      });
    },
    loadPermissions: function loadPermissions() {
      var _this3 = this;

      Object(_api_manage__WEBPACK_IMPORTED_MODULE_4__["getPermissions"])().then(function (res) {
        var result = res.result;
        _this3.permissions = result.map(function (permission) {
          var options = Object(_utils_permissions__WEBPACK_IMPORTED_MODULE_6__["actionToObject"])(permission.actionData);
          permission.checkedAll = false;
          permission.selected = [];
          permission.indeterminate = false;
          permission.actionsOptions = options.map(function (option) {
            return {
              label: option.describe,
              value: option.action
            };
          });
          return permission;
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/role/RoleList.vue?vue&type=template&id=d8acef8e&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/role/RoleList.vue?vue&type=template&id=d8acef8e&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
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
    "a-card",
    { style: { height: "100%" }, attrs: { bordered: false } },
    [
      _c(
        "a-row",
        { attrs: { gutter: 24 } },
        [
          _c(
            "a-col",
            { attrs: { md: 4 } },
            [
              _c("a-list", {
                attrs: { itemLayout: "vertical", dataSource: _vm.roles },
                scopedSlots: _vm._u([
                  {
                    key: "renderItem",
                    fn: function(item, index) {
                      return _c(
                        "a-list-item",
                        { key: index },
                        [
                          _c(
                            "a-list-item-meta",
                            { style: { marginBottom: "0" } },
                            [
                              _c(
                                "span",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    display: "block"
                                  },
                                  attrs: { slot: "description" },
                                  slot: "description"
                                },
                                [_vm._v(_vm._s(item.describe))]
                              ),
                              _vm._v(" "),
                              _c(
                                "a",
                                {
                                  staticStyle: {
                                    "text-align": "center",
                                    display: "block"
                                  },
                                  attrs: { slot: "title" },
                                  on: {
                                    click: function($event) {
                                      return _vm.edit(item)
                                    }
                                  },
                                  slot: "title"
                                },
                                [_vm._v(_vm._s(item.name))]
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
          ),
          _vm._v(" "),
          _c("a-col", { attrs: { md: 20 } }, [
            _c(
              "div",
              { staticStyle: { "max-width": "800px" } },
              [
                _vm.isMobile() ? _c("a-divider") : _vm._e(),
                _vm._v(" "),
                _vm.mdl.id
                  ? _c("div", [
                      _c("h3", [_vm._v("角色：" + _vm._s(_vm.mdl.name))])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a-form",
                  {
                    attrs: {
                      form: _vm.form,
                      layout: _vm.isMobile() ? "vertical" : "horizontal"
                    }
                  },
                  [
                    _c(
                      "a-form-item",
                      { attrs: { label: "唯一键" } },
                      [
                        _c("a-input", {
                          directives: [
                            {
                              name: "decorator",
                              rawName: "v-decorator",
                              value: [
                                "id",
                                {
                                  rules: [
                                    {
                                      required: true,
                                      message: "Please input unique key!"
                                    }
                                  ]
                                }
                              ],
                              expression:
                                "[ 'id', {rules: [{ required: true, message: 'Please input unique key!' }]} ]"
                            }
                          ],
                          attrs: { placeholder: "请填写唯一键" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "a-form-item",
                      { attrs: { label: "角色名称" } },
                      [
                        _c("a-input", {
                          directives: [
                            {
                              name: "decorator",
                              rawName: "v-decorator",
                              value: [
                                "name",
                                {
                                  rules: [
                                    {
                                      required: true,
                                      message: "Please input role name!"
                                    }
                                  ]
                                }
                              ],
                              expression:
                                "[ 'name', {rules: [{ required: true, message: 'Please input role name!' }]} ]"
                            }
                          ],
                          attrs: { placeholder: "请填写角色名称" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "a-form-item",
                      { attrs: { label: "状态" } },
                      [
                        _c(
                          "a-select",
                          {
                            directives: [
                              {
                                name: "decorator",
                                rawName: "v-decorator",
                                value: ["status", { rules: [] }],
                                expression: "[ 'status', {rules: []} ]"
                              }
                            ]
                          },
                          [
                            _c("a-select-option", { attrs: { value: 1 } }, [
                              _vm._v("正常")
                            ]),
                            _vm._v(" "),
                            _c("a-select-option", { attrs: { value: 2 } }, [
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
                      { attrs: { label: "备注说明" } },
                      [
                        _c("a-textarea", {
                          directives: [
                            {
                              name: "decorator",
                              rawName: "v-decorator",
                              value: [
                                "describe",
                                {
                                  rules: [
                                    {
                                      required: true,
                                      message: "Please input role name!"
                                    }
                                  ]
                                }
                              ],
                              expression:
                                "[ 'describe', {rules: [{ required: true, message: 'Please input role name!' }]} ]"
                            }
                          ],
                          attrs: { row: 3, placeholder: "请填写角色名称" }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "a-form-item",
                      { attrs: { label: "拥有权限" } },
                      _vm._l(_vm.permissions, function(permission, index) {
                        return _c(
                          "a-row",
                          { key: index, attrs: { gutter: 16 } },
                          [
                            _c("a-col", { attrs: { xl: 4, lg: 24 } }, [
                              _vm._v(
                                "\n                " +
                                  _vm._s(permission.name) +
                                  "：\n              "
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "a-col",
                              { attrs: { xl: 20, lg: 24 } },
                              [
                                permission.actionsOptions.length > 0
                                  ? _c(
                                      "a-checkbox",
                                      {
                                        attrs: {
                                          indeterminate:
                                            permission.indeterminate,
                                          checked: permission.checkedAll
                                        },
                                        on: {
                                          change: function($event) {
                                            return _vm.onChangeCheckAll(
                                              $event,
                                              permission
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                  全选\n                "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _c("a-checkbox-group", {
                                  attrs: { options: permission.actionsOptions },
                                  on: {
                                    change: function($event) {
                                      return _vm.onChangeCheck(permission)
                                    }
                                  },
                                  model: {
                                    value: permission.selected,
                                    callback: function($$v) {
                                      _vm.$set(permission, "selected", $$v)
                                    },
                                    expression: "permission.selected"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
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
          ])
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

/***/ "./resources/src/api/manage.js":
/*!*************************************!*\
  !*** ./resources/src/api/manage.js ***!
  \*************************************/
/*! exports provided: default, getUserList, getRoleList, getServiceList, getPermissions, getOrgTree, saveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserList", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoleList", function() { return getRoleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServiceList", function() { return getServiceList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPermissions", function() { return getPermissions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrgTree", function() { return getOrgTree; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveService", function() { return saveService; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/request */ "./resources/src/utils/request.js");

var api = {
  user: '/user',
  role: '/role',
  service: '/service',
  permission: '/permission',
  permissionNoPager: '/permission/no-pager',
  orgTree: '/org/tree'
};
/* harmony default export */ __webpack_exports__["default"] = (api);
function getUserList(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.user,
    method: 'get',
    params: parameter
  });
}
function getRoleList(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.role,
    method: 'get',
    params: parameter
  });
}
function getServiceList(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.service,
    method: 'get',
    params: parameter
  });
}
function getPermissions(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.permissionNoPager,
    method: 'get',
    params: parameter
  });
}
function getOrgTree(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.orgTree,
    method: 'get',
    params: parameter
  });
} // id == 0 add     post
// id != 0 update  put

function saveService(parameter) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["axios"])({
    url: api.service,
    method: parameter.id === 0 ? 'post' : 'put',
    data: parameter
  });
}

/***/ }),

/***/ "./resources/src/utils/permissions.js":
/*!********************************************!*\
  !*** ./resources/src/utils/permissions.js ***!
  \********************************************/
/*! exports provided: actionToObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionToObject", function() { return actionToObject; });
function actionToObject(json) {
  try {
    return JSON.parse(json);
  } catch (e) {
    console.log('err', e.message);
  }

  return [];
}

/***/ }),

/***/ "./resources/src/views/role/RoleList.vue":
/*!***********************************************!*\
  !*** ./resources/src/views/role/RoleList.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RoleList_vue_vue_type_template_id_d8acef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RoleList.vue?vue&type=template&id=d8acef8e&scoped=true& */ "./resources/src/views/role/RoleList.vue?vue&type=template&id=d8acef8e&scoped=true&");
/* harmony import */ var _RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RoleList.vue?vue&type=script&lang=js& */ "./resources/src/views/role/RoleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RoleList_vue_vue_type_template_id_d8acef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RoleList_vue_vue_type_template_id_d8acef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d8acef8e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/role/RoleList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/role/RoleList.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/src/views/role/RoleList.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/role/RoleList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/role/RoleList.vue?vue&type=template&id=d8acef8e&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/src/views/role/RoleList.vue?vue&type=template&id=d8acef8e&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_d8acef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RoleList.vue?vue&type=template&id=d8acef8e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/role/RoleList.vue?vue&type=template&id=d8acef8e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_d8acef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RoleList_vue_vue_type_template_id_d8acef8e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);