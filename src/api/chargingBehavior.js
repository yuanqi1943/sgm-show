import request from './axios'

//次充电SOC分布
export function selectSOCDistributionOfSecondaryCharge(query) {
  return request({
    url: '/sgm/api/charge/selectSOCDistributionOfSecondaryCharge',
    method: 'get',
    params: query
  })
}

//次充电电量分布
export function selectSecondaryChargeEnergyDistribution(query) {
  return request({
    url: '/sgm/api/charge/selectSecondaryChargeEnergyDistribution',
    method: 'get',
    params: query
  })
}

//次充电时刻分布
export function selectTimeDistributionOfSecondaryCharging(query) {
  return request({
    url: '/sgm/api/charge/selectTimeDistributionOfSecondaryCharging',
    method: 'get',
    params: query
  })
}

//周充电频次分布
export function selectWeeklyChargingFrequency(query) {
  return request({
    url: '/sgm/api/charge/selectWeeklyChargingFrequency',
    method: 'get',
    params: query
  })
}

//单日充电次数分布
export function selectChargingTimesPerDay(query) {
  return request({
    url: '/sgm/api/charge/selectChargingTimesPerDay',
    method: 'get',
    params: query
  })
}

//充电地点数分布
export function selectNumberOfChargingPoints(query) {
  return request({
    url: '/sgm/api/charge/selectNumberOfChargingPoints',
    method: 'get',
    params: query
  })
}

//最多充电地点占比分布
export function selectPercentageOfMaximumChargingLocations(query) {
  return request({
    url: '/sgm/api/charge/selectPercentageOfMaximumChargingLocations',
    method: 'get',
    params: query
  })
}

//次充电时长分布
export function selectDurationOfEachCharge(query) {
  return request({
    url: '/sgm/api/charge/selectDurationOfEachCharge',
    method: 'get',
    params: query
  })
}

//充电功率分布
export function selectChargingPower(query) {
  return request({
    url: '/sgm/api/charge/selectChargingPower',
    method: 'get',
    params: query
  })
}
