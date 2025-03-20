// defineProperties -> Maneira agrupada de fazer o  defineProperty 

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco =preco;
    
    Object.defineProperties(this,{
        nome: {
            enumerable:true, 
            value: nome,
            writable: true, 
            configurable: false 
        },
        preco: {
            enumerable:true, 
            value: preco,
            writable: true, 
            configurable: false 
        },
        estoque:{
            enumerable:true, 
            value: estoque,
            writable: false, 
            configurable: false 
        }
    })
}

const  p1 = new Produto('Caneta', 1.50,1000);

console.log(p1);
