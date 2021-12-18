<template>
  <div class="side">
    <div class="side__logo">
      <img class="side__logo__icon" src="/img/logo/32-32.png" alt="" />
    </div>
    <div class="side__meun">
      <n-tooltip
        placement="right"
        trigger="hover"
        class="side__meun__item"
        v-for="meun in meuns"
        :key="meun"
      >
        <template #trigger>
          <!-- <n-button
            quaternary
            ghost
            class="iconfont side__meun__iconfont"
            v-html="meun.icon"
            @click="router.push(meun)"
          ></n-button> -->
           <div
            class="iconfont side__meun__iconfont"
            v-html="meun.icon"
            @click="router.push(meun)"
          ></div>
        </template>
        <span>{{ meun.title }}</span>
      </n-tooltip>
    </div>
    <div class="side__user">
      <n-avatar round class="side__user__box" size="medium">{{
        username
      }}</n-avatar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore} from 'vuex'
import { getMeuns } from '../../api/side.js'
import {useRouter} from 'vue-router'
const router = useRouter()
const store = useStore()
const username = store.state.user.username
const meuns = store.state.meuns
</script>

<style lang='scss' scoped>
@import '@/style/mixins.scss';

.side {
  // @include baseBroder;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding:0.06rem 0 .1rem 0;
  width: .5rem;
  &__logo {
    display: flex;
    &__icon {
      margin: auto;
    }
  }
  &__meun {
    flex: 1;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    &__iconfont {
      font-size: 0.23rem;
      margin: 0.02rem 0;
      color:#b1b2b5;
      text-align: center;
    }
     &__iconfont:hover {
      color:#ffffff;
      cursor:pointer;
    }
  }
  &__user {
    display: flex;
    &__box {
      margin: auto;
      background-color: #04a999;
    }
  }
}
</style>
