//napisati program koji pise svako slovo reci u recenici veliko

//"ja sam mala soljica caja"

String.prototype.replaceAt = function(index, character) {
  return this.substring(0, index) + character + this.substring(index+character.length)
}

function velikoSlovo(str) {
  var noviNaslov = str.split(' ');
  var povecaniNaslov = [];
  for (var st in noviNaslov) {
    povecaniNaslov[st] = noviNaslov[st].toLowerCase().replaceAt(0, noviNaslov[st].charAt(0))
  }
  return povecaniNaslov.join(' ')
}

console.log(velikoSlovo("ja sam mala soljica caja"))
