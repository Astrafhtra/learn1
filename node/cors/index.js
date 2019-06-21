var express = require('express')
var app = express();
app.get('/products/:id', function(req, res, next) {
  res.json({
    msg: 'This is cross-enabled for all original'
  })
});
app.listen(80, function() {
  console.log('web server listening on port 80');
})
