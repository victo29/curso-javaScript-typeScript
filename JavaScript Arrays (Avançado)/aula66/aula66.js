// Mao - Mapeando o array
// Altera os valores do Array
// (valor, indice, array)
// Retorna o valor de maneira diferente, mas com a mesma quantidade de elementos


const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const numerosEmDobro = numeros.map(valor => valor * 2);

console.log(numerosEmDobro);