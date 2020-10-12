import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Students from '@/views/students/Students'
import Results from '@/views/results/Results'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/students',
        name: 'Students',
        component: Students
    },
    {
        path: '/results',
        name: 'Results',
        component: Results
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router