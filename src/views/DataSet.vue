<template>
  <div class='dataset' >
    <div class='dataset__list'>
      <div class='dataset__list__dataset'>
        <div class='dataset__list__dataset__title'>
          数据集
        </div>
        <div class='dataset__list__dataset__listing'>
          <div class='dataset__list__dataset__listing__item'>默认数据集（All）</div>
          <div class='dataset__list__dataset__listing__item'>1</div>
          <div class='dataset__list__dataset__listing__item'>1</div>
          <div class='dataset__list__dataset__listing__item'>1</div>
        </div>
      </div>
      <div class='dataset__list__source'>
         <div class='dataset__list__dataset__title'>
          数据源
        </div>
        <div class='dataset__list__dataset__listing'>
          <div class='dataset__list__dataset__listing__item'>104.1数据.xlsx</div>
          <div class='dataset__list__dataset__listing__item'>1</div>
          <div class='dataset__list__dataset__listing__item'>1</div>
          <div class='dataset__list__dataset__listing__item'>1</div>
        </div>
      </div>
    </div>
    <div class='dataset__content'>123</div>
  </div>
</template>

<script setup>

</script>

<style lang='scss' scoped>
.dataset{
  color:#ffffff;
  display: flex;
  height: 100%;
  &__list{
    max-width: 1.8rem;
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
      flex: 1;
      border-bottom:.01rem solid #202020 ;
    }
  }
  &__content{
    flex: 1;
    background-color: #202020;
  }
}
</style>
