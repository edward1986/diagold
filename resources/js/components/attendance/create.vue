<template>
    <div>
        <el-row>
            <el-col :span="24">
                <el-card shadow="never">
                    <div slot="header">
                        <span>{{$route.params.id ? 'Edit' : 'Create'}} Attendance</span>
                    </div>
                    <el-form ref="form" @submit.native.prevent="onSubmit" :model="form">
                        <el-form-item prop="user_id" label="Employee">
                            <el-select style="width: 100%;"
                                       v-model="form.user_id"
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
                        <el-form-item prop="date" label="Date">
                            <input  style="width: 100%;" v-model="form.date" type="date"  class="el-input__inner" placeholder="Pick a day">
                            <div v-if="errors.date" v-for="error in errors.date" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>
                        <el-form-item prop="started_at" label="Started at">
                            <input  style="width: 100%;" v-model="form.started_at"  class="el-input__inner" type="time" placeholder="Pick a time">
                            <div v-if="errors.started_at" v-for="error in errors.started_at" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>
                        <el-form-item prop="stopped_at" label="Stopped at">
                            <input style="width: 100%;" v-model="form.stopped_at" class="el-input__inner" type="time" placeholder="Pick a time">
                            <div v-if="errors.stopped_at" v-for="error in errors.stopped_at" class="el-form-item__error">
                                {{error}}
                            </div>
                        </el-form-item>


                        <el-form-item>
                            <el-button :disabled="disabled" type="primary" @click="onSubmit('form')">{{$route.params.id
                                ? 'Edit' : 'Create'}} Attendance
                            </el-button>
                            <el-button @click="onCancel">Cancel</el-button>
                        </el-form-item>
                    </el-form>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
    import user from './../mixin/search/user.js'
    export default {
        name: 'attendanceCreate',
        mixins: [user],
        data() {
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
            }
        },
        beforeRouteEnter (to, from, next) {
            if (to.params.id) {
                axios.get(`/api/attendances/${to.params.id}`).then(function (response) {
                    next(vm => vm.setData(response.data))
                }).catch(function (error) {
                    if (error.response.statusText) {
                        next(vm => vm.$swal(error.response.data.statusText, error.response.data.message, 'error'))
                    }
                    if (error.response.status === 401) {
                        window.location.href = window.location.href;
                    }
                })
            } else {
                next()
            }
        },
        beforeRouteUpdate (to, from, next) {
            var vm = this
            if (to.params.id) {
                vm.errors = {}
                axios.get(`/api/attendances/${to.params.id}`).then(function (response) {
                    vm.setData(response.data)
                    next()
                }).catch(function (error) {
                    if (error.response.statusText) {
                        next(vm =>  vm.$swal(error.response.data.statusText, error.response.data.message, 'error'))
                    }
                    if (error.response.status === 401) {
                        window.location.href = window.location.href;
                    }
                })
            } else {
                next()
            }
        },
        methods: {
            setData(response){
                var vm = this

                vm.users = []
                vm.users = [{value: response.user.id, label: response.user.name}];

                vm.form = response
                vm.form.user_id = response.user.id
                var started_at = response.started_at ?  response.started_at.split(' ') : ''
                var stopped_at = response.stopped_at ?  response.stopped_at.split(' ') : ''
                vm.form.date = started_at[0] || stopped_at[0]
                if(response.started_at){
                    vm.form.started_at = started_at[1].replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
                }
                if(response.stopped_at){
                    vm.form.stopped_at = stopped_at[1].replace(/(^|\D)(\d)(?!\d)/g, '$10$2');
                }



            },
            onCancel(){
                this.$router.push({name: 'view-attendances'})
            },
            onSubmit() {
                var vm = this
                this.$refs.form.validate((valid) => {
                    if (valid) {
                        vm.disabled = true
                        vm.errors = {}
                        let id = vm.$route.params.id;
                        if(vm.form.started_at){

                            vm.form.started_at = vm.form.started_at.concat(':00').split(':').slice(0, 3).join(':')
                        }
                        if(vm.form.stopped_at){
                            vm.form.stopped_at = vm.form.stopped_at.concat(':00').split(':').slice(0, 3).join(':')
                        }
                        axios[id ? 'post' : 'post'](`/api/attendances${id ? `/edit/${id}` : '/create'}`, vm.form).then(function () {
                            vm.disabled = false
                            vm.errors = {}
                            vm.$swal(`Attendance has been ${id ? 'edited' : 'created'}`, '', 'success')
                        }).catch(function (error) {
                            vm.disabled = false
                            if (error.response.data.errors && error.response.data.message) {
                                vm.errors = error.response.data.errors;
                                vm.$swal(error.response.data.statusText, error.response.data.message, 'error')
                            }
                        })
                    }
                })
            }
        }
    }
</script>
