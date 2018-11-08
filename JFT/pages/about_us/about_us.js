// pages/about_us/about_us.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "../images/2.jpg",
      "../images/1.jpg"
    ]
  },
  // 获取位置
  chooseLocation1: function (e) {
        wx.openLocation({
          latitude: 32.4889000000,
          longitude: 119.9168300000,
          scale: 28
        })
  },
  chooseLocation2: function (e) {
    wx.openLocation({
      latitude: 31.9049700000,
      longitude: 120.2742500000,
      scale: 28
    })
  },
  chooseLocation3: function (e) {
    wx.openLocation({
      latitude: 31.8990900000,
      longitude: 120.2448300000,
      scale: 28
    })
  },
  chooseLocation4: function (e) {
    wx.openLocation({
      latitude: 27.8377000000,
      longitude: 113.1489800000,
      scale: 28
    })
  },
  chooseLocation5: function (e) {
    wx.openLocation({
      latitude: 32.3805800000,
      longitude: 119.3981800000,
      scale: 28
    })
  },
  //拨打电话
  calling1: function () {
    wx.makePhoneCall({
      phoneNumber: '0523-86504777',
    })
  },
  calling2: function () {
    wx.makePhoneCall({
      phoneNumber: '0510-86177177',
    })
  },
  calling3: function () {
    wx.makePhoneCall({
      phoneNumber: '17715680613',
    })
  },
  calling4: function () {
    wx.makePhoneCall({
      phoneNumber: '0731-22325568',
    })
  },
  calling5: function () {
    wx.makePhoneCall({
      phoneNumber: '17751357997',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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