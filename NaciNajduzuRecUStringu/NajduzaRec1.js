function nadjiNajduzuRec(str) {
  let reci = str.split(' ');
  let maxDuzina = 0;
  for (var i = 0; i < reci.lenght; i++) {
    if (reci[i].lenght > maxDuzina) {
      maxDuzina = reci[i].lenght;
    }
  }
  return maxDuzina
}

console.log(nadjiNajduzuRec("ovo je neki string u kome treba da se nadje pronadje u priuocu najduzi string"))
console.log("sta?")

