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
  let a = (await excelDB.getAll()).diyHandle(e => {
    var SR = {
      '<100': {},
      '<300': {},
      '<500': {},
      '<1000': {},
      '<1500': {},
      '<2000': {},
      '<3000': {},
      '<4000': {},
      '<5000': {},
      '5000+': {}
    }
    e.forEach(el => {
      let S = parseFloat(el['R']) || 0
      let date = el.date
      if (S < 100) {
        SR['<100'][date] = SR['<100'][date] || []
        SR['<100'][date].push(S)
      } else if (S < 300) {
        SR['<300'][date] = SR['<300'][date] || []
        SR['<300'][date].push(S)
      } else if (S < 500) {
        SR['<500'][date] = SR['<500'][date] || []
        SR['<500'][date].push(S)
      } else if (S < 1000) {
        SR['<1000'][date] = SR['<1000'][date] || []
        SR['<1000'][date].push(S)
      } else if (S < 1500) {
        SR['<1500'][date] = SR['<1500'][date] || []
        SR['<1500'][date].push(S)
      } else if (S < 2000) {
        SR['<2000'][date] = SR['<2000'][date] || []
        SR['<2000'][date].push(S)
      } else if (S < 3000) {
        SR['<3000'][date] = SR['<3000'][date] || []
        SR['<3000'][date].push(S)
      } else if (S < 4000) {
        SR['<4000'][date] = SR['<4000'][date] || []
        SR['<4000'][date].push(S)
      } else if (S < 5000) {
        SR['<5000'][date] = SR['<5000'][date] || []
        SR['<5000'][date].push(S)
      } else {
        SR['5000+'][date] = SR['5000+'][date] || []
        SR['5000+'][date].push(S)
      }
    })
    for (let key in SR) {
      for (let k in SR[key]) {
        SR[key][k] = computAvg(SR[key][k])
      }
    }
    return SR
  }).value
  console.log('result', a)

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
