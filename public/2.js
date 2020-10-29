(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendance/create.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/attendance/create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'attendanceCreate',
  mixins: [_mixin_search_user_js__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      url: '',
      form: {
        user_id: '',
        started_at: '',
        stopped_at: '',
        date: ''
      },
      errors: {},
      loading: false,
      disabled: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/attendances/".concat(to.params.id)).then(function (response) {
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
      axios.get("/api/attendances/".concat(to.params.id)).then(function (response) {
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
      var started_at = response.started_at ? response.started_at.split(' ') : '';
      var stopped_at = response.stopped_at ? response.stopped_at.split(' ') : '';
      vm.form.date = started_at[0] || stopped_at[0];

      if (response.started_at) {
        vm.form.started_at = started_at[1].replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
      }

      if (response.stopped_at) {
        vm.form.stopped_at = stopped_at[1].replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
      }
    },
    onCancel: function onCancel() {
      this.$router.push({
        name: 'view-attendances'
      });
    },
    onSubmit: function onSubmit() {
      var vm = this;
      this.$refs.form.validate(function (valid) {
        if (valid) {
          vm.disabled = true;
          vm.errors = {};
          var id = vm.$route.params.id;

          if (vm.form.started_at) {
            vm.form.started_at = vm.form.started_at.concat(':00').split(':').slice(0, 3).join(':');
          }

          if (vm.form.stopped_at) {
            vm.form.stopped_at = vm.form.stopped_at.concat(':00').split(':').slice(0, 3).join(':');
          }

          axios[id ? 'post' : 'post']("/api/attendances".concat(id ? "/edit/".concat(id) : '/create'), vm.form).then(function () {
            vm.disabled = false;
            vm.errors = {};
            vm.$swal("Attendance has been ".concat(id ? 'edited' : 'created'), '', 'success');
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendance/create.vue?vue&type=template&id=851919b2&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/attendance/create.vue?vue&type=template&id=851919b2& ***!
  \********************************************************************************************************************************************************************************************************************/
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
                          " Attendance"
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
                        { attrs: { prop: "user_id", label: "Employee" } },
                        [
                          _c(
                            "el-select",
                            {
                              staticStyle: { width: "100%" },
                              attrs: {
                                filterable: "",
                                remote: "",
                                "reserve-keyword": "",
                                placeholder: "Please enter an employee name",
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
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "el-form-item",
                        { attrs: { prop: "date", label: "Date" } },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.date,
                                expression: "form.date"
                              }
                            ],
                            staticClass: "el-input__inner",
                            staticStyle: { width: "100%" },
                            attrs: { type: "date", placeholder: "Pick a day" },
                            domProps: { value: _vm.form.date },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(_vm.form, "date", $event.target.value)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.date, function(error) {
                            return _vm.errors.date
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
                        { attrs: { prop: "started_at", label: "Started at" } },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.started_at,
                                expression: "form.started_at"
                              }
                            ],
                            staticClass: "el-input__inner",
                            staticStyle: { width: "100%" },
                            attrs: { type: "time", placeholder: "Pick a time" },
                            domProps: { value: _vm.form.started_at },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "started_at",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.started_at, function(error) {
                            return _vm.errors.started_at
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
                        { attrs: { prop: "stopped_at", label: "Stopped at" } },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.form.stopped_at,
                                expression: "form.stopped_at"
                              }
                            ],
                            staticClass: "el-input__inner",
                            staticStyle: { width: "100%" },
                            attrs: { type: "time", placeholder: "Pick a time" },
                            domProps: { value: _vm.form.stopped_at },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.form,
                                  "stopped_at",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm._l(_vm.errors.stopped_at, function(error) {
                            return _vm.errors.stopped_at
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
                                ) + " Attendance\n                        "
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

/***/ "./resources/js/components/attendance/create.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/attendance/create.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_851919b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=851919b2& */ "./resources/js/components/attendance/create.vue?vue&type=template&id=851919b2&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/attendance/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_851919b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_851919b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/attendance/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/attendance/create.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/attendance/create.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendance/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/attendance/create.vue?vue&type=template&id=851919b2&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/attendance/create.vue?vue&type=template&id=851919b2& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_851919b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=851919b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/attendance/create.vue?vue&type=template&id=851919b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_851919b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_851919b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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