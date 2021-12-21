<template>
  <div class='top' >
    <CloseOutline class='top__close iconfont' @click='handleClose'></CloseOutline>
  </div>
</template>

<script setup>
import { CloseOutline } from '@vicons/ionicons5'
const handleClose = ()=>{
  console.log('close')
  window.ipcRenderer.send('window-all-closed')
}
</script>

<style lang='scss' scoped>
@import '@/style/mixins.scss';
.top{
  -webkit-app-region: drag;
  display: flex;
  flex-direction: row-reverse;
  &__close{
    -webkit-app-region: no-drag;
    margin: auto 0;
    color:#ffffff;
    height:100%;
    width: .4rem;
    font-size: .1rem;
  }
  &__close:hover{
     background-color: #e03636;
  }

}


</style>
