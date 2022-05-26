const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const today = require(__dirname + "/date.js");
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
const listOfTasks = [];
const workListOfTasks = [];
console.log(today, 'today app.js');
app.get("/", function(req,res) {
  res.render("list", {item: listOfTasks, date: today.getDate(), listType: "default"});
  console.log(req.body.newItem);
});
app.get("/work", function(req,res) {
  res.render("list", {item: workListOfTasks, date: today.getDate(), listType: "work"});
  console.log(req.body.newItem);
});
app.post("/", function(req, res) {
  if(req.body.button === "work") {
  workListOfTasks.push(req.body.newItem);
  res.redirect("/work");
}
else {
  listOfTasks.push(req.body.newItem);
  res.redirect("/");
}
  console.log(req.body);
});
// app.post("/work", function(req, res) {
//   // if(req.body.button === "work") {
//   // workListOfTasks.push(req.body.newItem);
//   res.redirect("/work");
//   console.log(workListOfTasks);
// });
app.listen("3000", function() {
  console.log("Server started ....");
});
