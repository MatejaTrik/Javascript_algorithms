//Caesar's cipher
//basic

//ex) 'LBH QVQ BG!'

function rot13(str) {
  //split str u karaktere listu
  return str.split('')
  //
  .map.call(str, function(char) {
    //prometini char u karakter kod
    x = char.charCodeAt(0);
    //provetiti da li je karatker izmedju A-Z
    if (x < 65 || x > 90) {
      return String.fromCharCode(x); //vratiti ne konvertovan karakter
    }
    // n = ASCII 78, ako je karakter kod manji od 78, pomeri napred 13 mesta
    else if (x < 78) {
      return String.fromCharCode(x + 13);
    }
    //U suprotnom pomeri karakter 13 mesta nazad
    return String.fromCharCode(x - 13);
  }).join(''); //ponovo spajamo listu u string
}

let b = 'ja sam carina'
let a ='LBH QVQ BG!'
console.log(rot13(b))
