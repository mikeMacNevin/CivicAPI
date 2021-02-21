const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/index.html'))

});

app.listen(process.env.PORT || 8080);