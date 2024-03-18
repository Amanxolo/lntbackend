const express = require('express');
const router = new express.Router();

router.post("/proj1/pred_Prod", async function (req, res) {
  console.log(req.body);
  const department_finishing = req.body.department_finishing;
  const department_sewing = req.body.department_sewing;
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
  const quarter = req.body.quarter;
  const no_of_workers = req.body.no_of_workers;
  const over_time = req.body.over_time;
  const smv = req.body.smv;
  const incentive = req.body.incentive;
  const targeted_productivity = req.body.targeted_productivity;

  const z = [
    department_finishing * -1.80985375e-02 +
    department_sewing * 2.77587742e-01 +
    day_Monday * 1.79857606e-01 +
    day_Saturday * 5.59618370e-01 +
    day_Sunday * -2.12074484e-01 +
    day_Thursday * -7.24832262e-01 +
    day_Tuesday * 3.14369284e-01 +
    day_Wednesday * 1.42550691e-01 +
    team_1 * 5.46898514e-01 +
    team_2 * -2.62356749e-02 +
    team_3 * 4.29241611e-01 +
    team_4 * 1.91484785e-01 +
    team_5 * 1.90414063e-01 +
    team_6 * 5.76303594e-02 +
    team_7 *  -6.35805972e-01 +
    team_8 * -4.77345863e-01 +
    team_9 * -8.46103418e-02 +
    team_10 * -2.74361564e-01 +
    team_11 * -2.81829355e-01 +
    team_12 * 6.24008643e-01 +
    quarter * -2.05349903e-01 +
    no_of_workers *7.67109133e-02  +
    over_time *1.95321255e-05  +
    smv * -1.13023925e-01 +
    incentive * 9.93071440e-04 +
    targeted_productivity * 1.95961127e-01
  ];

  const productivity = 1 / (1 + Math.exp(-z));
  var flag = 0;

  if (productivity > 0.5) {
    flag = 1;
    res.render("productivity", {
      prediction: "High Risk! You better consult a Doctor.",
    });
  } else {
    res.render("productivity", {
      productivity: "low risk. You can skip the doctor for now.",
    });
  }
});

module.exports = router;
