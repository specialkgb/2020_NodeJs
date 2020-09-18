console.log("=======================");
console.log("JS에서 eq 비교연산자");
/*
js에서 같은 값을 비교할 때 사용하는 연산자가 2가지가 있다
    동등연산자 : ==
    평등연산자 : ===
*/

let b = 0 == "";
console.log("0 == '' : ", b);
b = 0 === "";
console.log("0 === '' : ", b);

b = "" || null || undefined || NaN || 0 || "없음";
console.log(b);

// 어떤(변수에 저장된) 값을 비교하여 정확히 일치하는지 알고 싶을 때는
// 동등이 아닌 평등 연산자를 사용하는 것이 정확한 결과를 낼 수 있다.

b = "1" === 1;
console.log(b);

// T or F 여부만 판단
b = null == undefined;
console.log(b);

// 자료형까지 일치하는지를 비교
b = null === undefined;
console.log(b);

let num = 0;
if (num && ++num) {
}
console.log("num && ++num", num);

if (num || ++num) {
}
console.log("num || ++num", num);
