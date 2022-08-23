import axios from 'axios'
import{baseUrl} from './Components/Constants/constants'

const instance = axios.create({
    baseURL: baseUrl,
  });

  export default instance;