function evenOrOdd(num) {
  var result;
  if (num % 2 === 0){
  	result = "Even"
  }
  else{
  	result = "Odd"
  }
  ;
  // 함수를 완성하세요
  return result
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));