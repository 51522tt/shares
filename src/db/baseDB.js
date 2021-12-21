var db = null 
var objectStore = null
var dbIndex=null
const DB_CONFIG = {
  dbName: 'shares',
  dbVersion: 1
}

const createDB = function () {
  return new Promise(function (resolve, reject) {
    let openObejctRequst = window.indexedDB.open(DB_CONFIG.dbName, DB_CONFIG.dbVersion)
    openObejctRequst.onsuccess = function (event) {
      console.log('connet successful!!!')
      resolve(openObejctRequst.result)
    }
    openObejctRequst.onerror = function (event) {
      console.error('数据库连接失败')
      console.log(event)
      reject(event)
    }
    openObejctRequst.onupgradeneeded = function (evet) {
      console.log('数据库发生更新')
      db = openObejctRequst.result
      createStore('dataset', ['file_name', 'code', 'tag', 'date'])
      createStore('tagset', ['tag'])
    }
  })
}


function DB () {
  if (!db) throw new Error('DB未初始化,操作中断！！！')
  return db
}

function createStore (storeName, indexKVs) {
  console.log('create store')
  objectStore = DB().createObjectStore(storeName, { keyPath: 'id' })
  indexKVs.forEach(e => {
    console.log(e)
    objectStore.createIndex(e, e, { unique: false })
  })
}
async function connectDB () {
  console.log('connet to database')
  db = await createDB()
}
export function store (storeName) {
  console.log('current store:', storeName)
  objectStore = DB().transaction([storeName], "readwrite").objectStore(storeName)
  return this
}
export function insert (object) {
  console.log('inserting....')
  return new Promise((resolve, reject) => {
    let request = objectStore.count()
    let objectStoreT = objectStore
    request.onsuccess = function (event) {
      let index = request.result
      object.forEach(element => {
        element.id = ++index
        objectStoreT.add(element)
      });
      console.log('insert successful!!!')
      resolve(event)
    }
    request.onerror = function (event) {
      reject(event)
    }
  })
}



export function index (indexName) {
  dbIndex = objectStore.index(indexName)
  return this
}

export function getAllByIndexName (indexValue) {
  return new Promise((resolve, reject) => {
    let request = dbIndex.getAll(indexValue, 0)
    console.log(request)
    request.onsuccess = function (event) {
      resolve(event.target.result)
    }
    request.onerror = function (event) {
      reject(event)
    }
  })
}


export function getAll () {
  return new Promise((resolve, reject) => {
    let request = objectStore.getAll()
    request.onsuccess = function (event) {
      resolve(event.target.result)
    }
    request.onerror = function (event) {
      reject(event)
    }
  })
}



export function getById (id) {
  return new Promise((resolve, reject) => {
    let request = objectStore.get(id)
    request.onsuccess = function (event) {
      resolve(event.target.result)
    }
    request.onerror = function (event) {
      reject(event)
    }
  })
}

export function update (obj) {
  return new Promise((resolve, reject) => {
    let request = objectStore.put(obj)
    request.onsuccess = function (event) {
      resolve(event.target.result)
    }
    request.onerror = function (event) {
      reject(event)
    }
  })
}

export function getAllNew () {
  return new Promise((resolve, reject) => {
    let request = objectStore.getAll()
    request.onsuccess = function (event) {
      resolve(event.target.result)
    }
    request.onerror = function (event) {
      reject(event)
    }
  })
}


export function del (ids) {
  return new Promise((resolve, reject) => {
    for (let index in ids) {
      let request = objectStore.delete(ids[index])
      request.onsuccess = function (event) {
        resolve(event)
      }
      request.onerror = function (event) {
        reject(event)
      }
    }

  })
}
connectDB()