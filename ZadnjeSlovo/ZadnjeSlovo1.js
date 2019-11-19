//treba napisati funkciju koja proverava da li je neki string
//zavrsava odredjenim slovom
//'legencida', 'a'

function potvrdiKraj(str, targer) {
  if (str.substr(str.length - targer.length, str.length) !== targer) {
    return false;
  }
  else {
    return true;
  }
  return str
}

console.log(potvrdiKraj('legendica','ab'))
