(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/create.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/payroll/create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixin_search_user_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../mixin/search/user.js */ "./resources/js/components/mixin/search/user.js");
/* harmony import */ var _mixins_catchError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/catchError */ "./resources/js/components/mixins/catchError.js");
/* harmony import */ var _manual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manual */ "./resources/js/components/payroll/manual.vue");
/* harmony import */ var _saveAsWord__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saveAsWord */ "./resources/js/components/payroll/saveAsWord.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'payrollXreate',
  components: {
    manualPayroll: _manual__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  mixins: [_mixin_search_user_js__WEBPACK_IMPORTED_MODULE_0__["default"], _saveAsWord__WEBPACK_IMPORTED_MODULE_3__["default"]],
  computed: {
    rangeChange: function rangeChange() {
      var $month = parseInt(this.month) + 1;
      this.params = "&month=".concat(this.month < 10 ? "0" + $month : $month, "&year=").concat(this.year, "&range=").concat(this.range);
      return new Date(this.year, this.month + 1, 0).getDate();
    }
  },
  data: function data() {
    return {
      showForm: true,
      monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      saveAs: {
        id: 4,
        name: 'print',
        format: ''
      },
      range: '0',
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
      url: '/api/users/attendances/search',
      form: {
        user_id: []
      },
      manual: [],
      print: [],
      attendancePrint: '',
      loading: false,
      disabled: false
    };
  },
  mounted: function mounted() {
    var vm = this,
        date = new Date(),
        $from = new Date(date.getFullYear(), date.getMonth(), 1),
        $to = new Date(date.getFullYear(), date.getMonth(), 15);
    var $month = parseInt(this.month) + 1;
    this.params = "&month=".concat(this.month < 10 ? "0" + $month : $month, "&year=").concat(this.year, "&range=").concat(this.range);
    this.range = 15 >= date.getDate() ? '0' : '1';

    if (vm.$route.params.id =  true && vm.$route.params.name === 'print') {
      vm.saveAs = {
        id: 5,
        name: 'print',
        format: ''
      };
    }
  },
  methods: {
    onManual: function onManual() {
      var vm = this,
          print = vm.manual,
          isMobile = false;
      var isReady = false;
      var divToPrint = '';
      var i = 0;
      var breaks = true;
      new Promise(function (resolve) {
        resolve(_.map(print, function (response) {
          divToPrint += vm.saveAsManual(response.value, response.obj, response.month, response.year, response.range, response.day, response.monthName, breaks = !breaks, response.events, response.manual, 'manual');
        }));
      }).then(function () {
        var newWin = window.open("");
        newWin.document.write(vm.htmlBody(divToPrint));
        newWin.focus(); // device detection

        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
          newWin.print();
        } else {
          newWin.print();
          newWin.close();
        }
      });
    },
    onSubmit: function onSubmit(form) {
      var vm = this;
      vm.loading = true;
      vm.print = [];
      var i = 0;

      _.forEach(vm.form.user_id, function (value) {
        axios.post((vm.url ? vm.url : '/api/users/search') + '?' + (vm.params ? vm.params : ''), {
          user_id: value
        }).then(function (q) {
          vm.loading = false;

          if (vm.url && vm.saveAs.id >= 0 && vm.saveAs.id <= 4 || vm.saveAs.id === 6) {
            if (vm.saveAs.id === 0) {
              vm.showForm = false;
            }

            vm.saveAsXml(q.data.users.data, q.data.events, q.data.leaves, vm.range, i++);
          }

          if (vm.url && vm.saveAs.id === 5) {
            vm.printAttendance(q.data.users.data, q.data.events, q.data.leaves, vm.range, i++);
          }

          if (i + 1 === vm.form.user_id.length) {
            vm.loading = false;
          }
        })["catch"](function (error) {
          vm.loading = false;

          if (error.data && error.response.data && error.response.data.errors && error.response.data.message) {
            vm.errors = error.response.data.errors;
            vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
          }
        });
      });
    },
    printAttendance: function printAttendance(data, events, leaves, range, index) {
      var vm = this;
      var template = '';
      var breaks = index + 1 === vm.form.user_id.length;
      var year = vm.year;
      var range_ = range == '0' ? '1-15' : "16-".concat(new Date(vm.year, vm.month + 1, 0).getDate());
      var monthName_ = vm.monthNames[vm.month];
      var clate = 0,
          cut = 0;

      _.forEach(data, function (value) {
        var totals = 0;
        template = "\n    <html><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=windows-1252\"><meta name=\"Generator\" content=\"Microsoft Word 15 (filtered)\"><title>Time sheet</title><style><!-- /* Font Definitions */ @font-face{font-family:\"Cambria Math\";panose-1:2 4 5 3 5 4 6 3 2 4;}@font-face{font-family:Tahoma;panose-1:2 11 6 4 3 5 4 4 2 4;}/* Style Definitions */ p.MsoNormal, li.MsoNormal, div.MsoNormal{margin:0cm;margin-bottom:.0001pt;font-size:10.0pt;font-family:\"Arial\",sans-serif;}h1{mso-style-link:\"Heading 1 Char\";margin:0cm;margin-bottom:.0001pt;text-align:center;font-size:10.0pt;font-family:\"Arial\",sans-serif;}h2{mso-style-link:\"Heading 2 Char\";margin:0cm;margin-bottom:.0001pt;text-align:right;font-size:10.0pt;font-family:\"Arial\",sans-serif;}p.MsoTitle, li.MsoTitle, div.MsoTitle{mso-style-link:\"Title Char\";margin:0cm;margin-bottom:.0001pt;text-align:right;font-size:26.0pt;font-family:\"Arial\",sans-serif;color:#7F7F7F;letter-spacing:.25pt;font-weight:bold;}p.MsoAcetate, li.MsoAcetate, div.MsoAcetate{mso-style-link:\"Balloon Text Char\";margin:0cm;margin-bottom:.0001pt;font-size:8.0pt;font-family:\"Tahoma\",sans-serif;}span.MsoPlaceholderText{color:gray;}span.Heading1Char{mso-style-name:\"Heading 1 Char\";mso-style-link:\"Heading 1\";font-family:\"Arial\",sans-serif;font-weight:bold;}span.Heading2Char{mso-style-name:\"Heading 2 Char\";mso-style-link:\"Heading 2\";font-family:\"Arial\",sans-serif;font-weight:bold;}p.msonormal0, li.msonormal0, div.msonormal0{mso-style-name:msonormal;margin-right:0cm;margin-left:0cm;font-size:12.0pt;font-family:\"Times New Roman\",serif;}span.TitleChar{mso-style-name:\"Title Char\";mso-style-link:Title;font-family:\"Arial\",sans-serif;color:#7F7F7F;letter-spacing:.25pt;font-weight:bold;}span.BalloonTextChar{mso-style-name:\"Balloon Text Char\";mso-style-link:\"Balloon Text\";font-family:\"Tahoma\",sans-serif;}p.CompanyName, li.CompanyName, div.CompanyName{mso-style-name:\"Company Name\";margin:0cm;margin-bottom:.0001pt;font-size:14.0pt;font-family:\"Arial\",sans-serif;font-weight:bold;}p.Amount, li.Amount, div.Amount{mso-style-name:Amount;margin:0cm;margin-bottom:.0001pt;text-align:right;font-size:10.0pt;font-family:\"Arial\",sans-serif;}p.ContactInfo, li.ContactInfo, div.ContactInfo{mso-style-name:\"Contact Info\";margin-top:0cm;margin-right:0cm;margin-bottom:36.0pt;margin-left:0cm;font-size:9.0pt;font-family:\"Arial\",sans-serif;}p.ContactInfoCxSpFirst, li.ContactInfoCxSpFirst, div.ContactInfoCxSpFirst{mso-style-name:\"Contact InfoCxSpFirst\";margin:0cm;margin-bottom:.0001pt;font-size:9.0pt;font-family:\"Arial\",sans-serif;}p.ContactInfoCxSpMiddle, li.ContactInfoCxSpMiddle, div.ContactInfoCxSpMiddle{mso-style-name:\"Contact InfoCxSpMiddle\";margin:0cm;margin-bottom:.0001pt;font-size:9.0pt;font-family:\"Arial\",sans-serif;}p.ContactInfoCxSpLast, li.ContactInfoCxSpLast, div.ContactInfoCxSpLast{mso-style-name:\"Contact InfoCxSpLast\";margin-top:0cm;margin-right:0cm;margin-bottom:36.0pt;margin-left:0cm;font-size:9.0pt;font-family:\"Arial\",sans-serif;}.MsoChpDefault{font-size:10.0pt;}@page WordSection1{size:792.0pt 612.0pt;margin:54.0pt 72.0pt 54.0pt 36.0pt;}div.WordSection1{page:WordSection1;}--> </style> </head> <body lang=\"EN-PH\"> <div class=\"WordSection1\"> <table class=\"MsoTableGrid\" border=\"0\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width:100.0%;border-collapse:collapse;border:none\"> <tbody><tr style=\"page-break-inside:avoid;height:64.8pt\"> <td width=\"463\" colspan=\"2\" valign=\"top\" style=\"width:347.4pt;padding:0cm 5.4pt 0cm 5.4pt; height:64.8pt\"> <p class=\"CompanyName\"><span lang=\"EN-US\">DIAGOLD PAWNSHOP INC.</span></p><p class=\"ContactInfoCxSpFirst\"><span lang=\"EN-US\" style=\"font-size:12.0pt\">Toy Bldg.Lapu -Lapu Street,</span></p><p class=\"ContactInfoCxSpLast\"><span lang=\"EN-US\" style=\"font-size:12.0pt\">&nbsp;Agdao Davao City</span></p></td><td width=\"463\" colspan=\"3\" valign=\"top\" style=\"width:347.4pt;padding:0cm 5.4pt 0cm 5.4pt; height:64.8pt\"> <p class=\"MsoTitle\"><span lang=\"EN-US\">Attendance Sheet</span></p><p class=\"MsoNormal\" align=\"right\" style=\"text-align:right\"><span lang=\"EN-US\" style=\"font-size:14.0pt\">".concat(monthName_, " ").concat(range_, " ").concat(year, "</span></p></td></tr><tr style=\"page-break-inside:avoid;height:21.6pt\"> <td width=\"182\" valign=\"bottom\" style=\"width:136.3pt;padding:0cm 5.4pt 0cm 5.4pt; height:21.6pt\"> <p class=\"MsoNormal\"><span lang=\"EN-US\">Employee Name:</span></p></td><td width=\"282\" colspan=\"2\" valign=\"bottom\" style=\"width:211.4pt;border:none; border-bottom:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:21.6pt\"> <p class=\"MsoNormal\"><span lang=\"EN-US\">").concat(value.name, "</span></p></td><td width=\"120\" valign=\"bottom\" style=\"width:90.35pt;padding:0cm 5.4pt 0cm 5.4pt; height:21.6pt\"> <p class=\"MsoNormal\"><span lang=\"EN-US\">ID Number:</span></p></td><td width=\"342\" valign=\"bottom\" style=\"width:256.75pt;border:none;border-bottom: solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:21.6pt\"> <p class=\"MsoNormal\"><span lang=\"EN-US\">").concat(value.id_number, "</span></p></td></tr><tr height=\"0\"> <td width=\"153\" style=\"border:none\"></td><td width=\"186\" style=\"border:none\"></td><td width=\"0\" style=\"border:none\"></td><td width=\"120\" style=\"border:none\"></td><td width=\"248\" style=\"border:none\"></td></tr></tbody></table> <p class=\"MsoNormal\"><span lang=\"EN-US\">&nbsp;</span></p><table class=\"MsoNormalTable\" border=\"1\" cellspacing=\"0\" cellpadding=\"0\" width=\"100%\" style=\"width:100.0%;border-collapse:collapse;border:none\"> <tbody><tr style=\"page-break-inside:avoid\"> <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt; padding:3.6pt 5.75pt 3.6pt 5.75pt\"> <h1><span lang=\"EN-US\">Date</span></h1> </td><td width=\"236\" valign=\"top\" style=\"width:177.2pt;border:solid windowtext 1.0pt; border-left:none;padding:3.6pt 5.75pt 3.6pt 5.75pt\"> <h1><span lang=\"EN-US\">Start Time</span></h1> </td><td width=\"217\" valign=\"top\" style=\"width:163.0pt;border:solid windowtext 1.0pt; border-left:none;padding:3.6pt 5.75pt 3.6pt 5.75pt\"> <h1><span lang=\"EN-US\">End Time</span></h1> </td><td width=\"260\" valign=\"top\" style=\"width:194.7pt;border:solid windowtext 1.0pt; border-left:none;padding:3.6pt 5.75pt 3.6pt 5.75pt\"> <h1><span lang=\"EN-US\">Total Hrs.</span></h1> </td></tr>\n                    <tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                    border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">").concat(range == '0' ? '1' : '16', "</span></p>\n                    </td>\n\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '01', '16');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '01', '16');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '01', '16');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '01', '16');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">&nbsp;</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '01', '16');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '01', '16');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '01', '16');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '01', '16');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '01', '16')) ? (totals += vm.totalHours(value.attendances, '01', '16'), vm.totalHours(value.attendances, '01', '16').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>");
        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '2' : '17', "</span></p>\n                </td>\n\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '02', '17');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '02', '17');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '02', '17');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '02', '17');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '02', '17');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '02', '17');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '02', '17');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '02', '17');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '02', '17')) ? (totals += vm.totalHours(value.attendances, '02', '17'), vm.totalHours(value.attendances, '02', '17').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>");
        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '3' : '18', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '03', '18');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '03', '18');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '03', '18');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '03', '18');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '03', '18');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '03', '18');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '03', '18');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '03', '18');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '03', '18')) ? (totals += vm.totalHours(value.attendances, '03', '18'), vm.totalHours(value.attendances, '03', '18').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>");
        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '4' : '19', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '04', '19');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '04', '19');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '04', '19');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '04', '19');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '04', '19');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '04', '19');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '04', '19');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '04', '19');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '04', '19')) ? (totals += vm.totalHours(value.attendances, '04', '19'), vm.totalHours(value.attendances, '04', '19').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>");
        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '5' : '20', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '05', '20');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '05', '20');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '05', '20');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '05', '20');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '05', '20');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '05', '20');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '05', '20');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '05', '20');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '05', '20')) ? (totals += vm.totalHours(value.attendances, '05', '20'), vm.totalHours(value.attendances, '05', '20').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>"); //---06----

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '6' : '21', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '06', '21');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '06', '21');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '06', '21');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '06', '21');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '06', '21');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '06', '21');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '06', '21');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '06', '21');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '06', '21')) ? (totals += vm.totalHours(value.attendances, '06', '21'), vm.totalHours(value.attendances, '06', '21').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>"); //--07--

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '7' : '22', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '07', '22');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '07', '22');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '07', '22');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '07', '22');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '07', '22');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '07', '22');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '07', '22');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '07', '22');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '07', '22')) ? (totals += vm.totalHours(value.attendances, '07', '22'), vm.totalHours(value.attendances, '07', '22').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>"); //---08

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '8' : '23', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '08', '23');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '08', '23');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '08', '23');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '08', '23');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '08', '23');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '08', '23');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '08', '23');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '08', '23');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '08', '23')) ? (totals += vm.totalHours(value.attendances, '08', '23'), vm.totalHours(value.attendances, '08', '23').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>"); //----9

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '9' : '24', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '09', '24');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '09', '24');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '09', '24');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '09', '24');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '09', '24');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '09', '24');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '09', '24');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '09', '24');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '09', '24')) ? (totals += vm.totalHours(value.attendances, '09', '24'), vm.totalHours(value.attendances, '09', '24').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>"); //----10

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '10' : '25', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '10', '25');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '10', '25');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '10', '25');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '10', '25');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '10', '25');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '10', '25');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '10', '25');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '10', '25');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '10', '25')) ? (totals += vm.totalHours(value.attendances, '10', '25'), vm.totalHours(value.attendances, '10', '25').toFixed(2)) : '', "</span></p>\n    </td>\n    </tr>"); //-----11

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '11' : '26', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '11', '26');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '11', '26');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '11', '26');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '11', '26');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '11', '26');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '11', '26');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '11', '26');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '11', '26');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '11', '26')) ? (totals += vm.totalHours(value.attendances, '11', '26'), vm.totalHours(value.attendances, '11', '26').toFixed(2)) : '', "</span></p>"); //----12

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '12' : '27', "</span></p>\n                </td>\n                    ");

        if (range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) {
          template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '12', '27');
          }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '12', '27');
          }).started_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27).getDay() === 0)) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '12', '27');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '12', '27');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
          }
        }

        if (range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) {
          template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
          _.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '12', '27');
          }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '12', '27');
          }).stopped_at.split(' ')[1]) : '';
          template += "</span></p></td>";
        } else {
          if (vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27).getDay() === 0)) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '12', '27');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '12', '27');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            template += "";
          }
        }

        template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '12', '27')) ? (totals += vm.totalHours(value.attendances, '12', '27'), vm.totalHours(value.attendances, '12', '27').toFixed(2)) : '', "</span></p>"); //---13

        if (range == "0" || 28 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
          template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '13' : 28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '28' : '', "</span></p>\n                </td>\n                    ");

          if (range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '13', '28');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '13', '28');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28).getDay() === 0)) {
              template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '13', '28');
              }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '13', '28');
              }).started_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:13.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
            }
          }

          if (range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '13', '28');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '13', '28');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28).getDay() === 0)) {
              template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '13', '28');
              }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '13', '28');
              }).stopped_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += "";
            }
          }

          template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '13', '28')) ? (totals += vm.totalHours(value.attendances, '13', '28'), vm.totalHours(value.attendances, '13', '28').toFixed(2)) : '', "</span></p>");
        } //---14


        if (range == "0" || 29 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
          template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '14' : 29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '29' : '', "</span></p>\n                </td>\n                    ");

          if (range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '14', '29');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '14', '29');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29).getDay() === 0)) {
              template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '14', '29');
              }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '14', '29');
              }).started_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:13.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
            }
          }

          if (range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '14', '29');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '14', '29');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29).getDay() === 0)) {
              template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '14', '29');
              }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '14', '29');
              }).stopped_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += "";
            }
          }

          template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '14', '29')) ? (totals += vm.totalHours(value.attendances, '14', '29'), vm.totalHours(value.attendances, '14', '29').toFixed(2)) : '', "</span></p>");
        } //----15


        if (range == "0" || 30 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
          template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '15' : 30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '30' : '', "</span></p>\n                </td>\n                    ");

          if (range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '15', '30');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '15', '30');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30).getDay() === 0)) {
              template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '15', '30');
              }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '15', '30');
              }).started_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:13.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
            }
          }

          if (range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '15', '30');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '15', '30');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30).getDay() === 0)) {
              template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '15', '30');
              }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '15', '30');
              }).stopped_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += "";
            }
          }

          template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '15', '30')) ? (totals += vm.totalHours(value.attendances, '15', '30'), vm.totalHours(value.attendances, '15', '30').toFixed(2)) : '', "</span></p>");
        } //----16


        if (31 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
          template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n\n                    <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">".concat(range == '0' ? '' : 31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '31' : '', "</span></p>\n                </td>\n                    ");

          if (range == '0' ? new Date(vm.year, vm.month, 0).getDay() !== 0 : new Date(vm.year, vm.month, 31).getDay() !== 0) {
            template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '00', '31');
            }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '00', '31');
            }).started_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? new Date(vm.year, vm.month, 0).getDay() === 0 : new Date(vm.year, vm.month, 31).getDay() === 0)) {
              template += "<td width=\"236\" valign=\"top\" style=\"width:177.2pt;border-top:none;border-left:\n                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n                    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '00', '31');
              }) ? template += vm.tConvert(_.find(value.attendances, function (o) {
                return vm.checkTime('started_at', o, '00', '31');
              }).started_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += " <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:13.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">DAYOFF</span></p>\n    </td>";
            }
          }

          if (range == '0' ? new Date(vm.year, vm.month, 0).getDay() !== 0 : new Date(vm.year, vm.month, 31).getDay() !== 0) {
            template += " <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
            _.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '00', '31');
            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '00', '31');
            }).stopped_at.split(' ')[1]) : '';
            template += "</span></p></td>";
          } else {
            if (vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? new Date(vm.year, vm.month, 0).getDay() === 0 : new Date(vm.year, vm.month, 31).getDay() === 0)) {
              template += " <td width=\"217\" valign=\"top\" style=\"width:173.0pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">";
              _.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '00', '31');
              }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                return vm.checkTime('stopped_at', o, '00', '31');
              }).stopped_at.split(' ')[1]) : '';
              template += "</span></p></td>";
            } else {
              template += "";
            }
          }

          template += "<td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(vm.totalHours(value.attendances, '00', '31')) ? (totals += vm.totalHours(value.attendances, '00', '31'), vm.totalHours(value.attendances, '00', '31').toFixed(2)) : '', "</span></p>");
        }

        template += "<tr style=\"page-break-inside:avoid;height:10.8pt\">\n        <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:solid windowtext 1.0pt;\n    border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">&nbsp;</span></p>\n    </td>\n    <td width=\"454\" colspan=\"2\" valign=\"top\" style=\"width:12.0cm;border-top:none;\n    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"MsoNormal\"><span lang=\"EN-US\"></span></p>\n    </td>\n    <td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">&nbsp;</span></p>\n    </td>\n    </tr>\n    <tr style=\"page-break-inside:avoid\">\n        <td width=\"198\" valign=\"top\" style=\"width:148.6pt;border:none;padding:3.6pt 5.75pt 3.6pt 5.75pt\">\n        <p class=\"MsoNormal\" align=\"right\" style=\"text-align:right\"><span lang=\"EN-US\">&nbsp;</span></p>\n    </td>\n    <td width=\"236\" valign=\"top\" style=\"width:177.2pt;border:none;padding:3.6pt 5.75pt 3.6pt 5.75pt\">\n        <p class=\"MsoNormal\" align=\"right\" style=\"text-align:right\"><span lang=\"EN-US\">&nbsp;</span></p>\n    </td>\n    <td width=\"217\" valign=\"top\" style=\"width:163.0pt;border:none;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt\">\n    <h2><span lang=\"EN-US\">Totals</span></h2>\n    </td>\n    <td width=\"260\" valign=\"top\" style=\"width:194.7pt;border-top:none;border-left:\n    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\n    padding:3.6pt 5.75pt 3.6pt 5.75pt\">\n    <p class=\"Amount\"><span lang=\"EN-US\">".concat(!isNaN(totals) ? totals.toFixed(2) : 0, " hrs.</span></p>\n    </td>\n    </tr>\n    </tbody></table>\n\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">&nbsp;</span></p>\n\n    <p class=\"MsoNormal\"><span lang=\"EN-US\">&nbsp;</span></p>\n\n    </div>");

        if (!breaks) {
          template += '<p style="page-break-before: always" >';
        }

        template += "</body></html>\n";
      });

      vm.attendancePrint += template;

      if (index + 1 === vm.form.user_id.length) {
        var newWin = window.open("");
        newWin.document.write(vm.attendancePrint);
        newWin.focus(); // device detection

        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
          newWin.print();
        } else {
          newWin.print();
          newWin.close();
        }

        vm.attendancePrint = '';
      }
    },
    saveAsXml: function saveAsXml(data, events, leaves, range, i) {
      var regDay = 0,
          lwp = 0,
          late = 0,
          ut = 0,
          loa = 0,
          regHoliday = 0,
          specialHoliday = 0,
          restDay = 0,
          overTime25 = 0,
          overTime30 = 0,
          yumed30 = 0,
          yumed = 0,
          time = [],
          start_at = '',
          stop_at = '',
          clate = 0,
          cut = 0;
      var vm = this;
      var date = new Date();
      var $month = parseInt(vm.month);

      _.forEach(data, function (value) {
        var template = "<?xml version=\"1.0\"?>\n<?mso-application progid=\"Excel.Sheet\"?>\n<Workbook xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\"\nxmlns:o=\"urn:schemas-microsoft-com:office:office\"\nxmlns:x=\"urn:schemas-microsoft-com:office:excel\"\nxmlns:ss=\"urn:schemas-microsoft-com:office:spreadsheet\"\nxmlns:html=\"http://www.w3.org/TR/REC-html40\">\n<DocumentProperties xmlns=\"urn:schemas-microsoft-com:office:office\">\n<Author>Edward Lance Lorilla</Author>\n<LastAuthor>Edward Lance Lorilla</LastAuthor>\n<LastPrinted>2019-08-09T15:05:57Z</LastPrinted>\n<Created>2019-07-25T01:17:51Z</Created>\n<LastSaved>2019-08-10T14:58:45Z</LastSaved>\n<Version>16.00</Version>\n</DocumentProperties>\n<OfficeDocumentSettings xmlns=\"urn:schemas-microsoft-com:office:office\">\n<AllowPNG/>\n</OfficeDocumentSettings>\n<ExcelWorkbook xmlns=\"urn:schemas-microsoft-com:office:excel\">\n<WindowHeight>11160</WindowHeight>\n<WindowWidth>20730</WindowWidth>\n<WindowTopX>32767</WindowTopX>\n<WindowTopY>32767</WindowTopY>\n<ProtectStructure>False</ProtectStructure>\n<ProtectWindows>False</ProtectWindows>\n</ExcelWorkbook>\n<Styles>\n<Style ss:ID=\"Default\" ss:Name=\"Normal\">\n<Alignment ss:Vertical=\"Bottom\"/>\n<Borders/>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#000000\"/>\n<Interior/>\n<NumberFormat/>\n<Protection/>\n</Style>\n<Style ss:ID=\"s16\" ss:Name=\"Comma\">\n<NumberFormat ss:Format=\"_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-\"/>\n</Style>\n<Style ss:ID=\"m3031143660512\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"m3031143660552\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"m3031143660572\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\" ss:WrapText=\"1\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"m3031143660592\" ss:Parent=\"s16\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"m3031143660612\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s17\">\n<Alignment ss:Vertical=\"Center\"/>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s18\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s19\">\n<Alignment ss:Vertical=\"Center\"/>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\"/>\n</Style>\n<Style ss:ID=\"s20\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s21\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s22\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s23\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s24\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s25\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s26\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#000000\"\nss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s27\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s28\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s29\">\n<Alignment ss:Vertical=\"Center\" ss:WrapText=\"1\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s30\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\" ss:WrapText=\"1\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s31\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#000000\"\nss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s32\">\n<Alignment ss:Vertical=\"Center\"/>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Size=\"11\" ss:Color=\"#000000\"\nss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s33\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s34\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s35\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s36\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s37\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s38\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s39\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s40\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"0\"/>\n</Style>\n<Style ss:ID=\"s41\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"Fixed\"/>\n</Style>\n<Style ss:ID=\"s42\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"Fixed\"/>\n</Style>\n<Style ss:ID=\"s43\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n</Style>\n<Style ss:ID=\"s44\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n</Style>\n<Style ss:ID=\"s45\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"0%\"/>\n</Style>\n<Style ss:ID=\"s46\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"0%\"/>\n</Style>\n<Style ss:ID=\"s47\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s48\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s49\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s50\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s51\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s52\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\"/>\n<NumberFormat ss:Format=\"Fixed\"/>\n</Style>\n<Style ss:ID=\"s53\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n</Style>\n<Style ss:ID=\"s54\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"Fixed\"/>\n</Style>\n<Style ss:ID=\"s55\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s56\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s57\">\n<Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s58\">\n<Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s59\">\n<Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s60\" ss:Parent=\"s16\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat/>\n</Style>\n<Style ss:ID=\"s61\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s62\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"0%\"/>\n</Style>\n<Style ss:ID=\"s63\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"0%\"/>\n</Style>\n<Style ss:ID=\"s64\" ss:Parent=\"s16\">\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s65\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s66\" ss:Parent=\"s16\">\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s67\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\"/>\n<NumberFormat ss:Format=\"0\"/>\n</Style>\n<Style ss:ID=\"s68\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s69\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s70\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s71\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s72\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s73\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s74\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n<Interior ss:Color=\"#D9D9D9\" ss:Pattern=\"Solid\"/>\n</Style>\n<Style ss:ID=\"s75\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s76\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s77\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s78\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"#,##0.00;-#,##0.00\"/>\n</Style>\n<Style ss:ID=\"s79\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#FF0000\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s80\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s81\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n</Style>\n<Style ss:ID=\"s82\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<NumberFormat ss:Format=\"0\"/>\n</Style>\n<Style ss:ID=\"s83\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#C00000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s84\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s85\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s86\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"@\"/>\n</Style>\n<Style ss:ID=\"s87\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Bold=\"1\"/>\n<NumberFormat ss:Format=\"0\"/>\n</Style>\n<Style ss:ID=\"s88\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s89\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s90\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#C00000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s91\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s92\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s93\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s94\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s95\" ss:Parent=\"s16\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Left\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n<Border ss:Position=\"Right\" ss:LineStyle=\"Continuous\" ss:Weight=\"2\"/>\n<Border ss:Position=\"Top\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n<Style ss:ID=\"s96\">\n<Alignment ss:Vertical=\"Center\"/>\n<Borders>\n<Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"1\"/>\n</Borders>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\"/>\n</Style>\n<Style ss:ID=\"s113\">\n<Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n<Font ss:FontName=\"Calibri\" x:Family=\"Swiss\" ss:Color=\"#000000\" ss:Bold=\"1\"/>\n</Style>\n</Styles>\n<Worksheet ss:Name=\"Sheet1\">\n<Table ss:ExpandedColumnCount=\"17\" ss:ExpandedRowCount=\"31\" x:FullColumns=\"1\"\nx:FullRows=\"1\" ss:DefaultRowHeight=\"15\">\n<Row>\n<Cell ss:MergeAcross=\"15\" ss:StyleID=\"s113\"/>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s17\"><Data ss:Type=\"String\">NAME : ".concat(value.name ? value.name : '', "</Data></Cell>\n<Cell ss:StyleID=\"s18\"/>\n<Cell ss:StyleID=\"s18\"/>\n<Cell ss:StyleID=\"s18\"/>\n<Cell ss:StyleID=\"s18\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s20\"><Data ss:Type=\"String\">Payroll Period:</Data></Cell>\n<Cell ss:StyleID=\"s21\"/>\n<Cell ss:StyleID=\"s22\"/>\n<Cell ss:MergeAcross=\"2\" ss:StyleID=\"m3031143660552\"><Data ss:Type=\"String\">").concat(vm.monthNames[$month], " ").concat(vm.range == '0' ? '1-15' : '16-' + new Date(vm.year, vm.month + 1, 0).getDate(), ", ").concat(vm.year, "</Data></Cell>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s23\"><Data ss:Type=\"String\">Date</Data></Cell>\n<Cell ss:StyleID=\"s24\"><Data ss:Type=\"String\">Time</Data></Cell>\n<Cell ss:StyleID=\"s24\"/>\n<Cell ss:MergeAcross=\"4\" ss:StyleID=\"m3031143660572\"><Data ss:Type=\"String\">Basic Pay</Data></Cell>\n<Cell ss:StyleID=\"s20\"><Data ss:Type=\"String\">REGULAR</Data></Cell>\n<Cell ss:StyleID=\"s25\"><Data ss:Type=\"String\">Special</Data></Cell>\n<Cell ss:StyleID=\"s26\"><Data ss:Type=\"String\">Rest</Data></Cell>\n<Cell ss:StyleID=\"s21\"><Data ss:Type=\"String\">Monthly Rate</Data></Cell>\n<Cell ss:StyleID=\"s22\"/>\n<Cell ss:MergeAcross=\"2\" ss:StyleID=\"m3031143660592\"><Data ss:Type=\"Number\">").concat(value.salary ? value.salary : 0, "</Data></Cell>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s27\"/>\n<Cell ss:StyleID=\"s28\"><Data ss:Type=\"String\">In </Data></Cell>\n<Cell ss:StyleID=\"s23\"><Data ss:Type=\"String\">Out</Data></Cell>\n<Cell ss:StyleID=\"s29\"><Data ss:Type=\"String\">Reg Day</Data></Cell>\n<Cell ss:StyleID=\"s30\"><Data ss:Type=\"String\">LWP</Data></Cell>\n<Cell ss:StyleID=\"s23\"><Data ss:Type=\"String\">Late</Data></Cell>\n<Cell ss:StyleID=\"s23\"><Data ss:Type=\"String\">UT</Data></Cell>\n<Cell ss:StyleID=\"s27\"><Data ss:Type=\"String\">L.O.A</Data></Cell>\n<Cell ss:StyleID=\"s31\"><Data ss:Type=\"String\">Holiday </Data></Cell>\n<Cell ss:StyleID=\"s32\"><Data ss:Type=\"String\">Holiday </Data></Cell>\n<Cell ss:StyleID=\"s32\"><Data ss:Type=\"String\">Pay</Data></Cell>\n<Cell ss:StyleID=\"s33\"><Data ss:Type=\"String\">Overtime</Data></Cell>\n<Cell ss:StyleID=\"s22\"/>\n<Cell ss:StyleID=\"s34\"><Data ss:Type=\"String\">Pay Computation</Data></Cell>\n<Cell ss:StyleID=\"s35\"/>\n<Cell ss:StyleID=\"s35\"/>\n<Cell ss:StyleID=\"s36\"/>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s37\"/>\n<Cell ss:StyleID=\"s38\"/>\n<Cell ss:StyleID=\"s39\"/>\n<Cell ss:StyleID=\"s40\"/>\n<Cell ss:StyleID=\"s41\"/>\n<Cell ss:StyleID=\"s41\"/>\n<Cell ss:StyleID=\"s41\"/>\n<Cell ss:StyleID=\"s42\"/>\n<Cell ss:StyleID=\"s43\"/>\n<Cell ss:StyleID=\"s43\"/>\n<Cell ss:StyleID=\"s44\"/>\n<Cell ss:StyleID=\"s45\"><Data ss:Type=\"Number\">0.25</Data></Cell>\n<Cell ss:StyleID=\"s46\"><Data ss:Type=\"Number\">0.3</Data></Cell>\n<Cell ss:StyleID=\"s47\"><Data ss:Type=\"String\">Basic Pay + COLA</Data></Cell>\n<Cell ss:StyleID=\"s38\"/>\n<Cell ss:StyleID=\"s48\"/>\n<Cell ss:StyleID=\"s49\"><Data ss:Type=\"Number\">").concat(value.salary ? value.salary / 2 : 0, "</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s50\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">01</Font>' : '<Font html:Color="#FF0000">16</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '01', '16');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '01', '16');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '01', '16');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '01', '16');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '01', '16') && !vm.checkUnderTime(value.attendances, '01', '16', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '01', '16', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '01', '16');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '01', '16');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '01', '16');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '01', '16');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '01', '16') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) && vm.checkLeave(leaves, '01', '16')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay()) === 0 && vm.checkLeave(leaves, '01', '16')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 1, 16) && !vm.checkLeave(leaves, '01', '16') && vm.checkLate(value.attendances, '01', '16', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '01', '16')), Math.max(0, 8 - vm.totalHours(value.attendances, '01', '16')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '01', '16', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 1, 16) && vm.checkUnderTime(value.attendances, '01', '16', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '01', '16')), Math.max(0, 8 - vm.totalHours(value.attendances, '01', '16')), cut++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkUnderTime(value.attendances, '01', '16', value.time_in, value.time_out) && vm.checkSpecialHoliday(events, '01', '16') || vm.checkRegularHoliday(events, '01', '16') || vm.checkLeave(leaves, '01', '16')) && ((vm.checkStartEndTime(value.attendances, '01', '16') ? !vm.checkStartEndTime(value.attendances, '01', '16') : vm.checkStartEndTime(value.attendances, '01', '16')) && (range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() === 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() !== 0) && vm.checkRegularHoliday(events, '01', '16') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() !== 0) && vm.checkSpecialHoliday(events, '01', '16') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() === 0 ? '1' : '' : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() === 0) && vm.checkStartEndTime(value.attendances, '01', '16') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '01', '16') && range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 && vm.totalHours(value.attendances, '01', '16') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '01', '16') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 16).getDay() !== 0 && vm.totalHours(value.attendances, '01', '16') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '01', '16') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '01', '16') && range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '01', '16'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '01', '16'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s55\"><Data ss:Type=\"String\">Restday Pay</Data></Cell>\n<Cell ss:StyleID=\"s38\"/>\n<Cell ss:StyleID=\"s48\" ss:Formula=\"=R[16]C[-5]\"><Data ss:Type=\"Number\">1</Data></Cell>\n<Cell ss:StyleID=\"s49\" ss:Formula=\"=RC[-1]*381\"><Data ss:Type=\"Number\">381</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">02</Font>' : '<Font html:Color="#FF0000">17</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '02', '17');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '02', '17');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '02', '17');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '02', '17');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '02', '17') && !vm.checkUnderTime(value.attendances, '02', '17', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '02', '17', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '02', '17', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '02', '17');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '02', '17');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '02', '17');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '02', '17');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '02', '17') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) && vm.checkLeave(leaves, '02', '17')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay()) === 0 && vm.checkLeave(leaves, '02', '17')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 2, 17) && !vm.checkLeave(leaves, '02', '17') && vm.checkLate(value.attendances, '02', '17', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '02', '17')), Math.max(0, 8 - vm.totalHours(value.attendances, '02', '17')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '02', '17', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 2, 17) && vm.checkUnderTime(value.attendances, '02', '17', value.time_in, value.time_out) ? (ut += 8 - vm.totalHours(value.attendances, '02', '17'), Math.max(0, 8 - vm.totalHours(value.attendances, '02', '17')), cut++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '02', '17') || vm.checkRegularHoliday(events, '02', '17') || vm.checkLeave(leaves, '02', '17')) && ((vm.checkStartEndTime(value.attendances, '02', '17') ? !vm.checkStartEndTime(value.attendances, '02', '17') : vm.checkStartEndTime(value.attendances, '02', '17')) && (range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() === 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() !== 0) && vm.checkRegularHoliday(events, '02', '17') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() !== 0) && vm.checkSpecialHoliday(events, '02', '17') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() === 0 ? '1' : '' : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() === 0) && vm.checkStartEndTime(value.attendances, '02', '17') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '02', '17') && range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 && vm.totalHours(value.attendances, '02', '17') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '02', '17') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 17).getDay() !== 0 && vm.totalHours(value.attendances, '02', '17') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '02', '17') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '02', '17') && range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '02', '17'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '02', '17'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s57\"><Data ss:Type=\"String\">L.O.A</Data></Cell>\n<Cell ss:StyleID=\"s58\"/>\n<Cell ss:StyleID=\"s48\" ss:Formula=\"=R[15]C[-8]\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s49\" ss:Formula=\"=-(RC[-1]*381)\"><Data ss:Type=\"Number\">0</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">03</Font>' : '<Font html:Color="#FF0000">18</Font>', "</B></ss:Data></Cell>\n");

        if (range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '03', '18');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '03', '18');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '03', '18');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '03', '18');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '03', '18') && !vm.checkUnderTime(value.attendances, '03', '18', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '03', '18', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '03', '18', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '03', '18');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '03', '18');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '03', '18');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '03', '18');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '03', '18') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) && vm.checkLeave(leaves, '03', '18')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0) && vm.checkLeave(leaves, '03', '18')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 3, 18) && !vm.checkLeave(leaves, '03', '18') && vm.checkLate(value.attendances, '03', '18', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '03', '18')), Math.max(0, 8 - vm.totalHours(value.attendances, '03', '18')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '03', '18', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 3, 18) && vm.checkUnderTime(value.attendances, '03', '18', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '03', '18')), Math.max(0, 8 - vm.totalHours(value.attendances, '03', '18')), cut++) : '', "</Data></Cell>\n   <Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '03', '18') || vm.checkRegularHoliday(events, '03', '18') || vm.checkLeave(leaves, '03', '18')) && ((vm.checkStartEndTime(value.attendances, '03', '18') ? !vm.checkStartEndTime(value.attendances, '03', '18') : vm.checkStartEndTime(value.attendances, '03', '18')) && (range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() === 0 : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 : vm.checkDay(18)) && new Date(vm.year, vm.month, 18).getDay() !== 0 && vm.checkRegularHoliday(events, '03', '18') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 : vm.checkDay(18)) && new Date(vm.year, vm.month, 18).getDay() !== 0 && vm.checkSpecialHoliday(events, '03', '18') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(3) && vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() === 0 ? '1' : '' : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() === 0) && vm.checkStartEndTime(value.attendances, '03', '18') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '03', '18') && range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 && vm.totalHours(value.attendances, '03', '18') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '03', '18') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 18).getDay() !== 0 && vm.totalHours(value.attendances, '03', '18') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '03', '18') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '03', '18') && range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '03', '18'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '03', '18'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s59\"><Data ss:Type=\"String\">Undertime/(Late)</Data></Cell>\n<Cell ss:StyleID=\"s58\"/>\n<Cell ss:StyleID=\"s48\" ss:Formula=\"=R[14]C[-10]+R[14]C[-9]\"><Data\nss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s49\" ss:Formula=\"=RC[-1]*(-381/8)\"><Data ss:Type=\"Number\">0</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">04</Font>' : '<Font html:Color="#FF0000">19</Font>', "</B></ss:Data></Cell>\n");

        if (range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '04', '19');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '04', '19');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '04', '19');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '04', '19');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '04', '19') && !vm.checkUnderTime(value.attendances, '04', '19', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '04', '19', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '04', '19', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '04', '19');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '04', '19');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '04', '19');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '04', '19');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '04', '19') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) && vm.checkLeave(leaves, '04', '19')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0) && vm.checkLeave(leaves, '04', '19')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 4, 19) && !vm.checkLeave(leaves, '04', '19') && vm.checkLate(value.attendances, '04', '19', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '04', '19')), Math.max(0, 8 - vm.totalHours(value.attendances, '04', '19')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '04', '19', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 4, 19) && vm.checkUnderTime(value.attendances, '04', '19', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '04', '19')), Math.max(0, 8 - vm.totalHours(value.attendances, '04', '19')), cut++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '04', '19') || vm.checkRegularHoliday(events, '04', '19') || vm.checkLeave(leaves, '04', '19')) && ((vm.checkStartEndTime(value.attendances, '04', '19') ? !vm.checkStartEndTime(value.attendances, '04', '19') : vm.checkStartEndTime(value.attendances, '04', '19')) && (range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() === 0 : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 : vm.checkDay(19)) && new Date(vm.year, vm.month, 19).getDay() !== 0 && vm.checkRegularHoliday(events, '04', '19') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 : vm.checkDay(19)) && new Date(vm.year, vm.month, 19).getDay() !== 0 && vm.checkSpecialHoliday(events, '04', '19') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() === 0 ? '1' : '' : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() === 0) && vm.checkStartEndTime(value.attendances, '04', '19') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '04', '19') && range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 && vm.totalHours(value.attendances, '04', '19') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '04', '19') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 19).getDay() !== 0 && vm.totalHours(value.attendances, '04', '19') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '04', '19') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '04', '19') && range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '04', '19'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '04', '19'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s59\"><Data ss:Type=\"String\">Holiday Pay</Data></Cell>\n<Cell ss:StyleID=\"s58\"/>\n<Cell ss:StyleID=\"s48\" ss:Formula=\"=R[13]C[-7]\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s49\" ss:Formula=\"=RC[-1]*381\"><Data ss:Type=\"Number\">0</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">05</Font>' : '<Font html:Color="#FF0000">20</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '05', '20');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '05', '20');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '05', '20');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '05', '20');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s60\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '05', '20') && !vm.checkUnderTime(value.attendances, '05', '20', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '05', '20', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '05', '20', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '05', '20');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '05', '20');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '05', '20');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '05', '20');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '05', '20') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) && vm.checkLeave(leaves, '05', '20')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0) && vm.checkLeave(leaves, '05', '20')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 5, 20) && !vm.checkLeave(leaves, '05', '20') && vm.checkLate(value.attendances, '05', '20', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '05', '20')), Math.max(0, 8 - vm.totalHours(value.attendances, '05', '20')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '05', '20', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 5, 20) && vm.checkUnderTime(value.attendances, '05', '20', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '05', '20')), Math.max(0, 8 - vm.totalHours(value.attendances, '05', '20')), cut++) : '', "</Data></Cell>\n  <Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '05', '20') || vm.checkRegularHoliday(events, '05', '20') || vm.checkLeave(leaves, '05', '20')) && ((vm.checkStartEndTime(value.attendances, '05', '20') ? !vm.checkStartEndTime(value.attendances, '05', '20') : vm.checkStartEndTime(value.attendances, '05', '20')) && (range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() === 0 : vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 : vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 : vm.checkDay(20)) && new Date(vm.year, vm.month, 20).getDay() !== 0 && vm.checkRegularHoliday(events, '05', '20') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 : vm.checkDay(20)) && new Date(vm.year, vm.month, 20).getDay() !== 0 && vm.checkSpecialHoliday(events, '05', '20') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() === 0 ? '1' : '' : vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() === 0 && vm.checkStartEndTime(value.attendances, '05', '20') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '05', '20') && range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 && vm.totalHours(value.attendances, '05', '20') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '05', '20') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 20).getDay() !== 0 && vm.totalHours(value.attendances, '05', '20') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '05', '20') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '05', '20') && range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '05', '20'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '05', '20'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s59\"><Data ss:Type=\"String\">Special Holiday Pay</Data></Cell>\n<Cell ss:StyleID=\"s58\"/>\n<Cell ss:StyleID=\"s48\" ss:Formula=\"=R[12]C[-6]\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s49\" ss:Formula=\"=(381*1.3)*RC[-1]\"><Data ss:Type=\"Number\">0</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">06</Font>' : '<Font html:Color="#FF0000">21</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '06', '21');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '06', '21');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '06', '21');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '06', '21');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '06', '21') && !vm.checkUnderTime(value.attendances, '06', '21', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '06', '21', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '06', '21');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '06', '21');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '06', '21');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '06', '21');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '06', '21') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) && vm.checkLeave(leaves, '06', '21')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0) && vm.checkLeave(leaves, '06', '21')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 6, 21) && !vm.checkLeave(leaves, '06', '21') && vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '06', '21')), Math.max(0, 8 - vm.totalHours(value.attendances, '06', '21')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 6, 21) && vm.checkUnderTime(value.attendances, '06', '21', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '06', '21')), Math.max(0, 8 - vm.totalHours(value.attendances, '06', '21')), cut++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '06', '21') || vm.checkRegularHoliday(events, '06', '21') || vm.checkLeave(leaves, '06', '21')) && ((vm.checkStartEndTime(value.attendances, '06', '21') ? !vm.checkStartEndTime(value.attendances, '06', '21') : vm.checkStartEndTime(value.attendances, '06', '21')) && (range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() === 0 : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 : vm.checkDay(21)) && new Date(vm.year, vm.month, 21).getDay() !== 0 && vm.checkRegularHoliday(events, '06', '21') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 : vm.checkDay(21)) && new Date(vm.year, vm.month, 21).getDay() !== 0 && vm.checkSpecialHoliday(events, '06', '21') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() === 0 ? '1' : '' : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() === 0) && vm.checkStartEndTime(value.attendances, '06', '21') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '06', '21') && range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 && vm.totalHours(value.attendances, '06', '21') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '06', '21') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 21).getDay() !== 0 && vm.totalHours(value.attendances, '06', '21') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '06', '21') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '06', '21') && range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '06', '21'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '06', '21'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s61\"><Data ss:Type=\"String\">Overtime Pay</Data></Cell>\n<Cell ss:StyleID=\"s38\"/>\n<Cell ss:StyleID=\"s48\"/>\n<Cell ss:StyleID=\"s49\"/>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">07</Font>' : '<Font html:Color="#FF0000">22</Font>', "</B></ss:Data></Cell>\n");

        if (range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '07', '22');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '07', '22');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '07', '22');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '07', '22');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '07', '22') && !vm.checkUnderTime(value.attendances, '07', '22', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '07', '22', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '07', '22', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '07', '22');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '07', '22');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '07', '22');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '07', '22');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '07', '22') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) && vm.checkLeave(leaves, '07', '22')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22).getDay() === 0) && vm.checkLeave(leaves, '07', '22')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 7, 22) && !vm.checkLeave(leaves, '07', '22') && vm.checkLate(value.attendances, '07', '22', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '07', '22')), Math.max(0, 8 - vm.totalHours(value.attendances, '07', '22')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '07', '22', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 7, 22) && vm.checkUnderTime(value.attendances, '07', '22', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '07', '22')), Math.max(0, 8 - vm.totalHours(value.attendances, '07', '22')), cut++) : '', "</Data></Cell>\n   <Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '07', '22') || vm.checkRegularHoliday(events, '07', '22') || vm.checkLeave(leaves, '07', '22')) && ((vm.checkStartEndTime(value.attendances, '07', '22') ? !vm.checkStartEndTime(value.attendances, '07', '22') : vm.checkStartEndTime(value.attendances, '07', '22')) && (range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() === 0 : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 : vm.checkDay(22)) && new Date(vm.year, vm.month, 22).getDay() !== 0 && vm.checkRegularHoliday(events, '07', '22') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 : vm.checkDay(22)) && new Date(vm.year, vm.month, 22).getDay() !== 0 && vm.checkSpecialHoliday(events, '07', '22') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() === 0 ? '1' : '' : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() === 0) && vm.checkStartEndTime(value.attendances, '07', '22') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '07', '22') && range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 && vm.totalHours(value.attendances, '07', '22') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '07', '22') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 22).getDay() !== 0 && vm.totalHours(value.attendances, '07', '22') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '07', '22') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '07', '22') && range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '07', '22'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '07', '22'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s62\"><Data ss:Type=\"Number\">0.25</Data></Cell>\n<Cell ss:StyleID=\"s63\"/>\n<Cell ss:StyleID=\"s48\"/>\n<Cell ss:StyleID=\"s64\"/>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">08</Font>' : '<Font html:Color="#FF0000">23</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '08', '23');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '08', '23');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '08', '23');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '08', '23');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s65\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '08', '23') && !vm.checkUnderTime(value.attendances, '08', '23', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '08', '23', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '08', '23', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '08', '23');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '08', '23');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '08', '23');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '08', '23');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '08', '23') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) && vm.checkLeave(leaves, '08', '23')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23).getDay() === 0) && vm.checkLeave(leaves, '08', '23')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 8, 23) && !vm.checkLeave(leaves, '08', '23') && vm.checkLate(value.attendances, '08', '23', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '08', '23')), Math.max(0, 8 - vm.totalHours(value.attendances, '08', '23')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '08', '23', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 8, 23) && vm.checkUnderTime(value.attendances, '08', '23', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '08', '23')), Math.max(0, 8 - vm.totalHours(value.attendances, '08', '23')), cut++) : '', "</Data></Cell>\n   <Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '08', '23') || vm.checkRegularHoliday(events, '08', '23') || vm.checkLeave(leaves, '08', '23')) && ((vm.checkStartEndTime(value.attendances, '08', '23') ? !vm.checkStartEndTime(value.attendances, '08', '23') : vm.checkStartEndTime(value.attendances, '08', '23')) && (range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() === 0 : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 : vm.checkDay(23)) && new Date(vm.year, vm.month, 23).getDay() !== 0 && vm.checkRegularHoliday(events, '08', '23') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 : vm.checkDay(23)) && new Date(vm.year, vm.month, 23).getDay() !== 0 && vm.checkSpecialHoliday(events, '08', '23') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() === 0 ? '1' : '' : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() === 0) && vm.checkStartEndTime(value.attendances, '08', '23') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '08', '23') && range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 && vm.totalHours(value.attendances, '08', '23') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '08', '23') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 23).getDay() !== 0 && vm.totalHours(value.attendances, '08', '23') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '08', '23') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '08', '23') && range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '08', '23'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '08', '23'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s62\"><Data ss:Type=\"Number\">0.3</Data></Cell>\n<Cell ss:StyleID=\"s63\"/>\n<Cell ss:StyleID=\"s48\" ss:Formula=\"=R[9]C[-3]\"><Data ss:Type=\"Number\"></Data></Cell>\n<Cell ss:StyleID=\"s66\" ss:Formula=\"=(381*1.3/8)*RC[-1]\"><Data ss:Type=\"Number\"></Data></Cell>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">09</Font>' : '<Font html:Color="#FF0000">24</Font>', "</B></ss:Data></Cell>\n");

        if (range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '09', '24');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '09', '24');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '09', '24');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '09', '24');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s65\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '09', '24') && !vm.checkUnderTime(value.attendances, '09', '24', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '09', '24', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '09', '24', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '09', '24');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '09', '24');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '09', '24');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '09', '24');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '09', '24') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) && vm.checkLeave(leaves, '09', '24')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24).getDay() === 0) && vm.checkLeave(leaves, '09', '24')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 9, 24) && !vm.checkLeave(leaves, '09', '24') && vm.checkLate(value.attendances, '09', '24', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '09', '24')), Math.max(0, 8 - vm.totalHours(value.attendances, '09', '24')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '09', '24', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 9, 24) && vm.checkUnderTime(value.attendances, '09', '24', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '09', '24')), Math.max(0, 8 - vm.totalHours(value.attendances, '09', '24')), cut++) : '', "</Data></Cell>\n   <Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '09', '24') || vm.checkRegularHoliday(events, '09', '24') || vm.checkLeave(leaves, '09', '24')) && ((vm.checkStartEndTime(value.attendances, '09', '24') ? !vm.checkStartEndTime(value.attendances, '09', '24') : vm.checkStartEndTime(value.attendances, '09', '24')) && (range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() === 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() !== 0) && vm.checkRegularHoliday(events, '09', '24') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() !== 0) && vm.checkSpecialHoliday(events, '09', '24') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() === 0 ? '1' : '' : vm.checkDay(9) && new Date(vm.year, vm.month, 24).getDay() === 0) && vm.checkStartEndTime(value.attendances, '09', '24') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '09', '24') && range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 && vm.totalHours(value.attendances, '09', '24') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '09', '24') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 24).getDay() !== 0 && vm.totalHours(value.attendances, '09', '24') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '09', '24') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '09', '24') && range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '09', '24'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '09', '24'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s68\"><Data ss:Type=\"String\">Gross Pay</Data></Cell>\n<Cell ss:StyleID=\"s21\"/>\n<Cell ss:StyleID=\"s69\"/>\n<Cell ss:StyleID=\"s70\" ss:Formula=\"=SUM(R[-9]C:R[-1]C)\"><Data ss:Type=\"Number\"></Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">10</Font>' : '<Font html:Color="#FF0000">25</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '10', '25');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '10', '25');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '10', '25');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '10', '25');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s65\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '10', '25') && !vm.checkUnderTime(value.attendances, '10', '25', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '10', '25', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '10', '25', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '10', '25');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '10', '25');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '10', '25');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '10', '25');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '10', '25') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) && vm.checkLeave(leaves, '10', '25')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25).getDay() === 0) && vm.checkLeave(leaves, '10', '25')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 10, 25) && !vm.checkLeave(leaves, '10', '25') && vm.checkLate(value.attendances, '10', '25', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '10', '25')), Math.max(0, 8 - vm.totalHours(value.attendances, '10', '25')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '10', '25', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 10, 25) && vm.checkUnderTime(value.attendances, '10', '25', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '10', '25')), Math.max(0, 8 - vm.totalHours(value.attendances, '10', '25')), cut++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '10', '25') || vm.checkRegularHoliday(events, '10', '25') || vm.checkLeave(leaves, '10', '25')) && ((vm.checkStartEndTime(value.attendances, '10', '25') ? !vm.checkStartEndTime(value.attendances, '10', '25') : vm.checkStartEndTime(value.attendances, '10', '25')) && (range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() === 0 : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 : vm.checkDay(25)) && new Date(vm.year, vm.month, 25).getDay() !== 0 && vm.checkRegularHoliday(events, '10', '25') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 : vm.checkDay(25)) && new Date(vm.year, vm.month, 25).getDay() !== 0 && vm.checkSpecialHoliday(events, '10', '25') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() === 0 ? '1' : '' : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() === 0) && vm.checkStartEndTime(value.attendances, '10', '25') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '10', '25') && range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 && vm.totalHours(value.attendances, '10', '25') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '10', '25') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 25).getDay() !== 0 && vm.totalHours(value.attendances, '10', '25') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '10', '25') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '10', '25') && range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '10', '25'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '10', '25'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s71\"><Data ss:Type=\"String\">Less: Deduction</Data></Cell>\n<Cell ss:StyleID=\"s72\"/>\n<Cell ss:StyleID=\"s73\"/>\n<Cell ss:StyleID=\"s74\"/>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">11</Font>' : '<Font html:Color="#FF0000">26</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '11', '26');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '11', '26');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '11', '26');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '11', '26');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s60\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '11', '26') && !vm.checkUnderTime(value.attendances, '11', '26', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '11', '26', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '11', '26', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '11', '26');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '11', '26');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '11', '26');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '11', '26');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '11', '26') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) && vm.checkLeave(leaves, '11', '26')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26).getDay() === 0) && vm.checkLeave(leaves, '11', '26')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 11, 26) && !vm.checkLeave(leaves, '11', '26') && vm.checkLate(value.attendances, '11', '26', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '11', '26')), Math.max(0, 8 - vm.totalHours(value.attendances, '11', '26')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '11', '26', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 11, 26) && vm.checkUnderTime(value.attendances, '11', '26', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '11', '26')), Math.max(0, 8 - vm.totalHours(value.attendances, '11', '26')), cut++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '11', '26') || vm.checkRegularHoliday(events, '11', '26') || vm.checkLeave(leaves, '11', '26')) && ((vm.checkStartEndTime(value.attendances, '11', '26') ? !vm.checkStartEndTime(value.attendances, '11', '26') : vm.checkStartEndTime(value.attendances, '11', '26')) && (range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() === 0 : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 : vm.checkDay(26)) && new Date(vm.year, vm.month, 26).getDay() !== 0 && vm.checkRegularHoliday(events, '11', '26') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 : vm.checkDay(26)) && new Date(vm.year, vm.month, 26).getDay() !== 0 && vm.checkSpecialHoliday(events, '11', '26') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() === 0 ? '1' : '' : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() === 0) && vm.checkStartEndTime(value.attendances, '11', '26') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '11', '26') && range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 && vm.totalHours(value.attendances, '11', '26') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '11', '26') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 26).getDay() !== 0 && vm.totalHours(value.attendances, '11', '26') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '11', '26') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '11', '26') && range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '11', '26'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '11', '26'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s75\"><Data ss:Type=\"String\">  SSS</Data></Cell>\n<Cell ss:StyleID=\"s76\"/>\n<Cell ss:StyleID=\"s73\"/>\n<Cell ss:StyleID=\"s77\"><Data ss:Type=\"Number\">").concat(value.sss_deduction ? value.sss_deduction : '', "</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>").concat(range == '0' ? '<Font html:Color="#FF0000">12</Font>' : '<Font html:Color="#FF0000">27</Font>', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '12', '27');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '12', '27');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '12', '27');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '12', '27');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s65\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '12', '27') && !vm.checkUnderTime(value.attendances, '12', '27', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '12', '27', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '12', '27', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '12', '27');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '12', '27');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '12', '27');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '12', '27');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '12', '27') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) && vm.checkLeave(leaves, '12', '27')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27).getDay() === 0) && vm.checkLeave(leaves, '12', '27')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(!vm.checkWeekEnd(range, 12, 27) && !vm.checkLeave(leaves, '12', '27') && vm.checkLate(value.attendances, '12', '27', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '12', '27')), Math.max(0, 8 - vm.totalHours(value.attendances, '12', '27')), clate++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '12', '27', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 12, 27) && vm.checkUnderTime(value.attendances, '12', '27', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '12', '27')), Math.max(0, 8 - vm.totalHours(value.attendances, '12', '27')), cut++) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(!(vm.checkSpecialHoliday(events, '12', '27') || vm.checkRegularHoliday(events, '12', '27') || vm.checkLeave(leaves, '12', '27')) && ((vm.checkStartEndTime(value.attendances, '12', '27') ? !vm.checkStartEndTime(value.attendances, '12', '27') : vm.checkStartEndTime(value.attendances, '12', '27')) && (range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() === 0 : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() !== 0)) ? (loa++, '1') : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 : vm.checkDay(27)) && new Date(vm.year, vm.month, 27).getDay() !== 0 && vm.checkRegularHoliday(events, '12', '27') ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 : vm.checkDay(27)) && new Date(vm.year, vm.month, 27).getDay() !== 0 && vm.checkSpecialHoliday(events, '12', '27') ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() === 0 ? '1' : '' : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() === 0) && vm.checkStartEndTime(value.attendances, '12', '27') ? (restDay++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '12', '27') && range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 && vm.totalHours(value.attendances, '12', '27') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '12', '27') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 27).getDay() !== 0 && vm.totalHours(value.attendances, '12', '27') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '12', '27') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '12', '27') && range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '12', '27'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '12', '27'), overTime30 += yumed30, yumed30) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s75\"><Data ss:Type=\"String\">SSS Loan</Data></Cell>\n<Cell ss:StyleID=\"s76\"/>\n<Cell ss:StyleID=\"s73\"/>\n<Cell ss:StyleID=\"s78\"><Data ss:Type=\"Number\">").concat(value.sss_loan ? value.sss_loan : '', "</Data></Cell>\n</Row>\n<Row>");
        template += "<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>".concat(range == '0' ? '<Font html:Color="#FF0000">13</Font>' : 28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">28</Font>' : '', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '13', '28');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '13', '28');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '13', '28');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '13', '28');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s65\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '13', '28') && !vm.checkUnderTime(value.attendances, '13', '28', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '13', '28', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '13', '28', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '13', '28');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '13', '28');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '13', '28');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '13', '28');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '13', '28') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) && vm.checkLeave(leaves, '13', '28')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28).getDay() === 0) && vm.checkLeave(leaves, '13', '28')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkWeekEnd(range, 13, 28) && !vm.checkLeave(leaves, '13', '28') && vm.checkLate(value.attendances, '13', '28', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '13', '28')), Math.max(0, 8 - vm.totalHours(value.attendances, '13', '28')), clate++) : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkLate(value.attendances, '13', '28', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 13, 28) && vm.checkUnderTime(value.attendances, '13', '28', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '13', '28')), Math.max(0, 8 - vm.totalHours(value.attendances, '13', '28')), cut++) : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !(vm.checkSpecialHoliday(events, '13', '28') || vm.checkRegularHoliday(events, '13', '28') || vm.checkLeave(leaves, '13', '28')) && ((vm.checkStartEndTime(value.attendances, '13', '28') ? !vm.checkStartEndTime(value.attendances, '13', '28') : vm.checkStartEndTime(value.attendances, '13', '28')) && (range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() === 0 : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() !== 0)) ? (loa++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 : vm.checkDay(28)) && new Date(vm.year, vm.month, 28).getDay() !== 0 && vm.checkRegularHoliday(events, '13', '28') ? (regHoliday++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 : vm.checkDay(28)) && new Date(vm.year, vm.month, 28).getDay() !== 0 && vm.checkSpecialHoliday(events, '13', '28') ? (specialHoliday++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() === 0 ? '1' : '' : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() === 0) && vm.checkStartEndTime(value.attendances, '13', '28') ? (restDay++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? vm.checkStartEndTime(value.attendances, '13', '28') && range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 && vm.totalHours(value.attendances, '13', '28') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '13', '28') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 28).getDay() !== 0 && vm.totalHours(value.attendances, '13', '28') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '13', '28') - 8, overTime25 += yumed, yumed) : 0 : '', "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? vm.checkStartEndTime(value.attendances, '13', '28') && range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '13', '28'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '13', '28'), overTime30 += yumed30, yumed30) : '' : '', "</Data></Cell>");
        template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660512\"><Data ss:Type=\"String\">HDMF Premiums</Data></Cell>\n<Cell ss:StyleID=\"s73\"/>\n<Cell ss:StyleID=\"s77\"><Data ss:Type=\"Number\">".concat(value.pagibig_loan ? value.pagibig_loan : '', "</Data></Cell>\n</Row>\n<Row>");
        template += "<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>".concat(range == '0' ? '<Font html:Color="#FF0000">14</Font>' : 29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">29</Font>' : '', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s79\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '14', '29');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '14', '29');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s79\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '14', '29');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '14', '29');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '14', '29') && !vm.checkUnderTime(value.attendances, '14', '29', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '14', '29', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '14', '29');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '14', '29');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '14', '29');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '14', '29');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '14', '29') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) && vm.checkLeave(leaves, '14', '29')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29).getDay() === 0) && vm.checkLeave(leaves, '14', '29')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkWeekEnd(range, 14, 29) && !vm.checkLeave(leaves, '14', '29') && vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '14', '29')), Math.max(0, 8 - vm.totalHours(value.attendances, '14', '29')), clate++) : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 14, 29) && vm.checkUnderTime(value.attendances, '14', '29', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '14', '29')), Math.max(0, 8 - vm.totalHours(value.attendances, '14', '29')), cut++) : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !(vm.checkSpecialHoliday(events, '14', '29') || vm.checkRegularHoliday(events, '14', '29') || vm.checkLeave(leaves, '14', '29')) && ((vm.checkStartEndTime(value.attendances, '14', '29') ? !vm.checkStartEndTime(value.attendances, '14', '29') : vm.checkStartEndTime(value.attendances, '14', '29')) && (range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() === 0 : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() !== 0)) ? (loa++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 : vm.checkDay(29)) && new Date(vm.year, vm.month, 29).getDay() !== 0 && vm.checkRegularHoliday(events, '14', '29') ? (regHoliday++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 : vm.checkDay(29)) && new Date(vm.year, vm.month, 29).getDay() !== 0 && vm.checkSpecialHoliday(events, '14', '29') ? (specialHoliday++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() === 0 ? '1' : '' : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() === 0) && vm.checkStartEndTime(value.attendances, '14', '29') ? (restDay++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? vm.checkStartEndTime(value.attendances, '14', '29') && range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 && vm.totalHours(value.attendances, '14', '29') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '14', '29') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 29).getDay() !== 0 && vm.totalHours(value.attendances, '14', '29') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '14', '29') - 8, overTime25 += yumed, yumed) : 0 : '', "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? vm.checkStartEndTime(value.attendances, '14', '29') && range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '14', '29'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '14', '29'), overTime30 += yumed30, yumed30) : '' : '', "</Data></Cell>");
        template += "<Cell ss:StyleID=\"s80\"><Data ss:Type=\"String\">  HDMF</Data></Cell>\n<Cell ss:StyleID=\"s76\"/>\n<Cell ss:StyleID=\"s73\"/>\n<Cell ss:StyleID=\"s77\"><Data ss:Type=\"Number\">".concat(value.pagibig_deduction ? value.pagibig_deduction : '', "</Data></Cell>\n</Row>\n<Row>");
        template += "<Cell ss:StyleID=\"s56\"><ss:Data ss:Type=\"String\"\nxmlns=\"http://www.w3.org/TR/REC-html40\"><B>".concat(range == '0' ? '<Font html:Color="#FF0000">15</Font>' : 30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">30</Font>' : '', "</B></ss:Data></Cell>");

        if (range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '15', '30');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '15', '30');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '15', '30');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '15', '30');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '15', '30') && !vm.checkUnderTime(value.attendances, '15', '30', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '15', '30', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '15', '30', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '15', '30');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '15', '30');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '15', '30');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '15', '30');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '15', '30') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) && vm.checkLeave(leaves, '15', '30')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30).getDay() === 0) && vm.checkLeave(leaves, '15', '30')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkWeekEnd(range, 15, 30) && !vm.checkLeave(leaves, '15', '30') && vm.checkLate(value.attendances, '15', '30', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '15', '30')), Math.max(0, 8 - vm.totalHours(value.attendances, '15', '30')), clate++) : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkLate(value.attendances, '15', '30', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 15, 30) && vm.checkUnderTime(value.attendances, '15', '30', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '15', '30')), Math.max(0, 8 - vm.totalHours(value.attendances, '15', '30')), cut++) : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !(vm.checkSpecialHoliday(events, '15', '30') || vm.checkRegularHoliday(events, '15', '30') || vm.checkLeave(leaves, '15', '30')) && ((vm.checkStartEndTime(value.attendances, '15', '30') ? !vm.checkStartEndTime(value.attendances, '15', '30') : vm.checkStartEndTime(value.attendances, '15', '30')) && (range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() === 0 : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() !== 0)) ? (loa++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 : vm.checkDay(30)) && new Date(vm.year, vm.month, 30).getDay() !== 0 && vm.checkRegularHoliday(events, '15', '30') ? (regHoliday++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 : vm.checkDay(30)) && new Date(vm.year, vm.month, 30).getDay() !== 0 && vm.checkSpecialHoliday(events, '15', '30') ? (specialHoliday++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() === 0 ? '1' : '' : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() === 0) && vm.checkStartEndTime(value.attendances, '15', '30') ? (restDay++, '1') : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">").concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? vm.checkStartEndTime(value.attendances, '15', '30') && range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 && vm.totalHours(value.attendances, '15', '30') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '15', '30') - 8, overTime25 += yumed, yumed) : 0 : new Date(vm.year, vm.month, 30).getDay() !== 0 && vm.totalHours(value.attendances, '15', '30') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '15', '30') - 8, overTime25 += yumed, yumed) : 0 : '', "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? vm.checkStartEndTime(value.attendances, '15', '30') && range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '15', '30'), overTime30 += yumed30, yumed30) : '' : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '15', '30'), overTime30 += yumed30, yumed30) : '' : '', "</Data></Cell>");
        template += "<Cell ss:StyleID=\"s80\"><Data ss:Type=\"String\">  PHIC</Data></Cell>\n<Cell ss:StyleID=\"s76\"/>\n<Cell ss:StyleID=\"s48\"/>\n<Cell ss:StyleID=\"s49\"><Data ss:Type=\"Number\">".concat(value.philhealth_deduction ? value.philhealth_deduction : '', "</Data></Cell>\n</Row>\n<Row>");
        template += "<Cell ss:StyleID=\"s56\"><Data ss:Type=\"String\">".concat(range == '0' ? '<Font html:Color="#FF0000"></Font>' : 31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">31</Font>' : '', "</Data></Cell>");

        if (range == '0' ? true : new Date(vm.year, vm.month, 31).getDay() !== 0) {
          template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '00', '31');
          }) ? vm.tConvert(_.find(value.attendances, function (o) {
            return vm.checkTime('started_at', o, '00', '31');
          }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '00', '31');
          }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
            return vm.checkTime('stopped_at', o, '00', '31');
          }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s81\"><Data ss:Type=\"Number\">").concat(!vm.checkLeave(leaves, '00', '31') && !vm.checkUnderTime(value.attendances, '00', '31', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '00', '31', value.time_in, value.time_out) && vm.checkStartEndTime(value.attendances, '00', '31', value.time_in, value.time_out) ? (regDay++, '1') : '', "</Data></Cell>");
        } else {
          if (vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? new Date(vm.year, vm.month, 0).getDay() === 0 : new Date(vm.year, vm.month, 31).getDay() === 0)) {
            template += "<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">".concat(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '00', '31');
            }) ? vm.tConvert(_.find(value.attendances, function (o) {
              return vm.checkTime('started_at', o, '00', '31');
            }).started_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s51\"><Data ss:Type=\"String\">").concat(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '00', '31');
            }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
              return vm.checkTime('stopped_at', o, '00', '31');
            }).stopped_at.split(' ')[1]) : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '00', '31') ? '' : '', "</Data></Cell>");
          } else {
            template += "<Cell ss:MergeAcross=\"1\" ss:StyleID=\"m3031143660612\"><Data ss:Type=\"String\">Dayoff</Data></Cell>\n<Cell ss:StyleID=\"s60\"/>";
          }
        }

        if ((range == '0' ? false : new Date(vm.year, vm.month, 31).getDay() !== 0) && vm.checkLeave(leaves, '00', '31')) {
          lwp++;
          template += "<Cell ss:StyleID=\"s52\"><Data ss:Type=\"Number\">1</Data></Cell>";
        } else if ((range == '0' ? false : new Date(vm.year, vm.month, 31).getDay() === 0) && vm.checkLeave(leaves, '00', '31')) {
          template += "<Cell ss:StyleID=\"s52\"/>";
        } else {
          template += "<Cell ss:StyleID=\"s52\"/>";
        }

        template += "\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">".concat(31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkWeekEnd(range, 0, 31) && !vm.checkLeave(leaves, '00', '31') && vm.checkLate(value.attendances, '00', '31', value.time_in, value.time_out) ? (late += Math.max(0, 8 - vm.totalHours(value.attendances, '00', '31')), Math.max(0, 8 - vm.totalHours(value.attendances, '00', '31')), clate++) : '' : '', "</Data></Cell>\n<Cell ss:StyleID=\"s40\"><Data ss:Type=\"Number\">").concat(31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? !vm.checkLate(value.attendances, '00', '31', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 0, 31) && vm.checkUnderTime(value.attendances, '00', '31', value.time_in, value.time_out) ? (ut += Math.max(0, 8 - vm.totalHours(value.attendances, '00', '31')), Math.max(0, 8 - vm.totalHours(value.attendances, '00', '31')), cut++) : '' : '', "</Data></Cell>\n    <Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? range !== '0' ? !(vm.checkSpecialHoliday(events, '00', '31') || vm.checkRegularHoliday(events, '00', '31') || vm.checkLeave(leaves, '00', '31')) && (vm.checkStartEndTime(value.attendances, '00', '31') ? !vm.checkStartEndTime(value.attendances, '00', '31') : vm.checkStartEndTime(value.attendances, '00', '31')) && (range == '0' ? vm.checkDay(0) && new Date(vm.year, vm.month, 0).getDay() === 0 : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() === 0) || !vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? vm.checkDay(0) && new Date(vm.year, vm.month, 0).getDay() !== 0 : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() !== 0) ? (loa++, '1') : '' : '' : '', "</Data></Cell>\n\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? '' : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() !== 0 && vm.checkRegularHoliday(events, '0', '31')) ? (regHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat((range == '0' ? '' : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() !== 0 && vm.checkSpecialHoliday(events, '0', '31')) ? (specialHoliday++, '1') : '', "</Data></Cell>\n<Cell ss:StyleID=\"s53\"><Data ss:Type=\"Number\">").concat(range == '0' ? '' : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() === 0 && vm.checkStartEndTime(value.attendances, '00', '31') ? (restDay++, '1') : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s41\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '00', '31') && range == '0' ? '' : new Date(vm.year, vm.month, 31).getDay() !== 0 && vm.totalHours(value.attendances, '00', '31') - 8 >= 1 ? (yumed = vm.totalHours(value.attendances, '00', '31') - 8, overTime25 += yumed, yumed) : 0, "</Data></Cell>\n<Cell ss:StyleID=\"s54\"><Data ss:Type=\"Number\">").concat(vm.checkStartEndTime(value.attendances, '00', '31') && range == '0' ? '' : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '00', '31'), overTime30 += yumed30, yumed30) : 0, "</Data></Cell>");
        template += "<Cell ss:StyleID=\"s47\"><Data ss:Type=\"String\">Cash Advance</Data></Cell>\n<Cell ss:StyleID=\"s38\"/>\n<Cell ss:StyleID=\"s83\"/>\n<Cell ss:StyleID=\"s49\"><Data ss:Type=\"Number\">0</Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s84\"><Data ss:Type=\"String\">Totals</Data></Cell>\n<Cell ss:StyleID=\"s85\"/>\n<Cell ss:StyleID=\"s86\"/>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-17]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s87\" ss:Formula=\"=SUM(R[-16]C:R[-1]C)\"><Data ss:Type=\"Number\">0</Data></Cell>\n<Cell ss:StyleID=\"s88\"><Data ss:Type=\"String\">Total Deduction</Data></Cell>\n<Cell ss:StyleID=\"s89\"/>\n<Cell ss:StyleID=\"s90\"/>\n<Cell ss:StyleID=\"s91\" ss:Formula=\"=SUM(R[-6]C:R[-1]C)\"><Data ss:Type=\"Number\"></Data></Cell>\n</Row>\n<Row ss:Height=\"15.75\">\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:Index=\"14\" ss:StyleID=\"s92\"><Data ss:Type=\"String\">Net Pay</Data></Cell>\n<Cell ss:StyleID=\"s93\"/>\n<Cell ss:StyleID=\"s94\"/>\n<Cell ss:StyleID=\"s95\" ss:Formula=\"=R[-9]C-R[-1]C\"><Data ss:Type=\"Number\"></Data></Cell>\n</Row>\n<Row>\n<Cell ss:StyleID=\"s17\"/>\n<Cell ss:StyleID=\"s17\"/>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s19\"><Data ss:Type=\"String\">Signature:</Data></Cell>\n<Cell ss:StyleID=\"s19\"/>\n<Cell ss:StyleID=\"s96\"/>\n<Cell ss:StyleID=\"s96\"/>\n<Cell ss:StyleID=\"s19\"/>\n</Row>\n<Row ss:Index=\"29\">\n<Cell ss:Index=\"3\"><Data ss:Type=\"String\">LWP=</Data></Cell>\n<Cell><Data ss:Type=\"String\">LEAVE WITH PAY</Data></Cell>\n</Row>\n<Row>\n<Cell ss:Index=\"3\"><Data ss:Type=\"String\">UT</Data></Cell>\n<Cell><Data ss:Type=\"String\">UNDERTIME</Data></Cell>\n</Row>\n<Row>\n<Cell ss:Index=\"3\"><Data ss:Type=\"String\">L.O.A</Data></Cell>\n<Cell><Data ss:Type=\"String\">LEAVE OF ABSENCE</Data></Cell>\n</Row>\n</Table>\n<WorksheetOptions xmlns=\"urn:schemas-microsoft-com:office:excel\">\n<PageSetup>\n<Layout x:Orientation=\"Landscape\"/>\n<Header x:Margin=\"0.3\"/>\n<Footer x:Margin=\"0.3\"/>\n<PageMargins x:Bottom=\"0.75\" x:Left=\"0.7\" x:Right=\"0.7\" x:Top=\"0.75\"/>\n</PageSetup>\n<FitToPage/>\n<Print>\n<ValidPrinterInfo/>\n<HorizontalResolution>600</HorizontalResolution>\n<VerticalResolution>600</VerticalResolution>\n</Print>\n<Selected/>\n<DoNotDisplayZeros/>\n<Panes>\n<Pane>\n<Number>3</Number>\n<ActiveRow>17</ActiveRow>\n<ActiveCol>21</ActiveCol>\n</Pane>\n</Panes>\n<ProtectObjects>False</ProtectObjects>\n<ProtectScenarios>False</ProtectScenarios>\n</WorksheetOptions>\n</Worksheet>\n</Workbook>";

        if (!(vm.saveAs.id === 4 || vm.saveAs.id === 6 || vm.saveAs.id === 0)) {
          var wordTemplate = vm.saveAsWord(value, {
            regDay: regDay,
            lwp: lwp,
            late: late,
            ut: ut,
            loa: loa,
            regHoliday: regHoliday,
            specialHoliday: specialHoliday,
            restDay: restDay,
            overTime25: overTime25,
            overTime30: overTime30,
            clate: clate,
            cut: cut
          }, vm.month, vm.year, vm.range == '0' ? '1-15' : '16-' + new Date(vm.year, vm.month + 1, 0).getDate(), range, vm.monthNames[vm.month], false, events);
          var formData = new FormData();
          var blob = new Blob([vm.s2ab(vm.saveAs.name === 'word' && vm.saveAs.format === 'application/vnd.ms-word' ? vm.htmlBody(wordTemplate) : template)], {
            type: vm.saveAs.format
          });
          var link = document.createElement('a');
          link.href = window.URL.createObjectURL(blob);
          link.download = "".concat(value.name, " ").concat(vm.year, "_").concat(vm.monthNames[$month], "_").concat(vm.range == '0' ? '1-15' : '16-' + new Date(vm.year, vm.month + 1, 0).getDate()).concat(vm.saveAs.name === 'word' && vm.saveAs.format === 'application/vnd.ms-word' ? '.doc' : vm.saveAs.id === 1 ? '.xml' : '.xls');
          link.click();
          link.remove();
        } else {
          vm.print.push({
            value: value,
            obj: {
              regDay: regDay,
              lwp: lwp,
              late: late,
              ut: ut,
              loa: loa,
              regHoliday: regHoliday,
              specialHoliday: specialHoliday,
              restDay: restDay,
              overTime25: overTime25,
              overTime30: overTime30,
              clate: clate,
              cut: cut
            },
            month: vm.month,
            year: vm.year,
            range: vm.range == '0' ? '1-15' : "16-".concat(new Date(vm.year, vm.month + 1, 0).getDate()),
            day: range,
            monthName: vm.monthNames[vm.month],
            "break": i + 1 !== vm.form.user_id.length,
            events: events
          });
        }

        regDay = 0, lwp = 0, late = 0, ut = 0, loa = 0, regHoliday = 0, specialHoliday = 0, restDay = 0, overTime25 = 0, overTime30 = 0, yumed30 = 0, yumed = 0, clate = 0, cut = 0;
      });

      if (i + 1 === vm.form.user_id.length) {
        vm.printDirectly();
      }
    },
    printDirectly: function printDirectly() {
      var vm = this,
          print = JSON.parse(JSON.stringify(vm.print)),
          isMobile = false;
      vm.manual = [];

      if ((vm.saveAs.id === 4 || vm.saveAs.id === 6 || vm.saveAs.id === 0) && print) {
        var divToPrint = '';
        var i = 0;
        var breaks = true;
        new Promise(function (resolve) {
          _.map(print, function (response) {
            divToPrint += vm.saveAsWord(response.value, response.obj, response.month, response.year, response.range, response.day, response.monthName, breaks = !breaks, response.events);

            if (vm.saveAs.id == 0) {
              vm.manual.push({
                value: response.value,
                obj: response.obj,
                month: response.month,
                year: response.year,
                range: response.range,
                day: response.day,
                monthName: response.monthName,
                "break": response["break"],
                events: response.events
              });
            }
          });

          resolve();
        }).then(function () {
          if (vm.saveAs.id === 4) {
            var newWin = window.open("");
            newWin.document.write(vm.htmlBody(divToPrint));
            newWin.focus(); // device detection

            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
              newWin.print();
            } else {
              newWin.print();
              newWin.close();
            }
          } else if (vm.saveAs.id === 6) {
            var formData = new FormData();
            var blob = new Blob([vm.s2ab(vm.htmlBody(divToPrint, 'portrait'))], {
              type: vm.saveAs.format
            });
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = "".concat(vm.year, "_").concat(vm.monthNames[vm.month], "_").concat(vm.range == '0' ? '1-15' : '16-' + new Date(vm.year, vm.month + 1, 0).getDate()).concat(vm.saveAs.name === 'word' && vm.saveAs.format === 'application/vnd.ms-word' ? '.doc' : vm.saveAs.id === 1 ? '.xml' : '.xls');
            link.click();
            link.remove();
          }
        });
      }
    },
    checkWeekEnd: function checkWeekEnd(range, start, end) {
      var vm = this;
      return start != 0 || end == 31 ? range == '0' ? new Date(vm.year, vm.month, start).getDay() === 0 : new Date(vm.year, vm.month, end).getDay() === 0 : false;
    },
    tConvert: function tConvert(time) {
      // Check correct time format and split into components
      time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      time[4] = '';

      if (time.length > 1) {
        // If time format correct
        time = time.slice(1); // Remove full string match value

        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM

        time[0] = +time[0] % 12 || 12; // Adjust hours
      }

      return time.join(''); // return adjusted time or original string
    },
    s2ab: function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);

      for (var i = 0; i != s.length; ++i) {
        view[i] = s.charCodeAt(i) & 0xFF;
      }

      return buf;
    },
    onCancel: function onCancel() {
      this.$router.push({
        name: 'view-leave'
      });
    },
    checkLeave: function checkLeave(array, start, end) {
      var vm = this;
      return _.find(array, function (o) {
        var date_due_for_return = new Date(o.date_due_for_return).getDate();
        var date_issued = new Date(o.date_issued).getDate();
        return (vm.checkDay(end) && date_issued <= end ? end <= date_due_for_return : false) || (date_issued <= start && vm.checkDay(start) ? start <= date_due_for_return : false);
      });
    },
    checkLoa: function checkLoa(array, start, end) {
      var vm = this;
      return end <= new Date(vm.year, vm.month + 1, 0).getDate() ? _.find(array, function (o) {
        return vm.checkTime('started_at', o, start, end);
      }) : false;
    },
    checkRegularHoliday: function checkRegularHoliday(array, start, end) {
      var vm = this;
      return Boolean(_.find(array, function (o) {
        var end_date = new Date(o.end_date).getDate();
        var start_date = new Date(o.start_date).getDate();
        var isRegular = o.occurrence == "0";

        if (o.occurrence != "0") {
          return false;
        }

        return (vm.checkDay(end) && start_date <= end ? end <= end_date : false) || (start_date <= start && vm.checkDay(start) ? start <= end_date : false);
      }));
    },
    checkSpecialHoliday: function checkSpecialHoliday(array, start, end) {
      var vm = this;
      return array.length > 0 && _.findLast(array, function (o) {
        var end_date = new Date(o.end_date).getDate();
        var start_date = new Date(o.start_date).getDate();
        var isRegular = o.occurrence == "0";

        if (o.occurrence == "0") {
          return false;
        }

        return (vm.checkDay(end) && start_date <= end ? end <= end_date : false) || (start_date <= start && vm.checkDay(start) ? start <= end_date : false);
      });
    },
    checkStartEndTime: function checkStartEndTime(array, start, end, time_in, time_out) {
      var vm = this;
      return _.find(array, function (o) {
        return vm.checkTime('started_at', o, start, end);
      }) || _.find(array, function (o) {
        return vm.checkTime('stopped_at', o, start, end);
      });
    },
    totalHours: function totalHours(array, start, end) {
      var vm = this;

      var totalHour = _.filter(array, function (o) {
        return vm.checkTime('started_at', o, start, end);
      });

      return totalHour.reduce(function (prev, curr) {
        var value = Number(curr.timing);

        if (!isNaN(value)) {
          var consume_time_in = vm.timeStringToFloat(curr.started_at.slice(11, 16)) <= vm.timeStringToFloat('08:00') ? (vm.timeStringToFloat('08:00') - vm.timeStringToFloat(curr.started_at.slice(11, 16))) * 3600 : 0;
          return prev + Math.floor(parseInt(curr.timing - consume_time_in, 10) / 3600);
        } else {
          return prev;
        }
      }, 0);
    },
    checkLate: function checkLate(array, start, end, time_in, time_out) {
      var vm = this,
          Attendancehours = 8;
      return _.find(array, function (o) {
        var consume_time_in = vm.timeStringToFloat(o.started_at.slice(11, 16));

        var time_out = _.findLast(array, function (obj) {
          return vm.checkTime('stopped_at', obj, start, end);
        });

        var consume_time_out = time_out ? vm.timeStringToFloat(time_out.stopped_at.slice(11, 16)) : 0;
        var consumedTime = consume_time_out - consume_time_in;
        return vm.checkTime('started_at', o, start, end) && consumedTime <= Attendancehours ? vm.timeStringToFloat(o.started_at.slice(11, 16)) > vm.timeStringToFloat(time_in) : false;
      });
    },
    checkDay: function checkDay(date) {
      var vm = this;
      return new Date(vm.year, vm.month, date) <= new Date();
    },
    checkUnderTime: function checkUnderTime(array, start, end, time_in, time_out) {
      var vm = this,
          Attendancehours = 8;
      return _.find(array, function (o) {
        var consume_time_in = vm.timeStringToFloat(o.started_at.slice(11, 16));

        var time_out = _.findLast(array, function (obj) {
          return vm.checkTime('stopped_at', obj, start, end);
        });

        var consume_time_out = time_out ? vm.timeStringToFloat(time_out.stopped_at.slice(11, 16)) : false;
        var consumedTime = time_out ? consume_time_out - consume_time_in : false;
        return consumedTime && vm.checkTime('started_at', o, start, end) && consumedTime <= Attendancehours ? true : false;
      });
    },
    checkTime: function checkTime(at, o, start, end) {
      return start != '00' ? start == o[at].slice(0, 10).replace(/-/g, "").slice(6, 10) || end == o[at].slice(0, 10).replace(/-/g, "").slice(6, 10) : end == o[at].slice(0, 10).replace(/-/g, "").slice(6, 10);
    },
    timeStringToFloat: function timeStringToFloat(time) {
      if (!time) {
        return 0;
      }

      var hoursMinutes = time.split(/[.:]/);
      var hours = parseInt(hoursMinutes[0], 10);
      var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
      return hours + minutes / 60;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/manual.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/payroll/manual.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'manualCreate',
  props: {
    item: Object
  },
  data: function data() {
    return {
      card: {
        reg: 0,
        special: 0
      },
      reg: 0,
      special: 0,
      basicPay: 0,
      q15: 0,
      q23: 0,
      de_minimis: 0,
      isReady: false
    };
  },
  mounted: function mounted() {
    var vm = this;
    vm.isReady = true;
    vm.card = vm.item;
    vm.card.value.sss_loan = vm.card.value.sss_loan | 0;
    vm.card.value.sss_deduction = vm.card.value.sss_deduction | 0;
    vm.card.value.pagibig_loan = vm.card.value.pagibig_loan | 0;
    vm.card.value.pagibig_deduction = vm.card.value.pagibig_deduction | 0;
    vm.card.value.philhealth_deduction = vm.card.value.philhealth_deduction | 0;
    vm.basicPay = Number.parseInt(vm.basicPay);

    var event = _.map(vm.card.events, function (o) {
      var end = new Date(o.end_date),
          start = new Date(o.start_date),
          tStartDate = start.getTime(),
          tEndDate = end.getTime(),
          nDifference = Math.abs(tEndDate - tStartDate),
          fDiffernceInDays = Math.round(nDifference / (1000 * 86400));
      return {
        duration: fDiffernceInDays + 1,
        occurrence: o.occurrence === '0' ? 0 : 1
      };
    });

    var reg = _.reduce(event, function (sum, o) {
      return o.occurrence === '0' ? sum.duration + o : sum;
    }, 0);

    var special = _.reduce(event, function (sum, o) {
      return o.occurrence !== '0' ? sum + o.duration : sum;
    }, 0);

    vm.basicPay = vm.card.value.salary ? vm.card.value.salary / 2 - vm.numberFloat(vm.card.obj.loa) * 381 - ((vm.numberFloat(vm.card.obj.late) + vm.numberFloat(vm.card.obj.ut)) * (381 / 8)).toFixed(2) : 0;
    vm.q15 = vm.basicPay + vm.numberFloat(vm.card.obj.restDay) * 381 + vm.numberFloat(reg * 381) + vm.numberFloat(special * (14.29 * 8)) + vm.numberFloat(381 * 1.25 / 8 * (!isNaN(Number(vm.card.obj.overTime25)) ? Number.parseFloat(vm.card.obj.overTime25) : 0)) + vm.numberFloat(381 / 8 * 0.30 * (!isNaN(Number(vm.card.obj.overTime30)) ? Number.parseFloat(vm.card.obj.overTime30) : 0));
    vm.q23 = vm.numberFloat(vm.card.value.sss_deduction) + vm.numberFloat(vm.card.value.sss_loan) + vm.numberFloat(vm.card.value.pagibig_deduction) + vm.numberFloat(vm.card.value.pagibig_loan) + vm.numberFloat(vm.card.value.philhealth_deduction);
    vm.de_minimis = vm.numberFloat(vm.card.value.allowance);
  },
  computed: {
    earnings: function earnings() {
      var vm = this;

      var event = _.map(vm.card.events, function (o) {
        var end = new Date(o.end_date),
            start = new Date(o.start_date),
            tStartDate = start.getTime(),
            tEndDate = end.getTime(),
            nDifference = Math.abs(tEndDate - tStartDate),
            fDiffernceInDays = Math.round(nDifference / (1000 * 86400));
        return {
          duration: fDiffernceInDays + 1,
          occurrence: o.occurrence === '0' ? 0 : 1
        };
      });

      var restDay = vm.numberFloat(vm.card.obj.restDay) ? vm.numberFloat(vm.card.obj.restDay) * 381 : 0,
          regq15 = vm.numberFloat(vm.reg) ? vm.numberFloat(vm.reg * 381) : 0,
          specialq15 = vm.numberFloat(vm.special) ? vm.numberFloat(vm.special * (14.29 * 8)) : 0,
          ot25 = vm.numberFloat(381 * 1.25 / 8 * (!isNaN(Number(vm.card.obj.overTime25)) ? Number.parseFloat(vm.card.obj.overTime25) : 0)),
          ot30 = vm.numberFloat(381 / 8 * 0.30 * (!isNaN(Number(vm.card.obj.overTime30)) ? Number.parseFloat(vm.card.obj.overTime30) : 0));
      vm.q15 = vm.numberFloat(vm.basicPay) + restDay + regq15 + specialq15 + ot25 + ot30;
      var sss_reduction = vm.numberFloat(vm.card.value.sss_deduction) | 0,
          sss_loan = vm.numberFloat(vm.card.value.sss_loan) | 0,
          pagibig_deduction = vm.numberFloat(vm.card.value.pagibig_deduction) | 0,
          pagibig_loan = vm.numberFloat(vm.card.value.pagibig_loan) | 0,
          philhealth_deduction = vm.numberFloat(vm.card.value.philhealth_deduction) | 0;
      vm.q23 = sss_reduction + sss_loan + pagibig_deduction + pagibig_loan + philhealth_deduction;
      var returnEarning = {
        basicPay: vm.numberFloat(vm.basicPay) ? vm.numberFloat(vm.basicPay) : 0,
        q15: vm.q15 | 0,
        q23: vm.q23 | 0,
        de_minimis: vm.de_minimis | 0,
        reg: regq15,
        special: specialq15
      };
      this.$emit('manual', returnEarning);
      return returnEarning;
    }
  },
  methods: {
    numberFloat: function numberFloat(no) {
      return no ? Number.parseFloat(no) : 0;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/create.vue?vue&type=template&id=5fb06d31&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/payroll/create.vue?vue&type=template&id=5fb06d31& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _vm.showForm
        ? _c(
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
                              " Payroll"
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "el-form",
                        {
                          ref: "form",
                          attrs: { model: _vm.form, "label-width": "120px" },
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
                              class: _vm.errors.month
                                ? "is-error is-required"
                                : "",
                              attrs: { label: "Month" }
                            },
                            [
                              _c(
                                "el-select",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    disabled: _vm.loading,
                                    placeholder: "Select month"
                                  },
                                  model: {
                                    value: _vm.month,
                                    callback: function($$v) {
                                      _vm.month = $$v
                                    },
                                    expression: "month"
                                  }
                                },
                                _vm._l(_vm.monthNames, function(item, index) {
                                  return _c("el-option", {
                                    key: index,
                                    attrs: { label: item, value: index }
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
                            {
                              class: _vm.errors.year
                                ? "is-error is-required"
                                : "",
                              attrs: { label: "Year" }
                            },
                            [
                              _c("el-input", {
                                attrs: {
                                  type: "text",
                                  required: "",
                                  disabled: _vm.loading
                                },
                                model: {
                                  value: _vm.year,
                                  callback: function($$v) {
                                    _vm.year = $$v
                                  },
                                  expression: "year"
                                }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.errors.year, function(error) {
                                return _vm.errors.year
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
                              class: _vm.errors.day
                                ? "is-error is-required"
                                : "",
                              attrs: { label: "Range Date" }
                            },
                            [
                              _c(
                                "el-select",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    disabled: _vm.loading,
                                    placeholder: "Select Date"
                                  },
                                  model: {
                                    value: _vm.range,
                                    callback: function($$v) {
                                      _vm.range = $$v
                                    },
                                    expression: "range"
                                  }
                                },
                                [
                                  _c("el-option", {
                                    attrs: { label: "1-15", value: "0" }
                                  }),
                                  _vm._v(" "),
                                  _c("el-option", {
                                    attrs: {
                                      label: "16-" + _vm.rangeChange,
                                      value: "1"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "el-form-item",
                            {
                              class: _vm.errors.day
                                ? "is-error is-required"
                                : "",
                              attrs: { label: "Format" }
                            },
                            [
                              _c(
                                "el-select",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    "value-key": "id",
                                    disabled: _vm.loading,
                                    placeholder: "Select Format"
                                  },
                                  model: {
                                    value: _vm.saveAs,
                                    callback: function($$v) {
                                      _vm.saveAs = $$v
                                    },
                                    expression: "saveAs"
                                  }
                                },
                                [
                                  _c(
                                    "el-option-group",
                                    { attrs: { label: "Attendance" } },
                                    [
                                      _c("el-option", {
                                        attrs: {
                                          label: "Print Directly (Attendance)",
                                          value: {
                                            id: 5,
                                            name: "print",
                                            format: ""
                                          }
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "el-option-group",
                                    { attrs: { label: "Payroll" } },
                                    [
                                      _c("el-option", {
                                        attrs: {
                                          label: "Manual Payroll",
                                          value: {
                                            id: 0,
                                            name: "manual",
                                            format: ""
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("el-option", {
                                        attrs: {
                                          label: "Print Directly (Payroll) ",
                                          value: {
                                            id: 4,
                                            name: "print",
                                            format: ""
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("el-option", {
                                        attrs: {
                                          label: "Excel XML",
                                          value: {
                                            id: 1,
                                            name: "excel",
                                            format: "text/xml"
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("el-option", {
                                        attrs: {
                                          label: "Word (Individual)",
                                          value: {
                                            id: 2,
                                            name: "word",
                                            format: "application/vnd.ms-word"
                                          }
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("el-option", {
                                        attrs: {
                                          label: "Word (Multiple)",
                                          value: {
                                            id: 6,
                                            name: "word",
                                            format: "application/vnd.ms-word"
                                          }
                                        }
                                      })
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
                            "el-form-item",
                            { attrs: { prop: "user_id", label: "Employee" } },
                            [
                              _c(
                                "el-select",
                                {
                                  staticStyle: { width: "100%" },
                                  attrs: {
                                    multiple: "",
                                    filterable: "",
                                    remote: "",
                                    "reserve-keyword": "",
                                    placeholder:
                                      "Please enter an employee name",
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
                                    attrs: {
                                      label: item.label,
                                      value: item.value
                                    }
                                  })
                                }),
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("el-form-item", [
                            _c(
                              "div",
                              { staticClass: "btn-group btn-group-sm" },
                              [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary",
                                    attrs: {
                                      disabled:
                                        _vm.loading ||
                                        !(_vm.year && _vm.form.user_id.length),
                                      type: "button"
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
                                      ) +
                                        " Payroll\n                            "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn btn-default",
                                    attrs: {
                                      disabled: _vm.loading,
                                      type: "button"
                                    },
                                    on: { click: _vm.onCancel }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                Cancel\n                            "
                                    )
                                  ]
                                )
                              ]
                            )
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
        : _vm._e(),
      _vm._v(" "),
      _vm.manual.length > 0 ? _c("hr") : _vm._e(),
      _vm._v(" "),
      !_vm.showForm && _vm.manual.length > 0
        ? _c(
            "button",
            {
              staticClass: "btn btn-default",
              on: {
                click: function($event) {
                  _vm.showForm = true
                }
              }
            },
            [_vm._v("Back")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.manual.length > 0
        ? _c(
            "button",
            { staticClass: "btn btn-primary", on: { click: _vm.onManual } },
            [_vm._v("Print")]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.manual.length > 0 ? _c("hr") : _vm._e(),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "loading",
            rawName: "v-loading.fullscreen",
            value: !_vm.showForm && !_vm.manual.length > 0,
            expression: "(!showForm) && !manual.length > 0",
            modifiers: { fullscreen: true }
          }
        ]
      }),
      _vm._v(" "),
      _vm.manual.length > 0
        ? _c(
            "div",
            { staticClass: "row row-grid no-gutters" },
            _vm._l(_vm.manual, function(item, index) {
              return _c("manual-payroll", {
                key: index,
                attrs: { item: item },
                on: {
                  manual: function($event) {
                    _vm.manual[index].manual = $event
                  }
                }
              })
            }),
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/manual.vue?vue&type=template&id=8a3d820a&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/payroll/manual.vue?vue&type=template&id=8a3d820a& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card border-primary", staticStyle: { margin: "6px" } },
    [
      _c("div", { staticClass: "card-header" }, [
        _c("h5", { staticClass: "card-title" }, [
          _vm._v(_vm._s(_vm.item.value.name))
        ])
      ]),
      _vm._v(" "),
      _vm.isReady
        ? _c("div", { staticClass: "card-body" }, [
            _c("table", { staticClass: "table table-sm table-bordered" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("tbody", [
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Basic Pay:")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.basicPay,
                          expression: "basicPay"
                        }
                      ],
                      attrs: { type: "text" },
                      domProps: { value: _vm.basicPay },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.basicPay = $event.target.value
                        }
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("SSS Contribution:")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(
                        _vm.card.value.sss_deduction
                          ? _vm.card.value.sss_deduction
                          : 0
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v("Rest Day Pay:")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.card.obj.restDay,
                          expression: "card.obj.restDay"
                        }
                      ],
                      staticStyle: { width: "42px", "margin-right": "10px" },
                      attrs: { type: "text" },
                      domProps: { value: _vm.card.obj.restDay },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.card.obj, "restDay", $event.target.value)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(
                        _vm._s(
                          _vm.card.obj.restDay ? _vm.card.obj.restDay * 381 : 0
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("PHIC")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(_vm._s(_vm.card.value.philhealth_deduction))
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v("Holiday Pay:")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.reg,
                          expression: "reg"
                        }
                      ],
                      staticStyle: { width: "42px", "margin-right": "10px" },
                      attrs: { type: "text" },
                      domProps: { value: _vm.reg },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.reg = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(_vm._s(_vm.earnings.reg))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("HDMF Contribution")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.card.value.pagibig_deduction))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v("Special Holiday Pay:")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.special,
                          expression: "special"
                        }
                      ],
                      staticStyle: { width: "42px", "margin-right": "10px" },
                      attrs: { type: "text" },
                      domProps: { value: _vm.special },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.special = $event.target.value
                        }
                      }
                    }),
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(_vm._s(_vm.earnings.special))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("SSS Loan")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.card.value.sss_loan))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("25% OT:")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.card.obj.overTime25,
                          expression: "card.obj.overTime25"
                        }
                      ],
                      staticStyle: { width: "42px", "margin-right": "10px" },
                      attrs: { type: "text" },
                      domProps: { value: _vm.card.obj.overTime25 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.card.obj,
                            "overTime25",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(
                        _vm._s(
                          _vm.card.obj.overTime25
                            ? Number.parseFloat(
                                ((381 * 1.25) / 8) *
                                  (!isNaN(Number(_vm.card.obj.overTime25))
                                    ? Number.parseInt(_vm.card.obj.overTime25)
                                    : 0)
                              ).toFixed(2)
                            : 0
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("HDMF Loan")]),
                  _vm._v(" "),
                  _c("td", [_vm._v(_vm._s(_vm.card.value.pagibig_loan))])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("30% OT:")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.card.obj.overTime30,
                          expression: "card.obj.overTime30"
                        }
                      ],
                      staticStyle: { width: "42px", "margin-right": "10px" },
                      attrs: { type: "text" },
                      domProps: { value: _vm.card.obj.overTime30 },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.card.obj,
                            "overTime30",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(
                        _vm._s(
                          _vm.card.obj.overTime30
                            ? Number.parseFloat(
                                ((381 * 0.3) / 8) *
                                  (!isNaN(Number(_vm.card.obj.overTime30))
                                    ? Number.parseFloat(_vm.card.obj.overTime30)
                                    : 0)
                              ).toFixed(2)
                            : 0
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Total")]),
                  _vm._v(" "),
                  _c("td", [
                    _vm._v(
                      _vm._s(
                        _vm.earnings.q23
                          ? Number.parseFloat(_vm.earnings.q23).toFixed(2)
                          : 0
                      )
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [
                    _vm._v("DE MINIMIS:")
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.de_minimis,
                          expression: "de_minimis"
                        }
                      ],
                      staticStyle: { width: "42px", "margin-right": "10px" },
                      attrs: { type: "text" },
                      domProps: { value: _vm.de_minimis },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.de_minimis = $event.target.value
                        }
                      }
                    }),
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(_vm._s(_vm.de_minimis))
                    ])
                  ]),
                  _vm._v(" "),
                  _c("td", { attrs: { colspan: "2" } })
                ]),
                _vm._v(" "),
                _c("tr", [
                  _c("th", { attrs: { scope: "row" } }, [_vm._v("Total:")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(
                        _vm._s(
                          _vm.earnings.q15
                            ? Number.parseFloat(_vm.earnings.q15).toFixed(2)
                            : 0
                        )
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c("th", [_vm._v("Net Salary Pay")]),
                  _vm._v(" "),
                  _c("td", [
                    _c("span", { staticStyle: { "font-weight": "bold" } }, [
                      _vm._v(
                        _vm._s(
                          Number.parseFloat(_vm.earnings.q15 - _vm.earnings.q23)
                            ? Number.parseFloat(
                                _vm.earnings.q15 -
                                  _vm.earnings.q23 +
                                  _vm.numberFloat(_vm.de_minimis)
                              ).toFixed(2)
                            : 0
                        )
                      )
                    ])
                  ])
                ])
              ])
            ])
          ])
        : _c("div", { staticClass: "card-body" }, [
            _vm._v("\n        loading...\n\n    ")
          ]),
      _vm._v(" "),
      _c("div", { staticClass: "card-footer" })
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col", colspan: "2" } }, [
          _vm._v("Earnings:")
        ]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col", colspan: "2" } }, [
          _vm._v("Deductions")
        ])
      ])
    ])
  }
]
render._withStripped = true



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

/***/ "./resources/js/components/payroll/create.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/payroll/create.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _create_vue_vue_type_template_id_5fb06d31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create.vue?vue&type=template&id=5fb06d31& */ "./resources/js/components/payroll/create.vue?vue&type=template&id=5fb06d31&");
/* harmony import */ var _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.vue?vue&type=script&lang=js& */ "./resources/js/components/payroll/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _create_vue_vue_type_template_id_5fb06d31___WEBPACK_IMPORTED_MODULE_0__["render"],
  _create_vue_vue_type_template_id_5fb06d31___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/payroll/create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/payroll/create.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/payroll/create.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/payroll/create.vue?vue&type=template&id=5fb06d31&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/payroll/create.vue?vue&type=template&id=5fb06d31& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5fb06d31___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./create.vue?vue&type=template&id=5fb06d31& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/create.vue?vue&type=template&id=5fb06d31&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5fb06d31___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_template_id_5fb06d31___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/payroll/manual.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/payroll/manual.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _manual_vue_vue_type_template_id_8a3d820a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./manual.vue?vue&type=template&id=8a3d820a& */ "./resources/js/components/payroll/manual.vue?vue&type=template&id=8a3d820a&");
/* harmony import */ var _manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manual.vue?vue&type=script&lang=js& */ "./resources/js/components/payroll/manual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _manual_vue_vue_type_template_id_8a3d820a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _manual_vue_vue_type_template_id_8a3d820a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/payroll/manual.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/payroll/manual.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/payroll/manual.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./manual.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/manual.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/payroll/manual.vue?vue&type=template&id=8a3d820a&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/payroll/manual.vue?vue&type=template&id=8a3d820a& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_vue_vue_type_template_id_8a3d820a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./manual.vue?vue&type=template&id=8a3d820a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/payroll/manual.vue?vue&type=template&id=8a3d820a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_vue_vue_type_template_id_8a3d820a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_manual_vue_vue_type_template_id_8a3d820a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/payroll/saveAsWord.js":
/*!*******************************************************!*\
  !*** ./resources/js/components/payroll/saveAsWord.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    numberFloat: function numberFloat(no) {
      return no ? Number.parseFloat(no) : 0;
    },
    htmlBody: function htmlBody(body) {
      var orientation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'landscape';
      var head = orientation === 'landscape' ? "<html xmlns:v=\"urn:schemas-microsoft-com:vml\"xmlns:o=\"urn:schemas-microsoft-com:office:office\"xmlns:w=\"urn:schemas-microsoft-com:office:word\"xmlns:m=\"http://schemas.microsoft.com/office/2004/12/omml\"xmlns=\"http://www.w3.org/TR/REC-html40\"><head><meta charset='utf-8'><meta name=ProgId content=Word.Document><meta name=Generator content=\"Microsoft Word 15\"><meta name=Originator content=\"Microsoft Word 15\"><!--[if gte mso 9]><xml> <o:DocumentProperties> <o:Author>johnn alvert baluyot</o:Author> <o:LastAuthor>Lorilla</o:LastAuthor> <o:Revision>2</o:Revision> <o:TotalTime>2</o:TotalTime> <o:Created>2019-09-13T02:45:00Z</o:Created> <o:LastSaved>2019-09-13T02:45:00Z</o:LastSaved> <o:Pages>1</o:Pages> <o:Words>65</o:Words> <o:Characters>375</o:Characters> <o:Lines>3</o:Lines> <o:Paragraphs>1</o:Paragraphs> <o:CharactersWithSpaces>439</o:CharactersWithSpaces> <o:Version>16.00</o:Version> </o:DocumentProperties> <o:OfficeDocumentSettings> <o:AllowPNG/> </o:OfficeDocumentSettings></xml><![endif]--><!--[if gte mso 9]><xml> <w:WordDocument> <w:SpellingState>Clean</w:SpellingState> <w:GrammarState>Clean</w:GrammarState> <w:TrackMoves>false</w:TrackMoves> <w:TrackFormatting/> <w:PunctuationKerning/> <w:ValidateAgainstSchemas/> <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid> <w:IgnoreMixedContent>false</w:IgnoreMixedContent> <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText> <w:DoNotPromoteQF/> <w:LidThemeOther>EN-PH</w:LidThemeOther> <w:LidThemeAsian>X-NONE</w:LidThemeAsian> <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript> <w:Compatibility> <w:BreakWrappedTables/> <w:SnapToGridInCell/> <w:WrapTextWithPunct/> <w:UseAsianBreakRules/> <w:DontGrowAutofit/> <w:SplitPgBreakAndParaMark/> <w:EnableOpenTypeKerning/> <w:DontFlipMirrorIndents/> <w:OverrideTableStyleHps/> </w:Compatibility> <m:mathPr> <m:mathFont m:val=\"Cambria Math\"/> <m:brkBin m:val=\"before\"/> <m:brkBinSub m:val=\"&#45;-\"/> <m:smallFrac m:val=\"off\"/> <m:dispDef/> <m:lMargin m:val=\"0\"/> <m:rMargin m:val=\"0\"/> <m:defJc m:val=\"centerGroup\"/> <m:wrapIndent m:val=\"1440\"/> <m:intLim m:val=\"subSup\"/> <m:naryLim m:val=\"undOvr\"/> </m:mathPr></w:WordDocument></xml><![endif]--><!--[if gte mso 9]><xml> <w:LatentStyles DefLockedState=\"false\" DefUnhideWhenUsed=\"false\" DefSemiHidden=\"false\" DefQFormat=\"false\" DefPriority=\"99\" LatentStyleCount=\"377\"> <w:LsdException Locked=\"false\" Priority=\"0\" QFormat=\"true\" Name=\"Normal\"/> <w:LsdException Locked=\"false\" Priority=\"9\" QFormat=\"true\" Name=\"heading 1\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 2\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 3\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 4\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 5\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 6\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 7\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 8\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 9\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 7\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 8\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 9\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 1\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 2\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 3\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 4\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 5\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 6\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 7\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 8\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 9\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Normal Indent\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"footnote text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"annotation text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"header\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"footer\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index heading\"/> <w:LsdException Locked=\"false\" Priority=\"35\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"caption\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"table of figures\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"envelope address\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"envelope return\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"footnote reference\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"annotation reference\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"line number\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"page number\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"endnote reference\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"endnote text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"table of authorities\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"macro\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toa heading\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 5\"/> <w:LsdException Locked=\"false\" Priority=\"10\" QFormat=\"true\" Name=\"Title\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Closing\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Signature\"/> <w:LsdException Locked=\"false\" Priority=\"1\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Default Paragraph Font\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text Indent\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Message Header\"/> <w:LsdException Locked=\"false\" Priority=\"11\" QFormat=\"true\" Name=\"Subtitle\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Salutation\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Date\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text First Indent\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text First Indent 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Note Heading\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text Indent 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text Indent 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Block Text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Hyperlink\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"FollowedHyperlink\"/> <w:LsdException Locked=\"false\" Priority=\"22\" QFormat=\"true\" Name=\"Strong\"/> <w:LsdException Locked=\"false\" Priority=\"20\" QFormat=\"true\" Name=\"Emphasis\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Document Map\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Plain Text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"E-mail Signature\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Top of Form\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Bottom of Form\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Normal (Web)\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Acronym\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Address\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Cite\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Code\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Definition\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Keyboard\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Preformatted\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Sample\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Typewriter\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Variable\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Normal Table\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"annotation subject\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"No List\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Outline List 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Outline List 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Outline List 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Simple 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Simple 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Simple 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Colorful 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Colorful 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Colorful 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 7\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 8\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 7\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 8\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table 3D effects 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table 3D effects 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table 3D effects 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Contemporary\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Elegant\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Professional\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Subtle 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Subtle 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Web 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Web 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Web 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Balloon Text\"/> <w:LsdException Locked=\"false\" Priority=\"39\" Name=\"Table Grid\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Theme\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" Name=\"Placeholder Text\"/> <w:LsdException Locked=\"false\" Priority=\"1\" QFormat=\"true\" Name=\"No Spacing\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" Name=\"Revision\"/> <w:LsdException Locked=\"false\" Priority=\"34\" QFormat=\"true\" Name=\"List Paragraph\"/> <w:LsdException Locked=\"false\" Priority=\"29\" QFormat=\"true\" Name=\"Quote\"/> <w:LsdException Locked=\"false\" Priority=\"30\" QFormat=\"true\" Name=\"Intense Quote\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"19\" QFormat=\"true\" Name=\"Subtle Emphasis\"/> <w:LsdException Locked=\"false\" Priority=\"21\" QFormat=\"true\" Name=\"Intense Emphasis\"/> <w:LsdException Locked=\"false\" Priority=\"31\" QFormat=\"true\" Name=\"Subtle Reference\"/> <w:LsdException Locked=\"false\" Priority=\"32\" QFormat=\"true\" Name=\"Intense Reference\"/> <w:LsdException Locked=\"false\" Priority=\"33\" QFormat=\"true\" Name=\"Book Title\"/> <w:LsdException Locked=\"false\" Priority=\"37\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Bibliography\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"TOC Heading\"/> <w:LsdException Locked=\"false\" Priority=\"41\" Name=\"Plain Table 1\"/> <w:LsdException Locked=\"false\" Priority=\"42\" Name=\"Plain Table 2\"/> <w:LsdException Locked=\"false\" Priority=\"43\" Name=\"Plain Table 3\"/> <w:LsdException Locked=\"false\" Priority=\"44\" Name=\"Plain Table 4\"/> <w:LsdException Locked=\"false\" Priority=\"45\" Name=\"Plain Table 5\"/> <w:LsdException Locked=\"false\" Priority=\"40\" Name=\"Grid Table Light\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Mention\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Smart Hyperlink\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Hashtag\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Unresolved Mention\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Smart Link\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Smart Link Error\"/> </w:LatentStyles></xml><![endif]--><style><!-- /* Font Definitions */ @font-face{font-family:\"Cambria Math\";panose-1:2 4 5 3 5 4 6 3 2 4;mso-font-charset:0;mso-generic-font-family:roman;mso-font-pitch:variable;mso-font-signature:3 0 0 0 1 0;}@font-face{font-family:Calibri;panose-1:2 15 5 2 2 2 4 3 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-536858881 -1073732485 9 0 511 0;}@font-face{font-family:\"Arial Black\";panose-1:2 11 10 4 2 1 2 2 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-1610612049 1073772795 0 0 159 0;}/* Style Definitions */ p.MsoNormal, li.MsoNormal, div.MsoNormal{mso-style-unhide:no;mso-style-qformat:yes;mso-style-parent:\"\";margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:107%;mso-pagination:widow-orphan;font-size:11.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}span.SpellE{mso-style-name:\"\";mso-spl-e:yes;}span.GramE{mso-style-name:\"\";mso-gram-e:yes;}.MsoChpDefault{mso-style-type:export-only;mso-default-props:yes;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}.MsoPapDefault{mso-style-type:export-only;margin-bottom:8.0pt;line-height:107%;}@page WordSection1{size:792.0pt 612.0pt;".concat(orientation === 'landscape' ? 'mso-page-orientation:landscape;' : '', "margin:72.0pt 72.0pt 72.0pt 72.0pt;mso-header-margin:35.4pt;mso-footer-margin:35.4pt;mso-paper-source:0;}div.WordSection1{page:WordSection1;}--></style><!--[if gte mso 10]><style>/* Style Definitions */ table.MsoNormalTable{mso-style-name:\"Table Normal\";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-noshow:yes;mso-style-priority:99;mso-style-parent:\"\";mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-para-margin-top:0cm;mso-para-margin-right:0cm;mso-para-margin-bottom:8.0pt;mso-para-margin-left:0cm;line-height:107%;mso-pagination:widow-orphan;font-size:11.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}table.MsoTableGrid{mso-style-name:\"Table Grid\";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-priority:39;mso-style-unhide:no;border:solid windowtext 1.0pt;mso-border-alt:solid windowtext .5pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:.5pt solid windowtext;mso-border-insidev:.5pt solid windowtext;mso-para-margin:0cm;mso-para-margin-bottom:.0001pt;mso-pagination:widow-orphan;font-size:11.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US;}</style><![endif]--><!--[if gte mso 9]><xml> <o:shapedefaults v:ext=\"edit\" spidmax=\"1026\"/></xml><![endif]--><!--[if gte mso 9]><xml> <o:shapelayout v:ext=\"edit\"> <o:idmap v:ext=\"edit\" data=\"1\"/> </o:shapelayout></xml><![endif]--></head>") : "<html xmlns:v=\"urn:schemas-microsoft-com:vml\" xmlns:o=\"urn:schemas-microsoft-com:office:office\" xmlns:w=\"urn:schemas-microsoft-com:office:word\" xmlns:m=\"http://schemas.microsoft.com/office/2004/12/omml\" xmlns=\"http://www.w3.org/TR/REC-html40\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=unicode\"><meta name=\"ProgId\" content=\"Word.Document\"><meta name=\"Generator\" content=\"Microsoft Word 15\"><meta name=\"Originator\" content=\"Microsoft Word 15\"><link rel=\"File-List\" href=\"TEMPLATE_files/filelist.xml\"> <!--[if gte mso 9]><xml> <o:DocumentProperties> <o:Author>johnn alvert baluyot</o:Author> <o:LastAuthor>Lorilla</o:LastAuthor> <o:Revision>2</o:Revision> <o:TotalTime>5</o:TotalTime> <o:Created>2019-10-02T02:22:00Z</o:Created> <o:LastSaved>2019-10-02T02:22:00Z</o:LastSaved> <o:Pages>1</o:Pages> <o:Words>51</o:Words> <o:Characters>293</o:Characters> <o:Lines>2</o:Lines> <o:Paragraphs>1</o:Paragraphs> <o:CharactersWithSpaces>343</o:CharactersWithSpaces> <o:Version>16.00</o:Version> </o:DocumentProperties> <o:OfficeDocumentSettings> <o:AllowPNG/> </o:OfficeDocumentSettings> </xml><![endif]--><link rel=\"themeData\" href=\"TEMPLATE_files/themedata.thmx\"><link rel=\"colorSchemeMapping\" href=\"TEMPLATE_files/colorschememapping.xml\"> <!--[if gte mso 9]><xml> <w:WordDocument> <w:SpellingState>Clean</w:SpellingState> <w:GrammarState>Clean</w:GrammarState> <w:TrackMoves>false</w:TrackMoves> <w:TrackFormatting/> <w:PunctuationKerning/> <w:ValidateAgainstSchemas/> <w:SaveIfXMLInvalid>false</w:SaveIfXMLInvalid> <w:IgnoreMixedContent>false</w:IgnoreMixedContent> <w:AlwaysShowPlaceholderText>false</w:AlwaysShowPlaceholderText> <w:DoNotPromoteQF/> <w:LidThemeOther>EN-PH</w:LidThemeOther> <w:LidThemeAsian>X-NONE</w:LidThemeAsian> <w:LidThemeComplexScript>X-NONE</w:LidThemeComplexScript> <w:Compatibility> <w:BreakWrappedTables/> <w:SnapToGridInCell/> <w:WrapTextWithPunct/> <w:UseAsianBreakRules/> <w:DontGrowAutofit/> <w:SplitPgBreakAndParaMark/> <w:EnableOpenTypeKerning/> <w:DontFlipMirrorIndents/> <w:OverrideTableStyleHps/> </w:Compatibility> <m:mathPr> <m:mathFont m:val=\"Cambria Math\"/> <m:brkBin m:val=\"before\"/> <m:brkBinSub m:val=\"&#45;-\"/> <m:smallFrac m:val=\"off\"/> <m:dispDef/> <m:lMargin m:val=\"0\"/> <m:rMargin m:val=\"0\"/> <m:defJc m:val=\"centerGroup\"/> <m:wrapIndent m:val=\"1440\"/> <m:intLim m:val=\"subSup\"/> <m:naryLim m:val=\"undOvr\"/> </m:mathPr></w:WordDocument> </xml><![endif]--><!--[if gte mso 9]><xml> <w:LatentStyles DefLockedState=\"false\" DefUnhideWhenUsed=\"false\" DefSemiHidden=\"false\" DefQFormat=\"false\" DefPriority=\"99\" LatentStyleCount=\"377\"> <w:LsdException Locked=\"false\" Priority=\"0\" QFormat=\"true\" Name=\"Normal\"/> <w:LsdException Locked=\"false\" Priority=\"9\" QFormat=\"true\" Name=\"heading 1\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 2\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 3\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 4\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 5\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 6\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 7\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 8\"/> <w:LsdException Locked=\"false\" Priority=\"9\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"heading 9\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 7\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 8\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index 9\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 1\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 2\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 3\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 4\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 5\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 6\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 7\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 8\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toc 9\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Normal Indent\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"footnote text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"annotation text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"header\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"footer\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"index heading\"/> <w:LsdException Locked=\"false\" Priority=\"35\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"caption\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"table of figures\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"envelope address\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"envelope return\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"footnote reference\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"annotation reference\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"line number\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"page number\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"endnote reference\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"endnote text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"table of authorities\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"macro\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"toa heading\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Bullet 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Number 5\"/> <w:LsdException Locked=\"false\" Priority=\"10\" QFormat=\"true\" Name=\"Title\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Closing\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Signature\"/> <w:LsdException Locked=\"false\" Priority=\"1\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Default Paragraph Font\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text Indent\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"List Continue 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Message Header\"/> <w:LsdException Locked=\"false\" Priority=\"11\" QFormat=\"true\" Name=\"Subtitle\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Salutation\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Date\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text First Indent\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text First Indent 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Note Heading\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text Indent 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Body Text Indent 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Block Text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Hyperlink\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"FollowedHyperlink\"/> <w:LsdException Locked=\"false\" Priority=\"22\" QFormat=\"true\" Name=\"Strong\"/> <w:LsdException Locked=\"false\" Priority=\"20\" QFormat=\"true\" Name=\"Emphasis\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Document Map\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Plain Text\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"E-mail Signature\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Top of Form\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Bottom of Form\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Normal (Web)\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Acronym\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Address\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Cite\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Code\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Definition\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Keyboard\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Preformatted\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Sample\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Typewriter\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"HTML Variable\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Normal Table\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"annotation subject\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"No List\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Outline List 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Outline List 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Outline List 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Simple 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Simple 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Simple 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Classic 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Colorful 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Colorful 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Colorful 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Columns 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 7\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Grid 8\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 4\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 5\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 7\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table List 8\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table 3D effects 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table 3D effects 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table 3D effects 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Contemporary\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Elegant\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Professional\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Subtle 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Subtle 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Web 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Web 2\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Web 3\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Balloon Text\"/> <w:LsdException Locked=\"false\" Priority=\"39\" Name=\"Table Grid\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Table Theme\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" Name=\"Placeholder Text\"/> <w:LsdException Locked=\"false\" Priority=\"1\" QFormat=\"true\" Name=\"No Spacing\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 1\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" Name=\"Revision\"/> <w:LsdException Locked=\"false\" Priority=\"34\" QFormat=\"true\" Name=\"List Paragraph\"/> <w:LsdException Locked=\"false\" Priority=\"29\" QFormat=\"true\" Name=\"Quote\"/> <w:LsdException Locked=\"false\" Priority=\"30\" QFormat=\"true\" Name=\"Intense Quote\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"60\" Name=\"Light Shading Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"61\" Name=\"Light List Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"62\" Name=\"Light Grid Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"63\" Name=\"Medium Shading 1 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"64\" Name=\"Medium Shading 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"65\" Name=\"Medium List 1 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"66\" Name=\"Medium List 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"67\" Name=\"Medium Grid 1 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"68\" Name=\"Medium Grid 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"69\" Name=\"Medium Grid 3 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"70\" Name=\"Dark List Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"71\" Name=\"Colorful Shading Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"72\" Name=\"Colorful List Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"73\" Name=\"Colorful Grid Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"19\" QFormat=\"true\" Name=\"Subtle Emphasis\"/> <w:LsdException Locked=\"false\" Priority=\"21\" QFormat=\"true\" Name=\"Intense Emphasis\"/> <w:LsdException Locked=\"false\" Priority=\"31\" QFormat=\"true\" Name=\"Subtle Reference\"/> <w:LsdException Locked=\"false\" Priority=\"32\" QFormat=\"true\" Name=\"Intense Reference\"/> <w:LsdException Locked=\"false\" Priority=\"33\" QFormat=\"true\" Name=\"Book Title\"/> <w:LsdException Locked=\"false\" Priority=\"37\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Bibliography\"/> <w:LsdException Locked=\"false\" Priority=\"39\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" QFormat=\"true\" Name=\"TOC Heading\"/> <w:LsdException Locked=\"false\" Priority=\"41\" Name=\"Plain Table 1\"/> <w:LsdException Locked=\"false\" Priority=\"42\" Name=\"Plain Table 2\"/> <w:LsdException Locked=\"false\" Priority=\"43\" Name=\"Plain Table 3\"/> <w:LsdException Locked=\"false\" Priority=\"44\" Name=\"Plain Table 4\"/> <w:LsdException Locked=\"false\" Priority=\"45\" Name=\"Plain Table 5\"/> <w:LsdException Locked=\"false\" Priority=\"40\" Name=\"Grid Table Light\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"Grid Table 1 Light Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"Grid Table 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"Grid Table 3 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"Grid Table 4 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"Grid Table 5 Dark Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"Grid Table 6 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"Grid Table 7 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 1\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 2\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 3\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 4\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 5\"/> <w:LsdException Locked=\"false\" Priority=\"46\" Name=\"List Table 1 Light Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"47\" Name=\"List Table 2 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"48\" Name=\"List Table 3 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"49\" Name=\"List Table 4 Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"50\" Name=\"List Table 5 Dark Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"51\" Name=\"List Table 6 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" Priority=\"52\" Name=\"List Table 7 Colorful Accent 6\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Mention\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Smart Hyperlink\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Hashtag\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Unresolved Mention\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Smart Link\"/> <w:LsdException Locked=\"false\" SemiHidden=\"true\" UnhideWhenUsed=\"true\" Name=\"Smart Link Error\"/> </w:LatentStyles> </xml><![endif]--><style>@font-face{font-family:\"Cambria Math\";panose-1:2 4 5 3 5 4 6 3 2 4;mso-font-charset:0;mso-generic-font-family:roman;mso-font-pitch:variable;mso-font-signature:3 0 0 0 1 0}@font-face{font-family:Calibri;panose-1:2 15 5 2 2 2 4 3 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-536859905 1073786111 1 0 511 0}@font-face{font-family:\"Arial Black\";panose-1:2 11 10 4 2 1 2 2 2 4;mso-font-charset:0;mso-generic-font-family:swiss;mso-font-pitch:variable;mso-font-signature:-1610612049 1073772795 0 0 159 0}p.MsoNormal,li.MsoNormal,div.MsoNormal{mso-style-unhide:no;mso-style-qformat:yes;mso-style-parent:\"\";margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;line-height:105%;mso-pagination:widow-orphan;font-size:11.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}p.msonormal0,li.msonormal0,div.msonormal0{mso-style-name:msonormal;mso-style-unhide:no;mso-margin-top-alt:auto;margin-right:0cm;mso-margin-bottom-alt:auto;margin-left:0cm;mso-pagination:widow-orphan;font-size:12.0pt;font-family:\"Times New Roman\",serif;mso-fareast-font-family:\"Times New Roman\";mso-fareast-theme-font:minor-fareast}span.GramE{mso-style-name:\"\";mso-gram-e:yes}.MsoChpDefault{mso-style-type:export-only;mso-default-props:yes;font-size:10.0pt;mso-ansi-font-size:10.0pt;mso-bidi-font-size:10.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-fareast-font-family:Calibri;mso-fareast-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}@page WordSection1{size:612.0pt 792.0pt;margin:36.0pt 36.0pt 36.0pt 36.0pt;mso-header-margin:35.4pt;mso-footer-margin:35.4pt;mso-paper-source:0}div.WordSection1{page:WordSection1}</style><!--[if gte mso 10]><style>table.MsoNormalTable{mso-style-name:\"Table Normal\";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-noshow:yes;mso-style-priority:99;mso-style-parent:\"\";mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-para-margin:0cm;mso-para-margin-bottom:.0001pt;mso-pagination:widow-orphan;font-size:10.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}table.MsoTableGrid{mso-style-name:\"Table Grid\";mso-tstyle-rowband-size:0;mso-tstyle-colband-size:0;mso-style-priority:39;mso-style-unhide:no;border:solid windowtext 1.0pt;mso-border-alt:solid windowtext .5pt;mso-padding-alt:0cm 5.4pt 0cm 5.4pt;mso-border-insideh:.5pt solid windowtext;mso-border-insidev:.5pt solid windowtext;mso-para-margin:0cm;mso-para-margin-bottom:.0001pt;mso-pagination:widow-orphan;font-size:11.0pt;font-family:\"Calibri\",sans-serif;mso-ascii-font-family:Calibri;mso-ascii-theme-font:minor-latin;mso-hansi-font-family:Calibri;mso-hansi-theme-font:minor-latin;mso-bidi-font-family:\"Times New Roman\";mso-bidi-theme-font:minor-bidi;mso-fareast-language:EN-US}</style><![endif]--><!--[if gte mso 9]><xml> <o:shapedefaults v:ext=\"edit\" spidmax=\"1026\"/> </xml><![endif]--><!--[if gte mso 9]><xml> <o:shapelayout v:ext=\"edit\"> <o:idmap v:ext=\"edit\" data=\"1\"/> </o:shapelayout></xml><![endif]--></head>";
      return "".concat(head, "<body lang=EN-PH style='tab-interval:36.0pt'>").concat(body, "</body></html>");
    },
    saveAsManual: function saveAsManual(value, obj, month, year, range, day, monthName, breaks) {
      var events = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];
      var manual = arguments.length > 9 ? arguments[9] : undefined;
      var vm = this;
      return "<div class=WordSection1>\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:18.0pt;line-height:107%;font-family:\n\"Arial Black\",sans-serif'>DIAGOLD PAWNSHOP INC.<o:p></o:p></span></p>\n\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:9.0pt;line-height:107%;font-family:\n\"Arial\",sans-serif'>Toy Bldg. <span class=SpellE>Lapu</span> -<span\nclass=SpellE>Lapu</span> Street <span class=SpellE>Agdao</span> Davao City<o:p></o:p></span></p>\n\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:12.0pt;line-height:107%;font-family:\n\"Arial Black\",sans-serif;mso-bidi-font-family:Arial'>SALARY SLIP<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:9.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Employee Name: ".concat(value.name, "<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Duration: </span><span class=GramE><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'>(</span></span><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'>").concat(monthName, "\n").concat(range, ",").concat(year, ")<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Total Days &amp; Hours: </span><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'>\n<span class=GramE>(days : ").concat(obj.regDay + obj.restDay + obj.clate + obj.cut, " & ").concat(value.attendances.reduce(function (prev, curr) {
        var value = Number(curr.timing);

        if (!isNaN(value)) {
          var consume_time_in = vm.timeStringToFloat(curr.started_at.slice(11, 16)) <= vm.timeStringToFloat('08:00') ? (vm.timeStringToFloat('08:00') - vm.timeStringToFloat(curr.started_at.slice(11, 16))) * 3600 : 0; //console.log(consume_time_in, 'started_in', vm.timeStringToFloat(''), 'time_in', vm.timeStringToFloat(curr.started_at.slice(11, 16)) , 'time', curr.started_at.slice(11, 16), vm.timeStringToFloat('08:00'))

          return prev + Math.floor(parseInt(curr.timing - consume_time_in, 10) / 3600);
        } else {
          return prev;
        }
      }, 0), " <span class=SpellE>hrs.</span>)<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=871\nstyle='width:100%;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;\nmso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>\n<tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Earnings<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:\nsolid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;\nborder-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:\nsolid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Deductions<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;\nborder-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:\nsolid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:1;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Basic\nPay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><span\nstyle='mso-spacerun:yes'>").concat(manual.basicPay, "</span><o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>SSS\nContribution:<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.sss_deduction ? value.sss_deduction : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:2;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Rest\nDay Pay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(obj.restDay ? obj.restDay * 381 : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>PHIC<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.philhealth_deduction ? value.philhealth_deduction : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:3;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Holiday\nPay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(manual.reg, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>HDMF\nContribution<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.pagibig_deduction ? value.pagibig_deduction : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:4;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Special\nHoliday Pay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(manual.special, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>SSS\nLoan<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.sss_loan ? value.sss_loan : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:5;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>25% OT<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(obj.overTime25 ? Number.parseFloat(381 * 1.25 / 8 * (!isNaN(Number(obj.overTime25)) ? Number.parseInt(obj.overTime25) : 0)).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>HDMF\nLoan<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.pagibig_loan ? value.pagibig_loan : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:6;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>30 % OT<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(obj.overTime30 ? Number.parseFloat(381 * 0.3 / 8 * (!isNaN(Number(obj.overTime30)) ? Number.parseFloat(obj.overTime30) : 0)).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Total <o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(manual.q23 ? Number.parseFloat(manual.q23).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>DE MINIMIS<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(Number.parseFloat(manual.de_minimis), "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n</td>\n\n<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Total<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(manual.q15 ? Number.parseFloat(manual.q15).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Net\nSalary Pay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(Number.parseFloat(manual.q15 - manual.q23) ? Number.parseFloat(manual.q15 - manual.q23 + manual.de_minimis).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n</table>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Signature <span class=GramE>Of</span> Employee:\n__________________________<o:p></o:p></span></p>\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:9.0pt;line-height:50%;font-family:\n\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n").concat(breaks ? '<p style="page-break-before: always" >' : '', "\n</div>");
    },
    saveAsWord: function saveAsWord(value, obj, month, year, range, day, monthName, breaks) {
      var events = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : [];

      var vm = this,
          event = _.map(events, function (o) {
        var end = new Date(o.end_date),
            start = new Date(o.start_date),
            tStartDate = start.getTime(),
            tEndDate = end.getTime(),
            nDifference = Math.abs(tEndDate - tStartDate),
            fDiffernceInDays = Math.round(nDifference / (1000 * 86400));
        return {
          duration: fDiffernceInDays + 1,
          occurrence: o.occurrence == '0' ? 0 : 1
        };
      });

      var reg = _.reduce(event, function (sum, o) {
        return o.occurrence === '0' ? sum.duration + o : sum;
      }, 0);

      var special = _.reduce(event, function (sum, o) {
        return o.occurrence !== '0' ? sum + o.duration : sum;
      }, 0);

      var basicPay = value.salary ? value.salary / 2 - vm.numberFloat(obj.loa) * 381 - ((vm.numberFloat(obj.late) + vm.numberFloat(obj.ut)) * (381 / 8)).toFixed(2) : 0,
          q15 = basicPay + vm.numberFloat(obj.restDay) * 381 + vm.numberFloat(reg * 381) + vm.numberFloat(special * (14.29 * 8)) + vm.numberFloat(381 * 1.25 / 8 * (!isNaN(Number(obj.overTime25)) ? Number.parseFloat(obj.overTime25) : 0)) + vm.numberFloat(381 / 8 * 0.30 * (!isNaN(Number(obj.overTime30)) ? Number.parseFloat(obj.overTime30) : 0)),
          q23 = vm.numberFloat(value.sss_deduction) + vm.numberFloat(value.sss_loan) + vm.numberFloat(value.pagibig_deduction) + vm.numberFloat(value.pagibig_loan) + vm.numberFloat(value.philhealth_deduction),
          de_minimis = vm.numberFloat(value.allowance);
      return "<div class=WordSection1>\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:18.0pt;line-height:107%;font-family:\n\"Arial Black\",sans-serif'>DIAGOLD PAWNSHOP INC.<o:p></o:p></span></p>\n\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:9.0pt;line-height:107%;font-family:\n\"Arial\",sans-serif'>Toy Bldg. <span class=SpellE>Lapu</span> -<span\nclass=SpellE>Lapu</span> Street <span class=SpellE>Agdao</span> Davao City<o:p></o:p></span></p>\n\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:12.0pt;line-height:107%;font-family:\n\"Arial Black\",sans-serif;mso-bidi-font-family:Arial'>SALARY SLIP<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:9.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Employee Name: ".concat(value.name, "<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Duration: </span><span class=GramE><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'>(</span></span><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'>").concat(monthName, "\n").concat(range, ",").concat(year, ")<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Total Days &amp; Hours: </span><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'>\n<span class=GramE>(days : ").concat(obj.regDay + obj.restDay + obj.clate + obj.cut, " & ").concat(value.attendances.reduce(function (prev, curr) {
        var value = Number(curr.timing);

        if (!isNaN(value)) {
          var consume_time_in = vm.timeStringToFloat(curr.started_at.slice(11, 16)) <= vm.timeStringToFloat('08:00') ? (vm.timeStringToFloat('08:00') - vm.timeStringToFloat(curr.started_at.slice(11, 16))) * 3600 : 0; //console.log(consume_time_in, 'started_in', vm.timeStringToFloat(''), 'time_in', vm.timeStringToFloat(curr.started_at.slice(11, 16)) , 'time', curr.started_at.slice(11, 16), vm.timeStringToFloat('08:00'))

          return prev + Math.floor(parseInt(curr.timing - consume_time_in, 10) / 3600);
        } else {
          return prev;
        }
      }, 0), " <span class=SpellE>hrs.</span>)<o:p></o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<table class=MsoTableGrid border=1 cellspacing=0 cellpadding=0 width=871\nstyle='width:100%;border-collapse:collapse;border:none;mso-border-alt:solid windowtext .5pt;\nmso-yfti-tbllook:1184;mso-padding-alt:0cm 5.4pt 0cm 5.4pt'>\n<tr style='mso-yfti-irow:0;mso-yfti-firstrow:yes;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Earnings<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:\nsolid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;\nborder-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:\nsolid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Deductions<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border:solid windowtext 1.0pt;\nborder-left:none;mso-border-left-alt:solid windowtext .5pt;mso-border-alt:\nsolid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:1;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Basic\nPay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><span\nstyle='mso-spacerun:yes'>").concat(basicPay, "</span><o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>SSS\nContribution:<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.sss_deduction ? value.sss_deduction : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:2;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Rest\nDay Pay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(obj.restDay ? obj.restDay * 381 : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>PHIC<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.philhealth_deduction ? value.philhealth_deduction : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:3;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Holiday\nPay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(reg * 381, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>HDMF\nContribution<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.pagibig_deduction ? value.pagibig_deduction : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:4;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Special\nHoliday Pay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(special * (14.29 * 8), "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>SSS\nLoan<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.sss_loan ? value.sss_loan : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:5;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>25% OT<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(obj.overTime25 ? Number.parseFloat(381 * 1.25 / 8 * (!isNaN(Number(obj.overTime25)) ? Number.parseInt(obj.overTime25) : 0)).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>HDMF\nLoan<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(value.pagibig_loan ? value.pagibig_loan : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:6;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>30 % OT<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(obj.overTime30 ? Number.parseFloat(381 * 0.3 / 8 * (!isNaN(Number(obj.overTime30)) ? Number.parseFloat(obj.overTime30) : 0)).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Total <o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(q23 ? Number.parseFloat(q23).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>DE MINIMIS<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(Number.parseFloat(de_minimis), "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n</td>\n\n<tr style='mso-yfti-irow:7;mso-yfti-lastrow:yes;height:18pt'>\n<td width=164 valign=top style='width:122.7pt;border:solid windowtext 1.0pt;\nborder-top:none;mso-border-top-alt:solid windowtext .5pt;mso-border-alt:solid windowtext .5pt;\npadding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Total<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.7pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(q15 ? Number.parseFloat(q15).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>Net\nSalary Pay<o:p></o:p></span></p>\n</td>\n<td width=164 valign=top style='width:122.75pt;border-top:none;border-left:\nnone;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;\nmso-border-top-alt:solid windowtext .5pt;mso-border-left-alt:solid windowtext .5pt;\nmso-border-alt:solid windowtext .5pt;padding:0cm 5.4pt 0cm 5.4pt;height:18pt'>\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt;line-height:\nnormal'><span style='font-size:12.0pt;font-family:\"Arial\",sans-serif'>").concat(Number.parseFloat(q15 - q23) ? Number.parseFloat(q15 - q23 + de_minimis).toFixed(2) : 0, "<o:p>&nbsp;</o:p></span></p>\n</td>\n</tr>\n</table>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n\n<p class=MsoNormal style='margin-bottom:0cm;margin-bottom:.0001pt'><span\nstyle='font-size:12.0pt;line-height:107%;font-family:\"Arial Black\",sans-serif;\nmso-bidi-font-family:Arial'>Signature <span class=GramE>Of</span> Employee:\n__________________________<o:p></o:p></span></p>\n<p class=MsoNormal align=center style='margin-bottom:0cm;margin-bottom:.0001pt;\ntext-align:center'><span style='font-size:9.0pt;line-height:50%;font-family:\n\"Arial\",sans-serif'><o:p>&nbsp;</o:p></span></p>\n").concat(breaks ? '<p style="page-break-before: always" >' : '', "\n</div>");
    }
  }
});

/***/ })

}]);