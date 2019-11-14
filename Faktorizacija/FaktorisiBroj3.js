function fakt(num) {
  for (var a = 1; num >= 1; num--) {
    a *= num; 
  }
  return a;
}
  
console.log(fakt(5))
console.log(fakt(10))
console.log(fakt(20))
console.log(fakt(0))


