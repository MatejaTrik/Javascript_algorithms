//treba ispisati neki string vise puta

function ponoviStringBrojPut(str, num) {
  return num > 0 ? str.repeat(num) : '';
}

console.log(ponoviStringBrojPut(' crvena jabuga je', -1))
console.log(ponoviStringBrojPut('crvena jabuga je', 4))
