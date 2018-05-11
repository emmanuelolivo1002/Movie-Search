const express = require('express');
const request = require('request');

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.send("Welcome");
});

app.get("/results", function(req, res) {
  request("http://www.omdbapi.com/?apikey=thewdb&s=baby", function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var data = JSON.parse(body);
      res.render("results", {data: data});
    }
  });
});



app.listen(process.env.PORT || 3000, function () {
  console.log("listening to server!");
});
