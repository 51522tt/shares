<template>
  <div class="defualt">
    <TrendingUpOutline class="defualt__logo" />
    <div class="defualt__text">
      <div>从左边菜单栏中选择默认数据集</div>
      <div>从数据源中自定义数据源</div>
    </div>
  </div>
</template>

<script setup>
import { TrendingUpOutline } from '@vicons/ionicons5'
</script>

<style lang='scss' scoped>
.defualt {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content:center;
  &__logo {
    margin: 0 auto;
    max-width: 4rem;
    color: #181818;
  }
  &__text{
    max-width: 4rem;
    margin: 0 auto;
    color: #636465;
    font-weight: 600;
    letter-spacing:0.05rem;
    text-align: left;
    & > div{
      margin-top: .1rem;
    }
  }
}
</style>
