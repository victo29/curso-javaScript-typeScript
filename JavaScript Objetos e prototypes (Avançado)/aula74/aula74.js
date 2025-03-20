// Prototypes
// Forma de "globalizar"/compartilhar métodos ou atributos para todas as instâncias de um objeto
// Dessa forma a performânce é melhorada pois as instâncias não precisam carregar todos os métodos no seu corpo
// O javaScript primeiro procura o método no corpo do objeto e depois no prototype
// Cadeia de busca: Pessoa(obj) --> Pessoa.prototype --> Object.prototype

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    // this.nomeCompleto = ()=> 'Original: ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = ()=> this.nome + ' ' + this.sobrenome;

const p1 = new Pessoa('Victor', 'Tavares');


console.log(p1.nomeCompleto());
