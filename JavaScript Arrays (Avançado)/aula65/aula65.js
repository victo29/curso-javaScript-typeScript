// Filter - Filtrando o Array
// Vai sempre retornar um Array, com a mesma quantidade de elementos ou menos.
// (valor, índice, array)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

function callbackFilter(valor){
    return valor > 10; // Retornando somenta a função, já que é um valor bool 
    
    // if(valor>10){
    //     return true; // A função FILTER necessita que seja retornado um valor bool indicando se o valor deve ou não se incluído
    // } else {
    //     return false;
    // }
}

const numerosFiltrados = numeros.filter(callbackFilter);

const numerosFiltrados2 = numeros.filter(valor =>  valor > 10); // Enviando uma função anônima de uma maneira bem reduzida por ser uma função de uma linha

console.log(numerosFiltrados);
console.log(numerosFiltrados2);
