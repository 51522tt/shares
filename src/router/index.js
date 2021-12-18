import { createRouter, createWebHashHistory } from 'vue-router'

const BasicLayoutLayout = ()=>import('@/layout/BasicLayout.vue')
const Defualt = ()=>import('@/views/Defualt.vue')
const DataSet = ()=>import('@/views/DataSet.vue')
const DataSetManager = ()=>import('@/views/DataSetManager.vue')

const routes = [
  {
    path: '/',
    name: 'base',
    redirect:'/index',
    component:BasicLayoutLayout,
    children:[
      {
        path:'index',
        component:Defualt
      },
      {
        path:'dataset',
        component:DataSet
      },
      {
        path:'datasetmanager',
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
