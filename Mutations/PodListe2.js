//mutations 
//prosto resenje
//['hello', 'ello'] true, ['hello', 'hey'] false, ['alien', 'line'] true

function mutation(arr) {
  return arr[1].toLowerCase()
    .split('').every(function(sloco) {
      return arr[0].toLowerCase().indexOf(sloco) !== -1;
    })
    
}

console.log(mutation(['hello', 'hello']))
console.log(mutation(['hello', 'hey']))
console.log(mutation(['Alien', 'line']))
