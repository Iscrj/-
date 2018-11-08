//index.js
//获取应用实例
const app = getApp();


Page({
  data: {
    // imgUrls: [
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/1.jpg',
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/2.jpg',
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/3.jpg',
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/4.jpg',
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/5.jpg',
    //   'https://wxtest.818qj.com/crj/xkd/img/banner/6.jpg'
    // ],
    // hotel:[
    //   { id:'https://wxtest.818qj.com/crj/xkd/img/hotel/1.jpg', name:"亚朵酒店-李公堤店",hotelUrl:"../hotel/hotel1"},
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/hotel/4.jpg', name: "苏州东山宾馆-叠翠楼", hotelUrl: "../hotel/hotel1"}
    // ],
    // food: [
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/food/1.jpg', name: "湘膳-独墅湖酒店", hotelUrl: "../hotel/hotel1"},
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/food/2.jpg', name: "青一色火锅", hotelUrl: "../hotel/hotel1"},
    // ],
    // room: [
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/room/ms1.jpg', name: "小猪短租-民宿1", hotelUrl: "../hotel/hotel1"},
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/room/ms2.jpg', name: "小猪短租-民宿2", hotelUrl: "../hotel/hotel1"},
    // ],
    // school: [
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/school/1.jpg', name: "苏州工业园区方洲小学", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/school/2.jpg', name: "苏州技师学院", hotelUrl: "../hotel/hotel1" },
    // ],
    // tour: [
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/tour/1.jpg', name: "singapore", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/tour/2.jpg', name: "绍兴古城", hotelUrl: "../hotel/hotel1" },
    // ],
    // car: [
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/car/1.jpg', name: "PAGANI", hotelUrl: "../hotel/hotel1" },
    // ],
    // business: [
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/business/1.jpg', name: "苏州新时代文体会展中心", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/business/2.jpg', name: "桃花岛-寻扇劫宝", hotelUrl: "../hotel/hotel1" },
    // ],
    // industry: [
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/industry/1.jpg', name: "鼎红阁红木", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/xkd/img/industry/2.jpg', name: "台铃电动车", hotelUrl: "../hotel/hotel1" },
    // ],
    // news: [
    //   { id: 'https://wxtest.818qj.com/crj/img/news/1.jpg', name: "苏州最美教师妈妈", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/img/news/2.jpg', name: "2016地球小姐中国区总决赛", hotelUrl: "../hotel/hotel1" },
    // ],
    // qiye: [
    //   { id: 'https://wxtest.818qj.com/crj/img/qiye/1.jpg', name: "通威渔光一体如东有限公司", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/img/qiye/2.jpg', name: "鑫盛制袋有限公司", hotelUrl: "../hotel/hotel1" },
    // ],
    // decoration: [
    //   { id: 'https://wxtest.818qj.com/crj/img/decoration/1.jpg', name: "清风装饰-狮山名门", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/img/decoration/2.jpg', name: "清风装饰-金科王府", hotelUrl: "../hotel/hotel1" },
    // ],
    // chain: [
    //   { id: 'https://wxtest.818qj.com/crj/img/decoration/1.jpg', name: "苏城家宴-李公堤店", hotelUrl: "../hotel/hotel1" },
    //   { id: 'https://wxtest.818qj.com/crj/img/decoration/4.jpg', name: "德庄火锅-龙湖直营店", hotelUrl: "../hotel/hotel1" },
    // ],
    code:"",
    message:"",
    sz:""
  },
  payfor: function () {
    var page = this;
    wx.login({
      success: function (res) {
        if (res.code) {
          wx.request({
            url: 'https:/wxtest.818qj.com/crj/weixin/daban-master/public/pay.php',
            data: {
              code: res.code,
              goods_name: page.data.orderInfo.goods_name,
              order_sn: page.data.orderInfo.order_sn,
              order_amount: page.data.orderInfo.order_amount
            },
            method: 'POST',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            success: function (response) {
              // 发起支付
              wx.requestPayment({
                'timeStamp': response.data.timeStamp,
                'nonceStr': response.data.nonceStr,
                'package': response.data.package,
                'signType': 'MD5',
                'paySign': response.data.paySign,
                'success': function (res) {
                  // wx.showToast({
                  //     title: '支付成功'
                  // });
                  // var url = url = '/pages/order/done/done?order_sn=' + page.data.orderInfo.order_sn;
                  // if (page.data.orderInfo.group_id != undefined) {
                  //   url = '/pages/order/done/done?order_sn=' + page.data.orderInfo.order_sn + '&pinsucess=1';
                  // }
                  // wx.navigateTo({
                  //   url: url
                  // })

                  console.log(res);
                },
                'fail': function (res) {
                  console.log('3333')
                  console.log(res)
                }
              });
            },
            fail: function (res) {
              console.log('3333')
              console.log(res)
            }
          })
        } else {
          console.log('登录失败')
        }
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: "新看点VR全景",
      imageUrl: "../../images/tabBar/fexiang.jpg"
    }
  },
  // urlChange:function(){
  //   var that = this;
  //   wx.navigateTo({
  //     url: that.data.hotel[0].hotelUrl
  //   })
  // },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    // var that = this;
    // wx.request({
    //   url: 'http://818qj.com/yingshi/backend/web/index.php?r=index/ruijun',
    //   data:{
    //     code:that.data.code,
    //     message:that.data.message
    //   },
    //   header:{
    //     'content-type':'application/json'
    //   },
    //   success:function(res){
    //     var len = res.data.length;
    //     var shuzu = [];
    //     console.log(len);
    //     console.log(shuzu);
    //     for(var i = 0;i < len;i++){
    //       var id = res.data[i].id;
    //       shuzu.push(id);
    //     }
    //     that.setData({
    //       sz:shuzu
    //     })
        
       
    //     var cd = res.data[0].id,
    //     msg = res.data[0].nick_name;
    //     console.log(res.data);
    //     console.log(cd);
    //     console.log(msg);
        

    //     if(cd=="123"){
    //       that.setData({
    //         motto:"chenggong"
    //       })
    //     }else{
    //       that,setData({
    //         motto:"shibai"
    //       })
    //     }
        

    //   }
    // })


   
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
