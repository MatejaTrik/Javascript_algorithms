str = "Ovo je neki string koji cemo zeleti da podelimo i da vidimo koja rec je najduza od svih ovih";

function NajduzaRec(str) {
  str = str.split(" ");

  if (str.length == 1) {
    return str[0].length;
  }

  if (str[0].length >= str[1].length) {
    str.splice(1, 1);
    return NajduzaRec(str.slice(1, str.length).join(" "));
  }

  if (str[0].length <= str[1].length) {
    return NajduzaRec(str.slice(1, str.length).join(" "))
  }

  return str.length
}

console.log(NajduzaRec(str))
