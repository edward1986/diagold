<template>
    <div>
        <vue-particles
                :lines-width="6"
                color="#886ab5"
        ></vue-particles>
        <div class="blankpage-form-field">
            <div class="page-logo m-0 w-100 align-items-center justify-content-center rounded border-bottom-left-radius-0 border-bottom-right-radius-0 px-4">
                <a href="javascript:void(0)" class="page-logo-link press-scale-down d-flex align-items-center">
                    <!--<img style="width: 32px; height:32px;" :src="setting_d.image ? '/upload/' + setting_d.image.url  :'/img/favicon/favicon-32x32.png'" alt="Payroll" aria-roledescription="logo">-->
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="32" height="32" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 2048 1664"><path d="M212 640l623 665-300-665H212zm812 772l349-772H675zM538 512l204-384H480L192 512h346zm675 793l623-665h-323zM683 512h682l-204-384H887zm827 0h346l-288-384h-262zm141-486l384 512q14 18 13 41.5t-17 40.5l-960 1024q-18 20-47 20t-47-20L17 620Q1 603 0 579.5T13 538L397 26q18-26 51-26h1152q33 0 51 26z" fill="#fff"/><rect x="0" y="0" width="2048" height="1664" fill="rgba(0, 0, 0, 0)" /></svg>
                    <span class="page-logo-text mr-1">{{setting_d.name ? setting_d.name : 'Payroll'}}</span>
                    <i class="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
                </a>
            </div>
            <div class="card p-4 border-top-left-radius-0 border-top-right-radius-0">
                <form  @submit.prevent="handleSubmit">
                    <div class="form-group">
                        <label class="form-label" for="username">Username</label>
                        <input  :disabled="loading"  :class="errors.email ? 'is-invalid' : ''" type="email" id="username" class="form-control" placeholder="your id or email" v-model="loginForm.email">
                        <span v-if="errors.email" v-for="error in errors.email" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
                        <span v-else class="help-block">
                            Your unique username to app
                        </span>
                    </div>
                    <div class="form-group">
                        <label class="form-label" for="password">Password</label>
                        <input  :disabled="loading" :class="errors.password ? 'is-invalid' : ''"  type="password" id="password" class="form-control" placeholder="password" v-model="loginForm.password">
                        <span v-if="errors.password" v-for="error in errors.password" class="invalid-feedback" role="alert">
                                        <strong>{{ error }}</strong>
                                    </span>
                        <span v-else class="help-block">
                            Your password
                        </span>
                    </div>
                    <div class="form-group text-left">
                        <div class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" v-model="loginForm.remember" id="rememberme">
                            <label class="custom-control-label" for="rememberme"> Remember me</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-default float-right" :disabled="loading">Secure login</button>
                </form>
            </div>
            <!--<div class="blankpage-footer text-center">
                <a href="#"><strong>Recover Password</strong></a>
            </div>-->
        </div>
    </div>

</template>

<script>
    export default {
        name: 'login',
        data () {
            return {
                loginRule: {
                    email: [
                        {
                            require: true,
                            message: ' '
                        }
                    ]
                },
                loginForm: {
                    email: '',
                    password: '',
                    remember: true
                },
                loading: false,
                errors: {},
                setting_d: {name: '', image: ''}
            }
        },
        created(){
            var vm = this
            vm.loading = true
            axios.get('/api/auth').then(function (response) {
                vm.loading = false
                vm.setData(response.data)
            }).catch(function (error) {
                vm.loading = false
                if (error.response.data && error.response.data.errors && error.response.data.message) {
                    vm.errors = error.response.data.errors;
                    vm.$swal(error.response.data.statusText, error.response.data.message, 'error')
                }else{
                    vm.$swal(error.response.data.statusText, error.response.data, 'error')
                }
            });
        },
        methods: {
            setData(response){
                var vm = this
                vm.setting_d = response
            },
            handleSubmit () {
                var vm = this
                        vm.loading = true
                        vm.errors = {}
                const csrfToken = document.head.querySelector("[name~=csrf-token][content]").content;
                        axios.post('/login', vm.loginForm, {
                            'Content-Type': 'application/json',
                            "X-CSRF-Token": csrfToken
                        }).then(function () {

                            window.location.href = window.location.href;
                        }).catch(function (error) {
                            vm.loading = false
                            if (error.response.data.errors && error.response.data.message) {
                                vm.errors = error.response.data.errors;

                            }  if(error.response.status === 500) {
                                vm.$swal(error.response.data.statusText, error.response.data, 'error')
                            }
                        })
            }
        }
    }
</script>