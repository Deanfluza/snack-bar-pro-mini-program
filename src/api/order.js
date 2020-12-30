import axios from '../utils/http'

const perfix = '/api'

exports.createOrder = (order) => {
  const url = `${perfix}/orders`
  return axios.post(url, order)
}

exports.getAllOrders = () => {
  const url = `${perfix}/orders`
  return axios.get(url)
}

exports.updateOrder = (order) => {
  const url = `${perfix}/orders`
  order['_id'] = order.orderNumber
  return axios.put(url, order)
}
