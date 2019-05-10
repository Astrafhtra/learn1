// pages/scanresult/index.js
Page({
  data: {
    time: 90 // 默认计时时长，这里设短一点，用于调试，ofo app是90s
  },
  // 页面加载
  onLoad: function (options) {
    // 获取解锁密码
    this.setData({
      password: options.password
    })
    // 设置初始计时秒数
    let time = 90;
    // 开始定时器
    let timer = setInterval(() => {
      time--;
      this.setData({
        time:time
      })
      // 读完秒后携带单车号码跳转到计费页
      if (time === 0) {
        clearInterval(this.timer)
        wx.redirectTo({
          url: '../billing/index?number=' + options.number
        })
        // 清除定时器
        clearInterval(timer)
      }
    }, 1000)
  },
  // 点击去首页报障
  moveToWarn: function () {    
    wx.redirectTo({
      url: '../index/index'
    })
  }
})