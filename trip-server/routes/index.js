const express = require('express')
const fs = require('fs')
const router = express.Router()

// 首页操作
router.get('/',function(req,res,next){
  // res.statusCode = 200
  // res.setHeader('Content-Type','application/json')
  function readImage(path,res){
    fs.readFile(path,'binary',function(err,File){
      if(err){
        return
      }else{
        res.writeHead(200,{'Content-Type':'image/jpeg'})
        res.write(files,'binary')
        res.end()
      }
    })
  }
  readImage('/public/images/head.jpeg',res)
})
module.exports = router