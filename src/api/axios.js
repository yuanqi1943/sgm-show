import axios from 'axios'
import NProgress from 'nprogress' // progress bar
import { Message, MessageBox } from 'element-ui'
import 'nprogress/nprogress.css'
import qs from 'qs'
// import store from '@/store' // progress bar style


axios.defaults.timeout = 30000
// 返回其他状态吗
axios.defaults.validateStatus = function (status) {
  return status >= 200 && status <= 500 // 默认的
}
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
// NProgress Configuration
NProgress.configure({
  showSpinner: false
})

// HTTPrequest拦截
axios.interceptors.request.use(config => {
  console.log('request')
  NProgress.start() // start progress bar
  // const isToken = (config.headers || {}).isToken === false
  // const token = store.getters.access_token
  // if (token && !isToken) {
  //   config.headers['Authorization'] = 'Bearer ' + token// token
  // }
  //上传文件接口content-type设为multipart/form-data
  if (config['Content-Type']) {
    config.headers['Content-Type'] = config['Content-Type']
  }

  // headers中配置serialize为true开启序列化
  if (config.method === 'get') {
    config.paramsSerializer = function (params) {
      return qs.stringify(params, { arrayFormat: 'repeat' })
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})

function alertMessage(message) {
  Message({
    message: message,
    type: "error",
    showClose: true,
  });
}

// HTTPresponse拦截
axios.interceptors.response.use(res => {
  console.log('response')
  NProgress.done();
  const status = Number(res.status) || 200
  // success
  if (status === 200) {
    return res;
  }
  // // 后台定义 424 针对令牌过期的特殊响应码
  // if (status === 424 ) {
  //   return
  // }
  // // other failures
  let errorMsg = 'defaultError';
  return Promise.reject(new Error(errorMsg));

}, error => {
  // const defaultMsg = "defaultError";

  // if (error.response === undefined) {
  //   alertMessage(defaultMsg);
  // }
  // // 处理 503 网络异常
  // if (error.response && error.response.status === 503) {
  //   alertMessage(error.response.data.msg || defaultMsg);
  // }

  NProgress.done();
  return Promise.reject(new Error(error));
});

export default axios
