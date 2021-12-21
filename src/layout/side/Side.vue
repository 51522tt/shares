<template>
  <div class="side">
    <div class="side__meun">
      <n-tooltip
        placement="right"
        trigger="hover"
        class="side__meun__item"
      >
        <template #trigger>
           <SpeedometerOutline
            class="iconfont side__meun__iconfont"
            @click="router.push('/dataset')"
          ></SpeedometerOutline>
        </template>
        <span>数据集展示</span>
      </n-tooltip>
      <n-tooltip
        placement="right"
        trigger="hover"
        class="side__meun__item"
      >
        <template #trigger>
           <ServerOutline
            class="iconfont side__meun__iconfont"
            @click="router.push('/datasetmanager')"
          ></ServerOutline>
        </template>
        <span>数据集管理</span>
      </n-tooltip>
    
    </div>
    <div class="side__user">
      <n-avatar round class="side__user__box" size="medium"></n-avatar>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore} from 'vuex'
import {useRouter} from 'vue-router'
import {ServerOutline,SpeedometerOutline} from '@vicons/ionicons5'
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
    display: flex;
    flex-direction: column;
    &__iconfont {
      width: 0.33rem;
      margin: .18rem auto 0 ;
      color:#7f8083;text-align: center;
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
