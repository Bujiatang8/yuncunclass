let introduction =''
let id=''
Page({
    data:{
        culture:[]
    },
    onLoad(options){
        console.log('文化列表携带的值',options)
        id=options.id
        this.getDetail()
    },
    //获取文化数据
    getDetail(){
        wx.cloud.database().collection('ChineseneCulture')
        .doc(id)
        .get()
        .then(res => {
            console.log('文化详情页请求成功',res)
            this.setData({
                culture:res.data
            })
        })
        .catch(res => {
            console.error('文化详情页请求失败',res)
        }) 
    },
    //获取用户输入的新简介
    getIntroduction(e){
        introduction = e.detail.value
    },
    update(){
        console.log('新的文化简介',introduction)
        if(ntroduction == ''){
            wx.showToast({
              title: '文化简介不能为空',
              icon:'none'
            })
        }   else{
            wx.cloud.database().collection('ChineseneCulture')
              .doc(id)
              .update({
                  data:{
                    introduction:introduction
                  }
              })
              .then(res => {
                console.log('更新成功',res)
                this.getDetail()
                })
            .catch(res => {
                console.error('更新失败',res)
            }) 
        }
    },
    //删除操作
    shanchu(){
        console.log('点击了删除')
        //弹窗提示
        wx.showModal({
          title:'是否确定删除',
          content:'一旦删除，不可撤销',
          success(res){
              if (res.confirm == true){
                //删除操作
                wx.cloud.database().collection('ChineseneCulture')
                .doc(id)
                .remove()
                .then(res => {
                    console.log('删除成功',res)
                    this.getDetail()
                })
                
              } else if (res.cancel == true){

              }
          }
        })
    }
})