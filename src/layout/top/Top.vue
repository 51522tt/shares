<template>
  <div class='top'>
    <span class='top__online iconfont top__online--unonline'>&#xe73f;</span>
    |
    <span calss='top__notice'>
        <span class="top__notice__tips top__notice__item iconfont"  >&#xe60b;
          <n-badge :value="tipsValue"  :max="99" class='top__notice__badge'/></span>
        <span class="top__notice__todo top__notice__item iconfont">&#xe64a;
          <n-badge :value="todoValue" dot :max="99" class='top__notice__badge'/></span>
      </span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const tipsValue = ref(1)
const todoValue = ref(0)
</script>

<style lang='scss' scoped>
@import '@/style/mixins.scss';
.top{
  @include baseBroder;
  display: flex;
  flex-direction: row-reverse;
  padding: .05rem;
  &__online{
    margin: 0 0.08rem;
    &--unonline{
      color:red
    }
  }
  &__notice{
    &__badge{
      position: relative;
      left: -.07rem;
      top: -.08rem;
    }
  }

}


</style>
