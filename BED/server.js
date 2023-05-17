var express = require('express');
var bodyParser = require('body-parser');
var port = 8081;//use another port 8081 for this exercise
var hostname = "localhost";

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(urlencodedParser);//attach body-parser middleware
app.use(bodyParser.json());//parse json data
//VERB+URL 
app.get('/api/user', function (req, res) {

    res.status(200);
    res.type(".html");
    res.end("Data of all users sent!");

});

app.listen(port, hostname, () => {
    console.log(`Server started and accessible via http://${hostname}:${port}/`);
});
