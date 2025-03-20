function Produto(nome, preco){
    this.nome =nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(valor){
    this.preco = this.preco - (this.preco * (valor/100));
}
Produto.prototype.aumento = function(valor){
    this.preco = this.preco + (this.preco * (valor/100));
}

const p1 = new Produto('Camisa', 50);

// p1.desconto(100);
p1.aumento(10);

console.log(p1);

// ----------------------------------------------------

const p2 = {
    nome:'Caneca',
    preco: 12
}
Object.setPrototypeOf(p2, Produto.prototype);
p2.aumento(10);
console.log(p2);

// ----------------------------------------------------

const p3 =  Object.create(Produto.prototype); // Iniciando um objeto já com o prototype de Produto
p3.nome = 'Caneta';
p3.preco = 1.60;

p3.aumento(100);

console.log(p3);

