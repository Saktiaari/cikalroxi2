var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From fariz" }');
});

app.get('/will', function (req, res) {
    res.send('{ "response": "Hello World Mas Fariz" }');
});
app.get('/ready', function (req, res) {
    res.send('{ "response": " Great! " }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
