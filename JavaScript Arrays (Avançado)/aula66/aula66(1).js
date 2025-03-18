const pessoas = [
    {nome:'Luiz', idade:62},
    {nome:'Maria', idade:23},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
]



const nomes = pessoas.map(obj => obj.nome);

// Retornando um array com objetos contendo somente idades
const objIdades = pessoas.map(obj => {
    // delete obj.nome;
    return {idade: obj.idade}
}); 

// Retornando os objetos com IDs
const objComID = pessoas.map((obj, indice)=>{
    const newObj = {...obj}; // Fazendo dessa maneira evita que o objeto original seja alterado, mas se caso for necessário altera-lo, basta usar o valor passado por referência
    newObj.id = indice;
    return newObj;
})

console.log(nomes);
console.log(objIdades);
console.log(objComID);

console.log('===============================');

console.log(pessoas);
