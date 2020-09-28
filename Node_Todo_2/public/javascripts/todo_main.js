// 타이틀 클릭해서 잘 받아오는지 테스트 했음
// function main_title_click() {
// id가 main_title로 되어있는(일반적인 tag)의 text 문자열을 추출하여
// text 변수에 저장
//   let text = document.getElementById("main_title").innerText;
//   alert(text);
// }

document.addEventListener("DOMContentLoaded", function () {
  // id가 todo인 tag를 todo라는 변수에 저장하라
  // todo는 id가 todo인 document object 가 된다.
  let todo = document.getElementById("todo");

  document.querySelector("#btn-save").addEventListener("click", function () {
    // 만약 html 문서내에 같은 tag가 1개만 있거나
    // 같은 class가 지정된 tag가 1개만 있을경우 querySelectAll()을 사용하지 않고
    // querySelector()를 사용해서 조회를 할수 있다
    let todo_input = document.querySelector("input");

    todo_input = document.querySelector(
      "section.todo_main form input[name='t_text']"
    );

    // 빈칸 유효성 검사
    let todo_value = todo_input.value;
    if (todo_value === "") {
      alert("할일은 반드시 입력하세요");
      document.querySelectorAll("input")[0].focus();
      return false;
    }

    if (confirm("저장할까요")) {
      // 서버로 데이터를 전송하라
      document.getElementsByTagName("form")[0].submit();
    }

    //   if (confirm("저장할까요?")) {
    //     document.querySelector("form").submit();
    //   }
  });
});
