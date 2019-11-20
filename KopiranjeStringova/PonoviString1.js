//treba ispisati neki string vise puta

function ponoviStringBrojPut(str, num) {
  if (num > 0) {
    return str.repeat(num)
  }
  return ""
}

console.log(ponoviStringBrojPut('crvena jabuga je', -1))
console.log(ponoviStringBrojPut('crvena jabuga je', 4))
