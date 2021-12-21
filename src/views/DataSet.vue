<template>
  <div class='dataset' >
    <div class='dataset__list'>

      <div class="dataset__list__dataset">
        <div class="dataset__list__dataset__title">数据集</div>
        <div class="dataset__list__dataset__listing">
          <div
            class="dataset__list__dataset__listing__item"
            @click="handleData"
          >
            默认数据集（All）
          </div>
        </div>
      </div>
      
    </div>
          <div class='dataset__list__source'>
        <div class='dataset__list__dataset__title'>
          需求列表
        </div>
        <div class='dataset__list__dataset__listing'>
          <div class='dataset__list__dataset__listing__item' @click='router.push("/dataset/xq1")'>
          R、Y 每日变化 
          </div>
          <div class='dataset__list__dataset__listing__item' @click='router.push("/dataset/xq2")'>
          标签(R)每日平均值
          </div>
          <div class='dataset__list__dataset__listing__item' @click='router.push("/dataset/xq3")'>
          标签(Y)每日平均值
          </div>
          <div class='dataset__list__dataset__listing__item' @click='router.push("/dataset/xq4")'>
          S区间(R)每日平均值
          </div>
          <div class='dataset__list__dataset__listing__item' @click='router.push("/dataset/xq5")'>
          S区间(Y)每日平均值
          </div>
          <div class='dataset__list__dataset__listing__item' @click='router.push("/dataset/xq6")'>
          R、Y 趋势查询
          </div>
        </div>
      </div>
    <div class='dataset__content'>
      <router-view />
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()


</script>

<style lang='scss' scoped>
.dataset{
  color:#ffffff;
  display: flex;
  height: 100%;
  &__list{
     border-right: 1px solid #303030;
    max-width: 1.5rem;
    min-width: 1.5rem;
    flex: auto;
    background-color: #383838;
    display: flex;
    flex-direction: column;
    &__dataset{
      flex: 1;
        border-bottom:.01rem solid #202020 ;
      &__title{
        color: #b1b2b5;
        font-weight: 600;
        padding:.05rem .05rem .05rem .1rem;
      }
      &__listing{
        &__item{
          padding:0 .1rem;
        }
        &__item:hover {
          background-color: #474747;
          cursor:pointer;
        }
      }
    }
    &__source{
      min-width: 1.8rem;
      border-bottom:.01rem solid #202020 ;
    }
  }
  &__content{
    flex: 1;
    background-color: #202020;
  }
}
</style>
