// podeli listu u vise pod lista

/*
1. (['a', 'b', 'c', 'd'], 2) Treba da bude [['a', 'b'], ['c', 'd']]
1. ([0, 1, 2, 3, 4, 5], 3) Treba da bude [[0, 1, 2], [3, 4, 5]]
1. ([0, 1, 2, 3, 4, 5], 2) Treba da bude [[1, 2], [3, 4], [5, 6]]
1. ([0, 1, 2, 3, 4, 5], 4) Treba da bude [[0, 1, 2, 3], [4, 5]]
*/

function podeliListu(arr, size) {
  var noviArr = [];
  var i = 0;

  while (i < arr.length) {
    noviArr.push(arr.slice(i, i+size));
    i += size;
  }
  return noviArr;
}

console.log(podeliListu(['a', 'b', 'c', 'd'], 2));
console.log(podeliListu([0, 1, 2, 3, 4, 5], 3));
console.log(podeliListu([0, 1, 2, 3, 4, 5], 2));
console.log(podeliListu([0, 1, 2, 3, 4, 5], 4));
