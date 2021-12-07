// import requets from '../utils/requets.js'
import axios from 'axios'

const getUser = (param)=>{
  return axios.get('http://127.0.0.1:444/user',param)
}

export {
  getUser
}