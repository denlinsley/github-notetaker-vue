import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './components/App'
import { configureRoutes } from './config/routes'

Vue.use(VueRouter)

export const router = new VueRouter({
  hashbang: false,
  history: true
})

configureRoutes(router)
router.start(App, '#app')

