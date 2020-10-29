(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadFile_UploadButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../UploadFile/UploadButton.vue */ "./resources/js/components/UploadFile/UploadButton.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'prifile',
  components: {
    UploadButton: _UploadFile_UploadButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      dataToggle: 'edit'
    };
  },
  computed: {
    filterRoute: function filterRoute() {
      var vm = this,
          routes = [{
        to: "profile.edit",
        name: 'Profile',
        roles: ['superadministrator', 'administrator', 'doctor', 'customer']
      }, {
        to: "setting.index",
        name: 'Application Settings',
        roles: ['superadministrator']
      }, {
        to: "change.password",
        name: 'Change Password',
        roles: ['superadministrator', 'administrator', 'doctor', 'customer']
      }],
          selectedFilter = _.map(routes, function (select) {
        var result = [],
            roles = vm.$store.getters.ROLES;
        Object.keys(roles).map(function (key) {
          if (roles[key]) {
            return result.push(key);
          }
        });
        console.log(result);

        var filter = _.filter(select.roles, function (role) {
          return result.indexOf(role) !== -1;
        });

        return !_.isEmpty(filter) ? select : null;
      });

      return _.compact(selectedFilter);
    },
    user_$: function user_$() {
      return this.$store.getters.USER;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadFile/UploadButton.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadFile/UploadButton.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'upload-button',
  props: {
    selectedCallback: Function,
    title: String,
    multipleupload: {
      type: Boolean,
      "default": false
    },
    api: String,
    nameupload: String
  },
  methods: {
    fileSelected: function fileSelected(e) {
      var vm = this;
      var form = new FormData();
      form.append('file', e.target.files[0]);
      form.append('id', vm.$store.getters.USER.id);

      if (vm.$store.getters.USER.image) {
        form.append('url', vm.$store.getters.USER.image.url);
      }

      axios.post(vm.api, form).then(function (response) {
        vm.$store.dispatch('onChangeImage', response.data);
      })["catch"](function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208& ***!
  \******************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-3" }, [
      _c("div", { staticClass: "card card-primary card-outline" }, [
        _c("div", { staticClass: "card-body box-profile" }, [
          _c("div", { staticClass: "text-center" }, [
            _c("img", {
              staticClass: "rounded-circle profile-image",
              staticStyle: { width: "100px", height: "100px" },
              attrs: {
                src: _vm.user_$.image
                  ? "/upload/100_" + _vm.user_$.image.url
                  : "/img/demo/avatars/avatar-m.png",
                alt: "avatar"
              }
            })
          ]),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "text-center" },
            [
              _c("upload-button", {
                attrs: { api: "/api/uploads", title: "Upload" }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("h3", { staticClass: "profile-username text-center" }, [
            _vm._v(_vm._s(_vm.user_$.name))
          ])
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card card-primary" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _vm._m(1),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted" }, [
            _vm._v(
              "\n                    " +
                _vm._s(_vm.user_$.email) +
                "\n                "
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("p", { staticClass: "text-muted" }, [
            _vm._v(_vm._s(_vm.user_$.address))
          ]),
          _vm._v(" "),
          _c("hr")
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "col-md-9" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header p-2" }, [
          _c(
            "ul",
            { staticClass: "nav nav-pills" },
            _vm._l(_vm.filterRoute, function(route, index) {
              return _c(
                "li",
                { key: index, staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "nav-link",
                      attrs: {
                        to: {
                          name: route.to,
                          params: { id: _vm.$store.getters.USER.id }
                        }
                      }
                    },
                    [_vm._v(_vm._s(route.name) + "\n                        ")]
                  )
                ],
                1
              )
            }),
            0
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "card-body" }, [
          _c("div", [_c("router-view")], 1)
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header" }, [
      _c("h3", { staticClass: "card-title" }, [_vm._v("About Me")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fa fa-book mr-1" }),
      _vm._v(" Email")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("strong", [
      _c("i", { staticClass: "fa fa-map-marker mr-1" }),
      _vm._v(" Location")
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadFile/UploadButton.vue?vue&type=template&id=9ef3816c&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UploadFile/UploadButton.vue?vue&type=template&id=9ef3816c& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    { ref: "form", attrs: { method: "post", enctype: "multipart/form-data" } },
    [
      _c(
        "div",
        {
          staticClass: "btn btn-primary jbtn-file",
          staticStyle: { "margin-top": "10px" }
        },
        [
          _vm._v("\n        " + _vm._s(_vm.title) + "\n        "),
          _c("input", {
            ref: "inputFile",
            attrs: {
              type: "file",
              name: _vm.nameupload,
              multiple: _vm.multipleupload
            },
            on: { input: _vm.fileSelected }
          })
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Profile/Profile.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Profile/Profile.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Profile.vue?vue&type=template&id=229af208& */ "./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&");
/* harmony import */ var _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile.vue?vue&type=script&lang=js& */ "./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Profile/Profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Profile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Profile.vue?vue&type=template&id=229af208& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Profile/Profile.vue?vue&type=template&id=229af208&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Profile_vue_vue_type_template_id_229af208___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UploadFile/UploadButton.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/UploadFile/UploadButton.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UploadButton_vue_vue_type_template_id_9ef3816c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UploadButton.vue?vue&type=template&id=9ef3816c& */ "./resources/js/components/UploadFile/UploadButton.vue?vue&type=template&id=9ef3816c&");
/* harmony import */ var _UploadButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadButton.vue?vue&type=script&lang=js& */ "./resources/js/components/UploadFile/UploadButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UploadButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UploadButton_vue_vue_type_template_id_9ef3816c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UploadButton_vue_vue_type_template_id_9ef3816c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UploadFile/UploadButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UploadFile/UploadButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/UploadFile/UploadButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadFile/UploadButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UploadFile/UploadButton.vue?vue&type=template&id=9ef3816c&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/UploadFile/UploadButton.vue?vue&type=template&id=9ef3816c& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_template_id_9ef3816c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UploadButton.vue?vue&type=template&id=9ef3816c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UploadFile/UploadButton.vue?vue&type=template&id=9ef3816c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_template_id_9ef3816c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UploadButton_vue_vue_type_template_id_9ef3816c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);