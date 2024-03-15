const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");

const app = express();
app.post("/pred_Prod", function (req, res) {
  const department_finishing = req.body.department_finishing;
  const department_sweing = req.body.department_sweing;
  const day_Monday = req.body.day_Monday;
  const day_Saturday = req.body.day_Saturday;
  const day_Sunday = req.body.day_Sunday;
  const day_Thursday = req.body.day_Thursday;
  const day_Tuesday = req.body.day_Tuesday;
  const day_Wednesday = req.body.day_Wednesday;
  const team_1 = req.body.team_1;
  const team_2 = req.body.team_2;
  const team_3 = req.body.team_3;
  const team_4 = req.body.team_4;
  const team_5 = req.body.team_5;
  const team_6 = req.body.team_6;
  const team_7 = req.body.team_7;
  const team_8 = req.body.team_8;
  const team_9 = req.body.team_9;
  const team_10 = req.body.team_10;
  const team_11 = req.body.team_11;
  const team_12 = req.body.team_12;
  const quater = req.body.quater;
  const no_of_workers = req.body.no_of_workers;
  const over_time = req.body.pver_time;
  const smv = req.body.smv;
  const incentive = req.body.incentive;
  const targeted_productivity = req.body.targeted_productivity;
  

  const productivity = [
    department_finishing * 0.00902471  +
    department_sweing * -0.26634928 +
    day_Monday * -0.17567976 +
    day_Saturday * -0.54321405 +
    day_Sunday * 0.20438993+
    day_Thursday * 0.70285988 +
    day_Tuesday * -0.30612421  +
    day_Wednesday * -0.13955637 +
    team_1 * -0.52835679 +
    team_2 * 0.02454169 +
    team_3 * -0.4141645 +
    team_4 * -0.18505903 +
    team_5 * -0.18401458 +
    team_6 * -0.05658406 +
    team_7 * 0.61360215+
    team_8 * 0.460623+
    team_9 * -0.08048207+
    team_10 * 0.26407513 +
    team_11 * 0.27095822+
    team_12 * -0.60342787+
    quater * 0.19592769+
    no_of_workers * -0.07893121+
    over_time *-0.00002273 +
    smv * 0.11908515+ 
    incentive*-0.0010773+
    targeted_productivity* −0.194649371,
    
  ];
  const prediction = 1 / (1 + Math.exp(-z));
  var flag = 0;
  if (prediction > 0.5) {
    flag = 1;
    res.render("prediction", {
      prediction: "High Risk! You better consult a Doctor.",
    });
  } else {
    res.render("prediction", {
      prediction: "low risk. You can skip the doctor for now.",
    });
  }
});
