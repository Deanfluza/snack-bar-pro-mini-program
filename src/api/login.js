import axios from '../utils/http'

const prefix = '/api'

exports.login = (code) => {
  const url = `${prefix}/login?code=${code}`
  return axios.get(url)
}
