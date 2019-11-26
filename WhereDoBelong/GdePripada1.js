//gde pripada

function nadjiIndexUbaci(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) {
      return a;
    }
  }

  return arr.length;
}

console.log(nadjiIndexUbaci([1, 2, 3, 4], 1.5));
console.log(nadjiIndexUbaci([20, 3, 5], 19));
console.log(nadjiIndexUbaci([40, 60], 50));
console.log(nadjiIndexUbaci([40, 60], 500));
