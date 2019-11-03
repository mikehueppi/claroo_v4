import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/modules/Website/pages/WebPageIndex'

Vue.use(Router);

export default new Router({
    routes: [
        { path: '/', name: 'Index', component: Index },
    ]
})
