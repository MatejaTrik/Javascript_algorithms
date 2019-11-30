//Caesar's cipher
//basic

//ex) 'LBH QVQ BG!'

function rot13(str) {
  var rotCharArray = [];
  var regEx = /[A-Z]/;
  str = str.split("")
  for (var x in str) {
    if (regEx.test(str[x])) {
      // jos generalniji pristup 
      //moguc zbog modularnog aritmetickog i siklico prirode rot13
      rotCharArray.push((str[x].charCodeAt() - 65 + 13) % 26 + 65);
    }
    else {
      rotCharArray.push(str[x].charCodeAt())
    }
  }
  str = String.fromCharCode.apply(String, rotCharArray);
  return str;
}

let a ='LBH QVQ BG!'
console.log(rot13(a))
