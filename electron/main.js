const {app,BrowserWindow,ipcMain,dialog } = require('electron')
const path = require('path')
const NODE_ENV = process.env.NODE_ENV
function createWindow(){
  const mainWindow = new BrowserWindow({
    witdh:800,
    height:600,
    webPreferences:{
      frame: false,
      nodeIntegration: true,
      contextIsolation:false,
      preload:path.join(__dirname,'preload.js')
    }
  })
  // mainWindow.loadFile('dist/index.html')
  mainWindow.loadURL(
    NODE_ENV === 'development'
      ? 'http://localhost:3000'
      :`file://${path.join(__dirname, '../dist/index.html')}`
  );
  if (NODE_ENV === "development") {
    mainWindow.webContents.openDevTools()
  }
  ipcMain.on('window-all-closed',(event,arg)=>{
    if(process.platform !== 'darwin')mainWindow.close()
  })
}

app.whenReady().then(()=>{
  createWindow()
  app.on('avtivate',()=>{
    if(BrowserWindow.getAllWindows().length===0)createWindow()
  })

  app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin')app.quit()
  })
})

ipcMain.on('open-file-dialog', (event,arg) => {
  console.log('open-file-dialog',arg)
  dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'],filters: [
      { name: 'Excel', extensions: ['xlsx'] }
      // {name:'Text',extensions:['txt']}
    ]}).then((e)=>{
      console.log(e.canceled)
      if(!e.canceled){
          event.sender.send('reply',e.filePaths)
      }else{
          console.log('取消了')
      }
  })
})

