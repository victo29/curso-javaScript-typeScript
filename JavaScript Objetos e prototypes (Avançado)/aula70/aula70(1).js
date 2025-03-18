const pessoax = new Object();

pessoax.nome = 'Iasmin';
pessoax.sobrenome = 'Caldeira';
pessoax.idade = 18;

pessoax.getDataNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

console.log(pessoax.getDataNascimento());


// Iterando por um objeto
for(let chaves in pessoax){
    console.log(pessoax[chaves]);
}

// Constructor functions

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}


const p1 = new Pessoa('Victor', 'Tavares');
Object.freeze(p1); // Trava as alterações ao objeto e caso seja utilizado dentor do construtr com Object.freeze(this) trava todos os objetos desse construtor;

p1.nome = 'Kloviz';
console.log(p1);