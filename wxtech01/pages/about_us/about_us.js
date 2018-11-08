// pages/about_us/about_us.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // imgUrls: [
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/8.jpg',
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/7.jpg'
    // ],
    coreImgs:[
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/core/1.png', name: '企业愿景', content:'领先的VR全景服务商'},
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/core/2.png', name: '价值观', content: '客户至上，追求极致，团队为先' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/core/3.png', name: '经营理念', content: '分享、协作、共赢、发展' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/core/4.png', name: '管理理念', content: '专注、务实、创新、成长' }
    ],
    iconImgs:[
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/hospital.png', name: '医美'},
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/rummery.png', name: '酒店' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/hotel.png', name: '民宿' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/caterers.png', name: '餐饮' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/scene.png', name: '景区' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/school.png', name: '学校' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/train.png', name: '培训' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/ground.png', name: '游乐场' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/market.png', name: '商场' },
      { imgUrl: 'https://wxtest.818qj.com/crj/xkd/img/contact/car.png', name: '汽车' },
    ],
    
    
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: "新看点VR全景",
      imageUrl: "../../images/tabBar/fexiang.jpg"
    }
  },
  //拨打电话
  calling:function(){
    wx.makePhoneCall({
      phoneNumber: '4006622360',
      
    })
  },
  map:function(){
    wx.navigateTo({
      url: '../map/map',
    })
  },
  // 获取位置
  chooseLocation:function(e){
    var that = this;
    wx.chooseLocation({
      success: function(res) {
        wx.openLocation({
          latitude: 31.27565,
          longitude: 120.53781,
          scale: 28
        })
        // this.setData({
        //   name:"苏州创业园",
        //   address:"中国苏州创业园-4号楼18层",
        //   location:{
        //     longitude: 120.53781,
        //     latitude: 31.27565
        //   },
        // })
        
      },
    })
  },
  // resetModal:function(){
  //   wx.showModal({
  //     title: '提示',
  //     content: '确定重置内容吗？',
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },
  // subModal:function(){
  //   wx.showModal({
  //     title: '提示',
  //     content: '确定提交吗？',
  //     success: function (res) {
  //       if (res.confirm) {
  //         console.log('用户点击确定')
  //       } else if (res.cancel) {
  //         console.log('用户点击取消')
  //       }
  //     }
  //   })
  // },
  // resetFn: function () {
  //   console.log("重置了");
  // },
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