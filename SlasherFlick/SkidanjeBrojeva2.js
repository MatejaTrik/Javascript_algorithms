//Slasher Flick
//slasher ([1, 2, 3], 2 ); treba da vrati [3]

function slasher(arr, koliko) {
  return arr.slice(koliko);
}

console.log(slasher([1, 2, 3], 2 ))
console.log(slasher([1, 2, 3, 4, 5, 6, 7], 4 ))
