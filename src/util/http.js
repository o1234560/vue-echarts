import axios from 'axios'

const http = axios.create({
  /**
   * 未设置baseURL时，默认向当前域名服务器取数据
   * 例如，http://localhost:8080、http://192.168.1.5:8080、等等。
   */
  // baseURL: '/api'
})

export default http
