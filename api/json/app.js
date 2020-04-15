var request = require("request");
var express = require("express");
var app = express();

request("https://jsonplaceholder.typicode.com/users", function(error,response,body){
    if (!error && response.statusCode == 200){
        var parsedData = JSON.parse(body);
        console.log(parsedData);
    }
});

app.listen(3000,function(req,res){
    console.log("Listening on port 3000");
});