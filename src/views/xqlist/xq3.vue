<template>
  <div id="xq"></div>
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
import { ref, onMounted } from 'vue'
onMounted(async (e) => {
  
  let a = (await excelDB.getAll()).group('tag').diyHandle((e) => {
    for (let k in e) {
      e[k] = groupHandle(e[k], 'date')
      for (let i in e[k]) {
        e[k][i] = computAvg(jsonToArr(e[k][i], 'Y'))
      }
    }
    return e
  }).value
  var seriesa = []
  var taglist = []
  var datelist = []
  for (let key in a) {
    for (let k in a[key]) {
      datelist.push(k)
    }
    break
  }

  for (let key in a) {
    taglist.push(key)
    let tempObj = {}
    tempObj['name'] = key
    tempObj['type'] = 'line'
    tempObj['stack'] = 'Total'
    tempObj['data'] = []
    for (let k in a[key]) {
      tempObj['data'].push(a[key][k])
    }
    seriesa.push(tempObj)
  }

  console.log('a', a)

  var myChart = echarts.init(document.getElementById('xq'))
  var option = {
    title: {
      text: 'Stacked Line',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: taglist,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: datelist,
    },
    yAxis: {
      type: 'value',
    },
    series: seriesa,
  }
  myChart.setOption(option)
  // window.addEventListener("resize", function () {}
  window.onresize = function () {
    myChart.resize()
  }
})
</script>

<style lang='scss' scoped>
#xq {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
}
</style>
