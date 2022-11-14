// import {getStore, setStore} from '@/util/store'
import {userLogin} from '@/api/base'
const user = {
  state: {
    userInfo:{},
    access_token:'',
  },
  actions: {
    // 根据用户名登录
    LoginByUsername({commit}, userInfo) {
      return new Promise((resolve, reject) => {
        userLogin(userInfo).then(response => {
          commit('SET_ACCESS_TOKEN', response.headers.token)
          commit('SET_USER_INFO', response.data.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
  },
  mutations: {
    SET_ACCESS_TOKEN: (state, access_token) => {
      state.access_token = access_token
    },
    SET_USER_INFO: (state, userInfo) => {
      state.userInfo = userInfo
    },
  }
}
export default user
