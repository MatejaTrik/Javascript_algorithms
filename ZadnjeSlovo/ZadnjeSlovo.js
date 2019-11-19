//treba napisati funkciju koja proverava da li je neki string
//zavrsava odredjenim slovom
//'legencida', 'a'

function potvrdiKraj(str, targer) {
  return str.substr(-targer.length) === targer;
}

console.log(potvrdiKraj('legendica','a'))
