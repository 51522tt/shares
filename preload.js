const {contextBridge,ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded',()=>{
  const replaceText = (selector,text)=>{
    const element = document.getElementById(selector)
    if(element)element.innerText=text
  }
 
  for( const dependency of ['chrome','node','electron']){
    replaceText(`${dependency}-version`,process.version[dependency])
  }
})

contextBridge.exposeInMainWorld('$electron',{
  do:()=>console.log(123),
  send:()=> {
    console.log(123)
    ipcRenderer.send('open-file-dialog')
  }
})
