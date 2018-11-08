// pages/vr/vr.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://wxtest.818qj.com/crj/xkd/img/banner/1.jpg',
      'https://wxtest.818qj.com/crj/xkd/img/banner/2.jpg',
      'https://wxtest.818qj.com/crj/xkd/img/banner/3.jpg',
      'https://wxtest.818qj.com/crj/xkd/img/banner/4.jpg',
      'https://wxtest.818qj.com/crj/xkd/img/banner/5.jpg',
      'https://wxtest.818qj.com/crj/xkd/img/banner/6.jpg'
    ],
    cateItems:[
      {
        cate_id:0,
        cate_name:"全部",
        ishaveChild:true,
        children:[
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/1.jpg',
            name: "亚朵酒店-李公堤店", 
            hotelUrl: "../hotel/hotel1", 
            reading: "111", 
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/2.jpg',
            name: "常熟市敬老院",
            hotelUrl: "../hotel/hotel2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/3.jpg',
            name: "苏州太湖高尔夫酒店",
            hotelUrl: "../hotel/hotel3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/4.jpg',
            name: "苏州东山宾馆-叠翠楼",
            hotelUrl: "../hotel/hotel4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 5,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/1.jpg',
            name: "湘膳-独墅湖酒店",
            hotelUrl: "../food/f1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 6,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/2.jpg',
            name: "青一色火锅",
            hotelUrl: "../food/f2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 7,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/3.jpg',
            name: "羊虾将-斜塘老街店",
            hotelUrl: "../food/f3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 8,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/4.jpg',
            name: "干将路左拐",
            hotelUrl: "../food/f4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 9,
            img: 'https://wxtest.818qj.com/crj/xkd/img/room/ms1.jpg',
            name: "小猪短租-民宿1",
            hotelUrl: "../room/xz1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 10,
            img: 'https://wxtest.818qj.com/crj/xkd/img/room/ms2.jpg',
            name: "小猪短租-民宿2",
            hotelUrl: "../room/xz2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 11,
            img: 'https://wxtest.818qj.com/crj/xkd/img/room/ms3.jpg',
            name: "小猪短租-民宿3",
            hotelUrl: "../room/xz3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 12,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/1.jpg',
            name: "苏州工业园区方洲小学",
            hotelUrl: "../school/s1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 13,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/2.jpg',
            name: "苏州技师学院",
            hotelUrl: "../school/s2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 14,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/3.jpg',
            name: "苏州中学园区校",
            hotelUrl: "../school/s3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 16,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/5.jpg',
            name: "太仓中等专业学校",
            hotelUrl: "../school/s5",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 17,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/6.jpg',
            name: "爱贝国际少儿英语",
            hotelUrl: "../school/s6",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 19,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/8.jpg',
            name: "苏州市艺上美容美发职业学校",
            hotelUrl: "../school/s8",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 20,
            img: 'https://wxtest.818qj.com/crj/xkd/img/tour/1.jpg',
            name: "singapore",
            hotelUrl: "../scene/s1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 21,
            img: 'https://wxtest.818qj.com/crj/xkd/img/tour/2.jpg',
            name: "绍兴古城",
            hotelUrl: "../scene/s2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 22,
            img: 'https://wxtest.818qj.com/crj/xkd/img/tour/3.jpg',
            name: "漫游扬州",
            hotelUrl: "../scene/s3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 23,
            img: 'https://wxtest.818qj.com/crj/xkd/img/car/1.jpg',
            name: "PAGANI",
            hotelUrl: "../car/car",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 24,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/1.jpg',
            name: "苏州新时代文体会展中心",
            hotelUrl: "../business/b1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 26,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/3.jpg',
            name: "苏州文博寻金蛋",
            hotelUrl: "../business/b2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 27,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/4.jpg',
            name: "苏州国际博览中心",
            hotelUrl: "../business/b3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 28,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/5.jpg',
            name: "指尖上的文博",
            hotelUrl: "../business/b4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 29,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/6.jpg',
            name: "沈阳大悦城",
            hotelUrl: "../business/b5",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 30,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/7.jpg',
            name: "北京华贸购物中心",
            hotelUrl: "../business/b6",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 31,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/1.jpg',
            name: "鼎红阁红木",
            hotelUrl: "../industry/i1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 32,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/2.jpg',
            name: "台铃电动车",
            hotelUrl: "../industry/i2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 33,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/3.jpg',
            name: "AK主题式量贩KTV",
            hotelUrl: "../industry/i3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 34,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/4.jpg',
            name: "宝迪美体健身",
            hotelUrl: "../industry/hotei4l1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 35,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/5.jpg',
            name: "一宅家具",
            hotelUrl: "../industry/i5",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 36,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/6.jpg',
            name: "老周红木",
            hotelUrl: "../industry/i6",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 37,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/7.jpg',
            name: "天宫九号",
            hotelUrl: "../industry/i7",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 38,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/8.jpg',
            name: "太和亚爵健身会馆",
            hotelUrl: "../industry/i8",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 39,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/9.jpg',
            name: "无界电竞馆",
            hotelUrl: "../industry/i9",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 40,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/1.jpg',
            name: "苏州最美教师妈妈",
            hotelUrl: "../news/n1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 41,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/2.jpg',
            name: "2016地球小姐中国区总决赛",
            hotelUrl: "../news/n2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 42,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/3.jpg',
            name: "清明-踏青趣",
            hotelUrl: "../news/n3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 43,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/4.jpg',
            name: "北京口碑生态战略发布会",
            hotelUrl: "../news/n4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 44,
            img: 'https://wxtest.818qj.com/crj/xkd/img/qiye/1.jpg',
            name: "通威渔光一体如东有限公司",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 45,
            img: 'https://wxtest.818qj.com/crj/xkd/img/qiye/2.jpg',
            name: "鑫盛制袋有限公司",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 46,
            img: 'https://wxtest.818qj.com/crj/xkd/img/qiye/3.jpg',
            name: "中国航发商发",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 47,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/1.jpg',
            name: "清风装饰-狮山名门",
            hotelUrl: "../decoration/c1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 48,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/2.jpg',
            name: "清风装饰-金科王府",
            hotelUrl: "../decoration/c2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 49,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/3.jpg',
            name: "清风装饰-岚山别墅",
            hotelUrl: "../decoration/c3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 50,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/4.jpg',
            name: "清风装饰-水电装修",
            hotelUrl: "../decoration/c4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 51,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/5.jpg',
            name: "清风装饰-璞缇墅",
            hotelUrl: "../decoration/c5",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 52,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/1.jpg',
            name: "苏城家宴-李公堤店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 53,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/2.jpg',
            name: "苏城家宴-万科店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 54,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/3.jpg',
            name: "苏城家宴-观前店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 55,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/4.jpg',
            name: "德庄火锅-龙湖直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 56,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/5.jpg',
            name: "德庄火锅-SM广场直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 57,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/6.jpg',
            name: "德庄火锅-临顿路直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 58,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/7.jpg',
            name: "德庄火锅-娄门直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 59,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/8.jpg',
            name: "德庄火锅-尼盛尚品汇直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 60,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/9.jpg',
            name: "德庄火锅-李公堤直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 61,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/10.jpg',
            name: "德庄火锅-圆融星座店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 62,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/11.jpg',
            name: "德庄火锅-月亮湾直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 63,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/12.jpg',
            name: "德庄火锅-高铁圆融直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },       
        ]
      },
      {
        cate_id: 1,
        cate_name: "酒店",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/1.jpg',
            name: "亚朵酒店-李公堤店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/2.jpg',
            name: "常熟市敬老院",
            hotelUrl: "../hotel/hotel2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/3.jpg',
            name: "苏州太湖高尔夫酒店",
            hotelUrl: "../hotel/hotel3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/hotel/4.jpg',
            name: "苏州东山宾馆-叠翠楼",
            hotelUrl: "../hotel/hotel4",
            reading: "111",
            zan: "111"
          }
        ]
      },
      {
        cate_id: 2,
        cate_name: "餐饮",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/1.jpg',
            name: "湘膳-独墅湖酒店",
            hotelUrl: "../food/f1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/2.jpg',
            name: "青一色火锅",
            hotelUrl: "../food/f2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/3.jpg',
            name: "羊虾将-斜塘老街店",
            hotelUrl: "../food/f3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/food/4.jpg',
            name: "干将路左拐",
            hotelUrl: "../food/f4",
            reading: "111",
            zan: "111"
          }
        ]
      },
      {
        cate_id: 3,
        cate_name: "民宿",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/room/ms1.jpg',
            name: "小猪短租-民宿1",
            hotelUrl: "../room/xz1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/room/ms2.jpg',
            name: "小猪短租-民宿2",
            hotelUrl: "../room/xz2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/room/ms3.jpg',
            name: "小猪短租-民宿3",
            hotelUrl: "../room/xz3",
            reading: "111",
            zan: "111"
          }   
        ]
      },
      {
        cate_id: 4,
        cate_name: "学校",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/1.jpg',
            name: "苏州工业园区方洲小学",
            hotelUrl: "../school/s1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/2.jpg',
            name: "苏州技师学院",
            hotelUrl: "../school/s2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/3.jpg',
            name: "苏州中学园区校",
            hotelUrl: "../school/s3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 5,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/5.jpg',
            name: "太仓中等专业学校",
            hotelUrl: "../school/s5",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 6,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/6.jpg',
            name: "爱贝国际少儿英语",
            hotelUrl: "../school/s6",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 8,
            img: 'https://wxtest.818qj.com/crj/xkd/img/school/8.jpg',
            name: "苏州市艺上美容美发职业学校",
            hotelUrl: "../school/s8",
            reading: "111",
            zan: "111"
          }
        ]
      },
      {
        cate_id: 5,
        cate_name: "景区",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/tour/1.jpg',
            name: "singapore",
            hotelUrl: "../scene/s1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/tour/2.jpg',
            name: "绍兴古城",
            hotelUrl: "../scene/s2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/tour/3.jpg',
            name: "漫游扬州",
            hotelUrl: "../scene/s3",
            reading: "111",
            zan: "111"
          },
        ]
      },
      {
        cate_id: 6,
        cate_name: "汽车",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/car/1.jpg',
            name: "PAGANI",
            hotelUrl: "../car/car",
            reading: "111",
            zan: "111"
          }
        ]
      },
      {
        cate_id: 7,
        cate_name: "商圈",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/1.jpg',
            name: "苏州新时代文体会展中心",
            hotelUrl: "../business/b1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/3.jpg',
            name: "苏州文博寻金蛋",
            hotelUrl: "../business/b2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/4.jpg',
            name: "苏州国际博览中心",
            hotelUrl: "../business/b3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 5,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/5.jpg',
            name: "指尖上的文博",
            hotelUrl: "../business/b4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 6,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/6.jpg',
            name: "沈阳大悦城",
            hotelUrl: "../business/b5",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 7,
            img: 'https://wxtest.818qj.com/crj/xkd/img/business/7.jpg',
            name: "北京华贸购物中心",
            hotelUrl: "../business/b6",
            reading: "111",
            zan: "111"
          }
        ]
      },
      {
        cate_id: 8,
        cate_name: "泛行业",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/1.jpg',
            name: "鼎红阁红木",
            hotelUrl: "../industry/i1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/2.jpg',
            name: "台铃电动车",
            hotelUrl: "../industry/i2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/3.jpg',
            name: "AK主题式量贩KTV",
            hotelUrl: "../industry/i3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/4.jpg',
            name: "宝迪美体健身",
            hotelUrl: "../industry/i4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 5,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/5.jpg',
            name: "一宅家具",
            hotelUrl: "../industry/i5",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 6,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/6.jpg',
            name: "老周红木",
            hotelUrl: "../industry/i6",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 7,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/7.jpg',
            name: "天宫九号",
            hotelUrl: "../industry/i7",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 8,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/8.jpg',
            name: "太和亚爵健身会馆",
            hotelUrl: "../industry/i8",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 9,
            img: 'https://wxtest.818qj.com/crj/xkd/img/industry/9.jpg',
            name: "无界电竞馆",
            hotelUrl: "../industry/i9",
            reading: "111",
            zan: "111"
          },
        ]
      },
      {
        cate_id: 9,
        cate_name: "新闻",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/1.jpg',
            name: "苏州最美教师妈妈",
            hotelUrl: "../news/n1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/2.jpg',
            name: "2016地球小姐中国区总决赛",
            hotelUrl: "../news/n2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/3.jpg',
            name: "清明-踏青趣",
            hotelUrl: "../news/n3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/news/4.jpg',
            name: "北京口碑生态战略发布会",
            hotelUrl: "../news/n4",
            reading: "111",
            zan: "111"
          },
        ]
      },
      {
        cate_id: 10,
        cate_name: "企业",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/qiye/1.jpg',
            name: "通威渔光一体如东有限公司",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/qiye/2.jpg',
            name: "鑫盛制袋有限公司",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/qiye/3.jpg',
            name: "中国航发商发",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
        ]
      },
      {
        cate_id: 11,
        cate_name: "家装",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/1.jpg',
            name: "清风装饰-狮山名门",
            hotelUrl: "../decoration/c1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/2.jpg',
            name: "清风装饰-金科王府",
            hotelUrl: "../decoration/c2",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/3.jpg',
            name: "清风装饰-岚山别墅",
            hotelUrl: "../decoration/c3",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/4.jpg',
            name: "清风装饰-水电装修",
            hotelUrl: "../decoration/c4",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 5,
            img: 'https://wxtest.818qj.com/crj/xkd/img/decoration/5.jpg',
            name: "清风装饰-璞缇墅",
            hotelUrl: "../decoration/c5",
            reading: "111",
            zan: "111"
          },
        ]
      },
      {
        cate_id: 12,
        cate_name: "连锁",
        ishaveChild: true,
        children: [
          {
            child_id: 1,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/1.jpg',
            name: "苏城家宴-李公堤店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 2,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/2.jpg',
            name: "苏城家宴-万科店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 3,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/3.jpg',
            name: "苏城家宴-观前店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 4,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/4.jpg',
            name: "德庄火锅-龙湖直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 5,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/5.jpg',
            name: "德庄火锅-SM广场直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 6,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/6.jpg',
            name: "德庄火锅-临顿路直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 7,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/7.jpg',
            name: "德庄火锅-娄门直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 8,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/8.jpg',
            name: "德庄火锅-尼盛尚品汇直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 9,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/9.jpg',
            name: "德庄火锅-李公堤直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 10,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/10.jpg',
            name: "德庄火锅-圆融星座店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 11,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/11.jpg',
            name: "德庄火锅-月亮湾直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
          {
            child_id: 12,
            img: 'https://wxtest.818qj.com/crj/xkd/img/chain/12.jpg',
            name: "德庄火锅-高铁圆融直营店",
            hotelUrl: "../hotel/hotel1",
            reading: "111",
            zan: "111"
          },
        ]
      },
      // {
      //   cate_id: 13,
      //   cate_name: "",
      //   ishaveChild: false,
      //   children: []
      // },
    ],
    curNav:"0",
    index:"0",
    searchValue:"",
    nothing:"没有相关数据"
  },
  //分享
  onShareAppMessage: function () {
    return {
      title: "新看点VR全景",
      imageUrl: "../../images/tabBar/fexiang.jpg"
    }
  },
  //获取搜索框输入的值，并设置
  searchValue:function(e){
    this.setData({
      searchValue:e.detail.value
    })
  },
  searchBtn:function(e){
    var that = this;
    var sv = this.data.searchValue;
    // var cateItems = this.data.cateItems;
    // var length1 = cateItems.length;
    // for (let i = 0; i <= length1 - 1; i++) {
    //   var length2 = cateItems[i].children.length;
    //   for (let j = 0; j <= length2 - 1; j++) {
    //     var allName = cateItems[i].children[j].name;
    //     console.log(allName);
    //   }
    // }
    if (sv == "酒店"){
      this.setData({
        curNav: 1,
        curIndex: 1
      })
    } else if (sv == "餐饮"){
      this.setData({
        curNav: 2,
        curIndex: 2
      })
    } else if (sv == "民宿") {
      this.setData({
        curNav: 3,
        curIndex: 3
      })
    } else if (sv == "学校") {
      this.setData({
        curNav: 4,
        curIndex: 4
      })
    } else if (sv == "景区") {
      this.setData({
        curNav: 5,
        curIndex: 5
      })
    } else if (sv == "汽车") {
      this.setData({
        curNav: 6,
        curIndex: 6
      })
    } else if (sv == "商圈") {
      this.setData({
        curNav: 7,
        curIndex: 7
      })
    } else if (sv == "泛行业") {
      this.setData({
        curNav: 8,
        curIndex: 8
      })
    } else if (sv == "新闻") {
      this.setData({
        curNav: 9,
        curIndex: 9
      })
    } else if (sv == "企业") {
      this.setData({
        curNav: 10,
        curIndex: 10
      })
    } else if (sv == "家装") {
      this.setData({
        curNav: 11,
        curIndex: 11
      })
    } else if (sv == "连锁") {
      this.setData({
        curNav: 12,
        curIndex: 12
      })
    } else{
      this.setData({
        curNav: 13,
        curIndex: 13
      })
    }
  },
  //根据按钮点击选择对应的内容
  switchRightTab:function(e){
    let id = e.target.dataset.id,
    index = parseInt(e.target.dataset.index);
    this.setData({
      curNav:id,
      curIndex:index
    }) 
  },
  // changeBtn:function(e){
  //   var that = this;
  //   this.setData({
  //     n:e.currentTarget.dataset.current
  //   })
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    that.setData({
      curIndex:"0"
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