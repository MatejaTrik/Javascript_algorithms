//provetiti da li je polindrom:
//oko
//anavolimilovana
//racecar

function palindrom(str) {
  let napred = 0;
  let nazad = str.length - 1;
  
  while(napred > nazad) {
    while(str[napred].match(/[\W_]/)) {
      napred++
      continue;
    }
    while(str[nazad].match(/[\W_]/)) {
      nazad--;
      continue
    }
    if (str[napred].toLowerCase() !== str[nazad].toLowerCase()) return false

     napred++;
     nazad--; 
    }
    return true
  }

console.log(palindrom("str"))
console.log(palindrom("anavolimilovanadfhadsfghfa"))
