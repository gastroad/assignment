function alpha_string46(s){
  var result;
  // 함수를 완성하세요



    if (isNaN(s)) {
    result = false

  }
  else{
    switch (s.length){
      case 4:
      result = true
      break;
      case 6:
      result = true
      break;
      default:
      result = false
      break;
    }

  }
return result
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( alpha_string46("a234") );
