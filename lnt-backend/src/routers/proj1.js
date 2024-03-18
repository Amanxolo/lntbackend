const express = require("express");
const router = new express.Router();

router.post("/proj1/pred_Prod", async function (req, res) {
  console.log(req.body);
  const department_finishing = parseInt(req.body.department_finishing);
  const department_sewing = parseInt(req.body.department_sewing);
  const day_Monday = parseInt(req.body.day_Monday);
  const day_Saturday = parseInt(req.body.day_Saturday);
  const day_Sunday = parseInt(req.body.day_Sunday);
  const day_Thursday = parseInt(req.body.day_Thursday);
  const day_Tuesday = parseInt(req.body.day_Tuesday);
  const day_Wednesday = parseInt(req.body.day_Wednesday);
  const team_1 = parseInt(req.body.team_1);
  const team_2 = parseInt(req.body.team_2);
  const team_3 = parseInt(req.body.team_3);
  const team_4 = parseInt(req.body.team_4);
  const team_5 = parseInt(req.body.team_5);
  const team_6 = parseInt(req.body.team_6);
  const team_7 = parseInt(req.body.team_7);
  const team_8 = parseInt(req.body.team_8);
  const team_9 = parseInt(req.body.team_9);
  const team_10 = parseInt(req.body.team_10);
  const team_11 = parseInt(req.body.team_11);
  const team_12 = parseInt(req.body.team_12);
  const quarter = parseInt(req.body.quarter);
  const no_of_workers = parseInt(req.body.no_of_workers);
  const over_time = parseInt(req.body.over_time);
  const smv = parseInt(req.body.smv);
  const incentive = parseInt(req.body.incentive);
  const targeted_productivity = parseInt(req.body.targeted_productivity);
  console.log(typeof targeted_productivity)
  const z = [
    department_finishing * 0.00902471 +
      department_sewing * -0.26634928 +
      day_Monday * -0.17567976 +
      day_Saturday * -0.54321405 +
      day_Sunday * 0.20438993 +
      day_Thursday * 0.70285988 +
      day_Tuesday * -0.30612421 +
      day_Wednesday * -0.13955637 +
      team_1 * -0.52835679 +
      team_2 * 0.02454169 +
      team_3 * -0.4141645 +
      team_4 * -0.18505903 +
      team_5 * -0.18401458 +
      team_6 * -0.05658406 +
      team_7 * 0.61360215 +
      team_8 * 0.460623 +
      team_9 * -0.08048207 +
      team_10 * 0.26407513 +
      team_11 * 0.27095822 +
      team_12 * -0.60342787 +
      quarter * 0.19592769 +
      no_of_workers * -0.07893121 +
      over_time * -0.00002273 +
      smv * 0.11908515 +
      incentive * -0.0010773 +
      targeted_productivity * 0.194649371 * -1,
  ];

  const productivity = 1 / (1 + Math.exp(-z));
  var flag = 0;

  if (productivity > 0.5) {
    console.log(productivity);
    res.send({ productivity } + "Productivity is low");
  } else {
    console.log(productivity);
    res.send({ productivity } + "productivity is high");
  }
});

module.exports = router;
