var express = require("express");
var route = express.Router();
//routes
route.get("/", (req, res) => {
  res.render("home");
});
route.get("/customhome", function (req, res) {
  res.render("home_old");
});
route.get("/students", (req, res) => {
  res.render("students");
});
route.get("/contactUs", (req, res) => {
  res.render("contactUs");
});
route.get("/whyRecruit", (req, res) => {
  res.render("whyRecruit");
});
route.get("/recruiters", (req, res) => {
  res.render("recruiters");
});
route.get("/maps", (req, res) => {
  res.render("maps");
});
route.get("/devteam", (req, res) => {
  res.render("devteam");
});
route.get("/infrastructure", (req, res) => {
  res.render("infrastructure");
});
route.get("/login", (req, res) => {
  res.render("login");
});
route.post("/login", (req, res) => {
  console.log(req.body);
});
route.get("/facilities", (req, res) => {
  res.render("facilities");
});

route.get("/demographic", (req, res) => {
  res.render("demographic");
});
route.get("/demo", (req, res) => {
  res.render("demo");
});
route.get("/statistics", (req, res) => {
  res.render("statistics");
});
route.get("/extra", (req, res) => {
  res.render("extra");
});
route.get("/achieve", (req, res) => {
  res.render("achieve");
});
route.get("/placementprocedure", (req, res) => {
  res.render("placementProcedure");
});
route.get("/underConstruction", (req, res) => {
  res.render("underConstruction");
});
route.get("/notFound", (req, res) => {
  res.render("notFound");
});



// route for placement schedule
route.get("/schedule_and_faq", (req, res) => {
  res.render("schedule_and_faq");
});

route.get("/internshipRules", (req, res) => {
  res.render("internshipRules");
});

module.exports = route;
