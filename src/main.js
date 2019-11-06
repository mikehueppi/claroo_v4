import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import { store } from './store/store';
import router from './router';
import FullCalendar from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.min.css'

Vue.config.productionTip = false;
Vue.use(FullCalendar);

new Vue({
    vuetify,
    store,
    router,
    render: h => h(App)
}).$mount('#app');
