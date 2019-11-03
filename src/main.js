import Vue from 'vue'
//import Vuex from 'vuex'
import vuetify from './plugins/vuetify';
import router from './router';
//import store from './store/store';
//import VeeValidate from 'vee-validate';
import App from './App.vue'

Vue.config.productionTip = false;
//Vue.use(VueAxios, axios);
//Vue.use(VeeValidate);
new Vue({
    vuetify,
    //Vuex,
    //store,
    router,
    render: h => h(App)
}).$mount('#app');
