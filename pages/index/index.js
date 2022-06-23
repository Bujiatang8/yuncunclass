// index.js
// 获取应用实例
const app = getApp()
let name = ''
let introduction =''
Page({
  data: {
    imglist:["../images/rr1.png","../images/rr2.png","../images/rr3.png"],
    weblist:[
      {"imgsrc":"/images/pqiandao.png","name":"签到打卡","url":"/pages/qiandao/qiandao"},
      {"imgsrc":"/images/hua.png","name":"在线咨询","url":"https://haokan.baidu.com/v?vid=13364516906205935340&pd=pcshare"},
      {"imgsrc":"/images/sp.png","name":"学习视频","url":"/pages/shipin/shipin"},
    ],
    src:'https://haokan.baidu.com/v?vid=13364516906205935340&pd=pcshare',
    addtext:null,
    swiperlist:[
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fss2.meipian.me%2Fusers%2F27444916%2Faa733f3d-3912-4a74-8eb5-da62de4bbb3b.jpg%3Fmeipian-raw%2Fbucket%2Fivwen%2Fkey%2FdXNlcnMvMjc0NDQ5MTYvYWE3MzNmM2QtMzkxMi00YTc0LThlYjUtZGE2MmRlNGJiYjNiLmpwZw%3D%3D%2Fsign%2F6d68dba31f94d143de1ba519f579d8f0.jpg&refer=http%3A%2F%2Fss2.meipian.me&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657703442&t=0db89b185f3a9fe7624f1d59e0341d27",
      "https://seopic.699pic.com/photo/40006/6284.jpg_wh1200.jpg",
      "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fali2.rabbitpre.com%2Fe376e6b6-9307-40b4-816a-b422094d8d32.jpg&refer=http%3A%2F%2Fali2.rabbitpre.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657703363&t=7d9528a00ce6a6e8bc32341f11621f89",
      "https://img1.baidu.com/it/u=4000274499,240549402&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=280",
    ],
    
     },
     onLoad(){
      this.getList()
  },
  click(event){
    let tiaozhuan=event.currentTarget.dataset.num;
   
    wx.navigateTo({
      url: ''+tiaozhuan,
    })
  },

  //获取列表数据
  getList(){
      wx.cloud.database().collection('ChineseneCulture')
      .get()
      .then(res => {
          console.log('传统文化列表请求成功',res)
          this.setData({
              list:res.data
          })
      })
      .catch(res => {
          console.error('传统文化列表请求失败',res)
      }) 
  },
  //跳转到文化信息详情页
  goDetail(e){
      console.log('点击了文化详情页',e.currentTarget.dataset._id)
      wx.navigateTo({
        url: '/pages/culture/culture?id=' + e.currentTarget.dataset._id,
      })
  },
  //获取用户输入的文化名
  getName(e){
      name = e.detail.value

  },
  getIntroduction(e){
      introduction = e.detail.value
  },
  addCulture(){
      console.log('文化名：',name)
      console.log('文化简介：',introduction)
      if (name == ''){
          wx.showToast({
              icon:'none',
            title: '文化名不能为空',
          })
      }
      else if (introduction == ''){
          wx.showToast({
              icon:'none',
            title: '简介不能为空',
          })
      }
      else{
          wx.cloud.database().collection('ChineseneCulture')
          .add({
              data:{
                  name:name,
                  introduction:introduction
              }
          })
          .then(res => {
              console.log('添加成功',res)
              this.getList()
              this.setData({
                'addtext':''
              })
          })
          .catch(res => {
              console.error('添加失败',res)
          }) 
      }
  },
  //视频
  bindButtonTap:function(){
    var that=this
    wx.chooseVideo({
      sourceType:['album','camera'],
      maxDuration:60,
      camera:['front','back'],
      succes:function(res){
        that.setData({
          src:res.tempFilePath
        })
      }
    })
  }

})
