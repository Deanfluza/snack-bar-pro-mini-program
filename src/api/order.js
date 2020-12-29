import axios from '../utils/http'

const perfix = '/api'

exports.createOrder = (order) => {
  const url = `${perfix}/orders`
  return axios.post(url, order)
}
