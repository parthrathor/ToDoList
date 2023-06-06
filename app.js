//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

var day = date.getDay();

const app = express();
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workitems = [];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");  //to use ejs templating

app.get("/", function (req, res) {
  

  res.render("list", { listTitle: day, newListItem: items }); //render a file called list.ejs,{} is a javascript object. listTitle is variable defined in ejs
});

app.post("/", function (req, res) {
  let item = req.body.newItem;
  if (req.body.list === "Work") {
    workitems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newListItem: workitems });
});

app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
