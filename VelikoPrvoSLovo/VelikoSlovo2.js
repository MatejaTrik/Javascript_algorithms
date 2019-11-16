function velikoSlovo(str) {
  var PretvoriUListu = str.toLowerCase().split(' ');
  var rezultat = PretvoriUListu.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());});
  return rezultat.join(' ')
  }


console.log(velikoSlovo("ja sam mala soljica caja"))
console.log("ja sam mala soljica caja")

