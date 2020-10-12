import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Students from '@/views/students/Students'
import Teachers from '@/views/teachers/Teachers'

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
        path: '/teachers',
        name: 'Teachers',
        component: Teachers
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router