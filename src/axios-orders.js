import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-app-283ac.firebaseio.com/'
})

export default instance