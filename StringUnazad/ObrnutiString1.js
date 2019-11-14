//obrnuti string 
// 1)"hello"
// 2)"howdy"
// 3)"greetings from earth"

// Resenje br: 


function ObrnutiString(str) {
  var noviStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    noviStr += str[i]
  }
  return noviStr;
}

//isprintamo stringove
console.log(ObrnutiString("hello"))
console.log(ObrnutiString("hello"))
console.log(ObrnutiString("greetings from earth"))
 console.log("ja sam car")
