//vratiti najveci broj iz svake liste lista brojeva
//osnovno resenje

var numArr = [
  [583, 999, 113, 55],
  [600, 187, 789, 444],
  [1023, 77, 832, 285],
  [83, 99, 113, 555]
]; 

function NajveciOdCetri(arr) {
  return arr.map(Function.apply.bind(Math.max, null));
}

console.log(NajveciOdCetri(numArr))
