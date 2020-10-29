require('./bootstrap');
window.DB = require('./db.js');
window.Store = require('./store.js');
window.Vue = require('vue');
import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
import {Loading,Message} from 'element-ui';
Vue.prototype.$message = Message;
import moment from 'moment'
require('moment-timezone');
import 'sweetalert2/dist/sweetalert2.min.css';
new Vue({
    data(){
        return{
            actions: Store.actions,
            loading: true,
            moment
        }
    },
    created() {
        DB.open(() => {
            this.loading = false;
            Store.init();
        });
    },
    render: h => h(require('./components/clock/index').default)
}).$mount('#clock')
