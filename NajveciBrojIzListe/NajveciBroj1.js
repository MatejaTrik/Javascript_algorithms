//vratiti najveci broj iz svake liste lista brojeva
//osnovno resenje

var numArr = [
  [583, 999, 113, 55],
  [600, 187, 789, 444],
  [1023, 77, 832, 285],
  [83, 99, 113, 555]
]; 

function NajveciOdCetri(arr) {
  var rezultat =[];
  for (var n =0; n < arr.length; n++) {
    var najveciBroj = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > najveciBroj) {
        najveciBroj = arr[n][sb]
      }
    }
    rezultat[n] = najveciBroj;
  }
  return rezultat;
}

console.log(NajveciOdCetri(numArr))
