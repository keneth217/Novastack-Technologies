import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CompanyProfile from '../views/CompanyProfile.vue'
import Contact from '../views/Contact.vue'
import Solutions from '../views/Solutions.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Home - Novastack Technologies'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: 'About Us - Novastack Technologies'
      }
    },
    {
      path: '/company-profile',
      name: 'company-profile',
      component: CompanyProfile,
      meta: {
        title: 'Company Profile - Novastack Technologies'
      }
    },
    {
      path: '/solutions',
      name: 'solutions',
      component: Solutions,
      meta: {
        title: 'Solutions - Novastack Technologies'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        title: 'Contact - Novastack Technologies'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Novastack Technologies'
  next()
})

export default router
