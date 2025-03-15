// Factory Functions

function criaPessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift(); // o método shift apaga o primeiro valor de um array e retorna ele
            this.sobrenome = valor.join(' ')
        },

        fala(assunto){
            return `${this.nome} está ${assunto}`;
        },

        altura: altura,
        peso: peso,

        //Getter
        get imc(){ // com get IMC passa a ser considerado um atributo nesse objeto. Esses são os Getters
            const indice = this.peso/(this.altura **2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('Victor', 'Tavares', 1.85, 85);
console.log(p1.fala('falando sobre JS'))
console.log(p1.nome);
console.log(p1.imc);
console.log(p1.nomeCompleto);
p1.nomeCompleto = 'Iasmin Caldeira dos Reis';
console.log(p1.nomeCompleto);
console.log(p1.nome);
console.log(p1.fala('falando sobre JS'));

