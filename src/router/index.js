import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: 'Möllans Falafel — Malmös bästa falafel',
      description: 'Välkommen till Möllans Falafel på Möllevångstorget i Malmö. Handgjord falafel med äkta smaker, färska råvaror och hemliga kryddor.'
    }
  },
  {
    path: '/meny',
    name: 'menu',
    component: () => import('@/views/MenuView.vue'),
    meta: {
      title: 'Meny — Möllans Falafel',
      description: 'Se vår meny med klassisk falafelrulle, falafeltallrik, halloumi och mycket mer. Veganskt, vegetariskt och glutenfritt finns.'
    }
  },
  {
    path: '/om-oss',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'Om oss — Möllans Falafel',
      description: 'Lär känna berättelsen bakom Möllans Falafel — passion för äkta smaker, handgjord falafel och kärlek till Möllevången.'
    }
  },
  {
    path: '/hitta-hit',
    name: 'find-us',
    component: () => import('@/views/FindUsView.vue'),
    meta: {
      title: 'Hitta hit — Möllans Falafel',
      description: 'Hitta Möllans Falafel på Möllevångstorget i Malmö. Öppettider, adress, karta och information om kollektivtrafik.'
    }
  },
  {
    path: '/kontakt',
    name: 'contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Kontakt — Möllans Falafel',
      description: 'Kontakta Möllans Falafel med frågor, bokningar eller feedback. Vi svarar gärna!'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

// Update document title and meta on route change
router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
  const descEl = document.querySelector('meta[name="description"]')
  if (descEl && to.meta?.description) {
    descEl.setAttribute('content', to.meta.description)
  }
})

export default router
