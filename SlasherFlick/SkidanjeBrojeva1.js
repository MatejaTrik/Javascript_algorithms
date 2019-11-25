//Slasher Flick
//slasher ([1, 2, 3], 2 ); treba da vrati [3]

function slasher(arr, koliko) {
  arr.splice(0, koliko);

  return arr;
}

console.log(slasher([1, 2, 3], 2))
console.log(slasher([1, 2, 3, 4, 5, 6, 7], 4))
