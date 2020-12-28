import axios from '../utils/http'

const perfix = '/api'

exports.goTarget = (target) => {
  const url = `${perfix}/setTargetPose`
  const data = { targetPose: target}
  return axios.post(url, data)
}
exports.backHome = () => {
  const url = `${perfix}/setTargetPose`
  const data = { targetPose: this.$wx.globalData.homePose }
  return axios.post(url, data)
}
