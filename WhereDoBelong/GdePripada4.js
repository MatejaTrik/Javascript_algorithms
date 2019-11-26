//gde pripada

function nadjiIndexUbaci(arr, num) {
  //soritaj i nadji pravi index
  var index = arr.sort((curr, next) => curr > next).findIndex((currNum) => num <= currNum)

  //vratiti pravi odg
  return index === -1 ? arr.length : index
}

console.log(nadjiIndexUbaci([1,2,3,4], 1.5));
console.log(nadjiIndexUbaci([20,3,5], 19));
console.log(nadjiIndexUbaci([40, 60], 50));
console.log(nadjiIndexUbaci([40, 60], 500));
