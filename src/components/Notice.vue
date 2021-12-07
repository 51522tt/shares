<template>
  <div class="notice">
    <div class="notice__title">消息通知</div>
    <ul>
      <li class="notice__item" v-for="notice in noticeList" :key="notice">
        <div class="notice__item__time" >{{notice.creatTime}}</div>
        <div class="notice__item__type" :style="{color:fontColor[notice.level]}">{{notice.type}}</div>
        <div class="notice__item__discription">{{notice.discription}}
        </div>
        <n-button
          class="notice__item__operation"
          text
          tag="a"
          :href="notice.url"
          target="_blank"
          type="primary"
          >查看详情</n-button
        >
      </li>
    </ul>
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
import { useStore } from 'vuex'
import { getNoticeList } from '@/api/notice.js'
const store = useStore()
const page= 2
const pageSize= 100
const fontColor = {
          urgent: '#d80e00',
          important: '#d8ca00',
          commonly: '#0077d8',
          overtime: '#ad00d8',
        }
const noticeList = getNoticeList()


</script>

<style lang='scss' scoped>
@import '@/style/mixins.scss';

.notice {
  padding: 0.16rem;
  .n-pagination{
    margin-top: .1rem;
  }
  &__title {
    border-bottom: 0.01px solid rgb(199, 199, 199);
  }
  &__item {
    display: flex;
    &__discription {
      @include ellipsis;
      padding-right: 0.1rem;
      flex: 1;
    }
    &__type {
      padding: 0 0.2rem;
    }
    &__operation{
      padding:0 0.1rem
    }
    * {
      margin-top:.06rem ;
      // border: 1px solid red;
    }
  }
}
ul > li {
  margin-top: 0.05rem;
  list-style-type: none;

  // border: 1px solid red;
}
</style>
