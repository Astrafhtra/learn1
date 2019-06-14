const request = require('request');


module.exports = (url)=>new Promise((req,res)=>{
  request({
    url,
    json:true
  },(err,res,body)=>{
    console.log('error:',err);
    req(body);
  })
})