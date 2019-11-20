//u ovoj funckiji treba iseci string i umesto isecenih slova uneti
//tri tacke

function iseciString(str, num) {
  if (str.length > num && num >3) {
    return str.slice(0, (num -3)) + "..."
  }
  else if (str.length > num && num <= 3) {
    return str.slice(0, num) + "...";
  }
  else {
    return str
  }
}

console.log(iseciString('pomorandza', 1))
console.log(iseciString('pomorandza', 3))
console.log(iseciString('pomorandza', 9))
