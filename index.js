//invoke express and path
var express = require("express");
var path = require("path");

//access express
var app = express();

//access port
var port = process.env.PORT || '8000';

//activate server
app.listen(8000, function() {
    console.log(`server running at http://localhost ${PORT}`)
});

//app configuration
app.use(express.static(path.join(__dirname, "public")))
