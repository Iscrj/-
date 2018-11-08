// pages/star/star.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    star:[
      { img: "https://pano.818qj.com/crj/TGSC/star/s1.jpg", name: "白玉花", title: "胸针吊坠两用" },
      { img: "https://pano.818qj.com/crj/TGSC/star/s2.jpg", name: "翡翠蝴蝶", title: "吊坠" },
      { img: "https://pano.818qj.com/crj/TGSC/star/s3.jpg", name: "蓝宝石", title: "项链" },
      { img: "https://pano.818qj.com/crj/TGSC/star/s4.jpg", name: "玲珑骰子", title: "项链" },
      { img: "https://pano.818qj.com/crj/TGSC/star/s5.jpg", name: "扇子小宝", title: "吊坠" },
      { img: "https://pano.818qj.com/crj/TGSC/star/s6.jpg", name: "粉水晶花", title: "项链" }
    ],
    news: [
      { img: "https://pano.818qj.com/crj/TGSC/star/n1.jpg", name: "碧玉香瓜", title: "吊坠" },
      { img: "https://pano.818qj.com/crj/TGSC/star/n2.jpg", name: "彩宝大象", title: "项链" },
      { img: "https://pano.818qj.com/crj/TGSC/star/n3.jpg", name: "粉宝石蝴蝶结", title: "项链" },
      { img: "https://pano.818qj.com/crj/TGSC/star/n4.jpg", name: "蓝宝《棱》套件", title: "项链" },
      { img: "https://pano.818qj.com/crj/TGSC/star/n5.jpg", name: "梨花", title: "吊坠" },
      { img: "https://pano.818qj.com/crj/TGSC/star/n6.jpg", name: "墨玉茄子", title: "吊坠" }
    ],
    recommenged: [
      { img: "https://pano.818qj.com/crj/TGSC/star/r1.jpg", name: "南红菇凉", title: "吊坠" },
      { img: "https://pano.818qj.com/crj/TGSC/star/r2.jpg", name: "南胡萝卜", title: "戒指" },
      { img: "https://pano.818qj.com/crj/TGSC/star/r3.jpg", name: "扇子小宝", title: "耳坠" },
      { img: "https://pano.818qj.com/crj/TGSC/star/r4.jpg", name: "扇子小宝", title: "戒指" },
      { img: "https://pano.818qj.com/crj/TGSC/star/r5.jpg", name: "蓝宝石小闹钟", title: "吊坠" },
      { img: "https://pano.818qj.com/crj/TGSC/star/r6.jpg", name: "蓝宝石照相机", title: "吊坠" }
    ]
  },
  tt:function(){
    wx.navigateTo({
      url: '../wailian/wailian',
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