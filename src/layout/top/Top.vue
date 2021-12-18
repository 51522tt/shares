<template>
  <div class='top'>
    <span class='top__online iconfont top__online--unonline'>&#xe73f;</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style lang='scss' scoped>
@import '@/style/mixins.scss';
.top{
  display: flex;
  flex-direction: row-reverse;
  padding: .01rem;
  &__online{
    margin: 0 0.04rem;
    &--unonline{
      color:red
    }
  }

}


</style>
