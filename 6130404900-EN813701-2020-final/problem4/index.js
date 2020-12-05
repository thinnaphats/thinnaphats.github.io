var express = require('express');
const router = require('./students');
var app = express();

var student = require('./students.json')

app.use('/students', student);

app.listen(4000);