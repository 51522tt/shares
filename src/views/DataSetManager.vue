<template>
  <div class="datasetmanager">
    <div class="datasetmanager__list">
      <div class="datasetmanager__list__datasetmanager">
        <div class="datasetmanager__list__datasetmanager__title">
          <span class="text"> 数据集 </span>
          <n-button class="btn" type="primary">新增数据集</n-button>
        </div>
        <div class="datasetmanager__list__datasetmanager__listing">
          <div class="datasetmanager__list__datasetmanager__listing__item">
            默认数据集（All）
          </div>
          <div class="datasetmanager__list__datasetmanager__listing__item">
            1
          </div>
          <div class="datasetmanager__list__datasetmanager__listing__item">
            1
          </div>
          <div class="datasetmanager__list__datasetmanager__listing__item">
            1
          </div>
        </div>
      </div>
    </div>
    <div class="datasetmanager__content">
      <div class='tips'> 
        新增数据集
      </div>
      <div class="datasetmanager__content__box">
        <n-button id='uploaded' class="btn" type="primary" @click='handleClick'>从本地上传</n-button>
        <n-button class="btn" type="primary">从已上传列表中选择</n-button>
        <div class="sources__box">
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  // window.$ipcRenderer.send('open-file-dialog')
  // window.$aaa.do()
  window.$electron.send()

const handleClick = e=>{
 console.log('本地上传')
}
</script>

<style lang='scss' scoped>
.tips {
  font-size: .11rem;
  color: #b4b4b4;
  padding: .03rem .03rem .03rem .1rem;
}
.datasetmanager {
  color: #ffffff;
  display: flex;
  height: 100%;
  &__list {
    max-width: 1.8rem;
    flex: auto;
    background-color: #383838;
    display: flex;
    flex-direction: column;
    &__datasetmanager {
      flex: 1;
      border-bottom: 0.01rem solid #202020;
      &__title {
        padding: 0.05rem 0.05rem 0.05rem 0.1rem;
        display: flex;
        .text {
          flex: 1;
          color: #b1b2b5;
          font-weight: 600;
          font-size: .15rem;
        }
        .btn {
          height: 0.2rem;
          font-size: 0.12rem;
        }
      }
      &__listing {
        &__item {
          padding: 0 0.1rem;
        }
        &__item:hover {
          background-color: #474747;
          cursor: pointer;
        }
      }
    }
  }
  &__content {
    flex: 1;
    background-color: #202020;
    &__box{
      padding-left: .10rem;
      // height: 100%;
      .btn{
        height: .2rem;
        margin-right: .07rem;
      }
    }
  }
}
</style>
