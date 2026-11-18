import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('@/components/DefaultLayout.vue' as string),
        children: [
            {
                path: '',
                component: () => import('@/components/Home.vue' as string)
            },
            {
                path: 'itch',
                component: () => import('@/components/ItchGames.vue' as string)
            },
            {
                path: 'skypiercer',
                component: () => import('@/components/Skypiercer.vue' as string)
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router