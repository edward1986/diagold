(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'iploadIKndex',
  props: ['image'],
  data: function data() {
    return {
      imageUrl: this.image ? "/upload/".concat(this.image) : '',
      raw: ''
    };
  },
  methods: {
    handleChange: function handleChange(file, fileList) {
      var vm = this;
      vm.$emit('file', file.raw);
      vm.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload: function beforeAvatarUpload(file) {
      var isJPG = file.type === 'image/jpeg';
      var isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$swal('Avatar picture must be JPG format!', '', 'error');
      }

      if (!isLt2M) {
        this.$swal('Avatar picture size can not exceed 2MB!', '', 'error');
      }

      return isJPG && isLt2M;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/create.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/create.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upload_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../upload/index */ "./resources/js/components/upload/index.vue");
/* harmony import */ var _mixins_objectToFormData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/objectToFormData */ "./resources/js/components/mixins/objectToFormData.js");
/* harmony import */ var _mixins_catchError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/catchError */ "./resources/js/components/mixins/catchError.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'isercreate',
  components: {
    upload: _upload_index__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    var d = new Date(),
        month = d.getMonth(),
        year = d.getFullYear(),
        day = d.getDate();
    return {
      month: month,
      year: year,
      day: day,
      isDisabled: false,
      labelPosition: 'left',
      errors: {},
      form: {
        id_number: '',
        name: '',
        email: '',
        password: '',
        confirm_password: ''
      },
      checkAllRoles: false,
      isIndeterminate: true,
      roles: [],
      jobs: [],
      checkRoles: [],
      isUser: false
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    if (to.params.id) {
      axios.get("/api/users/".concat(to.params.id)).then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      })["catch"](function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return Object(_mixins_catchError__WEBPACK_IMPORTED_MODULE_2__["default"])(vm, error);
          });
        }
      });
    } else {
      axios.get("/api/users/create").then(function (response) {
        next(function (vm) {
          return vm.setData(response.data);
        });
      })["catch"](function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return Object(_mixins_catchError__WEBPACK_IMPORTED_MODULE_2__["default"])(vm, error);
          });
        }
      });
    }
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var vm = this;

    if (to.params.id) {
      axios.get("/api/users/".concat(to.params.id)).then(function (response) {
        vm.setData(response.data);
        next();
      })["catch"](function (error) {
        if (error.response.statusText) {
          next(function (vm) {
            return Object(_mixins_catchError__WEBPACK_IMPORTED_MODULE_2__["default"])(vm, error);
          });
        }
      });
    } else {
      next();
    }
  },
  methods: {
    contains: function contains(a, obj) {
      var i = a.length;

      while (i--) {
        if (a[i] === obj) {
          return true;
        }
      }

      return false;
    },
    handleCheckAllRolesChange: function handleCheckAllRolesChange(val) {
      var vm = this;
      vm.checkRoles = val ? _.map(vm.roles, 'id') : [];
      vm.isIndeterminate = false;
    },
    handleCheckedRolesChange: function handleCheckedRolesChange(value) {
      var vm = this,
          checkedCount = value.length;
      vm.contains(value, 3) ? vm.isUser = true : vm.isUser = false;
      vm.checkAllRole = checkedCount === vm.roles.length;
      vm.isIndeterminate = checkedCount > 0 && checkedCount < vm.roles.length;
    },
    onSubmit: function onSubmit() {
      var vm = this;
      this.$refs.form.validate(function (valid) {
        vm.isDisabled = true;
        vm.errors = [];
        var id = vm.$route.params.id;
        vm.form.date_started = vm.form.date_started.replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
        var formData = Object(_mixins_objectToFormData__WEBPACK_IMPORTED_MODULE_1__["default"])(vm.form);

        if (id) {
          formData.append('id', id);
        }

        formData.append('url', vm.$route.fullPath);
        axios.post('/api/users', formData).then(function (response) {
          vm.$swal("".concat(vm.$route.params.id ? 'Update' : 'Created', " successfully!"), '', 'success');
          vm.isDisabled = false;
        })["catch"](function (error) {
          if (error.response.data.errors && error.response.data.message) {
            vm.errors = error.response.data.errors;
            vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
          }

          vm.isDisabled = false;
        });
      });
    },
    setData: function setData(row) {
      var vm = this;
      vm.roles = row.roles;
      vm.jobs = row.jobs;

      if (row.user) {
        vm.form = row.user;

        if (_.isEmpty(vm.form.date_started)) {
          vm.form.date_started = "".concat(vm.year, "-").concat(parseInt(vm.month) + 1 < 10 ? '0' + vm.month : vm.month, "-").concat(vm.day);
        } else {
          vm.form.date_started = vm.form.date_started.replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
        }

        if (_.isEmpty(vm.form.salary)) {
          vm.form.salary = 9906;
        }

        vm.checkRoles = _.map(vm.form.roles, 'id');
        vm.contains(vm.checkRoles, 3) ? vm.isUser = true : vm.isUser = false;
      } else {
        vm.isUser = true;
        vm.checkRoles = [3];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f& ***!
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
    "el-upload",
    {
      staticClass: "yum-avatar-uploader",
      attrs: {
        action: "/api/user/",
        "auto-upload": false,
        "show-file-list": false,
        "on-change": _vm.handleChange,
        name: "file",
        "before-upload": _vm.beforeAvatarUpload
      }
    },
    [
      !_vm.imageUrl && _vm.image
        ? _c("img", {
            staticClass: "yum-avatar",
            attrs: { src: "/upload/100_" + _vm.image, alt: "yum-avatar" }
          })
        : _vm.imageUrl || _vm.image
        ? _c("img", {
            staticClass: "yum-avatar",
            attrs: { src: _vm.imageUrl, alt: "yum-avatar" }
          })
        : _c("div", [
            _c("i", { staticClass: "el-icon-plus yum-avatar-uploader-icon" }),
            _vm._v(" "),
            _c("div", { staticClass: "el-upload__text" }, [
              _vm._v("Drop file here or "),
              _c("em", [_vm._v("click to upload")])
            ])
          ]),
      _vm._v(" "),
      _vm.imageUrl || _vm.image
        ? _c(
            "el-button",
            {
              on: {
                click: function($event) {
                  _vm.imageUrl = ""
                }
              }
            },
            [_vm._v("Clear Image")]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/create.vue?vue&type=template&id=fcfabda4&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/users/create.vue?vue&type=template&id=fcfabda4& ***!
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
      _c(
        "el-form",
        {
          ref: "form",
          attrs: {
            "label-position": "labelPosition",
            size: "small",
            model: _vm.form
          },
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
            {
              class: _vm.errors.file ? "is-error is-required" : "",
              attrs: { label: "Photo" }
            },
            [
              _c("upload", {
                attrs: {
                  removeUrl: "/api/users",
                  image: _vm.form.image ? _vm.form.image.url : ""
                },
                on: {
                  file: function($event) {
                    _vm.form.file = $event
                  }
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.file, function(error) {
                return _vm.errors.file
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.id_number ? "is-error is-required" : "",
              attrs: { label: "ID Number" }
            },
            [
              _c("el-input", {
                attrs: { min: "0", type: "number", required: "" },
                model: {
                  value: _vm.form.id_number,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "id_number", $$v)
                  },
                  expression: "form.id_number"
                }
              }),
              _vm._v(" "),
              _vm.errors.id_number
                ? _c("div", { staticClass: "el-form-item__error" }, [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.errors.id_number[0]) +
                        "\n        "
                    )
                  ])
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.name ? "is-error is-required" : "",
              attrs: { label: "Name" }
            },
            [
              _c("el-input", {
                attrs: { type: "text", required: "" },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.name, function(error) {
                return _vm.errors.name
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.address ? "is-error is-required" : "",
              attrs: { label: "Address" }
            },
            [
              _c("el-input", {
                attrs: { type: "text", required: "" },
                model: {
                  value: _vm.form.address,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "address", $$v)
                  },
                  expression: "form.address"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.address, function(error) {
                return _vm.errors.address
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.incase_of_emergency
                ? "is-error is-required"
                : "",
              attrs: { label: "Incase of emergency" }
            },
            [
              _c("el-input", {
                attrs: { type: "text", required: "" },
                model: {
                  value: _vm.form.incase_of_emergency,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "incase_of_emergency", $$v)
                  },
                  expression: "form.incase_of_emergency"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.incase_of_emergency, function(error) {
                return _vm.errors.incase_of_emergency
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.date_started ? "is-error is-required" : "",
              attrs: { label: "Date Started" }
            },
            [
              _c("el-input", {
                attrs: { type: "date", required: "" },
                model: {
                  value: _vm.form.date_started,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "date_started", $$v)
                  },
                  expression: "form.date_started"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.date_started, function(error) {
                return _vm.errors.date_started
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.salary ? "is-error is-required" : "",
              attrs: { label: "Monthly Rate" }
            },
            [
              _c("el-input", {
                attrs: { type: "text", required: "" },
                model: {
                  value: _vm.form.salary,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "salary", $$v)
                  },
                  expression: "form.salary"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.salary, function(error) {
                return _vm.errors.salary
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.sss_number ? "is-error is-required" : "",
              attrs: { label: "SSS Number" }
            },
            [
              _c("el-input", {
                attrs: { type: "text", required: "" },
                model: {
                  value: _vm.form.sss_number,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sss_number", $$v)
                  },
                  expression: "form.sss_number"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.sss_number, function(error) {
                return _vm.errors.sss_number
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              }),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  class: _vm.errors.philhealth_number
                    ? "is-error is-required"
                    : "",
                  attrs: { label: "Philhealth Number" }
                },
                [
                  _c("el-input", {
                    attrs: { type: "text", required: "" },
                    model: {
                      value: _vm.form.philhealth_number,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "philhealth_number", $$v)
                      },
                      expression: "form.philhealth_number"
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.errors.philhealth_number, function(error) {
                    return _vm.errors.philhealth_number
                      ? _c("div", { staticClass: "el-form-item__error" }, [
                          _vm._v(
                            "\n            " + _vm._s(error) + "\n        "
                          )
                        ])
                      : _vm._e()
                  })
                ],
                2
              ),
              _vm._v(" "),
              _c(
                "el-form-item",
                {
                  class: _vm.errors.pagibig_number
                    ? "is-error is-required"
                    : "",
                  attrs: { label: "Pagibig Number" }
                },
                [
                  _c("el-input", {
                    attrs: { type: "text", required: "" },
                    model: {
                      value: _vm.form.pagibig_number,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "pagibig_number", $$v)
                      },
                      expression: "form.pagibig_number"
                    }
                  }),
                  _vm._v(" "),
                  _vm._l(_vm.errors.pagibig_number, function(error) {
                    return _vm.errors.pagibig_number
                      ? _c("div", { staticClass: "el-form-item__error" }, [
                          _vm._v(
                            "\n            " + _vm._s(error) + "\n        "
                          )
                        ])
                      : _vm._e()
                  })
                ],
                2
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.sss_deduction ? "is-error is-required" : "",
              attrs: { label: "SSS Deduction" }
            },
            [
              _c("el-input", {
                attrs: { min: "0", type: "number", required: "" },
                model: {
                  value: _vm.form.sss_deduction,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sss_deduction", $$v)
                  },
                  expression: "form.sss_deduction"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.sss_deduction, function(error) {
                return _vm.errors.sss_deduction
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n        " + _vm._s(error) + "\n    ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.philhealth_deduction
                ? "is-error is-required"
                : "",
              attrs: { label: "PhilHealth Deduction" }
            },
            [
              _c("el-input", {
                attrs: { min: "0", type: "number", required: "" },
                model: {
                  value: _vm.form.philhealth_deduction,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "philhealth_deduction", $$v)
                  },
                  expression: "form.philhealth_deduction"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.philhealth_deduction, function(error) {
                return _vm.errors.philhealth_deduction
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n        " + _vm._s(error) + "\n    ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.pagibig_deduction ? "is-error is-required" : "",
              attrs: { label: "PAGIBIG Deduction" }
            },
            [
              _c("el-input", {
                attrs: { min: "0", type: "number", required: "" },
                model: {
                  value: _vm.form.pagibig_deduction,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "pagibig_deduction", $$v)
                  },
                  expression: "form.pagibig_deduction"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.pagibig_deduction, function(error) {
                return _vm.errors.pagibig_deduction
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n        " + _vm._s(error) + "\n    ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.sss_loan ? "is-error is-required" : "",
              attrs: { label: "SSS Loan" }
            },
            [
              _c("el-input", {
                attrs: { min: "0", type: "number", required: "" },
                model: {
                  value: _vm.form.sss_loan,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "sss_loan", $$v)
                  },
                  expression: "form.sss_loan"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.sss_loan, function(error) {
                return _vm.errors.sss_loan
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n        " + _vm._s(error) + "\n    ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.pagibig_loan ? "is-error is-required" : "",
              attrs: { label: "PAGIBIG Loan" }
            },
            [
              _c("el-input", {
                attrs: { min: "0", type: "number", required: "" },
                model: {
                  value: _vm.form.pagibig_loan,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "pagibig_loan", $$v)
                  },
                  expression: "form.pagibig_loan"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.pagibig_loan, function(error) {
                return _vm.errors.pagibig_loan
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n        " + _vm._s(error) + "\n    ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.allowance ? "is-error is-required" : "",
              attrs: { label: "DE MINIMIS" }
            },
            [
              _c("el-input", {
                attrs: { min: "0", type: "number", required: "" },
                model: {
                  value: _vm.form.allowance,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "allowance", $$v)
                  },
                  expression: "form.allowance"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.allowance, function(error) {
                return _vm.errors.allowance
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.job_id ? "is-error is-required" : "",
              attrs: { label: "Job/Position" }
            },
            [
              _c(
                "el-select",
                {
                  staticStyle: { width: "100%" },
                  attrs: { required: "" },
                  model: {
                    value: _vm.form.job_id,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "job_id", $$v)
                    },
                    expression: "form.job_id"
                  }
                },
                _vm._l(_vm.jobs, function(item) {
                  return _c(
                    "el-option",
                    {
                      key: item.id,
                      attrs: { label: item.job_title, value: item.id }
                    },
                    [
                      _c("span", { staticStyle: { float: "left" } }, [
                        _vm._v(_vm._s(item.job_title))
                      ])
                    ]
                  )
                }),
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.errors.job_id, function(error) {
                return _vm.errors.job_id
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.time ? "is-error is-required" : "",
              attrs: { label: "Time" }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "el-date-editor el-range-editor el-input__inner el-date-editor--timerange is-active",
                  staticStyle: { width: "100%" }
                },
                [
                  _c("i", {
                    staticClass: "el-input__icon el-range__icon el-icon-time"
                  }),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.time_in,
                        expression: "form.time_in"
                      }
                    ],
                    staticClass: "el-range-input",
                    attrs: {
                      autocomplete: "off",
                      placeholder: "Start time",
                      type: "time"
                    },
                    domProps: { value: _vm.form.time_in },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "time_in", $event.target.value)
                      }
                    }
                  }),
                  _c("span", { staticClass: "el-range-separator" }, [
                    _vm._v("-")
                  ]),
                  _vm._v(" "),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.form.time_out,
                        expression: "form.time_out"
                      }
                    ],
                    staticClass: "el-range-input",
                    attrs: {
                      autocomplete: "off",
                      type: "time",
                      placeholder: "End time",
                      name: ""
                    },
                    domProps: { value: _vm.form.time_out },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.$set(_vm.form, "time_out", $event.target.value)
                      }
                    }
                  })
                ]
              ),
              _vm._v(" "),
              _vm._l(_vm.errors.time_in, function(error) {
                return _vm.errors.time_in
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm.errors.time_out
                  ? _vm._l(_vm.errors.time_out, function(error) {
                      return _c("div", { staticClass: "el-form-item__error" }, [
                        _vm._v("\n            " + _vm._s(error) + "\n        ")
                      ])
                    })
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.email ? "is-error is-required" : "",
              attrs: { label: "Email" }
            },
            [
              _c("el-input", {
                attrs: { type: "email", required: "" },
                model: {
                  value: _vm.form.email,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.email, function(error) {
                return _vm.errors.email
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.password ? "is-error is-required" : "",
              attrs: { label: "Password" }
            },
            [
              _c("el-input", {
                attrs: { type: "password", required: "" },
                model: {
                  value: _vm.form.password,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.password, function(error) {
                return _vm.errors.password
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
                  : _vm._e()
              })
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "el-form-item",
            {
              class: _vm.errors.confirm_password ? "is-error is-required" : "",
              attrs: { label: "Confirm Password" }
            },
            [
              _c("el-input", {
                attrs: { type: "password", required: "" },
                model: {
                  value: _vm.form.confirm_password,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "confirm_password", $$v)
                  },
                  expression: "form.confirm_password"
                }
              }),
              _vm._v(" "),
              _vm._l(_vm.errors.confirm_password, function(error) {
                return _vm.errors.confirm_password
                  ? _c("div", { staticClass: "el-form-item__error" }, [
                      _vm._v("\n            " + _vm._s(error) + "\n        ")
                    ])
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
                  attrs: { type: "primary", loading: _vm.isDisabled },
                  on: { click: _vm.onSubmit }
                },
                [
                  _vm._v(
                    _vm._s(_vm.$route.params.id ? "Update" : "Create") +
                      "\n        "
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "el-button",
                {
                  on: {
                    click: function($event) {
                      return _vm.$router.push({ name: "view-users" })
                    }
                  }
                },
                [_vm._v("Cancel")]
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

/***/ "./resources/js/components/mixins/objectToFormData.js":
/*!************************************************************!*\
  !*** ./resources/js/components/mixins/objectToFormData.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return objectToFormData; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function objectToFormData(obj, form, namespace) {
  var vm = this,
      fd = form || new FormData();
  var formKey;

  for (var property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }

      if (_typeof(obj[property]) === 'object' && !(obj[property] instanceof File)) {
        objectToFormData(obj[property], fd, property);
      } else {
        // if it's a string or a File object
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
}

/***/ }),

/***/ "./resources/js/components/upload/index.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/upload/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7610a50f& */ "./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/upload/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/upload/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/upload/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/upload/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7610a50f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/upload/index.vue?vue&type=template&id=7610a50f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7610a50f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/users/create.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/users/create.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_fcfabda4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=fcfabda4& */ "./resources/js/components/users/create.vue?vue&type=template&id=fcfabda4&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/users/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_fcfabda4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_fcfabda4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/users/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/users/create.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/users/create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/users/create.vue?vue&type=template&id=fcfabda4&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/users/create.vue?vue&type=template&id=fcfabda4& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_fcfabda4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=fcfabda4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/users/create.vue?vue&type=template&id=fcfabda4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_fcfabda4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_fcfabda4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);