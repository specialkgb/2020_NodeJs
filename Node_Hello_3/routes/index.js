var express = require("express");
var router = express.Router();
const moment = require("moment");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "반갑습니다",
    date: moment(new Date()).format("YYYY-MM-DD"),
    time: moment(new Date()).format("HH:mm:ss"),
  });
});

router.post("/", function (req, res, next) {
  name = req.body.name;
  res.render("index", {
    title: name + "님 반갑습니다",
    date: moment(new Date()).format("YYYY-MM-DD"),
    time: moment(new Date()).format("HH:mm:ss"),
  });
});

module.exports = router;
