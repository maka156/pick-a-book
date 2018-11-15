const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();


mongoose.connect('mongodb://localhost/pickabook', {useNewUrlParser: true}, err=> {
    if (err) return console.log('error ' + err);

    console.log('DB connection established');
});

const port = process.env.app_port || 8080;

const books = require('./routes/book.route');
//app.use(express.static(__dirname + '/views'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/', books);

app.listen(port, err => {
    if (err) return console.log('Unable to start the server');

    console.log('Server is up and running on port number ' + port);
});