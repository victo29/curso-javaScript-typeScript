// Revisando Objetos

const pessoa2 = {
    nome: 'Victor',
    sobrenome: 'Tavares'
};

// Formas de acessar os atributos
console.log(pessoax.nome);
console.log(pessoax['nome']); //Melhor utilizada em situações que podem mudar o conteúdo -
const chave = 'sobrenome'
console.log(pessoax[chave]); // - Dessa maneira


const pesso1 = new Object();
pesso1.nome = 'Iasmin';
pesso1.idade = 18;

delete pesso1.idade // Apaga um atributo no objeto 
 
console.log(pesso1);

