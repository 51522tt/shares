const { contextBridge, ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const dependency of ['chrome', 'node', 'electron']) {
    replaceText(`${dependency}-version`, process.version[dependency])
  }
})

contextBridge.exposeInMainWorld('$electron',{
  title:'股票分析'
})

window.ipcRenderer = ipcRenderer


