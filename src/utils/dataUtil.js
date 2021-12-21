export function computAvg(arr) {
  let sum = 0
  arr.forEach(e => {
    sum += parseFloat(e)
  })
  return sum / arr.length
}
export function computCount(arr) {
  let sum = 0
  arr.forEach(e => {
    sum += parseFloat(e)
  })
  return sum
}
export function jsonToArr(obj, key) {
  let tempArr = []
  obj.forEach(e => {
    let val = e[key] || 0
    tempArr.push(val)
  })
  return tempArr
}
export function groupHandle(obj, key) {
  let tempResult = []
  obj.forEach(el => {
    tempResult[el[key]] = tempResult[el[key]] || []
    tempResult[el[key]].push(el)
  });
  return tempResult
}