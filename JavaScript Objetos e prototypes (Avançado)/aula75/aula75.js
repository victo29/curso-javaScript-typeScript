// Manipulando Prototypes
// Object.setPrototypeOf(objeto1, objeto2) -> Transfere o prototype de um objeto para outro


// objA -> Object.prototype
const objA = {
    chaveA :'A'
}

// objB -> objA -> Object.prototype
const objB = {
    chaveB :'B'
}

Object.setPrototypeOf(objB, objA); //Adicionando objA como proto do objB

// objC -> objB -> objA -> Object.prototype
const objC = {
    chaveC :'C'
}

Object.setPrototypeOf(objC ,objB); //Adicionando objB como proto do objC

console.log(objC.chaveA);
