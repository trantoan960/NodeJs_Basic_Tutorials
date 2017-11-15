// Call Module Express
var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html', 'utf8');
})
app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html', 'utf8');
})

app.get('/register/:userId', function(req, res) {
    var infor = {
        username: 'skyalbert',
        password: '123',
        age: '21',
        jobs: ['progamming', 'designer', 'waiter'],
    }
    res.render('register', {id: req.params.userId, information: infor, jobs: infor.jobs});
})



app.listen(8088);
