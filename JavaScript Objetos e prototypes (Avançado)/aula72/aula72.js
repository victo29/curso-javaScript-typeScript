// Getters e Setters

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco =preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable:true, 
        configurable: true,
        get: ()=>{
            return estoquePrivado;
        },
        set: valor =>{

            if (typeof valor != 'number'){
                throw new TypeError('Mensagem');
            }

            estoquePrivado = valor;     
        }
    });
}

function criaProduto(){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.toUpperCase();
            nome = valor;
        }
    }
}



const p1 = new Produto('Camiseta', 20,10);
console.log(p1);
// p1.estoque = 'asdwas'
p1.estoque = 11;
console.log(p1.estoque)

const p2 = criaProduto();
p2.nome = 'Lápis';
console.log(p2.nome);