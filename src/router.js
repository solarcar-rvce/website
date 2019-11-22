import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'
import About from './components/About'
import Sponsors from './components/Sponsors'
import Contact from './components/Contact'
import Events from './components/Events'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        },
        {
            path: '/gallery',
            name: 'Gallery',
            beforeEnter() { location.href = 'https://www.flickr.com/photos/154038345@N08/albums' }
        },
        {
            path: '/sponsors',
            name: 'Sponsors',
            component: Sponsors,
        },
        {
            path: '/events',
            name: 'Events',
            component: Events,
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact,
        },
    ]

})