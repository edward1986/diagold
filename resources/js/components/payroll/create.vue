<template>
    <div>
        <el-row v-if="showForm">
            <el-col :span="24">
                <el-card shadow="never">
                    <div slot="header">
                        <span>{{$route.params.id ? 'Edit' : 'Create'}} Payroll</span>
                    </div>
                    <el-form ref="form" @submit.native.prevent="onSubmit" :model="form" label-width="120px">
                        <el-form-item :class="errors.month ? 'is-error is-required' : ''" label="Month">
                            <el-select style="width: 100%;" :disabled="loading" v-model="month"
                                       placeholder="Select month">
                                <el-option
                                    v-for="(item, index) in monthNames"
                                    :key="index"
                                    :label="item"
                                    :value="index">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item :class="errors.year ? 'is-error is-required' : ''" label="Year">
                            <el-input type="text" required :disabled="loading" v-model="year"></el-input>
                            <div v-if="errors.year" v-for="error in errors.year" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>
                        <el-form-item :class="errors.day ? 'is-error is-required' : ''" label="Range Date">
                            <el-select style="width: 100%;" v-model="range" :disabled="loading"
                                       placeholder="Select Date">
                                <el-option label="1-15" value="0"/>
                                <el-option :label="`16-${rangeChange}`" value="1"/>
                            </el-select>
                        </el-form-item>
                        <el-form-item :class="errors.day ? 'is-error is-required' : ''" label="Format">
                            <el-select style="width: 100%;" v-model="saveAs" value-key="id" :disabled="loading"
                                       placeholder="Select Format">
                                <el-option-group label="Attendance">
                                    <el-option label="Print Directly (Attendance)"
                                               :value="{id: 5, name: 'print', format: ''}"/>
                                </el-option-group>
                                <el-option-group label="Payroll">
                                    <el-option label="Manual Payroll"
                                               :value="{id: 0, name: 'manual', format: ''}"/>
                                    <el-option label="Print Directly (Payroll) "
                                               :value="{id: 4, name: 'print', format: ''}"/>
                                    <el-option label="Excel XML" :value="{id: 1, name: 'excel', format: 'text/xml'}"/>
                                    <el-option label="Word (Individual)"
                                               :value="{id: 2, name: 'word', format: 'application/vnd.ms-word'}"/>
                                    <el-option label="Word (Multiple)"
                                               :value="{id: 6, name: 'word', format: 'application/vnd.ms-word'}"/>
                                    <!--<el-option label="Excel XLS"
                                               :value="{id: 3, name: 'excel', format: 'application/vnd.ms-excel'}"/>-->
                                </el-option-group>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="user_id" label="Employee">
                            <el-select style="width: 100%;"
                                       v-model="form.user_id"
                                       multiple
                                       filterable
                                       remote
                                       reserve-keyword
                                       placeholder="Please enter an employee name"
                                       :remote-method="search_user"
                                       :loading="loading">
                                <el-option
                                    v-for="item in users"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item>

                            <div class="btn-group btn-group-sm">
                                <button :disabled="loading || !(year && form.user_id.length)" @click="onSubmit('form')"
                                        type="button" class="btn btn-primary">{{$route.params.id
                                    ? 'Edit' : 'Create'}} Payroll
                                </button>
                                <button @click="onCancel" :disabled="loading" type="button" class="btn btn-default">
                                    Cancel
                                </button>
                            </div>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>

        <hr v-if="manual.length > 0" >
        <button class="btn btn-default" v-if="(!showForm) && manual.length > 0"  @click="showForm = true ">Back</button>
        <button class="btn btn-primary" v-if="manual.length > 0" @click="onManual">Print</button>
        <hr v-if="manual.length > 0">
        <div  v-loading.fullscreen="(!showForm) && !manual.length > 0"></div>
        <div v-if="manual.length > 0" class="row row-grid no-gutters" >

            <manual-payroll v-for="(item, index) in manual" :key="index" :item="item"
                            @manual="manual[index].manual = $event"/>

        </div>

    </div>
</template>
<script>
    import user from './../mixin/search/user.js'
    import catchError from '../mixins/catchError'
    import manualPayroll from "./manual";
    import saveAsWord from './saveAsWord'

    export default {
        name: 'payrollXreate',
        components: {
            manualPayroll
        },
        mixins: [user, saveAsWord],
        computed: {
            rangeChange() {
                var $month = parseInt(this.month) + 1
                this.params = `&month=${this.month < 10 ? "0" + $month : $month}&year=${this.year}&range=${this.range}`
                return new Date(this.year, this.month + 1, 0).getDate()
            }
        },
        data() {
            return {
                showForm: true,
                monthNames: ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ],
                saveAs: {id: 4, name: 'print', format: ''},
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
            }
        },
        mounted() {
            var vm = this, date = new Date(),
                $from = new Date(date.getFullYear(), date.getMonth(), 1),
                $to = new Date(date.getFullYear(), date.getMonth(), 15)
            var $month = parseInt(this.month) + 1
            this.params = `&month=${this.month < 10 ? "0" + $month : $month}&year=${this.year}&range=${this.range}`
            this.range = 15 >= date.getDate() ? '0' : '1'


            if (vm.$route.params.id = 5 && vm.$route.params.name === 'print') {
                vm.saveAs = {id: 5, name: 'print', format: ''}
            }
        },
        methods: {
            onManual() {
                var vm = this,
                    print = vm.manual,
                    isMobile = false

                var isReady = false
                var divToPrint = '';
                var i = 0
                var breaks = true
                new Promise((resolve) => {
                    resolve(_.map(print, function (response) {
                        divToPrint += vm.saveAsManual(response.value, response.obj, response.month, response.year, response.range, response.day, response.monthName, breaks = !breaks, response.events, response.manual, 'manual')
                    }))
                }).then(() => {
                    let newWin = window.open("");

                    newWin.document.write(vm.htmlBody(divToPrint));

                    newWin.focus();
// device detection
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

                        newWin.print();
                    } else {
                        newWin.print()
                        newWin.close()
                    }
                })
            },
            onSubmit(form) {
                var vm = this
                vm.loading = true
                vm.print = []
                var i = 0
                _.forEach(vm.form.user_id, function (value) {
                    axios.post((vm.url ? vm.url : '/api/users/search') + '?' + (vm.params ? vm.params : ''), {user_id: value}).then(function (q) {
                        vm.loading = false
                        if ((vm.url && vm.saveAs.id >= 0 && vm.saveAs.id <= 4) || (vm.saveAs.id === 6)) {
                            if (vm.saveAs.id === 0) {
                                vm.showForm = false
                            }
                            vm.saveAsXml(q.data.users.data, q.data.events, q.data.leaves, vm.range, i++)
                        }
                        if (vm.url && vm.saveAs.id === 5) {

                            vm.printAttendance(q.data.users.data, q.data.events, q.data.leaves, vm.range, i++)
                        }

                        if (i + 1 === vm.form.user_id.length) {
                            vm.loading = false
                        }
                    }).catch(function (error) {
                        vm.loading = false
                        if (error.data && error.response.data && error.response.data.errors && error.response.data.message) {
                            vm.errors = error.response.data.errors;
                            vm.$swal(error.response.data.statusText, error.response.data.message, 'error');
                        }
                    })
                });
            },

            printAttendance(data, events, leaves, range, index) {
                var vm = this
                var template = ''
                var breaks = index + 1 === vm.form.user_id.length
                var year = vm.year
                var range_ = range == '0' ? '1-15' : `16-${new Date(vm.year, vm.month + 1, 0).getDate()}`
                var monthName_ = vm.monthNames[vm.month]
                var clate = 0, cut = 0
                _.forEach(data, function (value) {
                    var totals = 0

                    template = `
    <html><head><meta http-equiv="Content-Type" content="text/html; charset=windows-1252"><meta name="Generator" content="Microsoft Word 15 (filtered)"><title>Time sheet</title><style><!-- /* Font Definitions */ @font-face{font-family:"Cambria Math";panose-1:2 4 5 3 5 4 6 3 2 4;}@font-face{font-family:Tahoma;panose-1:2 11 6 4 3 5 4 4 2 4;}/* Style Definitions */ p.MsoNormal, li.MsoNormal, div.MsoNormal{margin:0cm;margin-bottom:.0001pt;font-size:10.0pt;font-family:"Arial",sans-serif;}h1{mso-style-link:"Heading 1 Char";margin:0cm;margin-bottom:.0001pt;text-align:center;font-size:10.0pt;font-family:"Arial",sans-serif;}h2{mso-style-link:"Heading 2 Char";margin:0cm;margin-bottom:.0001pt;text-align:right;font-size:10.0pt;font-family:"Arial",sans-serif;}p.MsoTitle, li.MsoTitle, div.MsoTitle{mso-style-link:"Title Char";margin:0cm;margin-bottom:.0001pt;text-align:right;font-size:26.0pt;font-family:"Arial",sans-serif;color:#7F7F7F;letter-spacing:.25pt;font-weight:bold;}p.MsoAcetate, li.MsoAcetate, div.MsoAcetate{mso-style-link:"Balloon Text Char";margin:0cm;margin-bottom:.0001pt;font-size:8.0pt;font-family:"Tahoma",sans-serif;}span.MsoPlaceholderText{color:gray;}span.Heading1Char{mso-style-name:"Heading 1 Char";mso-style-link:"Heading 1";font-family:"Arial",sans-serif;font-weight:bold;}span.Heading2Char{mso-style-name:"Heading 2 Char";mso-style-link:"Heading 2";font-family:"Arial",sans-serif;font-weight:bold;}p.msonormal0, li.msonormal0, div.msonormal0{mso-style-name:msonormal;margin-right:0cm;margin-left:0cm;font-size:12.0pt;font-family:"Times New Roman",serif;}span.TitleChar{mso-style-name:"Title Char";mso-style-link:Title;font-family:"Arial",sans-serif;color:#7F7F7F;letter-spacing:.25pt;font-weight:bold;}span.BalloonTextChar{mso-style-name:"Balloon Text Char";mso-style-link:"Balloon Text";font-family:"Tahoma",sans-serif;}p.CompanyName, li.CompanyName, div.CompanyName{mso-style-name:"Company Name";margin:0cm;margin-bottom:.0001pt;font-size:14.0pt;font-family:"Arial",sans-serif;font-weight:bold;}p.Amount, li.Amount, div.Amount{mso-style-name:Amount;margin:0cm;margin-bottom:.0001pt;text-align:right;font-size:10.0pt;font-family:"Arial",sans-serif;}p.ContactInfo, li.ContactInfo, div.ContactInfo{mso-style-name:"Contact Info";margin-top:0cm;margin-right:0cm;margin-bottom:36.0pt;margin-left:0cm;font-size:9.0pt;font-family:"Arial",sans-serif;}p.ContactInfoCxSpFirst, li.ContactInfoCxSpFirst, div.ContactInfoCxSpFirst{mso-style-name:"Contact InfoCxSpFirst";margin:0cm;margin-bottom:.0001pt;font-size:9.0pt;font-family:"Arial",sans-serif;}p.ContactInfoCxSpMiddle, li.ContactInfoCxSpMiddle, div.ContactInfoCxSpMiddle{mso-style-name:"Contact InfoCxSpMiddle";margin:0cm;margin-bottom:.0001pt;font-size:9.0pt;font-family:"Arial",sans-serif;}p.ContactInfoCxSpLast, li.ContactInfoCxSpLast, div.ContactInfoCxSpLast{mso-style-name:"Contact InfoCxSpLast";margin-top:0cm;margin-right:0cm;margin-bottom:36.0pt;margin-left:0cm;font-size:9.0pt;font-family:"Arial",sans-serif;}.MsoChpDefault{font-size:10.0pt;}@page WordSection1{size:792.0pt 612.0pt;margin:54.0pt 72.0pt 54.0pt 36.0pt;}div.WordSection1{page:WordSection1;}--> </style> </head> <body lang="EN-PH"> <div class="WordSection1"> <table class="MsoTableGrid" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%;border-collapse:collapse;border:none"> <tbody><tr style="page-break-inside:avoid;height:64.8pt"> <td width="463" colspan="2" valign="top" style="width:347.4pt;padding:0cm 5.4pt 0cm 5.4pt; height:64.8pt"> <p class="CompanyName"><span lang="EN-US">DIAGOLD PAWNSHOP INC.</span></p><p class="ContactInfoCxSpFirst"><span lang="EN-US" style="font-size:12.0pt">Toy Bldg.Lapu -Lapu Street,</span></p><p class="ContactInfoCxSpLast"><span lang="EN-US" style="font-size:12.0pt">&nbsp;Agdao Davao City</span></p></td><td width="463" colspan="3" valign="top" style="width:347.4pt;padding:0cm 5.4pt 0cm 5.4pt; height:64.8pt"> <p class="MsoTitle"><span lang="EN-US">Attendance Sheet</span></p><p class="MsoNormal" align="right" style="text-align:right"><span lang="EN-US" style="font-size:14.0pt">${monthName_} ${range_} ${year}</span></p></td></tr><tr style="page-break-inside:avoid;height:21.6pt"> <td width="182" valign="bottom" style="width:136.3pt;padding:0cm 5.4pt 0cm 5.4pt; height:21.6pt"> <p class="MsoNormal"><span lang="EN-US">Employee Name:</span></p></td><td width="282" colspan="2" valign="bottom" style="width:211.4pt;border:none; border-bottom:solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:21.6pt"> <p class="MsoNormal"><span lang="EN-US">${value.name}</span></p></td><td width="120" valign="bottom" style="width:90.35pt;padding:0cm 5.4pt 0cm 5.4pt; height:21.6pt"> <p class="MsoNormal"><span lang="EN-US">ID Number:</span></p></td><td width="342" valign="bottom" style="width:256.75pt;border:none;border-bottom: solid windowtext 1.0pt;padding:0cm 5.4pt 0cm 5.4pt;height:21.6pt"> <p class="MsoNormal"><span lang="EN-US">${value.id_number}</span></p></td></tr><tr height="0"> <td width="153" style="border:none"></td><td width="186" style="border:none"></td><td width="0" style="border:none"></td><td width="120" style="border:none"></td><td width="248" style="border:none"></td></tr></tbody></table> <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p><table class="MsoNormalTable" border="1" cellspacing="0" cellpadding="0" width="100%" style="width:100.0%;border-collapse:collapse;border:none"> <tbody><tr style="page-break-inside:avoid"> <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt; padding:3.6pt 5.75pt 3.6pt 5.75pt"> <h1><span lang="EN-US">Date</span></h1> </td><td width="236" valign="top" style="width:177.2pt;border:solid windowtext 1.0pt; border-left:none;padding:3.6pt 5.75pt 3.6pt 5.75pt"> <h1><span lang="EN-US">Start Time</span></h1> </td><td width="217" valign="top" style="width:163.0pt;border:solid windowtext 1.0pt; border-left:none;padding:3.6pt 5.75pt 3.6pt 5.75pt"> <h1><span lang="EN-US">End Time</span></h1> </td><td width="260" valign="top" style="width:194.7pt;border:solid windowtext 1.0pt; border-left:none;padding:3.6pt 5.75pt 3.6pt 5.75pt"> <h1><span lang="EN-US">Total Hrs.</span></h1> </td></tr>
                    <tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                    border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '1' : '16'}</span></p>
                    </td>

                    `



                                    if (range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) {

                                        template +=



                    `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`



                                        _.find(value.attendances, function (o) {
                                            return vm.checkTime('started_at', o, '01', '16')
                                        }) ?


                                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                                return vm.checkTime('started_at', o, '01', '16')
                                            }).started_at.split(' ')[1]) : ''

                                        template +=


                    `</span></p></td>`
                    }
            else
                {
                    if (vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '01', '16')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '01', '16')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '01', '16')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '01', '16')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '01', '16')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '01', '16')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }

                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '01', '16')) ? (totals += vm.totalHours(value.attendances, '01', '16'), vm.totalHours(value.attendances, '01', '16').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`


                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '2' : '17'}</span></p>
                </td>

                    `

                if (range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '02', '17')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '02', '17')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '02', '17')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '02', '17')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '02', '17')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '02', '17')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '02', '17')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '02', '17')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '02', '17')) ? (totals += vm.totalHours(value.attendances, '02', '17'), vm.totalHours(value.attendances, '02', '17').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`


                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '3' : '18'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '03', '18')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '03', '18')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '03', '18')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '03', '18')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '03', '18')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '03', '18')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '03', '18')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '03', '18')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '03', '18')) ? (totals += vm.totalHours(value.attendances, '03', '18'), vm.totalHours(value.attendances, '03', '18').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`


                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '4' : '19'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '04', '19')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '04', '19')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '04', '19')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '04', '19')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '04', '19')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '04', '19')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '04', '19')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '04', '19')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '04', '19')) ? (totals += vm.totalHours(value.attendances, '04', '19'), vm.totalHours(value.attendances, '04', '19').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`


                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '5' : '20'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '05', '20')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '05', '20')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '05', '20')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '05', '20')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '05', '20')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '05', '20')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '05', '20')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '05', '20')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '05', '20')) ? (totals += vm.totalHours(value.attendances, '05', '20'), vm.totalHours(value.attendances, '05', '20').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`

                //---06----
                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '6' : '21'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '06', '21')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '06', '21')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '06', '21')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '06', '21')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '06', '21')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '06', '21')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '06', '21')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '06', '21')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '06', '21')) ? (totals += vm.totalHours(value.attendances, '06', '21'), vm.totalHours(value.attendances, '06', '21').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`
                //--07--


                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '7' : '22'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '07', '22')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '07', '22')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '07', '22')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '07', '22')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '07', '22')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '07', '22')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22
                    ).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '07', '22')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '07', '22')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '07', '22')) ? (totals += vm.totalHours(value.attendances, '07', '22'), vm.totalHours(value.attendances, '07', '22').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`

                //---08

                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '8' : '23'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '08', '23')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '08', '23')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '08', '23')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '08', '23')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '08', '23')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '08', '23')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23
                    ).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '08', '23')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '08', '23')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '08', '23')) ? (totals += vm.totalHours(value.attendances, '08', '23'), vm.totalHours(value.attendances, '08', '23').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`
                //----9

                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '9' : '24'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '09', '24')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '09', '24')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '09', '24')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '09', '24')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '09', '24')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '09', '24')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24
                    ).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '09', '24')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '09', '24')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '09', '24')) ? (totals += vm.totalHours(value.attendances, '09', '24'), vm.totalHours(value.attendances, '09', '24').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`
                //----10

                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '10' : '25'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '10', '25')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '10', '25')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '10', '25')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '10', '25')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '10', '25')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '10', '25')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25
                    ).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '10', '25')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '10', '25')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '10', '25')) ? (totals += vm.totalHours(value.attendances, '10', '25'), vm.totalHours(value.attendances, '10', '25').toFixed(2)) : '')}</span></p>
    </td>
    </tr>`

                //-----11

                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '11' : '26'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '11', '26')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '11', '26')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '11', '26')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '11', '26')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '11', '26')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '11', '26')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26
                    ).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '11', '26')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '11', '26')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '11', '26')) ? (totals += vm.totalHours(value.attendances, '11', '26'), vm.totalHours(value.attendances, '11', '26').toFixed(2)) : '')}</span></p>`

                //----12

                template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${range == '0' ? '12' : '27'}</span></p>
                </td>
                    `

                if (range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) {

                    template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                    _.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '12', '27')
                    }) ?


                        template += vm.tConvert(_.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '12', '27')
                        }).started_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27).getDay() === 0)) {
                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '12', '27')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '12', '27')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ` <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                    }
                }

                if (range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) {

                    template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                    _.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '12', '27')
                    }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '12', '27')
                    }).stopped_at.split(' ')[1]) : ''

                    template += `</span></p></td>`
                } else {
                    if (vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27
                    ).getDay() === 0)) {
                        template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '12', '27')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '12', '27')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        template += ``
                    }
                }
                template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '12', '27')) ? (totals += vm.totalHours(value.attendances, '12', '27'), vm.totalHours(value.attendances, '12', '27').toFixed(2)) : '')}</span></p>`

                //---13
                if (range == "0" || 28 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
                    template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${(range == '0' ? '13' : ((28 <= new Date(vm.year, vm.month + 1, 0).getDate()) ? '28' : ''))}</span></p>
                </td>
                    `

                    if (range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) {

                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '13', '28')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '13', '28')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28).getDay() === 0)) {
                            template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                            _.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '13', '28')
                            }) ?


                                template += vm.tConvert(_.find(value.attendances, function (o) {
                                    return vm.checkTime('started_at', o, '13', '28')
                                }).started_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ` <td width="454" colspan="2" valign="top" style="width:13.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                        }
                    }

                    if (range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) {

                        template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '13', '28')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '13', '28')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28
                        ).getDay() === 0)) {
                            template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                            _.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '13', '28')
                            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '13', '28')
                            }).stopped_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ``
                        }
                    }
                    template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '13', '28')) ? (totals += vm.totalHours(value.attendances, '13', '28'), vm.totalHours(value.attendances, '13', '28').toFixed(2)) : '')}</span></p>`
                }

                //---14
                if (range == "0" || 29 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
                    template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${(range == '0' ? '14' : ((29 <= new Date(vm.year, vm.month + 1, 0).getDate()) ? '29' : ''))}</span></p>
                </td>
                    `

                    if (range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) {

                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '14', '29')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '14', '29')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29).getDay() === 0)) {
                            template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                            _.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '14', '29')
                            }) ?


                                template += vm.tConvert(_.find(value.attendances, function (o) {
                                    return vm.checkTime('started_at', o, '14', '29')
                                }).started_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ` <td width="454" colspan="2" valign="top" style="width:13.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                        }
                    }

                    if (range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) {

                        template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '14', '29')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '14', '29')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29
                        ).getDay() === 0)) {
                            template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                            _.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '14', '29')
                            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '14', '29')
                            }).stopped_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ``
                        }
                    }
                    template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '14', '29')) ? (totals += vm.totalHours(value.attendances, '14', '29'), vm.totalHours(value.attendances, '14', '29').toFixed(2)) : '')}</span></p>`

                }
                //----15
                if (range == "0" || 30 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
                    template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${(range == '0' ? '15' : ((30 <= new Date(vm.year, vm.month + 1, 0).getDate()) ? '30' : ''))}</span></p>
                </td>
                    `

                    if (range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) {

                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '15', '30')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '15', '30')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30).getDay() === 0)) {
                            template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                            _.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '15', '30')
                            }) ?


                                template += vm.tConvert(_.find(value.attendances, function (o) {
                                    return vm.checkTime('started_at', o, '15', '30')
                                }).started_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ` <td width="454" colspan="2" valign="top" style="width:13.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                        }
                    }

                    if (range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) {

                        template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '15', '30')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '15', '30')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30
                        ).getDay() === 0)) {
                            template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                            _.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '15', '30')
                            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '15', '30')
                            }).stopped_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ``
                        }
                    }
                    template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '15', '30')) ? (totals += vm.totalHours(value.attendances, '15', '30'), vm.totalHours(value.attendances, '15', '30').toFixed(2)) : '')}</span></p>`
                }
                //----16
                if (31 <= new Date(vm.year, vm.month + 1, 0).getDate()) {
                    template += `<tr style="page-break-inside:avoid;height:10.8pt">

                    <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
                border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">${(range == '0' ? '' : ((31 <= new Date(vm.year, vm.month + 1, 0).getDate()) ? '31' : ''))}</span></p>
                </td>
                    `

                    if (range == '0' ? new Date(vm.year, vm.month, 0).getDay() !== 0 : new Date(vm.year, vm.month, 31).getDay() !== 0) {

                        template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                <p class="MsoNormal"><span lang="EN-US">`
                        _.find(value.attendances, function (o) {
                            return vm.checkTime('started_at', o, '00', '31')
                        }) ?


                            template += vm.tConvert(_.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '00', '31')
                            }).started_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? new Date(vm.year, vm.month, 0).getDay() === 0 : new Date(vm.year, vm.month, 31).getDay() === 0)) {
                            template += `<td width="236" valign="top" style="width:177.2pt;border-top:none;border-left:
                    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
                    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
                    <p class="MsoNormal"><span lang="EN-US">`
                            _.find(value.attendances, function (o) {
                                return vm.checkTime('started_at', o, '00', '31')
                            }) ?


                                template += vm.tConvert(_.find(value.attendances, function (o) {
                                    return vm.checkTime('started_at', o, '00', '31')
                                }).started_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ` <td width="454" colspan="2" valign="top" style="width:13.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">DAYOFF</span></p>
    </td>`
                        }
                    }

                    if (range == '0' ? new Date(vm.year, vm.month, 0).getDay() !== 0 : new Date(vm.year, vm.month, 31).getDay() !== 0) {

                        template += ` <td width="217" valign="top" style="width:163.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`
                        _.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '00', '31')
                        }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                            return vm.checkTime('stopped_at', o, '00', '31')
                        }).stopped_at.split(' ')[1]) : ''

                        template += `</span></p></td>`
                    } else {
                        if (vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? new Date(vm.year, vm.month, 0).getDay() === 0 : new Date(vm.year, vm.month, 31
                        ).getDay() === 0)) {
                            template += ` <td width="217" valign="top" style="width:173.0pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">`

                            _.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '00', '31')
                            }) ? template += vm.tConvert(_.findLast(value.attendances, function (o) {
                                return vm.checkTime('stopped_at', o, '00', '31')
                            }).stopped_at.split(' ')[1]) : ''

                            template += `</span></p></td>`
                        } else {
                            template += ``
                        }
                    }
                    template += `<td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">${(!isNaN(vm.totalHours(value.attendances, '00', '31')) ? (totals += vm.totalHours(value.attendances, '00', '31'), vm.totalHours(value.attendances, '00', '31').toFixed(2)) : '')}</span></p>`
                }

                template += `<tr style="page-break-inside:avoid;height:10.8pt">
        <td width="198" valign="top" style="width:148.6pt;border:solid windowtext 1.0pt;
    border-top:none;padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>
    </td>
    <td width="454" colspan="2" valign="top" style="width:12.0cm;border-top:none;
    border-left:none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="MsoNormal"><span lang="EN-US"></span></p>
    </td>
    <td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt;height:10.8pt">
    <p class="Amount"><span lang="EN-US">&nbsp;</span></p>
    </td>
    </tr>
    <tr style="page-break-inside:avoid">
        <td width="198" valign="top" style="width:148.6pt;border:none;padding:3.6pt 5.75pt 3.6pt 5.75pt">
        <p class="MsoNormal" align="right" style="text-align:right"><span lang="EN-US">&nbsp;</span></p>
    </td>
    <td width="236" valign="top" style="width:177.2pt;border:none;padding:3.6pt 5.75pt 3.6pt 5.75pt">
        <p class="MsoNormal" align="right" style="text-align:right"><span lang="EN-US">&nbsp;</span></p>
    </td>
    <td width="217" valign="top" style="width:163.0pt;border:none;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt">
    <h2><span lang="EN-US">Totals</span></h2>
    </td>
    <td width="260" valign="top" style="width:194.7pt;border-top:none;border-left:
    none;border-bottom:solid windowtext 1.0pt;border-right:solid windowtext 1.0pt;
    padding:3.6pt 5.75pt 3.6pt 5.75pt">
    <p class="Amount"><span lang="EN-US">${!isNaN(totals) ? totals.toFixed(2) : 0} hrs.</span></p>
    </td>
    </tr>
    </tbody></table>

    <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>

    <p class="MsoNormal"><span lang="EN-US">&nbsp;</span></p>

    </div>`
                if (!breaks) {
                    template += '<p style="page-break-before: always" >'

                }

                template += `</body></html>
`
            }
    )
    vm.attendancePrint += template

    if (index + 1 === vm.form.user_id.length) {
        let newWin = window.open("");

        newWin.document.write(vm.attendancePrint);
        newWin.focus();
        // device detection
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
            || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

            newWin.print();
        } else {
            newWin.print()
            newWin.close()
        }

        vm.attendancePrint = ''
    }

    },
    saveAsXml(data, events, leaves, range, i)
    {
        var regDay = 0, lwp = 0, late = 0, ut = 0, loa = 0, regHoliday = 0, specialHoliday = 0, restDay = 0,
            overTime25 = 0, overTime30 = 0, yumed30 = 0, yumed = 0, time = [], start_at = '', stop_at = '', clate = 0,
            cut = 0
        var vm = this
        var date = new Date

        var $month = parseInt(vm.month)

        _.forEach(data, function (value) {
            var template = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
xmlns:o="urn:schemas-microsoft-com:office:office"
xmlns:x="urn:schemas-microsoft-com:office:excel"
xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
xmlns:html="http://www.w3.org/TR/REC-html40">
<DocumentProperties xmlns="urn:schemas-microsoft-com:office:office">
<Author>Edward Lance Lorilla</Author>
<LastAuthor>Edward Lance Lorilla</LastAuthor>
<LastPrinted>2019-08-09T15:05:57Z</LastPrinted>
<Created>2019-07-25T01:17:51Z</Created>
<LastSaved>2019-08-10T14:58:45Z</LastSaved>
<Version>16.00</Version>
</DocumentProperties>
<OfficeDocumentSettings xmlns="urn:schemas-microsoft-com:office:office">
<AllowPNG/>
</OfficeDocumentSettings>
<ExcelWorkbook xmlns="urn:schemas-microsoft-com:office:excel">
<WindowHeight>11160</WindowHeight>
<WindowWidth>20730</WindowWidth>
<WindowTopX>32767</WindowTopX>
<WindowTopY>32767</WindowTopY>
<ProtectStructure>False</ProtectStructure>
<ProtectWindows>False</ProtectWindows>
</ExcelWorkbook>
<Styles>
<Style ss:ID="Default" ss:Name="Normal">
<Alignment ss:Vertical="Bottom"/>
<Borders/>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="11" ss:Color="#000000"/>
<Interior/>
<NumberFormat/>
<Protection/>
</Style>
<Style ss:ID="s16" ss:Name="Comma">
<NumberFormat ss:Format="_-* #,##0.00_-;-* #,##0.00_-;_-* &quot;-&quot;??_-;_-@_-"/>
</Style>
<Style ss:ID="m3031143660512">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="m3031143660552">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="m3031143660572">
<Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="m3031143660592" ss:Parent="s16">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="m3031143660612">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s17">
<Alignment ss:Vertical="Center"/>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s18">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s19">
<Alignment ss:Vertical="Center"/>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000"/>
</Style>
<Style ss:ID="s20">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s21">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s22">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s23">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s24">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
</Style>
<Style ss:ID="s25">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s26">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="11" ss:Color="#000000"
ss:Bold="1"/>
</Style>
<Style ss:ID="s27">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s28">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s29">
<Alignment ss:Vertical="Center" ss:WrapText="1"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s30">
<Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s31">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="11" ss:Color="#000000"
ss:Bold="1"/>
</Style>
<Style ss:ID="s32">
<Alignment ss:Vertical="Center"/>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Size="11" ss:Color="#000000"
ss:Bold="1"/>
</Style>
<Style ss:ID="s33">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s34">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s35">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s36">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s37">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s38">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s39">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s40">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="0"/>
</Style>
<Style ss:ID="s41">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="Fixed"/>
</Style>
<Style ss:ID="s42">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="Fixed"/>
</Style>
<Style ss:ID="s43">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
</Style>
<Style ss:ID="s44">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
</Style>
<Style ss:ID="s45">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
<NumberFormat ss:Format="0%"/>
</Style>
<Style ss:ID="s46">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
<NumberFormat ss:Format="0%"/>
</Style>
<Style ss:ID="s47">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s48" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s49" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s50">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s51">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s52">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss"/>
<NumberFormat ss:Format="Fixed"/>
</Style>
<Style ss:ID="s53">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
</Style>
<Style ss:ID="s54">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="Fixed"/>
</Style>
<Style ss:ID="s55">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s56">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s57">
<Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s58">
<Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s59">
<Alignment ss:Horizontal="Left" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s60" ss:Parent="s16">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat/>
</Style>
<Style ss:ID="s61">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s62">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
<NumberFormat ss:Format="0%"/>
</Style>
<Style ss:ID="s63">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
<NumberFormat ss:Format="0%"/>
</Style>
<Style ss:ID="s64" ss:Parent="s16">
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s65">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
</Style>
<Style ss:ID="s66" ss:Parent="s16">
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s67">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss"/>
<NumberFormat ss:Format="0"/>
</Style>
<Style ss:ID="s68">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s69">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s70" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s71">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s72">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s73" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s74" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
<Interior ss:Color="#D9D9D9" ss:Pattern="Solid"/>
</Style>
<Style ss:ID="s75">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s76">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s77" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s78" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
<NumberFormat ss:Format="#,##0.00;-#,##0.00"/>
</Style>
<Style ss:ID="s79">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#FF0000" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s80">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s81">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
</Style>
<Style ss:ID="s82">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<NumberFormat ss:Format="0"/>
</Style>
<Style ss:ID="s83" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#C00000" ss:Bold="1"/>
</Style>
<Style ss:ID="s84">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s85">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s86" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="@"/>
</Style>
<Style ss:ID="s87" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Bold="1"/>
<NumberFormat ss:Format="0"/>
</Style>
<Style ss:ID="s88">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s89">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s90" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#C00000" ss:Bold="1"/>
</Style>
<Style ss:ID="s91" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s92">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s93">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s94" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s95" ss:Parent="s16">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1"/>
<Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="2"/>
<Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
<Style ss:ID="s96">
<Alignment ss:Vertical="Center"/>
<Borders>
<Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/>
</Borders>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000"/>
</Style>
<Style ss:ID="s113">
<Alignment ss:Horizontal="Center" ss:Vertical="Center"/>
<Font ss:FontName="Calibri" x:Family="Swiss" ss:Color="#000000" ss:Bold="1"/>
</Style>
</Styles>
<Worksheet ss:Name="Sheet1">
<Table ss:ExpandedColumnCount="17" ss:ExpandedRowCount="31" x:FullColumns="1"
x:FullRows="1" ss:DefaultRowHeight="15">
<Row>
<Cell ss:MergeAcross="15" ss:StyleID="s113"/>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s17"><Data ss:Type="String">NAME : ${value.name ? value.name : ''}</Data></Cell>
<Cell ss:StyleID="s18"/>
<Cell ss:StyleID="s18"/>
<Cell ss:StyleID="s18"/>
<Cell ss:StyleID="s18"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s20"><Data ss:Type="String">Payroll Period:</Data></Cell>
<Cell ss:StyleID="s21"/>
<Cell ss:StyleID="s22"/>
<Cell ss:MergeAcross="2" ss:StyleID="m3031143660552"><Data ss:Type="String">${vm.monthNames[$month]} ${vm.range == '0' ? '1-15' : '16-' + (new Date(vm.year, vm.month + 1, 0).getDate())}, ${vm.year}</Data></Cell>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s23"><Data ss:Type="String">Date</Data></Cell>
<Cell ss:StyleID="s24"><Data ss:Type="String">Time</Data></Cell>
<Cell ss:StyleID="s24"/>
<Cell ss:MergeAcross="4" ss:StyleID="m3031143660572"><Data ss:Type="String">Basic Pay</Data></Cell>
<Cell ss:StyleID="s20"><Data ss:Type="String">REGULAR</Data></Cell>
<Cell ss:StyleID="s25"><Data ss:Type="String">Special</Data></Cell>
<Cell ss:StyleID="s26"><Data ss:Type="String">Rest</Data></Cell>
<Cell ss:StyleID="s21"><Data ss:Type="String">Monthly Rate</Data></Cell>
<Cell ss:StyleID="s22"/>
<Cell ss:MergeAcross="2" ss:StyleID="m3031143660592"><Data ss:Type="Number">${value.salary ? value.salary : 0}</Data></Cell>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s27"/>
<Cell ss:StyleID="s28"><Data ss:Type="String">In </Data></Cell>
<Cell ss:StyleID="s23"><Data ss:Type="String">Out</Data></Cell>
<Cell ss:StyleID="s29"><Data ss:Type="String">Reg Day</Data></Cell>
<Cell ss:StyleID="s30"><Data ss:Type="String">LWP</Data></Cell>
<Cell ss:StyleID="s23"><Data ss:Type="String">Late</Data></Cell>
<Cell ss:StyleID="s23"><Data ss:Type="String">UT</Data></Cell>
<Cell ss:StyleID="s27"><Data ss:Type="String">L.O.A</Data></Cell>
<Cell ss:StyleID="s31"><Data ss:Type="String">Holiday </Data></Cell>
<Cell ss:StyleID="s32"><Data ss:Type="String">Holiday </Data></Cell>
<Cell ss:StyleID="s32"><Data ss:Type="String">Pay</Data></Cell>
<Cell ss:StyleID="s33"><Data ss:Type="String">Overtime</Data></Cell>
<Cell ss:StyleID="s22"/>
<Cell ss:StyleID="s34"><Data ss:Type="String">Pay Computation</Data></Cell>
<Cell ss:StyleID="s35"/>
<Cell ss:StyleID="s35"/>
<Cell ss:StyleID="s36"/>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s37"/>
<Cell ss:StyleID="s38"/>
<Cell ss:StyleID="s39"/>
<Cell ss:StyleID="s40"/>
<Cell ss:StyleID="s41"/>
<Cell ss:StyleID="s41"/>
<Cell ss:StyleID="s41"/>
<Cell ss:StyleID="s42"/>
<Cell ss:StyleID="s43"/>
<Cell ss:StyleID="s43"/>
<Cell ss:StyleID="s44"/>
<Cell ss:StyleID="s45"><Data ss:Type="Number">0.25</Data></Cell>
<Cell ss:StyleID="s46"><Data ss:Type="Number">0.3</Data></Cell>
<Cell ss:StyleID="s47"><Data ss:Type="String">Basic Pay + COLA</Data></Cell>
<Cell ss:StyleID="s38"/>
<Cell ss:StyleID="s48"/>
<Cell ss:StyleID="s49"><Data ss:Type="Number">${value.salary ? value.salary / 2 : 0}</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s50"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">01</Font>' : '<Font html:Color="#FF0000">16</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) {

                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '01', '16')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '01', '16')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '01', '16')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '01', '16')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '01', '16') && !vm.checkUnderTime(value.attendances, '01', '16', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '01', '16', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '01', '16')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '01', '16')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '01', '16')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '01', '16')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '01', '16') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 1).getDay() !== 0 : new Date(vm.year, vm.month, 16).getDay() !== 0) && vm.checkLeave(leaves, '01', '16')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 1).getDay() === 0 : new Date(vm.year, vm.month, 16).getDay()) === 0 && vm.checkLeave(leaves, '01', '16')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 1, 16) && !vm.checkLeave(leaves, '01', '16') && vm.checkLate(value.attendances, '01', '16', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '01', '16')), Math.max(0, (8) - vm.totalHours(value.attendances, '01', '16')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '01', '16', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 1, 16) && vm.checkUnderTime(value.attendances, '01', '16', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '01', '16')), Math.max(0, (8) - vm.totalHours(value.attendances, '01', '16')), cut++) : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkUnderTime(value.attendances, '01', '16', value.time_in, value.time_out) && vm.checkSpecialHoliday(events, '01', '16') || vm.checkRegularHoliday(events, '01', '16') || vm.checkLeave(leaves, '01', '16')) && (((vm.checkStartEndTime(value.attendances, '01', '16') ? !vm.checkStartEndTime(value.attendances, '01', '16') : vm.checkStartEndTime(value.attendances, '01', '16')) && (range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() === 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '01', '16') && (range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() !== 0) && vm.checkRegularHoliday(events, '01', '16') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() !== 0) && vm.checkSpecialHoliday(events, '01', '16') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() === 0 ? '1' : '' : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() === 0) && vm.checkStartEndTime(value.attendances, '01', '16') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '01', '16') && range == '0' ? (vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() !== 0 && (vm.totalHours(value.attendances, '01', '16') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '01', '16') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 16).getDay() !== 0 && (vm.totalHours(value.attendances, '01', '16') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '01', '16') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '01', '16') && range == '0' ? (vm.checkDay(1) && new Date(vm.year, vm.month, 1).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '01', '16'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(16) && new Date(vm.year, vm.month, 16).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '01', '16'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s55"><Data ss:Type="String">Restday Pay</Data></Cell>
<Cell ss:StyleID="s38"/>
<Cell ss:StyleID="s48" ss:Formula="=R[16]C[-5]"><Data ss:Type="Number">1</Data></Cell>
<Cell ss:StyleID="s49" ss:Formula="=RC[-1]*381"><Data ss:Type="Number">381</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">02</Font>' : '<Font html:Color="#FF0000">17</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '02', '17')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '02', '17')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '02', '17')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '02', '17')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '02', '17') && !vm.checkUnderTime(value.attendances, '02', '17', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '02', '17', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '02', '17', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '02', '17')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '02', '17')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '02', '17')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '02', '17')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '02', '17') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 2).getDay() !== 0 : new Date(vm.year, vm.month, 17).getDay() !== 0) && vm.checkLeave(leaves, '02', '17')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 2).getDay() === 0 : new Date(vm.year, vm.month, 17).getDay()) === 0 && vm.checkLeave(leaves, '02', '17')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 2, 17) && !vm.checkLeave(leaves, '02', '17') && vm.checkLate(value.attendances, '02', '17', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '02', '17')), Math.max(0, (8) - vm.totalHours(value.attendances, '02', '17')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '02', '17', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 2, 17) && vm.checkUnderTime(value.attendances, '02', '17', value.time_in, value.time_out) ? (ut += (8) - vm.totalHours(value.attendances, '02', '17'), Math.max(0, (8) - vm.totalHours(value.attendances, '02', '17')), cut++) : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '02', '17') || vm.checkRegularHoliday(events, '02', '17') || vm.checkLeave(leaves, '02', '17')) && (((vm.checkStartEndTime(value.attendances, '02', '17') ? !vm.checkStartEndTime(value.attendances, '02', '17') : vm.checkStartEndTime(value.attendances, '02', '17')) && (range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() === 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '02', '17') && (range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() !== 0) && vm.checkRegularHoliday(events, '02', '17') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() !== 0) && vm.checkSpecialHoliday(events, '02', '17') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() === 0 ? '1' : '' : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() === 0) && vm.checkStartEndTime(value.attendances, '02', '17') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '02', '17') && range == '0' ? (vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() !== 0 && (vm.totalHours(value.attendances, '02', '17') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '02', '17') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 17).getDay() !== 0 && (vm.totalHours(value.attendances, '02', '17') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '02', '17') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '02', '17') && range == '0' ? (vm.checkDay(2) && new Date(vm.year, vm.month, 2).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '02', '17'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(17) && new Date(vm.year, vm.month, 17).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '02', '17'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s57"><Data ss:Type="String">L.O.A</Data></Cell>
<Cell ss:StyleID="s58"/>
<Cell ss:StyleID="s48" ss:Formula="=R[15]C[-8]"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s49" ss:Formula="=-(RC[-1]*381)"><Data ss:Type="Number">0</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">03</Font>' : '<Font html:Color="#FF0000">18</Font>'}</B></ss:Data></Cell>
`
            if (range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '03', '18')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '03', '18')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '03', '18')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '03', '18')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '03', '18') && !vm.checkUnderTime(value.attendances, '03', '18', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '03', '18', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '03', '18', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '03', '18')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '03', '18')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '03', '18')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '03', '18')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '03', '18') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }

            if ((range == '0' ? new Date(vm.year, vm.month, 3).getDay() !== 0 : new Date(vm.year, vm.month, 18).getDay() !== 0) && vm.checkLeave(leaves, '03', '18')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 3).getDay() === 0 : new Date(vm.year, vm.month, 18).getDay() === 0) && vm.checkLeave(leaves, '03', '18')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 3, 18) && !vm.checkLeave(leaves, '03', '18') && vm.checkLate(value.attendances, '03', '18', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '03', '18')), Math.max(0, (8) - vm.totalHours(value.attendances, '03', '18')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '03', '18', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 3, 18) && vm.checkUnderTime(value.attendances, '03', '18', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '03', '18')), Math.max(0, (8) - vm.totalHours(value.attendances, '03', '18')), cut++) : ''}</Data></Cell>
   <Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '03', '18') || vm.checkRegularHoliday(events, '03', '18') || vm.checkLeave(leaves, '03', '18')) && (((vm.checkStartEndTime(value.attendances, '03', '18') ? !vm.checkStartEndTime(value.attendances, '03', '18') : vm.checkStartEndTime(value.attendances, '03', '18')) && (range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() === 0 : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '03', '18') && (range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 : vm.checkDay(18)) && new Date(vm.year, vm.month, 18).getDay() !== 0 && vm.checkRegularHoliday(events, '03', '18') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 : vm.checkDay(18)) && new Date(vm.year, vm.month, 18).getDay() !== 0 && vm.checkSpecialHoliday(events, '03', '18') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(3) && vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() === 0 ? '1' : '' : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() === 0) && vm.checkStartEndTime(value.attendances, '03', '18') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '03', '18') && range == '0' ? (vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() !== 0 && (vm.totalHours(value.attendances, '03', '18') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '03', '18') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 18).getDay() !== 0 && (vm.totalHours(value.attendances, '03', '18') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '03', '18') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '03', '18') && range == '0' ? (vm.checkDay(3) && new Date(vm.year, vm.month, 3).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '03', '18'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(18) && new Date(vm.year, vm.month, 18).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '03', '18'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s59"><Data ss:Type="String">Undertime/(Late)</Data></Cell>
<Cell ss:StyleID="s58"/>
<Cell ss:StyleID="s48" ss:Formula="=R[14]C[-10]+R[14]C[-9]"><Data
ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s49" ss:Formula="=RC[-1]*(-381/8)"><Data ss:Type="Number">0</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">04</Font>' : '<Font html:Color="#FF0000">19</Font>'}</B></ss:Data></Cell>
`

            if (range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '04', '19')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '04', '19')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '04', '19')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '04', '19')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '04', '19') && !vm.checkUnderTime(value.attendances, '04', '19', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '04', '19', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '04', '19', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '04', '19')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '04', '19')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '04', '19')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '04', '19')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '04', '19') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 4).getDay() !== 0 : new Date(vm.year, vm.month, 19).getDay() !== 0) && vm.checkLeave(leaves, '04', '19')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 4).getDay() === 0 : new Date(vm.year, vm.month, 19).getDay() === 0) && vm.checkLeave(leaves, '04', '19')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 4, 19) && !vm.checkLeave(leaves, '04', '19') && vm.checkLate(value.attendances, '04', '19', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '04', '19')), Math.max(0, (8) - vm.totalHours(value.attendances, '04', '19')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '04', '19', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 4, 19) && vm.checkUnderTime(value.attendances, '04', '19', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '04', '19')), Math.max(0, (8) - vm.totalHours(value.attendances, '04', '19')), cut++) : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '04', '19') || vm.checkRegularHoliday(events, '04', '19') || vm.checkLeave(leaves, '04', '19')) && (((vm.checkStartEndTime(value.attendances, '04', '19') ? !vm.checkStartEndTime(value.attendances, '04', '19') : vm.checkStartEndTime(value.attendances, '04', '19')) && (range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() === 0 : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '04', '19') && (range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 : vm.checkDay(19)) && new Date(vm.year, vm.month, 19).getDay() !== 0 && vm.checkRegularHoliday(events, '04', '19') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 : vm.checkDay(19)) && new Date(vm.year, vm.month, 19).getDay() !== 0 && vm.checkSpecialHoliday(events, '04', '19') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() === 0 ? '1' : '' : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() === 0) && vm.checkStartEndTime(value.attendances, '04', '19') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '04', '19') && range == '0' ? (vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() !== 0 && (vm.totalHours(value.attendances, '04', '19') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '04', '19') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 19).getDay() !== 0 && (vm.totalHours(value.attendances, '04', '19') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '04', '19') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '04', '19') && range == '0' ? (vm.checkDay(4) && new Date(vm.year, vm.month, 4).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '04', '19'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(19) && new Date(vm.year, vm.month, 19).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '04', '19'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s59"><Data ss:Type="String">Holiday Pay</Data></Cell>
<Cell ss:StyleID="s58"/>
<Cell ss:StyleID="s48" ss:Formula="=R[13]C[-7]"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s49" ss:Formula="=RC[-1]*381"><Data ss:Type="Number">0</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">05</Font>' : '<Font html:Color="#FF0000">20</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '05', '20')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '05', '20')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '05', '20')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '05', '20')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s60"><Data ss:Type="Number">${!vm.checkLeave(leaves, '05', '20') && !vm.checkUnderTime(value.attendances, '05', '20', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '05', '20', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '05', '20', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '05', '20')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '05', '20')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '05', '20')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '05', '20')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '05', '20') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 5).getDay() !== 0 : new Date(vm.year, vm.month, 20).getDay() !== 0) && vm.checkLeave(leaves, '05', '20')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 5).getDay() === 0 : new Date(vm.year, vm.month, 20).getDay() === 0) && vm.checkLeave(leaves, '05', '20')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 5, 20) && !vm.checkLeave(leaves, '05', '20') && vm.checkLate(value.attendances, '05', '20', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '05', '20')), Math.max(0, (8) - vm.totalHours(value.attendances, '05', '20')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '05', '20', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 5, 20) && vm.checkUnderTime(value.attendances, '05', '20', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '05', '20')), Math.max(0, (8) - vm.totalHours(value.attendances, '05', '20')), cut++) : ''}</Data></Cell>
  <Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '05', '20') || vm.checkRegularHoliday(events, '05', '20') || vm.checkLeave(leaves, '05', '20')) && (((vm.checkStartEndTime(value.attendances, '05', '20') ? !vm.checkStartEndTime(value.attendances, '05', '20') : vm.checkStartEndTime(value.attendances, '05', '20')) && (range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() === 0 : vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '05', '20') && (range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 : vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 : vm.checkDay(20)) && new Date(vm.year, vm.month, 20).getDay() !== 0 && vm.checkRegularHoliday(events, '05', '20') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 : vm.checkDay(20)) && new Date(vm.year, vm.month, 20).getDay() !== 0 && vm.checkSpecialHoliday(events, '05', '20') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? (vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() === 0 ? '1' : '') : (vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() === 0) && vm.checkStartEndTime(value.attendances, '05', '20') ? (restDay++, '1') : '')}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '05', '20') && range == '0' ? (vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() !== 0 && (vm.totalHours(value.attendances, '05', '20') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '05', '20') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 20).getDay() !== 0 && (vm.totalHours(value.attendances, '05', '20') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '05', '20') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '05', '20') && range == '0' ? (vm.checkDay(5) && new Date(vm.year, vm.month, 5).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '05', '20'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(20) && new Date(vm.year, vm.month, 20).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '05', '20'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s59"><Data ss:Type="String">Special Holiday Pay</Data></Cell>
<Cell ss:StyleID="s58"/>
<Cell ss:StyleID="s48" ss:Formula="=R[12]C[-6]"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s49" ss:Formula="=(381*1.3)*RC[-1]"><Data ss:Type="Number">0</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">06</Font>' : '<Font html:Color="#FF0000">21</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '06', '21')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '06', '21')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '06', '21')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '06', '21')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '06', '21') && !vm.checkUnderTime(value.attendances, '06', '21', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '06', '21', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '06', '21')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '06', '21')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '06', '21')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '06', '21')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '06', '21') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }

            }
            if ((range == '0' ? new Date(vm.year, vm.month, 6).getDay() !== 0 : new Date(vm.year, vm.month, 21).getDay() !== 0) && vm.checkLeave(leaves, '06', '21')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 6).getDay() === 0 : new Date(vm.year, vm.month, 21).getDay() === 0) && vm.checkLeave(leaves, '06', '21')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 6, 21) && !vm.checkLeave(leaves, '06', '21') && vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '06', '21')), Math.max(0, (8) - vm.totalHours(value.attendances, '06', '21')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 6, 21) && vm.checkUnderTime(value.attendances, '06', '21', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '06', '21')), Math.max(0, (8) - vm.totalHours(value.attendances, '06', '21')), cut++) : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '06', '21') || vm.checkRegularHoliday(events, '06', '21') || vm.checkLeave(leaves, '06', '21')) && (((vm.checkStartEndTime(value.attendances, '06', '21') ? !vm.checkStartEndTime(value.attendances, '06', '21') : vm.checkStartEndTime(value.attendances, '06', '21')) && (range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() === 0 : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '06', '21') && (range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 : vm.checkDay(21)) && new Date(vm.year, vm.month, 21).getDay() !== 0 && vm.checkRegularHoliday(events, '06', '21') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 : vm.checkDay(21)) && new Date(vm.year, vm.month, 21).getDay() !== 0 && vm.checkSpecialHoliday(events, '06', '21') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() === 0 ? '1' : '' : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() === 0) && vm.checkStartEndTime(value.attendances, '06', '21') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '06', '21') && range == '0' ? (vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() !== 0 && (vm.totalHours(value.attendances, '06', '21') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '06', '21') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 21).getDay() !== 0 && (vm.totalHours(value.attendances, '06', '21') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '06', '21') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '06', '21') && range == '0' ? (vm.checkDay(6) && new Date(vm.year, vm.month, 6).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '06', '21'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(21) && new Date(vm.year, vm.month, 21).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '06', '21'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s61"><Data ss:Type="String">Overtime Pay</Data></Cell>
<Cell ss:StyleID="s38"/>
<Cell ss:StyleID="s48"/>
<Cell ss:StyleID="s49"/>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">07</Font>' : '<Font html:Color="#FF0000">22</Font>'}</B></ss:Data></Cell>
`
            if (range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '07', '22')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '07', '22')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '07', '22')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '07', '22')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '07', '22') && !vm.checkUnderTime(value.attendances, '07', '22', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '07', '22', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '07', '22', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '07', '22')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '07', '22')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '07', '22')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '07', '22')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '07', '22') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 7).getDay() !== 0 : new Date(vm.year, vm.month, 22).getDay() !== 0) && vm.checkLeave(leaves, '07', '22')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 7).getDay() === 0 : new Date(vm.year, vm.month, 22).getDay() === 0) && vm.checkLeave(leaves, '07', '22')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 7, 22) && !vm.checkLeave(leaves, '07', '22') && vm.checkLate(value.attendances, '07', '22', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '07', '22')), Math.max(0, (8) - vm.totalHours(value.attendances, '07', '22')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '07', '22', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 7, 22) && vm.checkUnderTime(value.attendances, '07', '22', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '07', '22')), Math.max(0, (8) - vm.totalHours(value.attendances, '07', '22')), cut++) : ''}</Data></Cell>
   <Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '07', '22') || vm.checkRegularHoliday(events, '07', '22') || vm.checkLeave(leaves, '07', '22')) && (((vm.checkStartEndTime(value.attendances, '07', '22') ? !vm.checkStartEndTime(value.attendances, '07', '22') : vm.checkStartEndTime(value.attendances, '07', '22')) && (range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() === 0 : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '07', '22') && (range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 : vm.checkDay(22)) && new Date(vm.year, vm.month, 22).getDay() !== 0 && vm.checkRegularHoliday(events, '07', '22') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 : vm.checkDay(22)) && new Date(vm.year, vm.month, 22).getDay() !== 0 && vm.checkSpecialHoliday(events, '07', '22') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() === 0 ? '1' : '' : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() === 0) && vm.checkStartEndTime(value.attendances, '07', '22') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '07', '22') && range == '0' ? (vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() !== 0 && (vm.totalHours(value.attendances, '07', '22') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '07', '22') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 22).getDay() !== 0 && (vm.totalHours(value.attendances, '07', '22') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '07', '22') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '07', '22') && range == '0' ? (vm.checkDay(7) && new Date(vm.year, vm.month, 7).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '07', '22'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(22) && new Date(vm.year, vm.month, 22).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '07', '22'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s62"><Data ss:Type="Number">0.25</Data></Cell>
<Cell ss:StyleID="s63"/>
<Cell ss:StyleID="s48"/>
<Cell ss:StyleID="s64"/>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">08</Font>' : '<Font html:Color="#FF0000">23</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '08', '23')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '08', '23')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '08', '23')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '08', '23')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s65"><Data ss:Type="Number">${!vm.checkLeave(leaves, '08', '23') && !vm.checkUnderTime(value.attendances, '08', '23', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '08', '23', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '08', '23', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '08', '23')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '08', '23')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '08', '23')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '08', '23')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '08', '23') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 8).getDay() !== 0 : new Date(vm.year, vm.month, 23).getDay() !== 0) && vm.checkLeave(leaves, '08', '23')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 8).getDay() === 0 : new Date(vm.year, vm.month, 23).getDay() === 0) && vm.checkLeave(leaves, '08', '23')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 8, 23) && !vm.checkLeave(leaves, '08', '23') && vm.checkLate(value.attendances, '08', '23', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '08', '23')), Math.max(0, (8) - vm.totalHours(value.attendances, '08', '23')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '08', '23', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 8, 23) && vm.checkUnderTime(value.attendances, '08', '23', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '08', '23')), Math.max(0, (8) - vm.totalHours(value.attendances, '08', '23')), cut++) : ''}</Data></Cell>
   <Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '08', '23') || vm.checkRegularHoliday(events, '08', '23') || vm.checkLeave(leaves, '08', '23')) && (((vm.checkStartEndTime(value.attendances, '08', '23') ? !vm.checkStartEndTime(value.attendances, '08', '23') : vm.checkStartEndTime(value.attendances, '08', '23')) && (range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() === 0 : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '08', '23') && (range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 : vm.checkDay(23)) && new Date(vm.year, vm.month, 23).getDay() !== 0 && vm.checkRegularHoliday(events, '08', '23') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 : vm.checkDay(23)) && new Date(vm.year, vm.month, 23).getDay() !== 0 && vm.checkSpecialHoliday(events, '08', '23') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() === 0 ? '1' : '' : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() === 0) && vm.checkStartEndTime(value.attendances, '08', '23') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '08', '23') && range == '0' ? (vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() !== 0 && (vm.totalHours(value.attendances, '08', '23') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '08', '23') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 23).getDay() !== 0 && (vm.totalHours(value.attendances, '08', '23') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '08', '23') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '08', '23') && range == '0' ? (vm.checkDay(8) && new Date(vm.year, vm.month, 8).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '08', '23'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(23) && new Date(vm.year, vm.month, 23).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '08', '23'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s62"><Data ss:Type="Number">0.3</Data></Cell>
<Cell ss:StyleID="s63"/>
<Cell ss:StyleID="s48" ss:Formula="=R[9]C[-3]"><Data ss:Type="Number"></Data></Cell>
<Cell ss:StyleID="s66" ss:Formula="=(381*1.3/8)*RC[-1]"><Data ss:Type="Number"></Data></Cell>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">09</Font>' : '<Font html:Color="#FF0000">24</Font>'}</B></ss:Data></Cell>
`
            if (range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '09', '24')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '09', '24')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '09', '24')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '09', '24')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s65"><Data ss:Type="Number">${!vm.checkLeave(leaves, '09', '24') && !vm.checkUnderTime(value.attendances, '09', '24', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '09', '24', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '09', '24', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '09', '24')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '09', '24')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '09', '24')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '09', '24')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '09', '24') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 9).getDay() !== 0 : new Date(vm.year, vm.month, 24).getDay() !== 0) && vm.checkLeave(leaves, '09', '24')) {

                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 9).getDay() === 0 : new Date(vm.year, vm.month, 24).getDay() === 0) && vm.checkLeave(leaves, '09', '24')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 9, 24) && !vm.checkLeave(leaves, '09', '24') && vm.checkLate(value.attendances, '09', '24', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '09', '24')), Math.max(0, (8) - vm.totalHours(value.attendances, '09', '24')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '09', '24', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 9, 24) && vm.checkUnderTime(value.attendances, '09', '24', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '09', '24')), Math.max(0, (8) - vm.totalHours(value.attendances, '09', '24')), cut++) : ''}</Data></Cell>
   <Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '09', '24') || vm.checkRegularHoliday(events, '09', '24') || vm.checkLeave(leaves, '09', '24')) && (((vm.checkStartEndTime(value.attendances, '09', '24') ? !vm.checkStartEndTime(value.attendances, '09', '24') : vm.checkStartEndTime(value.attendances, '09', '24')) && (range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() === 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '09', '24') && (range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() !== 0) && vm.checkRegularHoliday(events, '09', '24') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() !== 0) && vm.checkSpecialHoliday(events, '09', '24') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() === 0 ? '1' : '' : vm.checkDay(9) && new Date(vm.year, vm.month, 24).getDay() === 0) && vm.checkStartEndTime(value.attendances, '09', '24') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '09', '24') && range == '0' ? (vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() !== 0 && (vm.totalHours(value.attendances, '09', '24') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '09', '24') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 24).getDay() !== 0 && (vm.totalHours(value.attendances, '09', '24') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '09', '24') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '09', '24') && range == '0' ? (vm.checkDay(9) && new Date(vm.year, vm.month, 9).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '09', '24'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(24) && new Date(vm.year, vm.month, 24).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '09', '24'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s68"><Data ss:Type="String">Gross Pay</Data></Cell>
<Cell ss:StyleID="s21"/>
<Cell ss:StyleID="s69"/>
<Cell ss:StyleID="s70" ss:Formula="=SUM(R[-9]C:R[-1]C)"><Data ss:Type="Number"></Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">10</Font>' : '<Font html:Color="#FF0000">25</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '10', '25')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '10', '25')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '10', '25')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '10', '25')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s65"><Data ss:Type="Number">${!vm.checkLeave(leaves, '10', '25') && !vm.checkUnderTime(value.attendances, '10', '25', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '10', '25', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '10', '25', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '10', '25')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '10', '25')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '10', '25')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '10', '25')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '10', '25') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 10).getDay() !== 0 : new Date(vm.year, vm.month, 25).getDay() !== 0) && vm.checkLeave(leaves, '10', '25')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 10).getDay() === 0 : new Date(vm.year, vm.month, 25).getDay() === 0) && vm.checkLeave(leaves, '10', '25')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `

<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 10, 25) && !vm.checkLeave(leaves, '10', '25') && vm.checkLate(value.attendances, '10', '25', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '10', '25')), Math.max(0, (8) - vm.totalHours(value.attendances, '10', '25')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '10', '25', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 10, 25) && vm.checkUnderTime(value.attendances, '10', '25', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '10', '25')), Math.max(0, (8) - vm.totalHours(value.attendances, '10', '25')), cut++) : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '10', '25') || vm.checkRegularHoliday(events, '10', '25') || vm.checkLeave(leaves, '10', '25')) && (((vm.checkStartEndTime(value.attendances, '10', '25') ? !vm.checkStartEndTime(value.attendances, '10', '25') : vm.checkStartEndTime(value.attendances, '10', '25')) && (range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() === 0 : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '10', '25') && (range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 : vm.checkDay(25)) && new Date(vm.year, vm.month, 25).getDay() !== 0 && vm.checkRegularHoliday(events, '10', '25') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 : vm.checkDay(25)) && new Date(vm.year, vm.month, 25).getDay() !== 0 && vm.checkSpecialHoliday(events, '10', '25') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() === 0 ? '1' : '' : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() === 0) && vm.checkStartEndTime(value.attendances, '10', '25') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '10', '25') && range == '0' ? (vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() !== 0 && (vm.totalHours(value.attendances, '10', '25') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '10', '25') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 25).getDay() !== 0 && (vm.totalHours(value.attendances, '10', '25') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '10', '25') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '10', '25') && range == '0' ? (vm.checkDay(10) && new Date(vm.year, vm.month, 10).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '10', '25'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(25) && new Date(vm.year, vm.month, 25).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '10', '25'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s71"><Data ss:Type="String">Less: Deduction</Data></Cell>
<Cell ss:StyleID="s72"/>
<Cell ss:StyleID="s73"/>
<Cell ss:StyleID="s74"/>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">11</Font>' : '<Font html:Color="#FF0000">26</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) {

                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '11', '26')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '11', '26')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '11', '26')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '11', '26')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s60"><Data ss:Type="Number">${!vm.checkLeave(leaves, '11', '26') && !vm.checkUnderTime(value.attendances, '11', '26', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '11', '26', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '11', '26', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '11', '26')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '11', '26')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '11', '26')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '11', '26')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '11', '26') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 11).getDay() !== 0 : new Date(vm.year, vm.month, 26).getDay() !== 0) && vm.checkLeave(leaves, '11', '26')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 11).getDay() === 0 : new Date(vm.year, vm.month, 26).getDay() === 0) && vm.checkLeave(leaves, '11', '26')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 11, 26) && !vm.checkLeave(leaves, '11', '26') && vm.checkLate(value.attendances, '11', '26', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '11', '26')), Math.max(0, (8) - vm.totalHours(value.attendances, '11', '26')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '11', '26', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 11, 26) && vm.checkUnderTime(value.attendances, '11', '26', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '11', '26')), Math.max(0, (8) - vm.totalHours(value.attendances, '11', '26')), cut++) : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '11', '26') || vm.checkRegularHoliday(events, '11', '26') || vm.checkLeave(leaves, '11', '26')) && (((vm.checkStartEndTime(value.attendances, '11', '26') ? !vm.checkStartEndTime(value.attendances, '11', '26') : vm.checkStartEndTime(value.attendances, '11', '26')) && (range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() === 0 : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '11', '26') && (range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 : vm.checkDay(26)) && new Date(vm.year, vm.month, 26).getDay() !== 0 && vm.checkRegularHoliday(events, '11', '26') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 : vm.checkDay(26)) && new Date(vm.year, vm.month, 26).getDay() !== 0 && vm.checkSpecialHoliday(events, '11', '26') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() === 0 ? '1' : '' : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() === 0) && vm.checkStartEndTime(value.attendances, '11', '26') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '11', '26') && range == '0' ? (vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() !== 0 && (vm.totalHours(value.attendances, '11', '26') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '11', '26') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 26).getDay() !== 0 && (vm.totalHours(value.attendances, '11', '26') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '11', '26') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '11', '26') && range == '0' ? (vm.checkDay(11) && new Date(vm.year, vm.month, 11).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '11', '26'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(26) && new Date(vm.year, vm.month, 26).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '11', '26'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s75"><Data ss:Type="String">  SSS</Data></Cell>
<Cell ss:StyleID="s76"/>
<Cell ss:StyleID="s73"/>
<Cell ss:StyleID="s77"><Data ss:Type="Number">${value.sss_deduction ? value.sss_deduction : ''}</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">12</Font>' : '<Font html:Color="#FF0000">27</Font>'}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '12', '27')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '12', '27')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '12', '27')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '12', '27')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s65"><Data ss:Type="Number">${!vm.checkLeave(leaves, '12', '27') && !vm.checkUnderTime(value.attendances, '12', '27', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '12', '27', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '12', '27', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '12', '27')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '12', '27')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '12', '27')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '12', '27')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '12', '27') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 12).getDay() !== 0 : new Date(vm.year, vm.month, 27).getDay() !== 0) && vm.checkLeave(leaves, '12', '27')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 12).getDay() === 0 : new Date(vm.year, vm.month, 27).getDay() === 0) && vm.checkLeave(leaves, '12', '27')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkWeekEnd(range, 12, 27) && !vm.checkLeave(leaves, '12', '27') && vm.checkLate(value.attendances, '12', '27', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '12', '27')), Math.max(0, (8) - vm.totalHours(value.attendances, '12', '27')), clate++) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '12', '27', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 12, 27) && vm.checkUnderTime(value.attendances, '12', '27', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '12', '27')), Math.max(0, (8) - vm.totalHours(value.attendances, '12', '27')), cut++) : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${!(vm.checkSpecialHoliday(events, '12', '27') || vm.checkRegularHoliday(events, '12', '27') || vm.checkLeave(leaves, '12', '27')) && (((vm.checkStartEndTime(value.attendances, '12', '27') ? !vm.checkStartEndTime(value.attendances, '12', '27') : vm.checkStartEndTime(value.attendances, '12', '27')) && (range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() === 0 : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '12', '27') && (range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() !== 0))) ? (loa++, '1') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 : vm.checkDay(27)) && new Date(vm.year, vm.month, 27).getDay() !== 0 && vm.checkRegularHoliday(events, '12', '27') ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 : vm.checkDay(27)) && new Date(vm.year, vm.month, 27).getDay() !== 0 && vm.checkSpecialHoliday(events, '12', '27') ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() === 0 ? '1' : '' : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() === 0) && vm.checkStartEndTime(value.attendances, '12', '27') ? (restDay++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '12', '27') && range == '0' ? (vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() !== 0 && (vm.totalHours(value.attendances, '12', '27') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '12', '27') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 27).getDay() !== 0 && (vm.totalHours(value.attendances, '12', '27') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '12', '27') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '12', '27') && range == '0' ? (vm.checkDay(12) && new Date(vm.year, vm.month, 12).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '12', '27'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(27) && new Date(vm.year, vm.month, 27).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '12', '27'), overTime30 += yumed30, yumed30) : ''}</Data></Cell>
<Cell ss:StyleID="s75"><Data ss:Type="String">SSS Loan</Data></Cell>
<Cell ss:StyleID="s76"/>
<Cell ss:StyleID="s73"/>
<Cell ss:StyleID="s78"><Data ss:Type="Number">${value.sss_loan ? value.sss_loan : ''}</Data></Cell>
</Row>
<Row>`

            template += `<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">13</Font>' : (28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">28</Font>' : '')}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '13', '28')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '13', '28')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '13', '28')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '13', '28')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s65"><Data ss:Type="Number">${!vm.checkLeave(leaves, '13', '28') && !vm.checkUnderTime(value.attendances, '13', '28', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '13', '28', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '13', '28', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '13', '28')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '13', '28')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '13', '28')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '13', '28')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLate(value.attendances, '06', '21', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '13', '28')) ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 13).getDay() !== 0 : new Date(vm.year, vm.month, 28).getDay() !== 0) && vm.checkLeave(leaves, '13', '28')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 13).getDay() === 0 : new Date(vm.year, vm.month, 28).getDay() === 0) && vm.checkLeave(leaves, '13', '28')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkWeekEnd(range, 13, 28) && !vm.checkLeave(leaves, '13', '28') && vm.checkLate(value.attendances, '13', '28', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '13', '28')), Math.max(0, (8) - vm.totalHours(value.attendances, '13', '28')), clate++) : '') : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkLate(value.attendances, '13', '28', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 13, 28) && vm.checkUnderTime(value.attendances, '13', '28', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '13', '28')), Math.max(0, (8) - vm.totalHours(value.attendances, '13', '28')), cut++) : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!(vm.checkSpecialHoliday(events, '13', '28') || vm.checkRegularHoliday(events, '13', '28') || vm.checkLeave(leaves, '13', '28')) && (((vm.checkStartEndTime(value.attendances, '13', '28') ? !vm.checkStartEndTime(value.attendances, '13', '28') : vm.checkStartEndTime(value.attendances, '13', '28')) && (range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() === 0 : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '13', '28') && (range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() !== 0))) ? (loa++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 : vm.checkDay(28)) && new Date(vm.year, vm.month, 28).getDay() !== 0 && vm.checkRegularHoliday(events, '13', '28') ? (regHoliday++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 : vm.checkDay(28)) && new Date(vm.year, vm.month, 28).getDay() !== 0 && vm.checkSpecialHoliday(events, '13', '28') ? (specialHoliday++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() === 0 ? '1' : '' : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() === 0) && vm.checkStartEndTime(value.attendances, '13', '28') ? (restDay++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (vm.checkStartEndTime(value.attendances, '13', '28') && range == '0' ? (vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() !== 0 && (vm.totalHours(value.attendances, '13', '28') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '13', '28') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 28).getDay() !== 0 && (vm.totalHours(value.attendances, '13', '28') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '13', '28') - (8)), overTime25 += yumed, yumed) : 0)) : ''}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${28 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (vm.checkStartEndTime(value.attendances, '13', '28') && range == '0' ? (vm.checkDay(13) && new Date(vm.year, vm.month, 13).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '13', '28'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(28) && new Date(vm.year, vm.month, 28).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '13', '28'), overTime30 += yumed30, yumed30) : '') : ''}</Data></Cell>`

            template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660512"><Data ss:Type="String">HDMF Premiums</Data></Cell>
<Cell ss:StyleID="s73"/>
<Cell ss:StyleID="s77"><Data ss:Type="Number">${value.pagibig_loan ? value.pagibig_loan : ''}</Data></Cell>
</Row>
<Row>`

            template += `<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">14</Font>' : (29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">29</Font>' : '')}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) {
                template += `<Cell ss:StyleID="s79"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '14', '29')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '14', '29')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s79"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '14', '29')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '14', '29')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '14', '29') && !vm.checkUnderTime(value.attendances, '14', '29', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '14', '29', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '14', '29')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '14', '29')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '14', '29')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '14', '29')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '14', '29') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 14).getDay() !== 0 : new Date(vm.year, vm.month, 29).getDay() !== 0) && vm.checkLeave(leaves, '14', '29')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 14).getDay() === 0 : new Date(vm.year, vm.month, 29).getDay() === 0) && vm.checkLeave(leaves, '14', '29')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkWeekEnd(range, 14, 29) && !vm.checkLeave(leaves, '14', '29') && vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '14', '29')), Math.max(0, (8) - vm.totalHours(value.attendances, '14', '29')), clate++) : '') : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '14', '29', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 14, 29) && vm.checkUnderTime(value.attendances, '14', '29', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '14', '29')), Math.max(0, (8) - vm.totalHours(value.attendances, '14', '29')), cut++) : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!(vm.checkSpecialHoliday(events, '14', '29') || vm.checkRegularHoliday(events, '14', '29') || vm.checkLeave(leaves, '14', '29')) && (((vm.checkStartEndTime(value.attendances, '14', '29') ? !vm.checkStartEndTime(value.attendances, '14', '29') : vm.checkStartEndTime(value.attendances, '14', '29')) && (range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() === 0 : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '14', '29') && (range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() !== 0))) ? (loa++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 : vm.checkDay(29)) && new Date(vm.year, vm.month, 29).getDay() !== 0 && vm.checkRegularHoliday(events, '14', '29') ? (regHoliday++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 : vm.checkDay(29)) && new Date(vm.year, vm.month, 29).getDay() !== 0 && vm.checkSpecialHoliday(events, '14', '29') ? (specialHoliday++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() === 0 ? '1' : '' : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() === 0) && vm.checkStartEndTime(value.attendances, '14', '29') ? (restDay++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (vm.checkStartEndTime(value.attendances, '14', '29') && range == '0' ? (vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() !== 0 && (vm.totalHours(value.attendances, '14', '29') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '14', '29') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 29).getDay() !== 0 && (vm.totalHours(value.attendances, '14', '29') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '14', '29') - (8)), overTime25 += yumed, yumed) : 0)) : ''}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${29 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (vm.checkStartEndTime(value.attendances, '14', '29') && range == '0' ? (vm.checkDay(14) && new Date(vm.year, vm.month, 14).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '14', '29'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(29) && new Date(vm.year, vm.month, 29).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '14', '29'), overTime30 += yumed30, yumed30) : '') : ''}</Data></Cell>`

            template += `<Cell ss:StyleID="s80"><Data ss:Type="String">  HDMF</Data></Cell>
<Cell ss:StyleID="s76"/>
<Cell ss:StyleID="s73"/>
<Cell ss:StyleID="s77"><Data ss:Type="Number">${value.pagibig_deduction ? value.pagibig_deduction : ''}</Data></Cell>
</Row>
<Row>`

            template += `<Cell ss:StyleID="s56"><ss:Data ss:Type="String"
xmlns="http://www.w3.org/TR/REC-html40"><B>${range == '0' ? '<Font html:Color="#FF0000">15</Font>' : (30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">30</Font>' : '')}</B></ss:Data></Cell>`
            if (range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '15', '30')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '15', '30')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '15', '30')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '15', '30')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${!vm.checkLeave(leaves, '15', '30') && !vm.checkUnderTime(value.attendances, '15', '30', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '15', '30', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '15', '30', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '15', '30')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '15', '30')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '15', '30')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '15', '30')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '15', '30') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? new Date(vm.year, vm.month, 15).getDay() !== 0 : new Date(vm.year, vm.month, 30).getDay() !== 0) && vm.checkLeave(leaves, '15', '30')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? new Date(vm.year, vm.month, 15).getDay() === 0 : new Date(vm.year, vm.month, 30).getDay() === 0) && vm.checkLeave(leaves, '15', '30')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkWeekEnd(range, 15, 30) && !vm.checkLeave(leaves, '15', '30') && vm.checkLate(value.attendances, '15', '30', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '15', '30')), Math.max(0, (8) - vm.totalHours(value.attendances, '15', '30')), clate++) : '') : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkLate(value.attendances, '15', '30', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 15, 30) && vm.checkUnderTime(value.attendances, '15', '30', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '15', '30')), Math.max(0, (8) - vm.totalHours(value.attendances, '15', '30')), cut++) : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!(vm.checkSpecialHoliday(events, '15', '30') || vm.checkRegularHoliday(events, '15', '30') || vm.checkLeave(leaves, '15', '30')) && (((vm.checkStartEndTime(value.attendances, '15', '30') ? !vm.checkStartEndTime(value.attendances, '15', '30') : vm.checkStartEndTime(value.attendances, '15', '30')) && (range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() === 0 : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '15', '30') && (range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() !== 0))) ? (loa++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 : vm.checkDay(30)) && new Date(vm.year, vm.month, 30).getDay() !== 0 && vm.checkRegularHoliday(events, '15', '30') ? (regHoliday++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 : vm.checkDay(30)) && new Date(vm.year, vm.month, 30).getDay() !== 0 && vm.checkSpecialHoliday(events, '15', '30') ? (specialHoliday++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? ((range == '0' ? (vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() === 0 ? '1' : '') : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() === 0) && vm.checkStartEndTime(value.attendances, '15', '30') ? (restDay++, '1') : '') : ''}</Data></Cell>
<Cell ss:StyleID="s52"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (vm.checkStartEndTime(value.attendances, '15', '30') && range == '0' ? (vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() !== 0 && (vm.totalHours(value.attendances, '15', '30') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '15', '30') - (8)), overTime25 += yumed, yumed) : 0) : (new Date(vm.year, vm.month, 30).getDay() !== 0 && (vm.totalHours(value.attendances, '15', '30') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '15', '30') - (8)), overTime25 += yumed, yumed) : 0)) : ''}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${30 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (vm.checkStartEndTime(value.attendances, '15', '30') && range == '0' ? (vm.checkDay(15) && new Date(vm.year, vm.month, 15).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '15', '30'), overTime30 += yumed30, yumed30) : '') : vm.checkDay(30) && new Date(vm.year, vm.month, 30).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '15', '30'), overTime30 += yumed30, yumed30) : '') : ''}</Data></Cell>`

            template += `<Cell ss:StyleID="s80"><Data ss:Type="String">  PHIC</Data></Cell>
<Cell ss:StyleID="s76"/>
<Cell ss:StyleID="s48"/>
<Cell ss:StyleID="s49"><Data ss:Type="Number">${value.philhealth_deduction ? value.philhealth_deduction : ''}</Data></Cell>
</Row>
<Row>`

            template += `<Cell ss:StyleID="s56"><Data ss:Type="String">${range == '0' ? '<Font html:Color="#FF0000"></Font>' : (31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? '<Font html:Color="#FF0000">31</Font>' : '')}</Data></Cell>`
            if (range == '0' ? true : new Date(vm.year, vm.month, 31).getDay() !== 0) {
                template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '00', '31')
                }) ? vm.tConvert(_.find(value.attendances, function (o) {
                    return vm.checkTime('started_at', o, '00', '31')
                }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '00', '31')
                }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                    return vm.checkTime('stopped_at', o, '00', '31')
                }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s81"><Data ss:Type="Number">${!vm.checkLeave(leaves, '00', '31') && !vm.checkUnderTime(value.attendances, '00', '31', value.time_in, value.time_out) && !vm.checkLate(value.attendances, '00', '31', value.time_in, value.time_out) && (vm.checkStartEndTime(value.attendances, '00', '31', value.time_in, value.time_out)) ? (regDay++, '1') : ''}</Data></Cell>`
            } else {
                if (vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? new Date(vm.year, vm.month, 0).getDay() === 0 : new Date(vm.year, vm.month, 31).getDay() === 0)) {
                    template += `<Cell ss:StyleID="s51"><Data ss:Type="String">${_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '00', '31')
                    }) ? vm.tConvert(_.find(value.attendances, function (o) {
                        return vm.checkTime('started_at', o, '00', '31')
                    }).started_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s51"><Data ss:Type="String">${_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '00', '31')
                    }) ? vm.tConvert(_.findLast(value.attendances, function (o) {
                        return vm.checkTime('stopped_at', o, '00', '31')
                    }).stopped_at.split(' ')[1]) : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '00', '31') ? '' : ''}</Data></Cell>`
                } else {
                    template += `<Cell ss:MergeAcross="1" ss:StyleID="m3031143660612"><Data ss:Type="String">Dayoff</Data></Cell>
<Cell ss:StyleID="s60"/>`
                }
            }
            if ((range == '0' ? false : new Date(vm.year, vm.month, 31).getDay() !== 0) && vm.checkLeave(leaves, '00', '31')) {
                lwp++
                template += `<Cell ss:StyleID="s52"><Data ss:Type="Number">1</Data></Cell>`

            } else if ((range == '0' ? false : new Date(vm.year, vm.month, 31).getDay() === 0) && vm.checkLeave(leaves, '00', '31')) {
                template += `<Cell ss:StyleID="s52"/>`

            } else {
                template += `<Cell ss:StyleID="s52"/>`
            }
            template += `
<Cell ss:StyleID="s40"><Data ss:Type="Number">${31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkWeekEnd(range, 0, 31) && !vm.checkLeave(leaves, '00', '31') && vm.checkLate(value.attendances, '00', '31', value.time_in, value.time_out) ? (late += Math.max(0, (8) - vm.totalHours(value.attendances, '00', '31')), Math.max(0, (8) - vm.totalHours(value.attendances, '00', '31')), clate++) : '') : ''}</Data></Cell>
<Cell ss:StyleID="s40"><Data ss:Type="Number">${31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (!vm.checkLate(value.attendances, '00', '31', value.time_in, value.time_out) && !vm.checkWeekEnd(range, 0, 31) && vm.checkUnderTime(value.attendances, '00', '31', value.time_in, value.time_out) ? (ut += Math.max(0, (8) - vm.totalHours(value.attendances, '00', '31')), Math.max(0, (8) - vm.totalHours(value.attendances, '00', '31')), cut++) : '') : ''}</Data></Cell>
    <Cell ss:StyleID="s53"><Data ss:Type="Number">${31 <= new Date(vm.year, vm.month + 1, 0).getDate() ? (range !== '0' ? (!(vm.checkSpecialHoliday(events, '00', '31') || vm.checkRegularHoliday(events, '00', '31') || vm.checkLeave(leaves, '00', '31')) && ((vm.checkStartEndTime(value.attendances, '00', '31') ? !vm.checkStartEndTime(value.attendances, '00', '31') : vm.checkStartEndTime(value.attendances, '00', '31')) && (range == '0' ? vm.checkDay(0) && new Date(vm.year, vm.month, 0).getDay() === 0 : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() === 0)) || (!vm.checkStartEndTime(value.attendances, '00', '31') && (range == '0' ? vm.checkDay(0) && new Date(vm.year, vm.month, 0).getDay() !== 0 : vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() !== 0)) ? (loa++, '1') : '') : '') : ''}</Data></Cell>

<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? '' : (vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() !== 0) && vm.checkRegularHoliday(events, '0', '31')) ? (regHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? '' : (vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() !== 0) && vm.checkSpecialHoliday(events, '0', '31')) ? (specialHoliday++, '1') : ''}</Data></Cell>
<Cell ss:StyleID="s53"><Data ss:Type="Number">${(range == '0' ? '' : (vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() === 0) && vm.checkStartEndTime(value.attendances, '00', '31') ? (restDay++, '1') : 0)}</Data></Cell>
<Cell ss:StyleID="s41"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '00', '31') && range == '0' ? '' : (new Date(vm.year, vm.month, 31).getDay() !== 0 && (vm.totalHours(value.attendances, '00', '31') - (8) >= 1) ? (yumed = (vm.totalHours(value.attendances, '00', '31') - (8)), overTime25 += yumed, yumed) : 0)}</Data></Cell>
<Cell ss:StyleID="s54"><Data ss:Type="Number">${vm.checkStartEndTime(value.attendances, '00', '31') && range == '0' ? '' : (vm.checkDay(31) && new Date(vm.year, vm.month, 31).getDay() === 0 ? (yumed30 = vm.totalHours(value.attendances, '00', '31'), overTime30 += yumed30, yumed30) : 0)}</Data></Cell>`

            template += `<Cell ss:StyleID="s47"><Data ss:Type="String">Cash Advance</Data></Cell>
<Cell ss:StyleID="s38"/>
<Cell ss:StyleID="s83"/>
<Cell ss:StyleID="s49"><Data ss:Type="Number">0</Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s84"><Data ss:Type="String">Totals</Data></Cell>
<Cell ss:StyleID="s85"/>
<Cell ss:StyleID="s86"/>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-17]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s87" ss:Formula="=SUM(R[-16]C:R[-1]C)"><Data ss:Type="Number">0</Data></Cell>
<Cell ss:StyleID="s88"><Data ss:Type="String">Total Deduction</Data></Cell>
<Cell ss:StyleID="s89"/>
<Cell ss:StyleID="s90"/>
<Cell ss:StyleID="s91" ss:Formula="=SUM(R[-6]C:R[-1]C)"><Data ss:Type="Number"></Data></Cell>
</Row>
<Row ss:Height="15.75">
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"/>
<Cell ss:Index="14" ss:StyleID="s92"><Data ss:Type="String">Net Pay</Data></Cell>
<Cell ss:StyleID="s93"/>
<Cell ss:StyleID="s94"/>
<Cell ss:StyleID="s95" ss:Formula="=R[-9]C-R[-1]C"><Data ss:Type="Number"></Data></Cell>
</Row>
<Row>
<Cell ss:StyleID="s17"/>
<Cell ss:StyleID="s17"/>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s19"><Data ss:Type="String">Signature:</Data></Cell>
<Cell ss:StyleID="s19"/>
<Cell ss:StyleID="s96"/>
<Cell ss:StyleID="s96"/>
<Cell ss:StyleID="s19"/>
</Row>
<Row ss:Index="29">
<Cell ss:Index="3"><Data ss:Type="String">LWP=</Data></Cell>
<Cell><Data ss:Type="String">LEAVE WITH PAY</Data></Cell>
</Row>
<Row>
<Cell ss:Index="3"><Data ss:Type="String">UT</Data></Cell>
<Cell><Data ss:Type="String">UNDERTIME</Data></Cell>
</Row>
<Row>
<Cell ss:Index="3"><Data ss:Type="String">L.O.A</Data></Cell>
<Cell><Data ss:Type="String">LEAVE OF ABSENCE</Data></Cell>
</Row>
</Table>
<WorksheetOptions xmlns="urn:schemas-microsoft-com:office:excel">
<PageSetup>
<Layout x:Orientation="Landscape"/>
<Header x:Margin="0.3"/>
<Footer x:Margin="0.3"/>
<PageMargins x:Bottom="0.75" x:Left="0.7" x:Right="0.7" x:Top="0.75"/>
</PageSetup>
<FitToPage/>
<Print>
<ValidPrinterInfo/>
<HorizontalResolution>600</HorizontalResolution>
<VerticalResolution>600</VerticalResolution>
</Print>
<Selected/>
<DoNotDisplayZeros/>
<Panes>
<Pane>
<Number>3</Number>
<ActiveRow>17</ActiveRow>
<ActiveCol>21</ActiveCol>
</Pane>
</Panes>
<ProtectObjects>False</ProtectObjects>
<ProtectScenarios>False</ProtectScenarios>
</WorksheetOptions>
</Worksheet>
</Workbook>`

            if (!(vm.saveAs.id === 4 || vm.saveAs.id === 6 || vm.saveAs.id === 0)) {
                var wordTemplate = vm.saveAsWord(value, {
                    regDay,
                    lwp,
                    late,
                    ut,
                    loa,
                    regHoliday,
                    specialHoliday,
                    restDay,
                    overTime25,
                    overTime30,
                    clate,
                    cut
                }, vm.month, vm.year, vm.range == '0' ? '1-15' : ('16-' + new Date(vm.year, vm.month + 1, 0).getDate()), range, vm.monthNames[vm.month], false, events)
                var formData = new FormData();
                var blob = new Blob([vm.s2ab(vm.saveAs.name === 'word' && vm.saveAs.format === 'application/vnd.ms-word' ? vm.htmlBody(wordTemplate) : template)], {type: vm.saveAs.format});
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = `${value.name} ${vm.year}_${vm.monthNames[$month]}_${vm.range == '0' ? '1-15' : '16-' + (new Date(vm.year, vm.month + 1, 0).getDate())}${vm.saveAs.name === 'word' && vm.saveAs.format === 'application/vnd.ms-word' ? '.doc' : (vm.saveAs.id === 1 ? '.xml' : '.xls')}`;
                link.click();
                link.remove()
            } else {
                vm.print.push({
                    value: value,
                    obj: {
                        regDay,
                        lwp,
                        late,
                        ut,
                        loa,
                        regHoliday,
                        specialHoliday,
                        restDay,
                        overTime25,
                        overTime30,
                        clate,
                        cut
                    },
                    month: vm.month,
                    year: vm.year,
                    range: vm.range == '0' ? '1-15' : `16-${new Date(vm.year, vm.month + 1, 0).getDate()}`,
                    day: range,
                    monthName: vm.monthNames[vm.month],
                    break: (i + 1 !== vm.form.user_id.length),
                    events: events
                })


            }

            regDay = 0, lwp = 0, late = 0, ut = 0, loa = 0, regHoliday = 0, specialHoliday = 0, restDay = 0,
                overTime25 = 0, overTime30 = 0, yumed30 = 0, yumed = 0, clate = 0, cut = 0
        })


        if (i + 1 === vm.form.user_id.length) {
            vm.printDirectly()
        }


    }
    ,
    printDirectly()
    {
        var vm = this,
            print = JSON.parse(JSON.stringify(vm.print)),
            isMobile = false
        vm.manual = []
        if ((vm.saveAs.id === 4 || vm.saveAs.id === 6 || vm.saveAs.id === 0) && print) {
            var divToPrint = '';
            var i = 0
            var breaks = true
            new Promise((resolve) => {
                _.map(print, function (response) {
                    divToPrint += vm.saveAsWord(response.value, response.obj, response.month, response.year, response.range, response.day, response.monthName, breaks = !breaks, response.events)
                    if (vm.saveAs.id == 0) {
                        vm.manual.push({
                            value: response.value,
                            obj: response.obj,
                            month: response.month,
                            year: response.year,
                            range: response.range,
                            day: response.day,
                            monthName: response.monthName,
                            break: response.break,
                            events: response.events
                        })
                    }
                })


                resolve()
            }).then(() => {
                if (vm.saveAs.id === 4) {

                    let newWin = window.open("");

                    newWin.document.write(vm.htmlBody(divToPrint));

                    newWin.focus();
// device detection
                    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
                        || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {

                        newWin.print();
                    } else {
                        newWin.print()
                        newWin.close()
                    }
                } else if (vm.saveAs.id === 6) {
                    var formData = new FormData();
                    var blob = new Blob([vm.s2ab(vm.htmlBody(divToPrint, 'portrait'))], {type: vm.saveAs.format});
                    var link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = `${vm.year}_${vm.monthNames[vm.month]}_${vm.range == '0' ? '1-15' : '16-' + (new Date(vm.year, vm.month + 1, 0).getDate())}${vm.saveAs.name === 'word' && vm.saveAs.format === 'application/vnd.ms-word' ? '.doc' : (vm.saveAs.id === 1 ? '.xml' : '.xls')}`;
                    link.click();
                    link.remove()
                }

            })


        }

    }
    ,
    checkWeekEnd(range, start, end)
    {
        var vm = this
        return start != 0 || end == 31 ? (range == '0' ? new Date(vm.year, vm.month, start).getDay() === 0 : new Date(vm.year, vm.month, end).getDay() === 0) : false
    }
    ,
    tConvert(time)
    {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        time[4] = ''
        if (time.length > 1) { // If time format correct
            time = time.slice(1);  // Remove full string match value
            time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    ,
    s2ab(s)
    {
        var buf = new ArrayBuffer(s.length);
        var view = new Uint8Array(buf);
        for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
        return buf;
    }
    ,
    onCancel()
    {
        this.$router.push({name: 'view-leave'})
    }
    ,
    checkLeave(array, start, end)
    {
        var vm = this
        return _.find(array, function (o) {
            var date_due_for_return = new Date(o.date_due_for_return).getDate()
            var date_issued = new Date(o.date_issued).getDate()
            return (vm.checkDay(end) && date_issued <= end ? end <= date_due_for_return : false) || (date_issued <= start && vm.checkDay(start) ? start <= date_due_for_return : false)
        })
    }
    ,
    checkLoa(array, start, end)
    {
        var vm = this
        return (end <= new Date(vm.year, vm.month + 1, 0).getDate()) ? _.find(array, function (o) {
            return vm.checkTime('started_at', o, start, end)
        }) : false
    }
    ,
    checkRegularHoliday(array, start, end)
    {
        var vm = this
        return Boolean(_.find(array, function (o) {

            var end_date = new Date(o.end_date).getDate()
            var start_date = new Date(o.start_date).getDate()
            var isRegular = o.occurrence == "0"

            if (o.occurrence != "0") {
                return false
            }
            return (vm.checkDay(end) && start_date <= end ? end <= end_date : false) || (start_date <= start && vm.checkDay(start) ? start <= end_date : false)
        }))
    }
    ,
    checkSpecialHoliday(array, start, end)
    {
        var vm = this
        return array.length > 0 && _.findLast(array, function (o) {

            var end_date = new Date(o.end_date).getDate()
            var start_date = new Date(o.start_date).getDate()
            var isRegular = o.occurrence == "0"

            if (o.occurrence == "0") {
                return false
            }

            return (vm.checkDay(end) && start_date <= end ? end <= end_date : false) || (start_date <= start && vm.checkDay(start) ? start <= end_date : false)
        })
    }
    ,
    checkStartEndTime(array, start, end, time_in, time_out)
    {
        var vm = this
        return (_.find(array, function (o) {
            return vm.checkTime('started_at', o, start, end)
        }) || _.find(array, function (o) {
            return vm.checkTime('stopped_at', o, start, end)
        }))
    }
    ,
    totalHours(array, start, end)
    {
        var vm = this
        var totalHour = _.filter(array, function (o) {
            return vm.checkTime('started_at', o, start, end)
        })
        return totalHour.reduce((prev, curr) => {
            const value = Number(curr.timing);
            if (!isNaN(value)) {
                var consume_time_in = vm.timeStringToFloat(curr.started_at.slice(11, 16)) <= vm.timeStringToFloat('08:00') ? ((vm.timeStringToFloat('08:00') - vm.timeStringToFloat(curr.started_at.slice(11, 16))) * 3600) : 0

                return prev + Math.floor((parseInt(curr.timing - consume_time_in, 10)) / 3600);
            } else {
                return prev;
            }
        }, 0)
    }
    ,

    checkLate(array, start, end, time_in, time_out)
    {
        var vm = this,
            Attendancehours = 8
        return (_.find(array, function (o) {
            var consume_time_in = vm.timeStringToFloat(o.started_at.slice(11, 16))
            var time_out = _.findLast(array, function (obj) {
                return vm.checkTime('stopped_at', obj, start, end)
            })
            var consume_time_out = time_out ? vm.timeStringToFloat(time_out.stopped_at.slice(11, 16)) : 0
            var consumedTime = consume_time_out - consume_time_in

            return vm.checkTime('started_at', o, start, end) && consumedTime <= Attendancehours ? vm.timeStringToFloat(o.started_at.slice(11, 16)) > vm.timeStringToFloat(time_in) : false
        }))
    }
    ,
    checkDay(date)
    {
        var vm = this
        return new Date(vm.year, vm.month, date) <= new Date()
    }
    ,
    checkUnderTime(array, start, end, time_in, time_out)
    {
        var vm = this,
            Attendancehours = 8
        return (_.find(array, function (o) {
            var consume_time_in = vm.timeStringToFloat(o.started_at.slice(11, 16))
            var time_out = _.findLast(array, function (obj) {
                return vm.checkTime('stopped_at', obj, start, end)
            })
            var consume_time_out = time_out ? vm.timeStringToFloat(time_out.stopped_at.slice(11, 16)) : false
            var consumedTime = time_out ? consume_time_out - consume_time_in : false

            return consumedTime && vm.checkTime('started_at', o, start, end) && consumedTime <= Attendancehours ? true : false
        }))
    }
    ,
    checkTime(at, o, start, end)
    {

        return start != '00' ? (start == o[at].slice(0, 10).replace(/-/g, "").slice(6, 10)) || (end == o[at].slice(0, 10).replace(/-/g, "").slice(6, 10)) : (end == o[at].slice(0, 10).replace(/-/g, "").slice(6, 10))
    }
    ,
    timeStringToFloat(time)
    {
        if (!time) {
            return 0
        }
        var hoursMinutes = time.split(/[.:]/);
        var hours = parseInt(hoursMinutes[0], 10);
        var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        return hours + minutes / 60;
    }
    }
    }
</script>
