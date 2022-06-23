// app.js
//一键开启、关闭log，只在版本为develop时打印log
console.log = __wxConfig.envVersion=='develop'?console.log: ()=> {};
  App({
  onLaunch() {
    wx.cloud.init({
      env:'cloud1-4goy5qpje354445a'
    })
  }
  
})
