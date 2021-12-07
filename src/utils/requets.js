import axios  from 'axios'

const get = (url,param,header) => {
  axios.get(url,param = {},header ={}).then((req)=>{
    console.log(req)
    return req
  }).catch((e)=>{
    console.log(e)
    return null
  })
}

export {
  get
}