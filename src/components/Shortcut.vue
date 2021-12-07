<template>
  <div class="shortcut">
    <div class="shortcut__title">快捷操作</div>
    <div class="shortcut__box">
      <n-button
        size="tiny"
        class="shortcut__box__item"
        type="primary"
        v-for="shortcut in shortcutList"
        :key="shortcut"
        dashed
        @click="handleClick(shortcut.name)"
        >{{ shortcut.name }}</n-button
      >

      <n-button size="tiny" strong round type="primary" @click="addStortcut()"
        >+ 新增快捷方式</n-button
      >
    </div>
  </div>
</template>

<script setup>
import { useMessage } from 'naive-ui'
import { getShortcut } from '@/api/shortcut.js'
const message = useMessage()
const shortcutList = getShortcut()
const handleClick = (val) => {
  message.info(val)
}
const addStortcut = () => {
  message.info('+ 新增快捷方式')
}
</script>

<style lang='scss' scoped>
.shortcut {
  padding: 0.16rem;
  &__title {
    border-bottom: 0.01px solid rgb(199, 199, 199);
  }
  &__box {
    display: flex;
    flex-wrap: wrap;
    * {
      margin: 0.08rem 0.08rem 0 0;
    }
  }
}
</style>