//obrnuti string 
// 1)"hello"
// 2)"howdy"
// 3)"greetings from earth"

// Resenje br: 0

function ObrnutiString(str) {
  str = str.split('');
  str = str.reverse('')
  str = str.join('')
  return str;
}

//isprintamo stringove
console.log(ObrnutiString("hello"))
console.log(ObrnutiString("hello"))
console.log(ObrnutiString("greetings from earth"))
