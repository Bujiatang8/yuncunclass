// pages/study/s.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        navbar: ['全部', '宪法', '民法典'],
        currentTab: 0
      },
      navbarTap: function(e){
        this.setData({
          currentTab: e.currentTarget.dataset.idx
        })
      },
      gotoxianfa:function(){
        wx.navigateTo({
          url: '/pages/xianfa/xianfa',
        })
    },
      gotominfa:function(){
        wx.navigateTo({
          url: '/pages/minfa/minfa',
        })
  },
})