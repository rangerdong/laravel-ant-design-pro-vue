(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/account/settings/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/layouts */ "./resources/src/layouts/index.js");
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/mixin.js */ "./resources/src/utils/mixin.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    RouteView: _layouts__WEBPACK_IMPORTED_MODULE_0__["RouteView"],
    PageView: _layouts__WEBPACK_IMPORTED_MODULE_0__["PageView"]
  },
  mixins: [_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["mixinDevice"]],
  data: function data() {
    return {
      // horizontal  inline
      mode: 'inline',
      openKeys: [],
      defaultSelectedKeys: [],
      // cropper
      preview: {},
      option: {
        img: '/avatar2.jpg',
        info: true,
        size: 1,
        outputType: 'jpeg',
        canScale: false,
        autoCrop: true,
        // 只有自动截图开启 宽度高度才生效
        autoCropWidth: 180,
        autoCropHeight: 180,
        fixedBox: true,
        // 开启宽度和高度比例
        fixed: true,
        fixedNumber: [1, 1]
      },
      pageTitle: ''
    };
  },
  created: function created() {
    this.updateMenu();
  },
  methods: {
    onOpenChange: function onOpenChange(openKeys) {
      this.openKeys = openKeys;
    },
    updateMenu: function updateMenu() {
      var routes = this.$route.matched.concat();
      this.defaultSelectedKeys = [routes.pop().path];
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".account-settings-info-main[data-v-036f88ac] {\n  width: 100%;\n  display: flex;\n  height: 100%;\n  overflow: auto;\n}\n.account-settings-info-main.mobile[data-v-036f88ac] {\n  display: block;\n}\n.account-settings-info-main.mobile .account-settings-info-left[data-v-036f88ac] {\n  border-right: unset;\n  border-bottom: 1px solid #e8e8e8;\n  width: 100%;\n  height: 50px;\n  overflow-x: auto;\n  overflow-y: scroll;\n}\n.account-settings-info-main.mobile .account-settings-info-right[data-v-036f88ac] {\n  padding: 20px 40px;\n}\n.account-settings-info-main .account-settings-info-left[data-v-036f88ac] {\n  border-right: 1px solid #e8e8e8;\n  width: 224px;\n}\n.account-settings-info-main .account-settings-info-right[data-v-036f88ac] {\n  flex: 1 1;\n  padding: 8px 40px;\n}\n.account-settings-info-main .account-settings-info-right .account-settings-info-title[data-v-036f88ac] {\n  color: rgba(0, 0, 0, 0.85);\n  font-size: 20px;\n  font-weight: 500;\n  line-height: 28px;\n  margin-bottom: 12px;\n}\n.account-settings-info-main .account-settings-info-right .account-settings-info-view[data-v-036f88ac] {\n  padding-top: 12px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--10!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/less-loader/dist/cjs.js??ref--10!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=template&id=036f88ac&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/account/settings/Index.vue?vue&type=template&id=036f88ac&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
        "a-card",
        {
          style: { height: "100%" },
          attrs: {
            bordered: false,
            bodyStyle: { padding: "16px 0", height: "100%" }
          }
        },
        [
          _c(
            "div",
            { staticClass: "account-settings-info-main", class: _vm.device },
            [
              _c(
                "div",
                { staticClass: "account-settings-info-left" },
                [
                  _c(
                    "a-menu",
                    {
                      style: {
                        border: "0",
                        width: _vm.device == "mobile" ? "560px" : "auto"
                      },
                      attrs: {
                        mode: _vm.device == "mobile" ? "horizontal" : "inline",
                        defaultSelectedKeys: _vm.defaultSelectedKeys,
                        type: "inner"
                      },
                      on: { openChange: _vm.onOpenChange }
                    },
                    [
                      _c(
                        "a-menu-item",
                        { key: "/account/settings/base" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "BaseSettings" } } },
                            [_vm._v("\n              基本设置\n            ")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "/account/settings/security" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "SecuritySettings" } } },
                            [_vm._v("\n              安全设置\n            ")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "/account/settings/custom" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "CustomSettings" } } },
                            [_vm._v("\n              个性化\n            ")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "/account/settings/binding" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "BindingSettings" } } },
                            [_vm._v("\n              账户绑定\n            ")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "a-menu-item",
                        { key: "/account/settings/notification" },
                        [
                          _c(
                            "router-link",
                            { attrs: { to: { name: "NotificationSettings" } } },
                            [_vm._v("\n              新消息通知\n            ")]
                          )
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
                { staticClass: "account-settings-info-right" },
                [
                  _c("div", { staticClass: "account-settings-info-title" }, [
                    _c("span", [_vm._v(_vm._s(_vm.$route.meta.title))])
                  ]),
                  _vm._v(" "),
                  _c("route-view")
                ],
                1
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/account/settings/Index.vue":
/*!********************************************************!*\
  !*** ./resources/src/views/account/settings/Index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_036f88ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=036f88ac&scoped=true& */ "./resources/src/views/account/settings/Index.vue?vue&type=template&id=036f88ac&scoped=true&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/src/views/account/settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Index_vue_vue_type_style_index_0_id_036f88ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true& */ "./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_036f88ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_036f88ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "036f88ac",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/account/settings/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/account/settings/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/src/views/account/settings/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_036f88ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/less-loader/dist/cjs.js!../../../../../node_modules/less-loader/dist/cjs.js??ref--10!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=style&index=0&id=036f88ac&lang=less&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_036f88ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_036f88ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_036f88ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_036f88ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_less_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_ref_10_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_style_index_0_id_036f88ac_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/src/views/account/settings/Index.vue?vue&type=template&id=036f88ac&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/src/views/account/settings/Index.vue?vue&type=template&id=036f88ac&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_036f88ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=036f88ac&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/account/settings/Index.vue?vue&type=template&id=036f88ac&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_036f88ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_036f88ac_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);