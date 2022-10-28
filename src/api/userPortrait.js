import request from './axios'

//用户性别占比
export function selectGenderRatio(query) {
  return request({
    url: '/sgm/api/userportrait/selectGenderRatio',
    method: 'get',
    params: query
  })
}

//用户年龄分布
export function selectAgeDistribution(query) {
  return request({
    url: '/sgm/api/userportrait/selectAgeDistribution',
    method: 'get',
    params: query
  })
}

//用户常驻城市级别分布
export function selectResidentCityLevel(query) {
  return request({
    url: '/sgm/api/userportrait/selectResidentCityLevel',
    method: 'get',
    params: query
  })
}

//用户地域分布
export function selectGeographicalDistribution(query) {
  return request({
    url: '/sgm/api/userportrait/selectGeographicalDistribution',
    method: 'get',
    params: query
  })
}

//用户地域top10
export function selectGeographicalDistributionTop(query) {
  return request({
    url: '/sgm/api/userportrait/selectGeographicalDistributionTop',
    method: 'get',
    params: query
  })
}


//购车城市级别分布
export function selectCarPurchasingCityLevel(query) {
  return request({
    url: '/sgm/api/userportrait/selectCarPurchasingCityLevel',
    method: 'get',
    params: query
  })
}

//购车地域分布
export function selectVehiclePurchasingRegion(query) {
  return request({
    url: '/sgm/api/userportrait/selectVehiclePurchasingRegion',
    method: 'get',
    params: query
  })
}

//购车地域top15
export function selectVehiclePurchasingRegionTop(query) {
  return request({
    url: '/sgm/api/userportrait/selectVehiclePurchasingRegionTop',
    method: 'get',
    params: query
  })
}

//购车年龄分布
export function selectCarPurchaseAge(query) {
  return request({
    url: '/sgm/api/userportrait/selectCarPurchaseAge',
    method: 'get',
    params: query
  })
}

//购车时间
export function selectCarPurchaseTime(query) {
  return request({
    url: '/sgm/api/userportrait/selectCarPurchaseTime',
    method: 'get',
    params: query
  })
}


