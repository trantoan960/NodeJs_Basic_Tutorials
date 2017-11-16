// Call Module Express
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlphantich = bodyParser.urlencoded({extended: false});

app.set('view engine', 'ejs');


app.use(express.static('stuff'));



app.get('/', function(req, res) {
    res.render('index');
})
app.get('/login', function(req, res) {
    res.render('login');
})

app.get('/register', function(req, res) {

    res.render('register');
})

app.get('/contact', function(req, res) {
    res.render('contact');
})

app.post('/contact', urlphantich, function(req, res) {
    console.log(req.body);
    res.render('contact-success', {data: req.body});
})



app.listen(8088);
