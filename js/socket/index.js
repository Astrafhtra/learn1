
import express from 'express'
import morgan from 'morgan'
import path from 'path'
import socketIo from 'socket.io'

const app = express()
app.set('views',path.resolve(__dirname,'views'))
app.set('view engine','ejs')

app.use(morgan('dev'))

app.get('/',(request,response) => {
    response.render('index')
})

let server = app.listen(8080,() => {
    console.log('Listen port: 8080')
})


let io = socketIo(server)
//使用socket 实现 通信的双向联通
//将我们的服务器放在 socketIo 中

io.on('connection',(socket) => {
    console.log('connected')
    socket.on('disconnect',() => {
        console.log('disconnected')
    })
socket.on('message',(msg)=>{
  console.log(msg)
  io.emit('message',msg)
  })
})

//用来监听一个连接事件



// var http = require('http')
// http.createServer(function(request,response){
//   response.writeHead(200,{'Content-Type':'text/plain'})
//   response.end('hello world')
// }).listen(8080)
// console.log('66666')
