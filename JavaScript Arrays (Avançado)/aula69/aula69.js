// forEach
// Parâmetros (valor, indice, array)

const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];

numeros.forEach((valor, indice) =>{
    console.log(valor,`ao quadrado é: ${valor**2}`);
});

// Simulando REDUCE
let soma = 0;
numeros.forEach(valor=>{
    soma += valor;
})
console.log(soma)