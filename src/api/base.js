import request from './axios'

//登录
export function userLogin(query) {
  return request({
    url: '/sgm/api/admin/user/login',
    method: 'post',
    data: query
  })
}

//获取角色列表
export function getRoleList(query) {
  return request({
    url: '/sgm/api/admin/user/getRoleList',
    method: 'get',
    params: query
  })
}

//获取用户信息
export function getUserInfo(query) {
  return request({
    url: '/sgm/api/admin/user/getUsers',
    method: 'get',
    params: query
  })
}

//获取全部权限和已分配权限
export function getModuleTreeList(query) {
  return request({
    url: '/sgm/api/admin/role/getModuleTreeList',
    method: 'get',
    params: query
  })
}

//新增/编辑角色
export function saveOrUpdateRole(query) {
  return request({
    url: '/sgm/api/admin/role/saveOrUpdateRole',
    method: 'post',
    data: query
  })
}

//保存权限
export function saveRoleModule(query) {
  return request({
    url: '/sgm/api/admin/role/saveRoleModule',
    method: 'post',
    data: query
  })
}


