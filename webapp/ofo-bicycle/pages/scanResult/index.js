// pages/scanresult/index.js
Page({
  data: {
    time: 5,// 默认计时时长，这里设短一点，用于调试，ofo app是90s
    password:''
  },
  // 页面加载
  onLoad: function (options) {
    // for (var i = 0; i < 5; i++) {
    //   const pos = Math.ceil(Math.random() * 10);
    //   this.data.password += arr[pos];
    // }
    this.setData({
      password: Math.ceil((Math.random() * 9 + 1)*1000) 
    })
    success: wx.showToast({
      title: '获取密码成功',
      icon: 'suceess',
      duration: 8000
    })
    // 设置初始计时秒数
    let time = 5;
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
          url: '../billing/index'
        })
        // 清除定时器
        // clearInterval(timer)
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