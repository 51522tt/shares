<template>
  <div class="content">
    <div class="content__search">
      <n-input
        class="content__search__code"
        size="small"
        v-model:value="code"
        type="text"
        placeholder="识别码"
        clearable
      />
      <div class="content__search__r">
        <n-input-number
          class="content__search__r__item"
          size="small"
          placeholder="R最小值"
          v-model:value="r[0]"
          clearable
        />
        <span class="content__search__r__item__j">--</span>
        <n-input-number
          class="content__search__r__item"
          size="small"
          placeholder="R最大值"
          v-model:value="r[1]"
          clearable
        />
      </div>
      <div class="content__search__r">
        <n-input-number
          class="content__search__r__item"
          size="small"
          placeholder="Y最小值"
          v-model:value="y[0]"
          clearable
        />
        <span class="content__search__r__item__j">--</span>
        <n-input-number
          class="content__search__r__item"
          size="small"
          placeholder="Y最大值"
          v-model:value="y[1]"
          clearable
        />
        <n-button size="small" type="info" @click="handleSearch">搜索</n-button>
      </div>
    </div>
    <div id="xq">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" />
    </div>
  </div>
</template>

<script setup>
import * as excelDB from '@/db/excelDB'
import {
  computCount,
  groupHandle,
  jsonToArr,
  computAvg,
} from '@/utils/dataUtil'
import * as echarts from 'echarts'
import { ref, onMounted,reactive } from 'vue'
const r = reactive([])
const y = reactive([])
const data = ref([])
const columns = reactive([
    {
      title:'识别码',
      key: '识别码',
      align: 'center'
    },
    {
      title:'tag',
      key: 'tag'
    }
    ,
    {
      title:'价格',
      key: '价格'
    },
    {
      title:'动态市盈率',
      key: '动态市盈率'
    },
    {
      title:'成交额',
      key: '成交额'
    },
    {
      title:'总市值',
      key: '总市值'
    },
    {
      title:'流通',
      key: '流通'
    },
    {
      title:'换手',
      key: '换手'
    },
    {
      title:'股东数',
      key: '股东数'
    },
    {
      title:'file_name',
      key: 'file_name'
    },
    {
      title:'code',
      key: 'code'
    },
    {
      title:'date',
      key: 'date'
    },
    {
      title:'R',
      key: 'R'
    },
    {
      title:'Y',
      key: 'Y'
    }])


const code = ref('000566')
const handleSearch = async (e)=>{
  code.value =  code.value === '' ? null:code.value
  let result = (await excelDB.getAllByCode(code.value)).bettwn({
    R:{min:r[0],max:r[1]},
    Y:{min:y[0],max:y[1]}
  }).value
  console.log('搜索',result)
  data.value = result
}
onMounted(async (e) => {})
</script>

<style lang='scss' scoped>
#xq {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
.content {
  padding: 0.08rem  0.08rem 0  0.08rem;
  &__search {
    display: flex;
    &__code {
      max-width: 3rem;
      min-width: 3rem;
      margin-bottom: 0.08rem;
      margin-right: 0.1rem;
    }
    &__r {
      display: flex;
      margin-bottom: 0.08rem;
      &__item {
        margin-right: 0.1rem;
        width: 1.34rem;
        &__j {
          margin-right: 0.1rem;
        }
      }
    }
  }
}
</style>
