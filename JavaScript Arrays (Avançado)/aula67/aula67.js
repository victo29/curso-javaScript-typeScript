// Reduce - Reduzindo o array
// parâmetros -> (acumulador, valor atual, indice, array)
// pode passar um valor inicial ao acumulador

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const total = numeros.reduce((acumulador, valor)=>{
    return acumulador += valor;
}, 0); // Valor inicial para o acumulador


// Fazendo fução do FILTER através do REDUCE
const valoresPares = numeros.reduce((acumulador,valor)=>{
    if (valor % 2 == 0) acumulador.push(valor);
    return acumulador;
},[]); // Valor inicial do acumulador sendo um array

// Fazendo fução do MAP através do REDUCE
const valoresEmDobro = numeros.reduce((acumulador, valor) =>{
    acumulador.push(valor *2);
    return acumulador;
},[]);

// Somando somente PARES
const somaPares = numeros.reduce((acumulador, valor)=>{
    if(valor%2==0){
        acumulador += valor;
    }

    return acumulador;
},0)


console.log('TOTAL: ',total);
console.log('VALORES PARES: ',valoresPares);
console.log('VALORES EM DOBRO: ',valoresEmDobro);
console.log('SOMA DOS PARES: ',somaPares);