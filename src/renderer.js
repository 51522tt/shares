const { ipcRenderer } = require('electron')
const xlsx = require('node-xlsx');
const fs = require('fs')
import * as excelDB from './db/excelDB'
window['ipcRenderer']=ipcRenderer

ipcRenderer.on('reply',(event,arg)=>{
  console.log('reply', arg)
  arg.forEach(filePath => {
    // Mac os
    // const fileName = filePath.split('/').pop()
    // Win os
    const fileName = filePath.split('\\').pop()
    console.log(`filePath：${filePath}`,)
    console.log(`fileName: ${fileName}`,)
    var dataTime = handleFileName(fileName)
    const sheets = xlsx.parse(fs.readFileSync(filePath));
    // 遍历 sheet
    sheets.forEach(sheet => {
      var excelObjArr = []
      sheet.data.forEach(row => {
        let excelObj = {}
        sheet.data[0].forEach((e, i) => {
          excelObj[e] = handle(row[i])
        })
        excelObj['file_name'] = fileName
        excelObj['code'] = getExecStrs(excelObj['识别码'], /[0-9]{6}/g)
        excelObj['date'] = dataTime
        excelObj['R'] = excelObj['总市值'] / excelObj['股东数'],
          excelObj['Y'] = excelObj['流通'] / excelObj['股东数'],
          excelObj['tag'] = handleTag(excelObj['code'])
        excelObjArr.push(excelObj)
      })
      excelObjArr.splice(0, 1)
      //存入数据库
      excelDB.insert(excelObjArr)
    })
  })
})
// 解析识别码
function handleTag(str) {
  let regs = [
    { reg: /^(60)[0-9]{4}/g, tag: '沪A' },
    { reg: /^(688)[0-9]{3}/g, tag: '科创' },
    { reg: /^(00)[0-9]{4}/g, tag: '深A' },
    { reg: /^(30)[0-9]{4}/g, tag: '创业' },
    { reg: /^[0-9]{6}/g, tag: '其他' },
  ]
  for (let index in regs) {
    if (regs[index].reg.exec(str)) {
      return regs[index].tag
    }
  }
  return null
}
function handle(str) {
  if (str != '--') {
    return getExecStrs(str, /[0-9]*\.[0-9]*/g)
  }
  return 0
}

function getExecStrs(str, reg) {
  var result = reg.exec(str)
  if (!result) {
    return str
  }
  return result[0]
}

// 解析表格名称
function handleFileName(fileName) {
  var result = getExecStrs(fileName, /[0-9]*\.[0-9]*/g)
  console.log(`filename 年：${result.slice(0, 1)} 月：${result.slice(1, 3)} 日：${getExecStrs(fileName, /\.[0-9]*/g).split('.')[1]}`,)
  return `${'202' + result.slice(0, 1)}/${result.slice(1, 3)}/${getExecStrs(fileName, /\.[0-9]*/g).split('.')[1]}`
}