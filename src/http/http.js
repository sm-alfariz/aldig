import axios from 'axios'
const domain = 'https://api.alquran.cloud/v1/'
export default axios.create({
  baseURL: domain,
  headers: {
    'Content-Type': 'application/json'
  }
})
