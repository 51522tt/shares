import { createRouter, createWebHashHistory } from 'vue-router'

// const store = useStore()
// BasiceLout.vue
const basiceLayout = ()=>import('@/layout/BasicLayout.vue')
const worksplace = ()=>import('@/views/Worksplace.vue')
// dashboard 
const dashboard = ()=>import('@/views/dashboard/index.vue')
const system = ()=>import('@/views/system/index.vue')
const auxiliary = ()=>import('@/views/auxiliary/index.vue')
const tools = ()=>import('@/views/tools/index.vue')

const routes = [
  {
    path: '/',
    name: 'index',
    redirect:'/worksplace',
    component:basiceLayout,
    children:[
      {
        path:'worksplace',
        component:worksplace,
      },
      {
        path:'dashboard',
        component:dashboard,
      },
      {
        path:'system',
        component:system,
      },
      {
        path:'auxiliary',
        component:auxiliary,
      },
      {
        path:'tools',
        component:tools,
      },
    ]
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
