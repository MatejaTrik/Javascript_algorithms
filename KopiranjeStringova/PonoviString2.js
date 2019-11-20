//treba ispisati neki string vise puta

function ponoviStringBrojPut(str, num) {
  if (num < 0) return "";
  if (num === 1)
    return str;
  else
    return str + ponoviStringBrojPut(str, num - 1);

}

console.log(ponoviStringBrojPut('crvena jabuka je ', -1))
console.log(ponoviStringBrojPut('crvena jabuga je', 4))
