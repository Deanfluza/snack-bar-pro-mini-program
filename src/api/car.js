import axios from '../utils/http'

const perfix = '/api'

exports.goTarget = (target) => {
  const url = `${perfix}/setTargetPose`
  const data = { targetPose: target }
  return axios.post(url, data)
}

exports.getCarReachStatus = () => {
  const url = `${perfix}/move_base/result`
  return axios.get(url)
}
