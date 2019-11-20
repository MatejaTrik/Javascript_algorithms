//u ovoj funckiji treba iseci string i umesto isecenih slova uneti
//tri tacke

function iseciString(str, num) {
  if (str.length > num) {
    return str.slice(0, num > 3 ? num - 3 : num) + '...'
    return str;
  }
}

console.log(iseciString('pomorandza', 1))
console.log(iseciString('pomorandza', 3))
console.log(iseciString('pomorandza', 9))
