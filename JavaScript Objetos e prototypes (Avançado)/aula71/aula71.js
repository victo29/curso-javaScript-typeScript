// defineProperty

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco =preco;
    Object.defineProperty(this, 'estoque', {
        enumerable:true, // -> Configura a visibilidade / Mostra a chave quando se utilizar o for in ou object.keys
        value: estoque,
        writable: false, // -> Controla se o vaolor pode ser alterado ou não
        configurable: false // -> Controla as acessos a configuração da chave
    });

}

const p1 = new Produto('Camiseta', 20,10);
p1.estoque = 5000; // Não funciona porque o writable está false
delete p1.estoque; // Não funciona porque o configurable está false

console.log(p1);
console.log(p1.estoque);

console.log(Object.keys(p1)); // -> Retorna um Array com as chaves dos objetos

