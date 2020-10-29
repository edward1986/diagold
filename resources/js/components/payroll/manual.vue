<template>
    <div class="card border-primary" style="margin: 6px;">
        <div class="card-header">
            <h5 class="card-title">{{item.value.name}}</h5>
        </div>
        <div class="card-body" v-if="isReady">
            <table class="table table-sm table-bordered">
                <thead>
                <tr>
                    <th scope="col" colspan="2">Earnings:</th>
                    <th scope="col" colspan="2">Deductions</th>

                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">Basic Pay:</th>
                    <td><input type="text" v-model="basicPay"></td>
                    <th>SSS Contribution:</th>
                    <td>{{card.value.sss_deduction? card.value.sss_deduction :0}}</td>
                </tr>
                <tr>
                    <th scope="row">Rest Day Pay:</th>
                    <td><input type="text" style="width: 42px; margin-right: 10px;" v-model="card.obj.restDay"> <span
                        style="font-weight: bold;">{{card.obj.restDay ? card.obj.restDay*381 : 0}}</span></td>
                    <th>PHIC</th>
                    <!--                    <td><input type="text" v-model="card.value.philhealth_deduction "></td>-->
                    <td>{{card.value.philhealth_deduction }}</td>
                </tr>
                <tr>
                    <th scope="row">Holiday Pay:</th>
                    <td><input type="text" style="width: 42px; margin-right: 10px;" v-model="reg"> <span
                        style="font-weight: bold;">{{ earnings.reg}}</span></td>
                    <th>HDMF Contribution</th>
                    <td>{{card.value.pagibig_deduction}}</td>
                </tr>
                <tr>
                    <th scope="row">Special Holiday Pay:</th>
                    <td><input type="text" style="width: 42px; margin-right: 10px;" v-model="special"><span
                        style="font-weight: bold;">{{ earnings.special}}</span></td>
                    <th>SSS Loan</th>
                    <td>{{card.value.sss_loan}}</td>
                </tr>
                <tr>
                    <th scope="row">25% OT:</th>
                    <td><input type="text" style="width: 42px; margin-right: 10px;" v-model="card.obj.overTime25"><span
                        style="font-weight: bold;">{{card.obj.overTime25 ? Number.parseFloat((381*1.25/8)*(!isNaN(Number(card.obj.overTime25)) ? Number.parseInt(card.obj.overTime25) : 0)).toFixed(2) : 0}}</span>
                    </td>
                    <th>HDMF Loan</th>
                    <td>{{card.value.pagibig_loan}}</td>
                </tr>
                <tr>
                    <th scope="row">30% OT:</th>
                    <td><input type="text" style="width: 42px; margin-right: 10px;" v-model="card.obj.overTime30"><span
                        style="font-weight: bold;">{{card.obj.overTime30 ?  Number.parseFloat((381*0.3/8)*(!isNaN(Number(card.obj.overTime30)) ? Number.parseFloat(card.obj.overTime30) : 0)).toFixed(2) : 0}}</span>
                    </td>
                    <th>Total</th>
                    <td>{{earnings.q23 ? Number.parseFloat(earnings.q23).toFixed(2) : 0}}</td>
                </tr>
                <tr>
                    <th scope="row">DE MINIMIS:</th>
                    <td><input type="text" style="width: 42px; margin-right: 10px;" v-model="de_minimis"><span
                        style="font-weight: bold;">{{de_minimis}}</span></td>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <th scope="row">Total:</th>
                    <td><span style="font-weight: bold;">{{earnings.q15 ? Number.parseFloat(earnings.q15).toFixed(2) : 0}}</span>
                    </td>
                    <th>Net Salary Pay</th>
                    <td><span style="font-weight: bold;">{{Number.parseFloat(earnings.q15-earnings.q23) ? Number.parseFloat((earnings.q15-earnings.q23)+numberFloat(de_minimis)).toFixed(2) : 0}}</span>
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
        <div class="card-body" v-else>
            loading...

        </div>
        <div class="card-footer">

        </div>
    </div>

</template>

<script>

    export default {
        name: 'manualCreate',
        props: {
            item: Object
        },
        data() {
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
            }
        },
        mounted() {
            var vm = this
            vm.isReady = true
            vm.card = vm.item
            vm.card.value.sss_loan = vm.card.value.sss_loan | 0
            vm.card.value.sss_deduction = vm.card.value.sss_deduction | 0
            vm.card.value.pagibig_loan = vm.card.value.pagibig_loan | 0
            vm.card.value.pagibig_deduction = vm.card.value.pagibig_deduction | 0
            vm.card.value.philhealth_deduction = vm.card.value.philhealth_deduction | 0
            vm.basicPay = Number.parseInt(vm.basicPay)
            var event = _.map(vm.card.events, (o) => {
                var end = new Date(o.end_date),
                    start = new Date(o.start_date),
                    tStartDate = start.getTime(),
                    tEndDate = end.getTime(),
                    nDifference = Math.abs(tEndDate - tStartDate),
                    fDiffernceInDays = Math.round(nDifference / (1000 * 86400));

                return {
                    duration: fDiffernceInDays + 1,
                    occurrence: o.occurrence === '0' ? 0 : 1
                }
            })

            var reg = _.reduce(event, (sum, o) => {
                return o.occurrence === '0' ? sum.duration + o : sum
            }, 0)
            var special = _.reduce(event, (sum, o) => {
                return o.occurrence !== '0' ? sum + o.duration : sum
            }, 0)

            vm.basicPay = vm.card.value.salary ? ((vm.card.value.salary / 2) - (vm.numberFloat(vm.card.obj.loa) * 381) - (((vm.numberFloat(vm.card.obj.late) + vm.numberFloat(vm.card.obj.ut)) * (381 / 8))).toFixed(2)) : 0
            vm.q15 = vm.basicPay + (vm.numberFloat(vm.card.obj.restDay) * 381) + vm.numberFloat(reg * 381) + vm.numberFloat(special * (14.29 * 8)) + (vm.numberFloat((381 * 1.25 / 8) * (!isNaN(Number(vm.card.obj.overTime25)) ? Number.parseFloat(vm.card.obj.overTime25) : 0))) + vm.numberFloat(((381 / 8) * 0.30) * (!isNaN(Number(vm.card.obj.overTime30)) ? Number.parseFloat(vm.card.obj.overTime30) : 0))
            vm.q23 = vm.numberFloat(vm.card.value.sss_deduction) + vm.numberFloat(vm.card.value.sss_loan) + vm.numberFloat(vm.card.value.pagibig_deduction) + vm.numberFloat(vm.card.value.pagibig_loan) + vm.numberFloat(vm.card.value.philhealth_deduction)
            vm.de_minimis = vm.numberFloat(vm.card.value.allowance)

        },
        computed: {
            earnings: function () {
                var vm = this
                var event = _.map(vm.card.events, (o) => {
                    var end = new Date(o.end_date),
                        start = new Date(o.start_date),
                        tStartDate = start.getTime(),
                        tEndDate = end.getTime(),
                        nDifference = Math.abs(tEndDate - tStartDate),
                        fDiffernceInDays = Math.round(nDifference / (1000 * 86400));

                    return {
                        duration: fDiffernceInDays + 1,
                        occurrence: o.occurrence === '0' ? 0 : 1
                    }
                })
                var restDay = vm.numberFloat(vm.card.obj.restDay) ? vm.numberFloat(vm.card.obj.restDay) * 381 : 0,
                    regq15 = vm.numberFloat(vm.reg) ? vm.numberFloat(vm.reg * 381) : 0,
                    specialq15 = vm.numberFloat(vm.special) ? vm.numberFloat(vm.special * (14.29 * 8)) : 0,
                    ot25 = vm.numberFloat((381 * 1.25 / 8) * (!isNaN(Number(vm.card.obj.overTime25)) ? Number.parseFloat(vm.card.obj.overTime25) : 0)),
                    ot30 = vm.numberFloat(((381 / 8) * 0.30) * (!isNaN(Number(vm.card.obj.overTime30)) ? Number.parseFloat(vm.card.obj.overTime30) : 0))
                vm.q15 = vm.numberFloat(vm.basicPay) + restDay + regq15 + specialq15 + ot25 + ot30

                var sss_reduction = vm.numberFloat(vm.card.value.sss_deduction) | 0,
                    sss_loan = vm.numberFloat(vm.card.value.sss_loan) | 0,
                    pagibig_deduction = vm.numberFloat(vm.card.value.pagibig_deduction) | 0,
                    pagibig_loan = vm.numberFloat(vm.card.value.pagibig_loan) | 0,
                    philhealth_deduction = vm.numberFloat(vm.card.value.philhealth_deduction) | 0

                vm.q23 = sss_reduction + sss_loan + pagibig_deduction + pagibig_loan + philhealth_deduction
                var returnEarning = {
                    basicPay: vm.numberFloat(vm.basicPay) ? vm.numberFloat(vm.basicPay) : 0,
                    q15: vm.q15 | 0,
                    q23: vm.q23 | 0,
                    de_minimis: vm.de_minimis | 0,
                    reg: regq15,
                    special: specialq15,
                }
                this.$emit('manual', returnEarning)
                return returnEarning
            }
        },
        methods: {
            numberFloat(no) {
                return no ? Number.parseFloat(no) : 0
            },
        }
    }
</script>
