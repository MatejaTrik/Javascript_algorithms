//falsy bouncer

var lazanArr = [0, 1, 2, 3, null, 5, "", 7, 8, undefined, 10, NaN, 12, 13, false]

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer(lazanArr))
