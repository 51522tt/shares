<template>
  <div class="systems">
    <div class="systems__links">
      <div class="systems__links__title">
        <span class="title">最近使用</span>
        <n-divider title-placement="left" class="line"></n-divider>
      </div>
      <div class="systems__links__title">
        <span class="title">内部系统</span>
        <n-divider title-placement="left" class="line"></n-divider>
      </div>
      <div class="systems__links__box">
        <n-card
          :title="tool.title"
          size="small"
          class="systems__links__box__item desc"
          hoverable
          v-for="tool in innerlist"
          :key="tool"
        >
          {{ tool.desc }}
        </n-card>
      </div>
    </div>
    <div class="systems__links">
      <div class="systems__links__title">
        <span class="title">外部系统</span>
        <n-divider title-placement="left" class="line"></n-divider>
      </div>
      <div class="systems__links__box">
        <n-tooltip placement="bottom" trigger="hover" v-for="tool in externallist"  :key="tool">
          <template #trigger>
            <n-card
              :title="tool.title"
              size="small"
              class="systems__links__box__item desc"
              hoverable
              header-style="padding:.12rem .12rem .08rem .12rem "
              content-style="padding:.0rem .12rem .12rem .12rem;font-size:.1rem;overflow: hidden;text-overflow: ellipsis;"
              @click='handleClick( tool.url )'
            >
              {{ tool.desc }}
            </n-card>
          </template>
          <span class='hidedesc'>{{ tool.desc}}</span>
        </n-tooltip >
        
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const toollist = store.state.toollist
const innerlist = toollist.inner
const externallist = toollist.external
const handleClick = url => {
  window.open(url)
}
</script>

<style lang='scss' scoped>
@import '@/style/mixins.scss';
.systems {
  @include baseBroder;
  padding: 0.16rem;
  &__links {
    &__title {
      display: flex;
      .title {
        font-size: 0.1rem;
        line-height: 0.49rem;
      }
      .line {
        flex: 1;
      }
    }
    &__box {
      display: flex;
      &__item {
        @include baseBroder;
        cursor: pointer;
        margin-right: 0.05rem;
        padding: 0;
        width: 2rem;
        .desc {
          font-size: 0.06rem;
        }
      }
    }
  }
}

</style>
