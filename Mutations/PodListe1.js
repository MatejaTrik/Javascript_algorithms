//mutations 
//prosto resenje
//['hello', 'ello'] true, ['hello', 'hey'] false, ['alien', 'line'] true

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var meta = arr[0].toLowerCase();
  for (var i = 0; i <test.length; i++) {
    if (meta.indexOf(test[i]) === -1) return false;
  }
  return true
}

console.log(mutation(['hello', 'hello']))
console.log(mutation(['hello', 'hey']))
console.log(mutation(['Alien', 'line']))
