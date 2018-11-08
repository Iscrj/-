const db = wx.cloud.database();
// pages/bookDetail/bookDetail.js
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
    db.collection('mybook').doc(options.id).get({
      success: res => {
        console.log(res.data);
        this.setData({
          book:res.data,
          id:options.id
        })
      },
      fail: res => {
        console.error(err);
      }
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

  },
  update:function(event){
    db.collection('mybook').doc(this.data.id).update({
      // data 传入需要局部更新的数据
      data: {
        // 表示将 done 字段置为 true
        title: "局部更新测试2"
      },
      success: function (res) {
        // var pages = getCurrentPages(); // 获取当前页面的页桢
        // if (pages.length > 1) {
        //   //上一个页面实例对象
        //   var prePage = pages[pages.length - 2];
        //   //关键在这里,这里面是触发上个界面
        //   prePage.onShow()// 不同的人里面的值是不同的，这个数据是我的，具体的你们要根据自己的来查看所要传的参数，或者changeData不传形参，直接调用
          wx.navigateBack({
            delta: 1         // 返回上一页
          });
        // }
      }
    })
  },
  del:function(event){
    db.collection('mybook').doc(this.data.id).remove({
      success: function (res) {
        // var pages = getCurrentPages(); // 获取当前页面的页桢
        // if (pages.length > 1) {
        //   //上一个页面实例对象
        //   var prePage = pages[pages.length - 2];
        //   //关键在这里,这里面是触发上个界面
        //   prePage.onShow()// 不同的人里面的值是不同的，这个数据是我的，具体的你们要根据自己的来查看所要传的参数，或者changeData不传形参，直接调用
          wx.navigateBack({
            delta: 1         // 返回上一页
          });
        // }
      }
    })
  }
})