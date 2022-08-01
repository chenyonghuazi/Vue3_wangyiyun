//封装axios
import axios from 'axios'

//创建实例
export default axios.create({
    baseURL:"http://localhost:3000",
    timeout:3000,
})

