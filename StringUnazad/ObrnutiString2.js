//obrnuti string 
// 1)"hello"
// 2)"howdy"
// 3)"greetings from earth"

// Resenje br: 

function ObrnutiString(str) {
  var rev = "";
  str.split("");
  for (var i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev
}

//isprintamo stringove
console.log(ObrnutiString("hello"))
console.log(ObrnutiString("hello"))
console.log(ObrnutiString("greetings from earth"))
