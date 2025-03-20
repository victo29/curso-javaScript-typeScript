// Herança
// Produto -> aumento, desconto
// Camiseta = cor, caneca = material

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.aumento = function(valor){
    this.preco += valor;
}
Produto.prototype.desconto = function(valor){
    this.preco-= valor;
}

// -----------------------------------------------------

function Camiseta(nome,preco,cor){
    Produto.call(this,nome, preco); //(Obj, atributos do pai....) - Herdando atributos de Produto
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype); // -> Conectando os prototypes -Criando um Objeto com Prototype de produto e inserindo em  Camiseta 
Camiseta.prototype.constructor = Camiseta; // -> Definindo que o construtor de camiseta é camiseta

Camiseta.prototype.aumento = function(valor){ // Sobrescrevendo o método aumento
    this.preco = this.preco + (this.preco * (valor/100));
}

// Proto: Obj -> Camiseta -> Produto -> Object.prototype
const camiseta = new Camiseta('Regata', 7.5, 'Branca');
console.log(camiseta);
camiseta.aumento(100);
console.log(camiseta);

// ---------------------------------------------------------

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material
    

    Object.defineProperty(this, 'estoque', {
        get: function(){
            return estoque
        },
        set:  function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor;
        },
        enumerable: true
    })

}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const c1 = new Caneca('Caneca do Bob Esponja', 12, 'Porcelana', 5)
c1.aumento(1);
console.log(c1);

