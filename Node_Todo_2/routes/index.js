var express = require("express");
var router = express.Router();
const moment = require("moment");

var todoVO = require("../models/modelTodo");

/* GET home page. */
router.get("/", function (req, res) {
  todoVO.find().then(function (todoList) {
    //bbsList.pug를 읽어서 rendering을 수행하도록 설정
    // rendering을 수행할 때 bbsList 파일을 ModelAttribute형식으로 담아서
    // 전송을 한다.

    res.render("index", { todoList });
  });
});

/* POST home page. */
router.post("/", function (req, res) {
  let todo = req.body.todo;

  let t_date = moment().format("YYYY-MM-DD");
  let t_time = moment().format("HH:mm:ss");

  req.body.t_date = t_date;
  req.body.t_time = t_time;

  let data = new todoVO(req.body);

  data
    .save() //데이터를 mongoDB의 table에 insert
    .then(function (todoVO) {
      // insert가 성공하면
      res.redirect("/");
    })
    .catch(function (error) {
      // insert가 실패하면
      console.error(error); // 오류메시지를 콘솔에 보여라
    });
});

module.exports = router;
