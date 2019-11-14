function fakt(num) {
  var rezultat = 1;
  for (var i = num; i > 0; i--) {
    rezultat *= i;
  }
  return rezultat
}

console.log(fakt(5))
console.log(fakt(10))
console.log(fakt(20))
console.log(fakt(0))

