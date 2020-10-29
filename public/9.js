(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/presentGrid.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Table/presentGrid.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'presentGrid',
  props: ['present'],
  computed: {
    backgroundImage: function backgroundImage() {
      var vm = this;
      return "".concat(vm.present ? vm.present.image ? 'url("/upload/100_' + vm.present.image.url + '")' : 'url(/img/demo/avatars/avatar-m.png)' : false);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/UserPresent.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/UserPresent.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table_presentGrid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../Table/presentGrid */ "./resources/js/components/Table/presentGrid.vue");
/* harmony import */ var _components_mixins_catchError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/mixins/catchError */ "./resources/js/components/mixins/catchError.js");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "UserPresent",
  components: {
    present: _Table_presentGrid__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      pagerCount: 5,
      presents: [],
      current_page: null,
      per_page: null,
      total: null,
      loading: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.get("/api/users", {
      params: to.query
    }).then(function (response) {
      next(function (vm) {
        return vm.setData(response.data);
      });
    })["catch"](function (error) {
      if (error.response.statusText) {
        next(function (vm) {
          return Object(_components_mixins_catchError__WEBPACK_IMPORTED_MODULE_1__["default"])(vm, error);
        });
      }

      if (error.response.status === 401) {
        window.location.href = window.location.href;
      }
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;
    axios.get("/api/users", {
      params: to.query
    }).then(function (response) {
      vm.setData(response.data);
      next();
    })["catch"](function (error) {
      if (error.response.statusText) {
        next(function (vm) {
          return Object(_components_mixins_catchError__WEBPACK_IMPORTED_MODULE_1__["default"])(vm, error);
        });
      }

      if (error.response.status === 401) {
        window.location.href = window.location.href;
      }
    });
  },
  methods: {
    setData: function setData(response) {
      var vm = this;
      vm.presents = response.data;
      vm.total = response.total;
      vm.current_page = response.current_page;
      vm.per_page = response.per_page;
    },
    handleSortChange: function handleSortChange(val) {
      var vm = this;

      var option = _.clone(vm.$route.query);

      option.column = val.prop;
      option.direction = val.order == 'ascending' ? 'asc' : 'desc';
      vm.onRouteChange(option);
    },
    handleCurrentChange: function handleCurrentChange(val) {
      var vm = this;

      var option = _.clone(vm.$route.query);

      option.page = val;
      vm.onRouteChange(option);
    },
    onRouteChange: function onRouteChange(option) {
      var vm = this;
      vm.loading = true;
      vm.$router.push({
        path: "".concat(vm.$route.path),
        query: option
      }, function () {
        vm.loading = false;
      }, function () {
        vm.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/presentGrid.vue?vue&type=template&id=9cd859f6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Table/presentGrid.vue?vue&type=template&id=9cd859f6& ***!
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
  return _c("div", { staticClass: "col-4" }, [
    _vm.backgroundImage
      ? _c(
          "a",
          {
            staticClass: "text-center p-3 d-flex flex-column hover-highlight",
            on: {
              click: function($event) {
                return _vm.$router.push({
                  name: "update-users",
                  params: { id: _vm.present.id }
                })
              }
            }
          },
          [
            _c("span", {
              staticClass: "status profile-image rounded-circle d-block m-auto",
              class: _vm.present.present ? "status-success" : "",
              style: {
                backgroundImage: _vm.backgroundImage,
                backgroundSize: "cover"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "d-block text-truncate text-muted fs-xs mt-1" },
              [_vm._v(_vm._s(_vm.present.name))]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/dashboard/UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true& ***!
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
  return _c("div", [
    _vm.presents
      ? _c(
          "div",
          { staticClass: "row row-grid no-gutters" },
          _vm._l(_vm.presents, function(present) {
            return _c("present", {
              key: present.id,
              attrs: { present: present }
            })
          }),
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.presents.length > 0
      ? _c(
          "div",
          { staticClass: "card-footer", staticStyle: { "margin-top": "12px" } },
          [
            _c("el-pagination", {
              attrs: {
                "current-page": _vm.current_page,
                "pager-count": _vm.pagerCount,
                "page-size": _vm.per_page,
                layout: "prev, pager, next",
                total: _vm.total
              },
              on: { "current-change": _vm.handleCurrentChange }
            })
          ],
          1
        )
      : _c("span", [_vm._v("No Result")])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Table/presentGrid.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Table/presentGrid.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _presentGrid_vue_vue_type_template_id_9cd859f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./presentGrid.vue?vue&type=template&id=9cd859f6& */ "./resources/js/components/Table/presentGrid.vue?vue&type=template&id=9cd859f6&");
/* harmony import */ var _presentGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./presentGrid.vue?vue&type=script&lang=js& */ "./resources/js/components/Table/presentGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _presentGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _presentGrid_vue_vue_type_template_id_9cd859f6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _presentGrid_vue_vue_type_template_id_9cd859f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Table/presentGrid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Table/presentGrid.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Table/presentGrid.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_presentGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./presentGrid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/presentGrid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_presentGrid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Table/presentGrid.vue?vue&type=template&id=9cd859f6&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Table/presentGrid.vue?vue&type=template&id=9cd859f6& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_presentGrid_vue_vue_type_template_id_9cd859f6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./presentGrid.vue?vue&type=template&id=9cd859f6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/presentGrid.vue?vue&type=template&id=9cd859f6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_presentGrid_vue_vue_type_template_id_9cd859f6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_presentGrid_vue_vue_type_template_id_9cd859f6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/dashboard/UserPresent.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/dashboard/UserPresent.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserPresent_vue_vue_type_template_id_5e4e90cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true& */ "./resources/js/components/dashboard/UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true&");
/* harmony import */ var _UserPresent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserPresent.vue?vue&type=script&lang=js& */ "./resources/js/components/dashboard/UserPresent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserPresent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserPresent_vue_vue_type_template_id_5e4e90cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserPresent_vue_vue_type_template_id_5e4e90cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5e4e90cc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/dashboard/UserPresent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/dashboard/UserPresent.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/dashboard/UserPresent.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPresent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPresent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/UserPresent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPresent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/dashboard/UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/dashboard/UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPresent_vue_vue_type_template_id_5e4e90cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/dashboard/UserPresent.vue?vue&type=template&id=5e4e90cc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPresent_vue_vue_type_template_id_5e4e90cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserPresent_vue_vue_type_template_id_5e4e90cc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/mixins/catchError.js":
/*!******************************************************!*\
  !*** ./resources/js/components/mixins/catchError.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (vm, error) {
  if (error.response.status === 401) {
    window.location.href = window.location.href;
  } else if (error.response.status === 404) {
    vm.$router.push({
      name: 'not_found'
    });
  } else {
    vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
  }
});

/***/ })

}]);