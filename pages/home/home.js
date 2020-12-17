// pages/home/home.js
import ajax from '../../ajax/ajax'
import url from '../../ajax/url'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    ajax({
      url:url.url+'index.php?s=/api/index/page&wxapp_id=10001&token=8f7480921b1083b0df0554063b6d62b4',
      data:{type:'group'},method:"GET"
    }).then(res=>{
      console.log(res)
      let a = res.data.data.items.n606196612728596.data.n837367626101537.imgName
      let b =res.data.data.items.n606196612728596.data.n5158411442461817.imgName
      getApp().store.setState({
        
        home:{
          arr1:res.data.data.best,
          arr2:res.data.data.newest,
          img1:a,
          img2:b,
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})