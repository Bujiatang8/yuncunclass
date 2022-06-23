// pages/falv/falv.js
Page({
    data: {

    },
    gotoStudy:function(){
        wx.navigateTo({
          url: '/pages/study/study',
        })
    },
    gotoZixun:function(){
      wx.navigateTo({
        url: '/pages/zixun/zixun',
      })
  },
  gototuijian:function(){
    wx.navigateTo({
      url: '/pages/tuijian/tuijian',
    })
},
})