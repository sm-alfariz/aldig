
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'index', path: '', component: () => import('pages/Index.vue') },
      { name: 'dashboard', path: '/dashboard', component: () => import('pages/Dashboard.vue') },
      {
        name: 'surah-reading',
        path: '/surah-reading/:surah_number',
        component: () => import('pages/SurahDetail.vue')
      }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
