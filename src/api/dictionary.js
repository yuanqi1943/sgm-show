import request from './axios'

//基础信息
export function selectBaseInfoListTree(query) {
  return request({
    url: 'sgm/api/base/selectBaseInfoListTree',
    method: 'get',
    params: query
  })
}

