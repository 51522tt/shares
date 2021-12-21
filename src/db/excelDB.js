import * as baseDB from './baseDB'
const EXCEL_STORE_CONFIG = {
  storeName: 'dataset'
}

// 查询数据

export function getById (id) {
  return new Promise((resolve, reject) => {
    baseDB.store(EXCEL_STORE_CONFIG.storeName).getById(id).then(e => {
      resolve(e)
    }).catch(e => {
      reject(e)
    })
  })
}
export function getAllByFileName (key) {
  return new Promise((resolve, reject) => {
    baseDB.store(EXCEL_STORE_CONFIG.storeName).index('file_name').getAllByIndexName(key).then(e => {
      resolve(e)
    }).catch(e => {
      reject(e)
    })
  })
}

export function getAllByTag (key) {
  return new Promise((resolve, reject) => {
    baseDB.store(EXCEL_STORE_CONFIG.storeName).index('tag').getAllByIndexName(key).then(e => {
      resolve(e)
    }).catch(e => {
      reject(e)
    })
  })
}



// 新增数据
export function insert (obj) {
  return new Promise((resolve, reject) => {
    baseDB.store(EXCEL_STORE_CONFIG.storeName).insert(obj).then(e => {
      resolve(e)
    }).catch(e => {
      reject(e)
    })
  })
}

/**
 * 更新数据
 * @param   obj  包含被修改数据的ID 
 * @returns None
 */
export function update (obj) {
  return new Promise((resolve, reject) => {
    baseDB.store(EXCEL_STORE_CONFIG.storeName).update(obj).then(e => {
      resolve(e)
    }).catch(e => {
      reject(e)
    })
  })

}

// 删除数据
export function deleteByIdList (ids) {
  return new Promise((resolve, reject) => {
    baseDB.store(EXCEL_STORE_CONFIG.storeName).delete(ids).then(e => {
      resolve(e)
    }).catch(e => {
      reject(e)
    })
  })
}


export async function getAll () {
  let result = await baseDB.store(EXCEL_STORE_CONFIG.storeName).getAllNew()
  resultHandle.value = result
  return resultHandle
}

export async function getAllByCode (key) {
  let result = await baseDB.store(EXCEL_STORE_CONFIG.storeName).index('code').getAllByIndexName(key)
  resultHandle.value = result
  return resultHandle
}

class ResultHandle {
  value = null;
  where (e) {
    let tempResult = []
    this.value.forEach(el => {
      for (let key in e) {
        if (el[key] === e[key]) tempResult.push(el)
      }
    });
    this.value = e ? tempResult : this.value
    return this
  }
  group (key) {
    let tempResult = []
    this.value.forEach(el => {
      tempResult[el[key]] = tempResult[el[key]] || []
      tempResult[el[key]].push(el)
    });
    this.value = key ? tempResult : this.value
    return this
  }
  bettwn (obj) {
    let tempResult = []
    let isPass = true
    this.value.forEach(e => {
      for (let key in obj) {
        if ( !obj[key].min 
              && !obj[key].max
                && e[key] >  obj[key].min 
                  && e[key] <  obj[key].max  ){
            isPass = false
            break
        }
        // if (obj[key].min) {
        //   if (!(e[key] > parseFloat(obj[key].min))) {
        //     isPass = false
        //     break
        //   } else if (obj[key].max) {
        //     if (!(e[key] < parseFloat(obj[key].max))) {
        //       isPass = false;
        //       break
        //     }
        //   }
        // }
        isPass = true
      }
      if (isPass) tempResult.push(e)
    })
    this.value = obj ? tempResult : this.value
    return this
  }
  diyHandle (handel) {
    this.value = handel(this.value) || this.value
    return this
  }
}



const resultHandle = new ResultHandle()
