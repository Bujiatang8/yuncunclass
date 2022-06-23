// pages/zixun/zixun.js
Page({
    onSubmit:function(e){
        console.log('表单被提交：');
        console.log(e.detail.value);
    },
    data: {
        src:'',
      },
    bindUpload: function (e) {
        var that=this
        wx.chooseImage({
          count: 3,
          sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
          sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
          success(res) {
            // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
            var tempFilePaths = res.tempFilePaths
            console.log(res.tempFilePaths)
            that.setData({
                src:res.tempFilePaths
            })
       }
         })
       }
})