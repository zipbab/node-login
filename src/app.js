"use strict";

const express = require('express');
const app = express();
const PORT = 3000;

//라우팅
const home = require('./routes/home');

// 앱 세팅
app.set('views', './views');
app.set('view engine', 'ejs');

app.use('/', home); //미들웨어 등록하는 메서드

module.exports = app;