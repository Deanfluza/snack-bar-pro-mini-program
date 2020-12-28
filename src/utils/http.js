// wepy not support axios module, so add the axios that alreayd build
import axios from './axios/axios'

const baseURL = 'http://192.168.8.103:3001'

axios.defaults.adapter = function(config) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + config.url,
      method: config.method,
      data: config.data,
      success: (res) => {
        // 兼容 axios status 属性
        res.status = res.statusCode
        // 避免错误码逻辑放在 success 处理
        if (res.status >= 400) {
          let err = { response: null }
          err.response = res
          return reject(err)
        }
        return resolve(res)
      },
      fail: (err) => {
        return reject(err)
      },
      complete: res => {
        // TODO:
      }
    })
  })
}

export default axios
