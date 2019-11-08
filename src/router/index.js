import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/modules/Website/pages/WebPageIndex'
import Dashboard from '@/modules/Dashboard/pages/DashPageIndex'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'Index', component: Index },
        { path: '/dashboard', name: 'Dashboard', component: Dashboard },
    ]
})
