//Caesar's cipher
//basic

//ex) 'LBH QVQ BG!'

function rot13(str) {
  return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}

let a ='LBH QVQ BG!'
console.log(rot13(a))
