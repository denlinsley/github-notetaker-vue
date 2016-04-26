import Home from '../components/Home'
import Profile from '../components/Profile'

export function configureRoutes(router) {
  router.map({
  '/': {
    component: Home
  },
  '/profile/:username': {
    name: 'Profile',
    component: Profile
  }
})
}
