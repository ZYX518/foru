//app.js
import Store from 'wxministore';
// store中
let store = new Store({
  //状态
  state: {
    //...
    home:{
      //新品推荐
      arr1:'',
      //猜你喜欢
      arr2:'',
    },
    img1:'',
    img2:'',

  },
  //方法
  methods: {
    //...
  },
  //页面监听
  pageListener: {
    onLoad(options) {
      // console.log("我在" + this.route, "参数为", options);
    },
  },
});
console.log(store.$state.home);
App({
  store: store,
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})