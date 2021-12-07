// import requets from '../utils/requets.js'
import axios from 'axios'

const getMeuns = (param)=>{
  return axios.get('http://127.0.0.1:444/meuns',param)
}

export {
  getMeuns
}