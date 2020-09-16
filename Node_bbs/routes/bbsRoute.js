var express = require("express");
var router = express.Router();
const moment = require("moment");

// bbsModel에 선언된 Schema를 가져와서 bbsVO 모델 생성
var bbsVO = require("../models/bbsModel");

// localhost:3000/bbs/list URL 접근했을 때
router.get("/list", function (req, res) {
  // bbsVO Model을 통해서 데이터를 모두 읽어오고(find( 조건없이 ))
  // find()가 정상적으로 수행되면 .then( function(bbsList) { } )
  bbsVO.find().then(function (bbsList) {
    //bbsList.pug를 읽어서 rendering을 수행하도록 설정
    // rendering을 수행할 때 bbsList 파일을 ModelAttribute형식으로 담아서
    // 전송을 한다.
    // 현재 버전인 14.x버전에서는 { bbsList }라고 표현하면
    // 실제로 전달되는 방식은 { bbsList : bbsList }
    res.render("bbsList", { bbsList }); // { bbsList : bbsList}
  });
});

// localhost:3000/bbs/write URL 요청
router.get("/write", function (req, res) {
  // bbsWrite.pug 파일을 rendering하여 요청전송
  res.render("bbsWrite");
});
router.post("/write", function (req, res) {
  // let b_title = req.body.b_title;
  // let b_write = req.body.b_write;
  // let b_text = req.body.b_text;

  req.body.b_date = moment(new Date()).format("YYYY-MM-DD");
  req.body.b_time = moment(new Date()).format("HH:mm:ss");

  req.body.b_count = 0;

  // form에 전송받은 데이터를 통째로 bbsVO(data) 객체로 생성하라
  let data = new bbsVO(req.body);

  // Data Create
  data
    .save() // 생성한 bbsVO(data)에 저장된 데이터를 mongoDB의 table에 insert
    .then(function (bbsVO) {
      // insert가 성공하면
      // res.json(bbsVO); // client에게 다시 데이터를 보여라
      res.redirect("/bbs/list");
    })
    .catch(function (error) {
      // insert가 실패하면
      console.error(error); // 오류메시지를 콘솔에 보여라
    });

  // res.write(b_title);
  // res.write(b_write);
  // res.end(b_text);
  // res.json(req.body);
});

// localhost:3000/bbs/view/id값 URL 요청
// id값 : bbs의 각 라인(item)의 PK값
// PK값을 가지고 tbl_bbs에서 1개의 item 값을 추출하여
// detail view에 보여주기
router.get("/view/:id", function (req, res) {
  let id = req.params.id;

  // findOne : findById()
  // { where : {_id:id} }
  // table의 _id값이 list에서 전달받은 id값과 일치하는 item이 있는지 검사
  bbsVO
    .findOne({ _id: id })
    .then(function (result) {
      // PK 값과 일치하는 item 이 있으면 그 결과를 result에 담아준다
      // res.json(result);
      res.render("bbsView", { bbsVO: result });
    })
    .catch(function (error) {
      console.error(error);
    });

  //   res.send(id);
});

module.exports = router;
