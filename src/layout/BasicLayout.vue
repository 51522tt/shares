<template>
  <n-layout has-sider class="home">
    <n-layout-sider class="side" collapse-mode="width">
      <Side />
    </n-layout-sider>
    <n-layout class="content">
      <n-layout-header class="top">
        <Top />
      </n-layout-header>

    
      <n-layout-content class="content__box">
        <router-view />
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<script setup>
import Side from './side/Side.vue'
import Top from './top/Top.vue'

</script>

<style lang='scss' scoped>
.home {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #f3f3f3;
}

.side {
  flex-basis: 0;
}

.content {
  background-color: #f3f3f3;
  &__box {
    margin: 0.15rem;
    background-color: rgba(0, 0, 0, 0);
  }
}
</style>
