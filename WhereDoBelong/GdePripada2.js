//gde pripada

function nadjiIndexUbaci(arr, num) {
  arr.sort(function(a, b) {
    return a-b;
  });

  var i  = 0;
  while(num > arr[i]) {
    i++
  }

  return i;
}

console.log(nadjiIndexUbaci([1,2,3,4], 1.5));
console.log(nadjiIndexUbaci([20,3,5], 19));
console.log(nadjiIndexUbaci([40, 60], 50));
console.log(nadjiIndexUbaci([40, 60], 500));
