//Funções construtoras -> retorna objetos
// Faunção fábrica -> retorna objetos
//Contrutora -> precisa criar com letra maiúscula - Pessoa (new)

function Pessoa(nome, sobrenome, ID){
    
    const ID = ID;

    const metodoInterno = () =>{
        console.log('Método Interno')
    }

    this.nome = nome;
    this.sobrenome = sobrenome;  
    


    this.metodo = function (){
        console.log(this.nome + ' Método' );
    }

}


const p1 = new Pessoa('Iasmin', 'Caldeira', 902930123 );
const p2 = new Pessoa('Victor', 'Tavares', 31909301920);

console.log(p2.nome);
p2.metodo;
// console.log(p2.ID);