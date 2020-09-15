// express Routing
// 1. express 프레임워크 import
var express = require("express");

// 2. express 프레임워크를 사용하여 router 객체 생성
var router = express.Router();

// @RequestMapping
router.get("/", function(req, res){
    res.send("Home GET Mapping");
});

router.get("/my", function(req, res){
    // res.send("My GET Mapping");    
    res.render("home");
});

router.post("/input", function(req, res){
    // res.send("INPUT POST Mapping");
    let m_user = req.body.m_user;
    res.send("입력한 user : " + m_user);
});

router.post("/", function(req, res){
    res.send("Home POST Mapping");
});

// express를 사용한 router 설정객체를
// app.js에서 import하여 사용할 수 있도록 내보내기 기능
module.exports = router;