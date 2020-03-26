var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send('Hi there!');
});

app.get('/bye', function(req,res){
    res.send('Goodbye!');
});

app.get('/dog', function(req,res){
    res.send('Woof');
});

app.get('/r/:subredditName/comments/:id/:title',function(req,res){
    res.send("Welcome to the comments!");
});

app.get('/r/:subredditName', function(req,res){
    var subreddit = req.params.subredditName;
    res.send("Welcome to the " + subreddit + "subreddit!");
});

app.get('*',function(req,res){ // nyttig for errormelding for route som ikke er definert, plasser under andre routes
    res.send('You are a star');
});

app.listen(3000, function(){
    console.log('Listening on port 3000');
});