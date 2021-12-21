import { createRouter, createWebHashHistory } from 'vue-router'

const BasicLayoutLayout = ()=>import('@/layout/BasicLayout.vue')
const Defualt = ()=>import('@/views/Defualt.vue')
const DataSet = ()=>import('@/views/DataSet.vue')
const DataSetManager = ()=>import('@/views/DataSetManager.vue')
const xq1 = ()=>import('@/views/xqlist/xq1.vue')
const xq2 = ()=>import('@/views/xqlist/xq2.vue')
const xq3 = ()=>import('@/views/xqlist/xq3.vue')
const xq4 = ()=>import('@/views/xqlist/xq4.vue')
const xq5 = ()=>import('@/views/xqlist/xq5.vue')
const xq6 = ()=>import('@/views/xqlist/xq6.vue')
const routes = [
  {
    path: '/',
    name: 'base',
    redirect:'/index',
    component:BasicLayoutLayout,
    children:[
      {
        path:'/index',
        component:Defualt
      },
      {
        path:'/dataset',
        component:DataSet,
        children:[
          {path:'xq1',component:xq1},
          {path:'xq2',component:xq2},
          {path:'xq3',component:xq3},
          {path:'xq4',component:xq4},
          {path:'xq5',component:xq5},
          {path:'xq6',component:xq6},
        ]
      },
      {
        path:'/datasetmanager',
        component:DataSetManager
      }
    ]
  },
 
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
