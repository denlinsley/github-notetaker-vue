import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import Home from './components/Home'
import Profile from './components/Profile'

Vue.use(VueRouter)

export const router = new VueRouter({
  hashbang: false
})

router.map({
  '/': {
    component: Home
  },
  '/profile/:username': {
    name: 'Profile',
    component: Profile
  }
})

router.start(App, '#app')

