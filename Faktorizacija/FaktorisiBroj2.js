function fakt(num) {
  if (num === 0) {
    return 1;
  }
  return num * fakt(num-1)
}

console.log(fakt(5))
console.log(fakt(10))
console.log(fakt(20))
console.log(fakt(0))

