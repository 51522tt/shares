<template>
  <n-layout class="home">
    <n-layout-header class="top">
      <Top />
    </n-layout-header>
    <n-layout has-sider class="content">
      <n-layout-sider class="content__side" collapse-mode="width">
        <Side />
      </n-layout-sider>
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
  background-color: #df1919;
}

.top {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 0.3rem;
  background-color: #5e5e5e;
}
.content {
  position: absolute;
  left: 0;
  right: 0;
  top: 0.3rem;
  bottom: 0;
  &__side {
    flex-basis: 0;
  background-color: #4b4a4a;

  }
  &__box {
    background-color: #2a2a2a;
  }
}
</style>
