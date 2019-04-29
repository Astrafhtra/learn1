//index.js
// const app = getApp()

Page({
  http: function() {
    // 从本地到云端
    // 从本地到云端
    // 百度云
    wx.cloud.callFunction({
      name: 'http'
    }) //调用一个云函数 该需要花费一些时间 也是一个promise
    .then(res => {
      console.log(res);
    })
  }
})
