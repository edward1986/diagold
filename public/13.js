(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'changepassword',
  data: function data() {
    return {
      disabled: false,
      errors: {}
    };
  },
  methods: {
    changePassword_m: function changePassword_m() {
      var vm = this;
      var formData = new FormData(vm.$refs.form);
      var jsonObject = {};
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = formData.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var _step$value = _slicedToArray(_step.value, 2),
              key = _step$value[0],
              value = _step$value[1];

          jsonObject[key] = value;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      vm.disabled = true;
      axios.put("/api/users/".concat(vm.$store.getters.USER.id), jsonObject).then(function (response) {
        vm.disabled = false;
        vm.errors = {};
        vm.$swal("Password has been changed", '', 'success');
      })["catch"](function (error) {
        vm.disabled = false;

        if (error.response.data && error.response.data.errors && error.response.data.message) {
          vm.errors = error.response.data.errors;
          vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
        } else {
          vm.$swal(error.response.data.statusText, error.response.data, 'error');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    "form",
    {
      ref: "form",
      staticClass: "form-horizontal",
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.changePassword_m($event)
        }
      }
    },
    [
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "control-label", attrs: { for: "old_password" } },
          [_vm._v("Old Password")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-10" },
          [
            _c("input", {
              staticClass: "form-control",
              class: _vm.errors.old_password ? "is-invalid" : "",
              attrs: {
                name: "old_password",
                type: "password",
                id: "old_password",
                placeholder: "Password"
              }
            }),
            _vm._v(" "),
            _vm._l(_vm.errors.old_password, function(error) {
              return _vm.errors.old_password
                ? _c(
                    "span",
                    {
                      staticClass: "invalid-feedback",
                      attrs: { role: "alert" }
                    },
                    [_c("strong", [_vm._v(_vm._s(error))])]
                  )
                : _vm._e()
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "control-label", attrs: { for: "new_password" } },
          [_vm._v("New Password")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-10" },
          [
            _c("input", {
              staticClass: "form-control",
              class: _vm.errors.new_password ? "is-invalid" : "",
              attrs: {
                name: "new_password",
                type: "password",
                id: "new_password",
                placeholder: "Password"
              }
            }),
            _vm._v(" "),
            _vm._l(_vm.errors.new_password, function(error) {
              return _vm.errors.new_password
                ? _c(
                    "span",
                    {
                      staticClass: "invalid-feedback",
                      attrs: { role: "alert" }
                    },
                    [_c("strong", [_vm._v(_vm._s(error))])]
                  )
                : _vm._e()
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "form-group" }, [
        _c(
          "label",
          { staticClass: "control-label", attrs: { for: "confirm" } },
          [_vm._v("Confirm Password")]
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-sm-10" },
          [
            _c("input", {
              staticClass: "form-control",
              class: _vm.errors.confirm_password ? "is-invalid" : "",
              attrs: {
                name: "confirm_password",
                type: "password",
                id: "confirm",
                placeholder: "Confirm Password"
              }
            }),
            _vm._v(" "),
            _vm._l(_vm.errors.confirm_password, function(error) {
              return _vm.errors.confirm_password
                ? _c(
                    "span",
                    {
                      staticClass: "invalid-feedback",
                      attrs: { role: "alert" }
                    },
                    [_c("strong", [_vm._v(_vm._s(error))])]
                  )
                : _vm._e()
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _vm._m(0)
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group" }, [
      _c("div", { staticClass: "col-sm-offset-2 col-sm-10" }, [
        _c(
          "button",
          { staticClass: "btn btn-danger", attrs: { type: "submit" } },
          [_vm._v("Submit")]
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/ChangePassword.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Profile/ChangePassword.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=template&id=64fef148& */ "./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&");
/* harmony import */ var _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ChangePassword.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/ChangePassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangePassword.vue?vue&type=template&id=64fef148& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/ChangePassword.vue?vue&type=template&id=64fef148&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangePassword_vue_vue_type_template_id_64fef148___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);