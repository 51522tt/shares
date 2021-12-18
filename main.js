const {app,BrowserWindow,ipcMain,dialog } = require('electron')
const path = require('path')
function createWindow(){
  const mainWindow = new BrowserWindow({
    witdh:800,
    height:600,
    webPreferences:{
      preload:path.join(__dirname,'preload.js')
    }
  })

  // mainWindow.loadFile('dist/index.html')
  mainWindow.loadURL('http://127.0.0.1:3000')
  mainWindow.webContents.openDevTools();
}
ipcMain.on('open-file-dialog', (event) => {
  console.log(444)
})

app.whenReady().then(()=>{
  createWindow()
  app.on('avtivate',()=>{
    if(BrowserWindow.getAllWindows().length===0)createWindow()
  })

  app.on('window-all-closed',()=>{
    if(process.platform !== 'darwin')app.quit()
  })
})

