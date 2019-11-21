// podeli listu u vise pod lista

/*
1. (['a', 'b', 'c', 'd'], 2) Treba da bude [['a', 'b'], ['c', 'd']]
1. ([0, 1, 2, 3, 4, 5], 3) Treba da bude [[0, 1, 2], [3, 4, 5]]
1. ([0, 1, 2, 3, 4, 5], 2) Treba da bude [[1, 2], [3, 4], [5, 6]]
1. ([0, 1, 2, 3, 4, 5], 4) Treba da bude [[0, 1, 2, 3], [4, 5]]
*/

function podeliListu(arr, size) {
  var temp = [];
  var rezultat = [];

  for (var a= 0; a < arr.length; a++) {
    if (a % size !== size - 1) {
      temp.push(arr[a]);
    }
    else {
      temp.push(arr[a]);
      rezultat.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) {
    rezultat.push(temp);
  return rezultat;  
  }
}

console.log(podeliListu(['a', 'b', 'c', 'd'], 3));
console.log(podeliListu([0, 1, 2, 3, 4, 5], 4));
console.log(podeliListu([0, 1, 2, 3, 4, 5], 5));
console.log(podeliListu([0, 1, 2, 3, 4, 5, 6], 6));
