const express = require ('express')
const app = express();
const routes = require('./routes/index');
// const userRouter = require('./routes/users');
const path = require ('path')



app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

// app.use(function(req,res,next){
//   console.log('1');
//   next();  
// })

// app.use(function(req,res,next){
//   console.log('2');
//   res.status(200).end();
// })
// app.get('/',function(req,res){
//   res.end('Hello express')
// })

// app.get('/users/:name',function(req,res){
//   res.end('hello,' + req.params.name)
// })

// app.use('/',indexRouter);
// app.use('/users',userRouter);

routes(app);

app.listen(3000);