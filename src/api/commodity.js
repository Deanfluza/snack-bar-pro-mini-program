import axios from '../utils/http'

const perfix = '/api'

exports.getAllCommodity = () => {
  const url = `${perfix}/commodity`
  return axios.get(url)
}
