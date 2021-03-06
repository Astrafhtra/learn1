// pages/index/index.js
var QQMapWX = require('../../qqmap/qqmap-wx-jssdk.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude: 0,
    longitude:0,
    scale: '18'
  },
  bindcontroltap: function(e) {
    console.log(e)
    switch (e.controlId) {
      case 1:
        this.movetoCenter();
        break;
      case 2:
        wx.scanCode({
          success: () => {
            wx.showLoading({
              title: '正在获取密码',
            })
            wx.request({
              url: 'https://www.easy-mock.com/mock/5cc02d8e1e38f0052b4bd927/getName/getName',
              success: (res) => {
                wx.showToast({
                  title: '获取密码成功',
                  icon: 'suceess',
                  duration:2000
                })
                wx.hideLoading();
                setTimeout(() => {
                  wx.redirectTo({
                    url: '../scanResult/index',
                  }, 5000)
                })
              }
            })
          },
          fail: () => {
          }
        })
        break;
      case 3:
        wx.navigateTo({
          url: '../report/index',
        })
        break;
      case 5:
        wx.navigateTo({
          url: '../My/index',
        })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   var that = this
   var qqmapsdk = new QQMapWX({
      key:'wx0cdb69dde7630671'
    })
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: (res)=>{
        qqmapsdk.reverseGeocoder({
          latitude: res.latitude,
          longitude: res.longitude
        })
        console.log(res);
      }
    });
    // 3.设置地图控件的位置及大小，通过设备宽高定位
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
              id: 1,
              iconPath: '/images/location.png',
              position: {
                left: 20,
                top: res.windowHeight - 80,
                width: 50,
                height: 50
              },
              clickable: true
            },
            {
              id: 2,
              iconPath: '/images/use.png',
              position: {
                left: res.windowWidth / 2 - 45,
                top: res.windowHeight - 100,
                width: 90,
                height: 90
              },
              clickable: true
            },
            {
              id: 3,
              iconPath: '/images/warn.png',
              position: {
                left: res.windowWidth - 70,
                top: res.windowHeight - 80,
                width: 50,
                height: 50
              },
              clickable: true
            },
            {
              id: 4,
              iconPath: '/images/marker.png',
              position: {
                left: res.windowWidth / 2 - 11,
                top: res.windowHeight / 2 - 45,
                width: 22,
                height: 45
              },
              clickable: true
            },
            {
              id: 5,
              iconPath: '/images/avatar.png',
              position: {
                left: res.windowWidth - 68,
                top: res.windowHeight - 155,
                width: 45,
                height: 45
              },
              clickable: true
            }
          ]
        })
      }
    }); 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  movetoCenter: function() {
    this.mapctx.moveToLocation();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    this.mapctx = wx.createMapContext("ofoMap");
    this.movetoCenter();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})