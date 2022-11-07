import Vue from 'vue'
import Router from 'vue-router'
import haoyue from '@/components/haoyue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'haoyue',
            component: haoyue
        }
    ]
})
