str = "Ovo je neki string koji cemo zeleti da podelimo i da vidimo koja rec je najduza od svih ovih";

function NajduzaRec(str) {
  return str.split(" ").reduce(function (x, y) {
    return Math.max(x, y.length)    
  }, 0);
}

console.log(NajduzaRec(str))
