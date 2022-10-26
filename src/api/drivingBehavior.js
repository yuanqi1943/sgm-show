import request from './axios'

//获取平均里程分配
export function getAverageMileageDistribution(query) {
  return request({
    url: '/sgm/api/drive/getAverageMileageDistribution',
    method: 'get',
    params: query
  })
}

//选择快速加速的累积时间
export function selectAccumulatedTimesOfRapidAcceleration(query) {
  return request({
    url: '/sgm/api/drive/selectAccumulatedTimesOfRapidAcceleration',
    method: 'get',
    params: query
  })
}

//选择实际里程
export function selectActualMileage(query) {
  return request({
    url: '/sgm/api/drive/selectActualMileage',
    method: 'get',
    params: query
  })
}

//选择年度最大里程
export function selectAnnualMaximumMileage(query) {
  return request({
    url: '/sgm/api/drive/selectAnnualMaximumMileage',
    method: 'get',
    params: query
  })
}

//选择年度最高速度
export function selectAnnualMaximumSpeed(query) {
  return request({
    url: '/sgm/api/drive/selectAnnualMaximumSpeed',
    method: 'get',
    params: query
  })
}

//选择平均每日驾驶时间
export function selectAverageDailyDrivingTime(query) {
  return request({
    url: '/sgm/api/drive/selectAverageDailyDrivingTime',
    method: 'get',
    params: query
  })
}

//选择平均每日里程
export function selectAverageDailyMileage(query) {
  return request({
    url: '/sgm/api/drive/selectAverageDailyMileage',
    method: 'get',
    params: query
  })
}

//选择平均每日出行频率
export function selectAverageDailyTravelFrequency(query) {
  return request({
    url: '/sgm/api/drive/selectAverageDailyTravelFrequency',
    method: 'get',
    params: query
  })
}

//选择每次驾驶的平均速度
export function selectAverageSpeedOfEachDriving(query) {
  return request({
    url: '/sgm/api/drive/selectAverageSpeedOfEachDriving',
    method: 'get',
    params: query
  })
}

//选择耐力的转化率
export function selectConversionRatioOfEndurance(query) {
  return request({
    url: '/sgm/api/drive/selectConversionRatioOfEndurance',
    method: 'get',
    params: query
  })
}

//选择每日累积里程
export function selectDailyAccumulatedMileage(query) {
  return request({
    url: '/sgm/api/drive/selectDailyAccumulatedMileage',
    method: 'get',
    params: query
  })
}

//选择每日累计出行频率
export function selectDailyAccumulativeTravelFrequency(query) {
  return request({
    url: '/sgm/api/drive/selectDailyAccumulativeTravelFrequency',
    method: 'get',
    params: query
  })
}

//选择驾驶风格
export function selectDrivingStyle(query) {
  return request({
    url: '/sgm/api/drive/selectDrivingStyle',
    method: 'get',
    params: query
  })
}

//选择高速比
export function selectHighSpeedRatio(query) {
  return request({
    url: '/sgm/api/drive/selectHighSpeedRatio',
    method: 'get',
    params: query
  })
}

//怠速或低速比
export function selectIdleOrLowSpeedRatio(query) {
  return request({
    url: '/sgm/api/drive/selectIdleOrLowSpeedRatio',
    method: 'get',
    params: query
  })
}

//选择第二次驾驶的最大加速度
export function selectMaximumAccelerationOfSecondDriving(query) {
  return request({
    url: '/sgm/api/drive/selectMaximumAccelerationOfSecondDriving',
    method: 'get',
    params: query
  })
}

//选择第二次驾驶的最高速度
export function selectMaximumSpeedOfTheSecondDriving(query) {
  return request({
    url: '/sgm/api/drive/selectMaximumSpeedOfTheSecondDriving',
    method: 'get',
    params: query
  })
}

//选择每月累积里程
export function selectMonthlyAccumulatedMileage(query) {
  return request({
    url: '/sgm/api/drive/selectMonthlyAccumulatedMileage',
    method: 'get',
    params: query
  })
}

//百公里耗电
export function selectPowerConsumptionHundred(query) {
  return request({
    url: '/sgm/api/drive/selectPowerConsumptionHundred',
    method: 'get',
    params: query
  })
}

//每百公里耗电
export function selectPowerConsumptionPerHundred(query) {
  return request({
    url: '/sgm/api/drive/selectPowerConsumptionPerHundred',
    method: 'get',
    params: query
  })
}

//居住和最远充电距离
export function selectResidenceAndFarthestChargingDistance(query) {
  return request({
    url: '/sgm/api/drive/selectResidenceAndFarthestChargingDistance',
    method: 'get',
    params: query
  })
}

//二驱SOC分布
export function selectSOCDistributionOfTheSecondDrive(query) {
  return request({
    url: '/sgm/api/drive/selectSOCDistributionOfTheSecondDrive',
    method: 'get',
    params: query
  })
}

//单次充电里程
export function selectSingleChargeMileage(query) {
  return request({
    url: '/sgm/api/drive/selectSingleChargeMileage',
    method: 'get',
    params: query
  })
}

//单次驾驶时间
export function selectSingleDrivingDuration(query) {
  return request({
    url: '/sgm/api/drive/selectSingleDrivingDuration',
    method: 'get',
    params: query
  })
}

//热力学分布
export function selectThermodynamicDistribution(query) {
  return request({
    url: '/sgm/api/drive/selectThermodynamicDistribution',
    method: 'get',
    params: query
  })
}

//旅行时间
export function selectTravelTime(query) {
  return request({
    url: '/sgm/api/drive/selectTravelTime',
    method: 'get',
    params: query
  })
}
