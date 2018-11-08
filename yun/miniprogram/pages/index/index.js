const db = wx.cloud.database();
const book = db.collection('mybook');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    book_list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    db.collection('mybook').get({
        success: res => {
          console.log(res.data);
          this.setData({
            book_list:res.data
          })
        }
      })

      // 获取用户信息
      wx.getSetting({
        success:res => {
          if(res.authSetting['scope.userInfo']){
            wx.getUserInfo({
              success: res =>{
                this.setData({
                  avatarUrl:res.userInfo.avatarUrl,
                  userInfo:res.userInfo
                })
              }
            })
          }
        }
      })

    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        // wx.navigateTo({
        //   url: '../userConsole/userConsole',
        // })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
        // wx.navigateTo({
        //   url: '../deployFunctions/deployFunctions',
        // })
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
    this.onLoad();
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
  viewItem: function (event){
    console.log(event)
    var id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '../bookDetail/bookDetail?id=' + id,
    })
  },
  scanCode: function (event) {
    console.log("123");
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['barCode'],
      success: res => {
        // console.log(res.result);
        wx.cloud.callFunction({
          // 要调用的云函数名称
          name: 'bookinfo',
          // 传递给云函数的参数
          data: {
            isbn: res.result
          },
          success: res => {
            var bookString = res.result;
            console.log(JSON.parse(bookString));
            const db = wx.cloud.database();
            const book = db.collection('mybook');
            db.collection('mybook').add({
              // data 字段表示需新增的 JSON 数据
              data: JSON.parse(bookString)
            }).then(res => {
              console.log(res)
              this.onLoad();
            }).catch(err => {
              console.log(err);
            })
            
            
          },
          fail: err => {
            console.error(err)
          }
        })
      },
      fail: err => {
        console.log(err);
      }
    })
  }
})