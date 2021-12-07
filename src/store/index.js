import { createStore } from 'vuex'

export default createStore({
  state: {
    user: {
      username: '张四四',
      dep: '成都苹果科技 - 运营中心 - 事业20部 - 项目100部 - A组',
      post: '前端工程师'
    },
    welcome: '下午好，$username ,请好好工作，禁止摸鱼~~',
    meuns: [{
      "icon": "&#xe6c2;",
      "title": "工作台",
      "desc": "工作台",
      "path": "worksplace",
    },
    {
      "icon": "&#xe6ad;",
      "title": "系统列表",
      "desc": "系统列表",
      "path": "system",
    },
    {
      "icon": "&#xe6a9;",
      "title": "工具箱",
      "desc": "集成了第三方开箱即用的工具",
      "path": "tools",
    }
  ],
  toollist:{
    inner:[],
    external:[
   
      {
        title:'SVG矢量图转换',
        desc:'可快速将 JPG、PNG 等格式的图片快速转换为 SVG 矢量图，并支持过滤斑点、色彩精度、曲线拟合等多种参数配置',
        url:'https://www.visioncortex.org/vtracer/'
      },
      {
        title:'diagrams',
        desc:'画流程图的工具,打开较慢',
        url:'https://app.diagrams.net/?src=about'
      },{
        title:'tldraw',
        desc:'画图的工具，可用于演示之类的',
        url:'https://www.tldraw.com/'
      },{
        title:'penpot',
        desc:'原型工具&UI设计工具，开源免费',
        url:'https://penpot.app/'
      },{
        title:'mrdoc',
        desc:'在线文档系统，适合作为私有云文档、云笔记和知识管理工具',
        url:'https://mrdoc.pro/'
      },{
        title:'阿里巴巴矢量图标库',
        desc:'免费、商用都有',
        url:'https://www.iconfont.cn/'
      },
    ]
  }
  },
  mutations: {
    change () {
      console.log('修改')
    }
  },
  active: {
    change () {
      this.commit('change')
    }
  },
  modules: {

  }
})