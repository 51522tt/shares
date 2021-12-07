
export const getTodoListTotal = ()=>{
  return {
    urgent:'122',
    important:'12',
    commonly:'12',
    overtime:'12'
  }
}
export const getTodoList = ()=> { 
  return [
  {
    key: 0,
    level: 'urgent',
    levelTitle:'紧急',
    source: '张三',
    type: '合同',
    description: '合同有问题',
    createdTime: '2021/11/1',
  },
  {
    key: 1,
    level: 'important',
    levelTitle:'重要',
    source: '张三',
    type: '订单',
    description: '订单有问题',
    createdTime: '2021/11/1',
  },
  {
    key: 2,
    level: 'commonly',
    levelTitle:'一般',
    source: '张三',
    type: '合同',
    description: '合同有问题',
    createdTime: '2021/11/1',
  },
  {
    key: 3,
    level: 'urgent',
    levelTitle:'紧急',
    source: '李四',
    type: '发票',
    description: '发票缺失',
    createdTime: '2021/11/1',
  },
   {
    key: 4,
    level: 'urgent',
    levelTitle:'紧急',
    source: '李四',
    type: '发票',
    description: '发票缺失',
    createdTime: '2021/11/1',
  },
   {
    key: 5,
    level: 'urgent',
    levelTitle:'紧急',
    source: '李四',
    type: '发票',
    description: '发票缺失',
    createdTime: '2021/11/1',
  }
]
}