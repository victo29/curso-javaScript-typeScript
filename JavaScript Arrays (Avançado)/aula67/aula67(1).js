// RETORNE E PESSOA MAIS VELHA

const pessoas = [
    {nome:'Maria', idade:23},
    {nome:'Luiz', idade:62},
    {nome:'Eduardo', idade:55},
    {nome:'Letícia', idade:19},
    {nome:'Rosana', idade:32},
    {nome:'Wallace', idade:47},
]


const pessoasMaisVelha = pessoas.reduce((acumulador, valor)=>{

    if(acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(pessoasMaisVelha);