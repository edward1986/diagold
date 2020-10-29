(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/leave/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/leave/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_search_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixin/search/user.js */ "./resources/js/components/mixin/search/user.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'leaveCreate',
  mixins: [_mixin_search_user_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      url: '',
      form: {
        type: '0',
        user_id: '',
        date_issued: '',
        date_due_for_return: ''
      },
      errors: {},
      loading: false,
      disabled: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/holidays/".concat(to.params.id)).then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      })["catch"](function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
          });
        }

        if (error.response.status === 401) {
          window.location.href = window.location.href;
        }
      });
    } else {
      next();
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;

    if (to.params.id) {
      vm.errors = {};
      axios.get("/api/holidays/".concat(to.params.id)).then(function (response) {
        vm.setData(response.data);
        next();
      })["catch"](function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
          });
        }

        if (error.response.status === 401) {
          window.location.href = window.location.href;
        }
      });
    } else {
      next();
    }
  },
  methods: {
    setData: function setData(response) {
      var vm = this;
      vm.users = [];
      vm.users = [{
        value: response.user.id,
        label: response.user.name
      }];
      vm.form = response;
      vm.form.user_id = response.user.id;
    },
    onCancel: function onCancel() {
      this.$router.push({
        name: 'view-leave'
      });
    },
    onSubmit: function onSubmit() {
      var vm = this;
      this.$refs.form.validate(function (valid) {
        if (valid) {
          vm.disabled = true;
          vm.errors = {};
          var id = vm.$route.params.id;
          axios[id ? 'post' : 'post']("/api/holidays".concat(id ? "/edit/".concat(id) : ''), vm.form).then(function () {
            vm.disabled = false;
            vm.errors = {};
            vm.$swal("".concat(vm.$route.params.id ? 'Update' : 'Created', " successfully!"), '', 'success');
          })["catch"](function (error) {
            vm.disabled = false;

            if (error.response.data.errors && error.response.data.message) {
              vm.errors = error.response.data.errors;
              vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
            }
          });
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/leave/create.vue?vue&type=template&id=703fed1f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/leave/create.vue?vue&type=template&id=703fed1f& ***!
  \***************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "el-row",
        [
          _c(
            "el-col",
            { attrs: { span: 24 } },
            [
              _c(
                "el-card",
                { attrs: { shadow: "never" } },
                [
                  _c("div", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.$route.params.id ? "Edit" : "Create") +
                          " Employee Leave"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "el-form",
                    {
                      ref: "form",
                      attrs: { model: _vm.form },
                      nativeOn: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.onSubmit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "el-form-item",
                        { attrs: { prop: "user_id", label: "User" } },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter a keyword",
                                "remote-method": _vm.search_user,
                                loading: _vm.loading
                              },
                              model: {
                                value: _vm.form.user_id,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "user_id", $$v)
                                },
                                expression: "form.user_id"
                              }
                            },
                            _vm._l(_vm.users, function(item) {
                              return _c("el-option", {
                                key: item.value,
                                attrs: { label: item.label, value: item.value }
                              })
                            }),
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.user_id, function(error) {
                            return _vm.errors.user_id
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: { prop: "date_issued", label: "Date Issued" }
                        },
                        [
                          _c("el-date-picker", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              "value-format": "yyyy-MM-dd HH:mm:ss",
                              type: "datetime",
                              placeholder: "Pick a day"
                            },
                            model: {
                              value: _vm.form.date_issued,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "date_issued", $$v)
                              },
                              expression: "form.date_issued"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.date_issued, function(error) {
                            return _vm.errors.date_issued
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        {
                          attrs: {
                            prop: "date_due_for_return",
                            label: "Date due for return"
                          }
                        },
                        [
                          _c("el-date-picker", {
                            staticStyle: { width: "100%" },
                            attrs: {
                              "value-format": "yyyy-MM-dd HH:mm:ss",
                              type: "datetime",
                              placeholder: "Pick a day"
                            },
                            model: {
                              value: _vm.form.date_due_for_return,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "date_due_for_return", $$v)
                              },
                              expression: "form.date_due_for_return"
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.date_due_for_return, function(
                            error
                          ) {
                            return _vm.errors.date_due_for_return
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "type", label: "Type" } },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              model: {
                                value: _vm.form.type,
                                callback: function($$v) {
                                  _vm.$set(_vm.form, "type", $$v)
                                },
                                expression: "form.type"
                              }
                            },
                            [
                              _c("el-option", {
                                attrs: { label: "LEAVE WITH PAY", value: "0" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm._l(_vm.errors.type, function(error) {
                            return _vm.errors.type
                              ? _c(
                                  "div",
                                  { staticClass: "el-form-item__error" },
                                  [
                                    _vm._v(
                                      "\n                            " +
                                        _vm._s(error) +
                                        "\n                        "
                                    )
                                  ]
                                )
                              : _vm._e()
                          })
                        ],
                        2
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        [
                          _c(
                            "el-button",
                            {
                              attrs: {
                                disabled: _vm.disabled,
                                type: "primary"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.onSubmit("form")
                                }
                              }
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.$route.params.id ? "Edit" : "Create"
                                ) + " Employee Leave\n                        "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("el-button", { on: { click: _vm.onCancel } }, [
                            _vm._v("Cancel")
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

/***/ "./resources/js/components/leave/create.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/leave/create.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_703fed1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=703fed1f& */ "./resources/js/components/leave/create.vue?vue&type=template&id=703fed1f&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/leave/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_703fed1f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_703fed1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/leave/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/leave/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/leave/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/leave/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/leave/create.vue?vue&type=template&id=703fed1f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/leave/create.vue?vue&type=template&id=703fed1f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_703fed1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=703fed1f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/leave/create.vue?vue&type=template&id=703fed1f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_703fed1f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_703fed1f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/mixin/search/user.js":
/*!******************************************************!*\
  !*** ./resources/js/components/mixin/search/user.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'userDashboard',
  data: function data() {
    return {
      users: [],
      params: '',
      errors: {}
    };
  },
  methods: {
    search_user: function search_user(query) {
      var vm = this;

      if (query !== '') {
        vm.loading = true;
        vm.onSearchUser(query, vm);
      } else {
        vm.loading = false;
        vm.users = [];
      }
    },
    onSearchUser: _.debounce(function (query, vm) {
      axios.get('/api/users/search' + '?search=' + query).then(function (q) {
        vm.loading = false;
        vm.users = q.data.data.map(function (item) {
          return {
            value: item.id,
            label: item.name
          };
        });
      })["catch"](function (error) {
        vm.loading = false;

        if (error.data && error.response.data && error.response.data.errors && error.response.data.message) {
          vm.errors = error.response.data.errors;
          vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
        }
      });
    }, 350)
  }
});

/***/ })

}]);