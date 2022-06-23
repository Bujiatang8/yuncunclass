// pages/xianfa/xianfa.js
let dianzan=false
Page({
    data: {
        dianzanUrl:"../image/3.png"
    },
    click(){
        if(dianzan){
            this.setData({
                dianzanUrl:"../image/3.png"
            })
            dianzan=false
        }else{
            this.setData({
                dianzanUrl:"../image/4.png"
            })
            dianzan=true
        }
    }

})