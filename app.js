var express = require('express');
var app = express();
var router = require('./controller/router.js')
app.use(express.static('public'));

app.get('/collectJob',router.collectJob);

app.listen(1234);