(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/form/BasicForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/form/BasicForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'BaseForm',
  data: function data() {
    return {
      description: '表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。',
      value: 1,
      // form
      form: this.$form.createForm(this)
    };
  },
  methods: {
    // handler
    handleSubmit: function handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields(function (err, values) {
        if (!err) {
          // eslint-disable-next-line no-console
          console.log('Received values of form: ', values);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/form/BasicForm.vue?vue&type=template&id=c5b028aa&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/src/views/form/BasicForm.vue?vue&type=template&id=c5b028aa& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    { attrs: { "body-style": { padding: "24px 32px" }, bordered: false } },
    [
      _c(
        "a-form",
        { attrs: { form: _vm.form }, on: { submit: _vm.handleSubmit } },
        [
          _c(
            "a-form-item",
            {
              attrs: {
                label: "标题",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } }
              }
            },
            [
              _c("a-input", {
                directives: [
                  {
                    name: "decorator",
                    rawName: "v-decorator",
                    value: [
                      "name",
                      { rules: [{ required: true, message: "请输入标题" }] }
                    ],
                    expression:
                      "[\n          'name',\n          {rules: [{ required: true, message: '请输入标题' }]}\n        ]"
                  }
                ],
                attrs: { name: "name", placeholder: "给目标起个名字" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-form-item",
            {
              attrs: {
                label: "起止日期",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } }
              }
            },
            [
              _c("a-range-picker", {
                directives: [
                  {
                    name: "decorator",
                    rawName: "v-decorator",
                    value: [
                      "buildTime",
                      { rules: [{ required: true, message: "请选择起止日期" }] }
                    ],
                    expression:
                      "[\n          'buildTime',\n          {rules: [{ required: true, message: '请选择起止日期' }]}\n        ]"
                  }
                ],
                staticStyle: { width: "100%" },
                attrs: { name: "buildTime" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-form-item",
            {
              attrs: {
                label: "目标描述",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } }
              }
            },
            [
              _c("a-textarea", {
                directives: [
                  {
                    name: "decorator",
                    rawName: "v-decorator",
                    value: [
                      "description",
                      { rules: [{ required: true, message: "请输入目标描述" }] }
                    ],
                    expression:
                      "[\n          'description',\n          {rules: [{ required: true, message: '请输入目标描述' }]}\n        ]"
                  }
                ],
                attrs: { rows: "4", placeholder: "请输入你阶段性工作目标" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-form-item",
            {
              attrs: {
                label: "衡量标准",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } }
              }
            },
            [
              _c("a-textarea", {
                directives: [
                  {
                    name: "decorator",
                    rawName: "v-decorator",
                    value: [
                      "type",
                      { rules: [{ required: true, message: "请输入衡量标准" }] }
                    ],
                    expression:
                      "[\n          'type',\n          {rules: [{ required: true, message: '请输入衡量标准' }]}\n        ]"
                  }
                ],
                attrs: { rows: "4", placeholder: "请输入衡量标准" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-form-item",
            {
              attrs: {
                label: "客户",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } }
              }
            },
            [
              _c("a-input", {
                directives: [
                  {
                    name: "decorator",
                    rawName: "v-decorator",
                    value: [
                      "customer",
                      {
                        rules: [
                          { required: true, message: "请描述你服务的客户" }
                        ]
                      }
                    ],
                    expression:
                      "[\n          'customer',\n          {rules: [{ required: true, message: '请描述你服务的客户' }]}\n        ]"
                  }
                ],
                attrs: {
                  placeholder: "请描述你服务的客户，内部客户直接 @姓名／工号"
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
                label: "邀评人",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } },
                required: false
              }
            },
            [
              _c("a-input", {
                attrs: { placeholder: "请直接 @姓名／工号，最多可邀请 5 人" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-form-item",
            {
              attrs: {
                label: "权重",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } },
                required: false
              }
            },
            [
              _c("a-input-number", { attrs: { min: 0, max: 100 } }),
              _vm._v(" "),
              _c("span", [_vm._v(" %")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a-form-item",
            {
              attrs: {
                label: "目标公开",
                labelCol: { lg: { span: 7 }, sm: { span: 7 } },
                wrapperCol: { lg: { span: 10 }, sm: { span: 17 } },
                required: false,
                help: "客户、邀评人默认被分享"
              }
            },
            [
              _c(
                "a-radio-group",
                {
                  model: {
                    value: _vm.value,
                    callback: function($$v) {
                      _vm.value = $$v
                    },
                    expression: "value"
                  }
                },
                [
                  _c("a-radio", { attrs: { value: 1 } }, [_vm._v("公开")]),
                  _vm._v(" "),
                  _c("a-radio", { attrs: { value: 2 } }, [_vm._v("部分公开")]),
                  _vm._v(" "),
                  _c("a-radio", { attrs: { value: 3 } }, [_vm._v("不公开")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "a-form-item",
                [
                  _vm.value === 2
                    ? _c(
                        "a-select",
                        { attrs: { mode: "multiple" } },
                        [
                          _c("a-select-option", { attrs: { value: "4" } }, [
                            _vm._v("同事一")
                          ]),
                          _vm._v(" "),
                          _c("a-select-option", { attrs: { value: "5" } }, [
                            _vm._v("同事二")
                          ]),
                          _vm._v(" "),
                          _c("a-select-option", { attrs: { value: "6" } }, [
                            _vm._v("同事三")
                          ])
                        ],
                        1
                      )
                    : _vm._e()
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
              staticStyle: { "text-align": "center" },
              attrs: { wrapperCol: { span: 24 } }
            },
            [
              _c(
                "a-button",
                { attrs: { htmlType: "submit", type: "primary" } },
                [_vm._v("提交")]
              ),
              _vm._v(" "),
              _c("a-button", { staticStyle: { "margin-left": "8px" } }, [
                _vm._v("保存")
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
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/src/views/form/BasicForm.vue":
/*!************************************************!*\
  !*** ./resources/src/views/form/BasicForm.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BasicForm_vue_vue_type_template_id_c5b028aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BasicForm.vue?vue&type=template&id=c5b028aa& */ "./resources/src/views/form/BasicForm.vue?vue&type=template&id=c5b028aa&");
/* harmony import */ var _BasicForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BasicForm.vue?vue&type=script&lang=js& */ "./resources/src/views/form/BasicForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BasicForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BasicForm_vue_vue_type_template_id_c5b028aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BasicForm_vue_vue_type_template_id_c5b028aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/src/views/form/BasicForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/src/views/form/BasicForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/src/views/form/BasicForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasicForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/form/BasicForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/src/views/form/BasicForm.vue?vue&type=template&id=c5b028aa&":
/*!*******************************************************************************!*\
  !*** ./resources/src/views/form/BasicForm.vue?vue&type=template&id=c5b028aa& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicForm_vue_vue_type_template_id_c5b028aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./BasicForm.vue?vue&type=template&id=c5b028aa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/src/views/form/BasicForm.vue?vue&type=template&id=c5b028aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicForm_vue_vue_type_template_id_c5b028aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BasicForm_vue_vue_type_template_id_c5b028aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);