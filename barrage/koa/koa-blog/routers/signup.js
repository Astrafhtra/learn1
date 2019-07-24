const router = require('koa-router')();
const controller = require('../controllers/c-signup')
// router->controller->model|view
// render ejs
router.get('/signin',controller.getSignup)
router.post('/signup')
// model save
module.exports=router