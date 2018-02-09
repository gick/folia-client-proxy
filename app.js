var express = require('express');
var proxy = require('express-http-proxy');
var app=express()
app.use('/proxy',proxy('localhost:8081'))
app.use(express.static('../foliaBasecli'));
app.listen(80)
