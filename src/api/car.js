import axios from '../utils/http'

const perfix = '/api'

exports.goTarget = (target) => {
  const url = `${perfix}/setTargetPose`
  const data = { targetPose: { position: { ...target, z: 1 }, orientation: { x: 1, y: 2, z: 1 } } }
  return axios.post(url, data)
}
