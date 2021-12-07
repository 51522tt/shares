<template>
  <div class="todo">
    <div class="todo__title">待办事项</div>
    <n-data-table :columns="columns" :data="data" />
    <n-pagination class='todo__page'
      v-model:page="page"
      v-model:page-size="pageSize"
      :page-count="100"
      show-size-picker
      :page-sizes="[10, 20, 30, 40]"
    />
  </div>
</template>

<script setup>
import { h,ref } from 'vue'
import { useStore } from 'vuex'
import { NTag, NButton, useMessage } from 'naive-ui'
import {getTodoList } from '@/api/todolist.js'
const store = useStore()
const message = useMessage()
const page= ref(2)
const pageSize= ref(20)
const createColumns = ({ sendMail }) => {
  return [
    {
      title: '紧急程度',
      key: 'levelTitle',
      align: 'center',
      render(row) {
        const fontColor = {
          urgent: '#d80e00',
          important: '#d8ca00',
          commonly: '#0077d8',
          overtime: '#ad00d8',
        }
        return h('span', {
          style:'color:'+fontColor[row.level]
        }, row.levelTitle)
      },
    },
    {
      title: '来源',
      key: 'source',
      align: 'center',
    },
    {
      title: '类型',
      key: 'type',
      align: 'center',
    },
    {
      title: '描述',
      key: 'description',
      align: 'center',
    },
    {
      title: '创建时间',
      key: 'createdTime',
      align: 'center',
    },
    {
      title: '操作',
      key: 'operation',
      align: 'center',
      render(row) {
        return h(
          'div',
          {
            style: 'display:flex;padding:0 0.1rem;',
          },
          h(
            NButton,
            {
              key:'0',
              size: 'small',
              style:'margin-right:0.1rem',
              onClick: () => sendMail(row),
            },
            { default: () => '忽略' }
          ),
          h(
            NButton,
            {
              key:'0',
              size: 'small',
              onClick: () => sendMail(row),
            },
            { default: () => '处理' }
          ),
          
        )
      },
    },
  ]
}

const data = getTodoList()
const columns = createColumns({
  sendMail(rowData) {
    message.info('send mail to ' + rowData.level)
  },
})

const pagination = {
  pageSize: 10,
}
</script>

<style lang='scss' scoped>
.todo {
  padding: 0.16rem;
  &__title {
    border-bottom: 0.01px solid rgb(199, 199, 199);
  }
  .n-pagination{
    margin-top: .1rem;
  }
  .n-data-table {
    margin-top: 0.08rem;
  }
}
ul > li {
  margin-top: 0.05rem;

  list-style-type: none;
}
</style>
