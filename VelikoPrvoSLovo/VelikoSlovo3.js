function velikoSlovo(str) {
  return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase())
}
console.log(velikoSlovo('ja sam mala soljica caja'))
