(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/attendance.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/attendance.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_catchError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mixins/catchError */ "./resources/js/components/mixins/catchError.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "attendance",
  data: function data() {
    var d = new Date(),
        month = d.getMonth(),
        year = d.getYear();
    return {
      month: month,
      year: year,
      no_of_days: new Date(year, month + 1, 0),
      user: {
        attendances: []
      },
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
  },
  mounted: function mounted() {
    this.no_of_days.getDate();
  },
  computed: {
    days: function days() {
      var vm = this,
          index = 0,
          days = {};

      while (index < vm.no_of_days.getDate()) {
        days[index + 1] = false;
        index++;
      }

      index = 0;

      if (vm.user.attendances ? vm.user.attendances.length : false) {
        while (index < vm.user.attendances.length) {
          var d = new Date(vm.user.attendances[index].started_at.split(" ")[0]).addDays(1);

          if (d.getDate()) {
            days[d.getDate()] = true;
          }

          index++;
        }
      }

      return vm.user ? days : {};
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/user/".concat(to.params.id, "/attendances")).then(function (response) {
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
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;

    if (to.params.id) {
      axios.get("/api/user/".concat(to.params.id, "/attendances")).then(function (response) {
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
    }
  },
  methods: {
    setData: function setData(data) {
      this.user = data;
    },
    toHHMMSS: function toHHMMSS(sec) {
      var sec_num = parseInt(sec, 10); // don't forget the second param

      var hours = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - hours * 3600) / 60);
      var seconds = sec_num - hours * 3600 - minutes * 60;

      if (hours < 10) {
        hours = "0" + hours;
      }

      if (minutes < 10) {
        minutes = "0" + minutes;
      }

      if (seconds < 10) {
        seconds = "0" + seconds;
      }

      return hours + ':' + minutes + ':' + seconds;
    },
    getSummaries: function getSummaries(param) {
      var columns = param.columns,
          data = param.data;
      var sums = [],
          vm = this;
      columns.forEach(function (column, index) {
        /*if(index === 0){
            sums[index] = 'Employee Pay: ₱' + (data.reduce((prev, curr) => {
                const value = Number();
                if (!isNaN(value)) {
                    return prev + curr.timing * 0.0002777778;
                } else {
                    return prev;
                }
            }, 0) * vm.$store.getters.EMPLOYEE_PAY).toFixed(2);
        }*/
        if (index === 2) {
          sums[index] = vm.toHHMMSS(data.reduce(function (prev, curr) {
            var value = Number(curr.timing);

            if (!isNaN(value)) {
              return prev + curr.timing;
            } else {
              return prev;
            }
          }, 0)) + ' Hour(s)';
        }
      });
      return sums;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/attendance.vue?vue&type=template&id=4e24c79b&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/attendance.vue?vue&type=template&id=4e24c79b& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    {
      staticStyle: {
        "background-color": "#fff",
        padding: "1rem",
        "-webkit-box-flex": "1",
        "-ms-flex": "1 1 auto",
        flex: "1 1 auto"
      }
    },
    [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card-header" }, [
          _vm._v(
            "\n                    " +
              _vm._s(_vm.monthNames[_vm.month]) +
              "\n            "
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "card-body" },
          [
            _c(
              "el-table",
              {
                staticStyle: { width: "100%" },
                attrs: {
                  data: _vm.user.attendances,
                  stripe: "",
                  "summary-method": _vm.getSummaries,
                  "show-summary": ""
                }
              },
              [
                _c("el-table-column", {
                  attrs: { prop: "started_at", label: "Started At" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "stopped_at", label: "Stopped At" }
                }),
                _vm._v(" "),
                _c("el-table-column", {
                  attrs: { prop: "timing", label: "As Hour" },
                  scopedSlots: _vm._u([
                    {
                      key: "default",
                      fn: function(scope) {
                        return [
                          _vm._v(
                            "\n                            " +
                              _vm._s(
                                new Date(scope.row.timing * 1000)
                                  .toISOString()
                                  .substr(11, 8)
                              ) +
                              "\n                        "
                          )
                        ]
                      }
                    }
                  ])
                })
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ }),

/***/ "./resources/js/components/users/attendance.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/users/attendance.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attendance_vue_vue_type_template_id_4e24c79b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attendance.vue?vue&type=template&id=4e24c79b& */ "./resources/js/components/users/attendance.vue?vue&type=template&id=4e24c79b&");
/* harmony import */ var _attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendance.vue?vue&type=script&lang=js& */ "./resources/js/components/users/attendance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _attendance_vue_vue_type_template_id_4e24c79b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _attendance_vue_vue_type_template_id_4e24c79b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/attendance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/attendance.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/users/attendance.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/attendance.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/attendance.vue?vue&type=template&id=4e24c79b&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/users/attendance.vue?vue&type=template&id=4e24c79b& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_template_id_4e24c79b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./attendance.vue?vue&type=template&id=4e24c79b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/attendance.vue?vue&type=template&id=4e24c79b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_template_id_4e24c79b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_attendance_vue_vue_type_template_id_4e24c79b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);