var express = require('express');
var app = express();
app.use(express.static('dist/YourLyric'));
app.get('/login', function (req, res,next) {
res.redirect('/');
});
app.listen(8080)