<template>
  <div class="airing">
    <div class="airing__title">公告</div>
    <div class="airing__box">
      <div class="airing__box__subject">
        {{airing.subject}}
      </div>
      <div class='airing__box__content'>{{airing.content}}</div>
      <div class="airing__box__enclosure">附件：{{airing.enclosure}}</div>
      <div class="airing__box__sender">发送人: {{airing.sender}}</div>
      <div class="airing__box__datetime">发送时间: {{airing.datetime}}</div>
    </div>
  <div class="airing__bottom">
     <n-button strong secondary round type="primary" size="tiny" class='airing__bottom__button' @click='handleClick(airing.id)'>确认</n-button>
  </div>

  </div>
</template>

<script setup>
import { getAiring } from '@/api/airing.js'
import { useMessage } from 'naive-ui'
const message = useMessage()
const airing = getAiring()
const handleClick = id =>{
  message.info(`确认公告id:${id}`)
}
</script>

<style lang='scss' scoped>
.airing {
  padding: 0.16rem;
  &__title {
    border-bottom: 0.01px solid rgb(199, 199, 199);
  }
  &__bottom{
    margin-top:0.1rem ;
    border-top: 0.01px solid rgb(199, 199, 199);
    display: flex;
    flex-direction: row-reverse;
    &__button{
      margin-top: .05rem;
    }
  }
  &__foolter {
    border-bottom: 0.01px solid rgb(199, 199, 199);
  }
  &__box {
    * {
      margin-top: 0.1rem;
    }
    &__subject {
      text-align: center;
      font-size: 0.2rem;
      padding: 0 0.15rem;
      color: #000000;
    }
    &__content {
      color: #000000;
    }
    &__sender {
    }
    &__datetime {
    }
    &__enclosure {
    }
  }
}
</style>
