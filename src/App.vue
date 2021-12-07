<template>
  <n-message-provider>
    <router-view />
  </n-message-provider>
  <Footer class='footer'/>
</template>

<script setup>
import Footer from './layout/footer/Footer.vue'
</script>
<style lang='scss' scoped>
.footer{
  position: absolute;
  bottom: 0rem;
  z-index:-1;
}
</style>
