var express = require('express'); //get express library
var app = express(); //declare 'app' as the express
// axios.<method> will now provide autocomplete and parameter typings
const cors = require('cors') //import CORS
app.options('*', cors()); //ENTER CORS CODES HERE
app.use(cors()); //ENTER CORS CODES HERE
const Depression = require("../model/david"); //import depression from david
var bodyParser = require('body-parser'); //import body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));//read the x-www-urlencoded, not posting "nested object"
app.use(bodyParser.json()); //use the middleware, make the request body readable to Express

app.get("/depression/", (req, res, next) => {  //get correct method, get correct req.url
    User.findAll((error, depression) => {  //correct const that imported from correct file, call correct function in that const, either error or results
        if (error) {  //when error occured
            console.log(error);
            res.status(500).send("'Result':'Internal Server Error'");
            return;
        };
        res.status(200).send(depression);  //no error and send results
    });
});

app.post("/depression/", (req, res, next) => {  //get correct method, get correct req.url
    // we can access the request body through req.body
    console.log(req.body);
    //Use the User.insert() method. We assume that the request body will contain the full_name, username, bio, and date_of_birth attributes:
    User.insert(req.body, (error, depression) => {  //correct const that imported from correct file, call correct function in that const, either error or results
        if (error) {  //when error occured
            console.log(error);
            res.status(500).send("'Result':'Internal Server Error'");
            return;
        };
        res.status(201).send({  //no error and send results
            depression
        });
    });
});