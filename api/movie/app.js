var express = require("express");
var app = express();
const path = require("path");
var request = require("request");
app.set("view engine", "ejs");


app.get("/results", function(req, res){
    var query = req.query.search;
    var url = `http://omdbapi.com/?s=${query}&apikey=thewdb`;
    request(url, function(error,response, body){
        if (!error && response.statusCode == 200){
            var parsedData = JSON.parse(body);
            res.render("results", {data: parsedData});
        }
    })
});
 
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+"/views/search.html"));
});

app.listen(3000, (req,res) => {
    console.log("App listening on port 3000");
});