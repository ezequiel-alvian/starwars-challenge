import Axios from 'axios'

const clientAxios = Axios.create({
  baseURL: process.env.REACT_APP_API_STAR_WARS
})

export default clientAxios
