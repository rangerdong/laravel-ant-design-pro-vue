(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Security.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/account/settings/Security.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    var _this = this;

    return {
      data: [{
        title: '账户密码',
        description: '当前密码强度',
        value: '强',
        actions: {
          title: '修改',
          callback: function callback() {
            _this.$message.info('This is a normal message');
          }
        }
      }, {
        title: '密保手机',
        description: '已绑定手机',
        value: '138****8293',
        actions: {
          title: '修改',
          callback: function callback() {
            _this.$message.success('This is a message of success');
          }
        }
      }, {
        title: '密保问题',
        description: '未设置密保问题，密保问题可有效保护账户安全',
        value: '',
        actions: {
          title: '设置',
          callback: function callback() {
            _this.$message.error('This is a message of error');
          }
        }
      }, {
        title: '备用邮箱',
        description: '已绑定邮箱',
        value: 'ant***sign.com',
        actions: {
          title: '修改',
          callback: function callback() {
            _this.$message.warning('This is message of warning');
          }
        }
      }, {
        title: 'MFA 设备',
        description: '未绑定 MFA 设备，绑定后，可以进行二次确认',
        value: '',
        actions: {
          title: '绑定',
          callback: function callback() {
            _this.$message.info('This is a normal message');
          }
        }
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Security.vue?vue&type=template&id=20953754&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/account/settings/Security.vue?vue&type=template&id=20953754&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("a-list", {
    attrs: { itemLayout: "horizontal", dataSource: _vm.data },
    scopedSlots: _vm._u([
      {
        key: "renderItem",
        fn: function(item, index) {
          return _c(
            "a-list-item",
            { key: index },
            [
              _c("a-list-item-meta", [
                _c("a", { attrs: { slot: "title" }, slot: "title" }, [
                  _vm._v(_vm._s(item.title))
                ]),
                _vm._v(" "),
                _c(
                  "span",
                  { attrs: { slot: "description" }, slot: "description" },
                  [
                    _c("span", { staticClass: "security-list-description" }, [
                      _vm._v(_vm._s(item.description))
                    ]),
                    _vm._v(" "),
                    item.value ? _c("span", [_vm._v(" : ")]) : _vm._e(),
                    _vm._v(" "),
                    _c("span", { staticClass: "security-list-value" }, [
                      _vm._v(_vm._s(item.value))
                    ])
                  ]
                )
              ]),
              _vm._v(" "),
              item.actions
                ? [
                    _c(
                      "a",
                      {
                        attrs: { slot: "actions" },
                        on: { click: item.actions.callback },
                        slot: "actions"
                      },
                      [_vm._v(_vm._s(item.actions.title))]
                    )
                  ]
                : _vm._e()
            ],
            2
          )
        }
      }
    ])
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/account/settings/Security.vue":
/*!***********************************************************!*\
  !*** ./resources/src/views/account/settings/Security.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Security_vue_vue_type_template_id_20953754_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Security.vue?vue&type=template&id=20953754&scoped=true& */ "./resources/src/views/account/settings/Security.vue?vue&type=template&id=20953754&scoped=true&");
/* harmony import */ var _Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Security.vue?vue&type=script&lang=js& */ "./resources/src/views/account/settings/Security.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Security_vue_vue_type_template_id_20953754_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Security_vue_vue_type_template_id_20953754_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "20953754",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/account/settings/Security.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/account/settings/Security.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/src/views/account/settings/Security.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Security.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Security.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/account/settings/Security.vue?vue&type=template&id=20953754&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/src/views/account/settings/Security.vue?vue&type=template&id=20953754&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_template_id_20953754_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Security.vue?vue&type=template&id=20953754&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Security.vue?vue&type=template&id=20953754&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_template_id_20953754_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Security_vue_vue_type_template_id_20953754_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);