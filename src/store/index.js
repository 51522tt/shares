import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: '张四四'
    },
    meuns: [{
      "icon": "&#xe6c2;",
      "title": "数据展示",
      "desc": "用于对数据集进行数据展示",
      "path": "dataset",
    },
    {
      "icon": "&#xe6ad;",
      "title": "数据集管理",
      "desc": "管理数据集和数据源",
      "path": "datasetmanager",
    },
    {
      "icon": "&#xe6a9;",
      "title": "工具箱",
      "desc": "集成了第三方开箱即用的工具",
      "path": "index",
    }
  ],
  },
  mutations: {
    
  },
  active: {
   
  },
  modules: {

  }
})