var bodyParser = require("body-parser");
var express = require("express");
var HTTP_PORT = process.env.PORT || 8080;
var final = require('./final');
var app = express();
var path = require("path");


function onHttpStart() 
{
    console.log("Express http server listening on " + HTTP_PORT);
}

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
    // send the html view with our form to the client
    res.sendFile(path.join(__dirname, "finalViews/home.html"));
}
)
,
app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "finalViews/register.html"));
}),


app.get("/register", (req, res) => {
    // send the html view with our form to the client
    res.sendFile(path.join(__dirname, "finalViews/register.html"));
}
)
;