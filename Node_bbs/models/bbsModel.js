var mongoose = require("mongoose");
/*
NoSQL인 Mongodb를 RDBMS처럼 사용하기 위해서 Schema를 생성
Table 구조를 생성하는 형태
VO 객체로서 역할을 수행하게 된다
*/
var schema = mongoose.Schema;

// JSON 데이터 구조로 bbsVO의 table(Schema)를 생성하기 위한 객체 선언
var bbsVO = new schema({
    // 칼럼이름 : 데이터Type
    d_date : String,
    b_time : String,
    b_title : String,
    b_write : String,
    b_text : String,
    b_count: Number
});

// mongoose의 model() 함수를 사용하여
// tbl_bbs table을 만들고 그 구조를 bbsVO에 선언된 형태로 만들겠다
// model을 다른 모듈에서 사용할 수 있도록 export 한다.
module.exports = mongoose.model('tbl_bbs', bbsVO);