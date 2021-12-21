<template>
      <div id="xq"></div>
</template>

<script setup>
import * as excelDB from '@/db/excelDB'
import {computCount,groupHandle,jsonToArr} from '@/utils/dataUtil'
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'
onMounted(async (e) => {
  let a = (await excelDB.getAllByCode()).value
  console.log('result', a)
  let b = groupHandle(a,'date')
  let datelist = []
  let valuelistR = []
  let valuelistY = []
  console.log('b', b)
  for(let key in b){
    datelist.push(key)
    valuelistR.push(computCount(jsonToArr(b[key],'R')))
    valuelistY.push(computCount(jsonToArr(b[key],'Y')))
  }
  console.log('valuelistR', valuelistR)
  console.log('valuelistY', valuelistY)
  var myChart = echarts.init(document.getElementById('xq'));
  var option = {
    xAxis: {
      type: 'category',
      data: datelist
    },
    yAxis: {
      type: 'value'
    },
    legend: {
      data: ['R', 'Y'],
      left: 10
    },
    series: [
      {
        name: 'R',
        data: valuelistR,
        type: 'line'
      },
      {
        name: 'Y',
        data: valuelistY,
        type: 'line'
      }
    ]
  };
  myChart.setOption(option);
  window.onresize = function() {
    myChart.resize()
  }

})


const handleData = async () => {
  let a = (await excelDB.getAll()).value
  console.log(a)
}
</script>

<style lang='scss' scoped>
#xq {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
</style>
