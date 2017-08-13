function longest_palindrom(s){
  if (s === s.split("").reverse().join("")) {
    return s.length;
  } else {
    var A = longest_palindrom(s.substring(0, s.length-1));
    var B = longest_palindrom(s.substring(1, s.length));
    return Math.max(A, B);
  }
}
