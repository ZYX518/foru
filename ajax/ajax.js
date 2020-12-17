export default function fetch(option){
  return new Promise((resolve,reject)=>{
    wx.request({
      url:option.url,
      data:option.data,
      dataType:"json",
      method:option.method,
      responseType:"text",
      header:{"Content-Type":"application/x-www-form-urlencoded"},
      success:resolve,
      fail:reject
      })
  })
}