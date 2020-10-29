(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/Grid.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Table/Grid.vue?vue&type=script&lang=js& ***!
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'grid',
  props: {
    header: {
      type: String,
      "default": ''
    },
    canDelete: String,
    canUpdate: String,
    createName: String,
    onCreateName: String,
    onCreateParams: {
      "default": function _default() {
        return {
          create: 1
        };
      },
      type: Object,
      required: false
    },
    onEditName: {
      type: String,
      required: true
    },
    onDelete: {
      type: String,
      required: true
    },
    data: {},
    columns: Array,
    showEdit: {
      "default": true,
      type: Boolean
    },
    showCreate: {
      "default": true,
      type: Boolean
    },
    showDelete: {
      "default": true,
      type: Boolean
    }
  },
  computed: {
    can: function can() {
      return this.$store.getters.CAN;
    },
    isMobile: function isMobile() {
      return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4));
    }
  },
  data: function data() {
    var vm = this;
    return {
      search: vm.$route.query.search ? vm.$route.query.search : '',
      loading: false
    };
  },
  methods: {
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
    },
    search_: function search_() {
      var vm = this;
      vm.onSearch(vm.search, vm);
    },
    onSearch: _.debounce(function (query, vm) {
      var vm = this;
      vm.loading = true;
      vm.$router.push({
        path: "".concat(vm.$route.path),
        query: {
          search: query
        }
      }, function () {
        vm.loading = false;
      }, function () {
        vm.loading = false;
      });
    }, 500),
    handleEdit: function handleEdit(index, row) {
      var vm = this;
      vm.$router.push({
        name: vm.onEditName,
        params: {
          id: row.id
        }
      });
    },
    handleDelete: function handleDelete(index, row) {
      var vm = this;
      vm.loading = true;
      vm.$swal({
        title: 'Are you sure?',
        text: "This will permanently delete the file. Continue?",
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
      }).then(function (result) {
        if (result.value) {
          axios.post("".concat(vm.onDelete ? vm.onDelete : '/api/agencies', "/").concat(row.id));
          vm.$emit('delete', index);
          vm.$swal('', 'Delete completed', 'success');
        }

        vm.loading = false;
      })["catch"](function () {
        vm.$swal('', 'Delete canceled', 'info');
        vm.loading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/Grid.vue?vue&type=template&id=92c5d39c&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Table/Grid.vue?vue&type=template&id=92c5d39c& ***!
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
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header" }, [
      _c("div", { staticClass: "clearfix" }, [
        _vm.onCreateName && _vm.showCreate
          ? _c(
              "div",
              {
                staticClass: "float-sm-left",
                staticStyle: { "margin-bottom": "9px" }
              },
              [
                _c(
                  "el-button",
                  {
                    attrs: { size: "mini", type: "primary" },
                    on: {
                      click: function($event) {
                        return _vm.$router.push({
                          name: _vm.onCreateName,
                          params: _vm.onCreateParams
                        })
                      }
                    }
                  },
                  [_vm._v(_vm._s(_vm.createName))]
                ),
                _vm._v(" "),
                _vm._t("default")
              ],
              2
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "float-sm-right" },
          [
            _c("el-input", {
              attrs: { size: "mini", placeholder: "Type to search" },
              on: { input: _vm.search_ },
              model: {
                value: _vm.search,
                callback: function($$v) {
                  _vm.search = $$v
                },
                expression: "search"
              }
            })
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "card-body" },
      [
        _c(
          "el-table",
          {
            directives: [
              {
                name: "loading",
                rawName: "v-loading",
                value: _vm.loading,
                expression: "loading"
              }
            ],
            staticStyle: { width: "100%" },
            attrs: { data: _vm.data.data },
            on: { "sort-change": _vm.handleSortChange }
          },
          [
            _vm._t("default"),
            _vm._v(" "),
            _vm._l(_vm.columns, function(column, index, key) {
              return _c("el-table-column", {
                key: index + "-" + key + "-" + column.prop + "-" + column.label,
                attrs: {
                  sortable: column.sort ? true : false,
                  label: column.label,
                  prop: column.prop
                }
              })
            }),
            _vm._v(" "),
            (_vm.can[_vm.canUpdate] || _vm.can[_vm.canDelete]) &&
            (_vm.showEdit || _vm.showDelete)
              ? _c("el-table-column", {
                  attrs: { align: "right" },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "default",
                        fn: function(scope) {
                          return [
                            _c(
                              "div",
                              { staticClass: "btn-group btn-group-sm" },
                              [
                                (_vm.showEdit || _vm.can[_vm.canUpdate]
                                ? _vm.can[_vm.canUpdate]
                                : false)
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-success",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleEdit(
                                              scope.$index,
                                              scope.row
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            class: _vm.isMobile
                                              ? "fal fa-edit"
                                              : ""
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.isMobile ? "" : "Edit")
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                (_vm.showDelete || _vm.can[_vm.canDelete]
                                ? _vm.can[_vm.canDelete]
                                : false)
                                  ? _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-danger",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            return _vm.handleDelete(
                                              scope.$index,
                                              scope.row
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          {
                                            class: _vm.isMobile
                                              ? "fal fa-trash-alt"
                                              : ""
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.isMobile ? "" : "Delete"
                                              )
                                            )
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          ]
                        }
                      }
                    ],
                    null,
                    false,
                    2463375552
                  )
                })
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("el-pagination", {
          attrs: {
            "current-page": _vm.data.current_page,
            "page-size": _vm.data.per_page,
            "pager-count": _vm.isMobile ? 3 : 7,
            layout: "total, prev, pager, next",
            total: _vm.data.total
          },
          on: { "current-change": _vm.handleCurrentChange }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Table/Grid.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Table/Grid.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue_vue_type_template_id_92c5d39c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue?vue&type=template&id=92c5d39c& */ "./resources/js/components/Table/Grid.vue?vue&type=template&id=92c5d39c&");
/* harmony import */ var _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.vue?vue&type=script&lang=js& */ "./resources/js/components/Table/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grid_vue_vue_type_template_id_92c5d39c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grid_vue_vue_type_template_id_92c5d39c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Table/Grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Table/Grid.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Table/Grid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Table/Grid.vue?vue&type=template&id=92c5d39c&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Table/Grid.vue?vue&type=template&id=92c5d39c& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_92c5d39c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=template&id=92c5d39c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Table/Grid.vue?vue&type=template&id=92c5d39c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_92c5d39c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_92c5d39c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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