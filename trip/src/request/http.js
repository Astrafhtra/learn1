import axios from 'axios'
import { Toast } from 'mand-mobile'
import { stringify } from 'qs'
import store from '../store/index.js'

let tmpTrip = store.state.trip 

axios.defaults.timeout = 10000;
axios.defaults.withCredentials = false //跨域请求时需要使用凭证,默认否

// 请求拦截
axios.interceptors.request.use(
  config => {
    // 每次发送请求之前判断一下vuex中是否存在token  
    // 如果存在,则统一在http请求的header上添加token,这样后台能根据token能判断用户当前是否登录
    // 即使本地存在token,也有可能token是过期的,在拦截器中要返回状态判断
    // const token = store.state.token
    // token && (config.header.Authorization = token)
    config.header['Content-Type'] = 'application/x-www-form-urlencoded'
    return config
  },
  error => {
    Toast.failed('请求过程出错')
    return Promise.error(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  function(response){
    // 对响应数据进行操作
    return response
  },function(error){
    Toast.failed('响应过程出错')
    return Promise.reject(error)
  }
)

var request = (options)=>{
  // 每次请求传入当前用户的ID
  if(tmpTrip.user){
    if(options.body){
      options.body.userId = tmpTrip.user.userId
    }
    if(options.params){
      options.params.userId = tmpTrip.user.userId
    }
  }
  // 表单传值参数格式化
  return axios.request({
    url: `http://localhost:3000${options.url}`,
    method:options.method,
    data:options.body,
    params:options.params
  }).then(response =>{
    return response
  },error =>{
    Toast.failed(err.message)
    throw err
  }).catch((error)=>{
    Toast.failed('请求失败')
    throw err
  })
}

//封装http请求方式
export const http = {}
const methods = ['get','post','put','delete']
methods.forEach (method=>{
  http[method] = (url,params = {})=>{
    if(method === 'get'){
      return request({url,params,method})
    }
    return request({url,body:stringify(params),method})
  }
}) 

export default function plugin (Vue){
  if(plugin.installed){
    return
  }
  plugin.installed = true
  // defineProperties 在一个对象上新增或修改原有属性,并返回该新的属性
  Object.defineProperties(Vue.prototype,{
    $http:{
      get() {
        const obj = {
          get: http['get'],
          get: http['post'],
          get: http['put'],
          get: http['delete'],
        }
        return obj
      }
    }
  })
}