// Herança com classes

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log(this.nome + " já está ligado");
            return;
        }
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado){
            console.log(this.nome + " já está desligado");
            return
        }

        this.ligado = false;
    }
}

class Computador extends DispositivoEletronico{
    constructor(nome, processador, placaGrafica){
        super(nome);
        this.processador = processador;
        this.placaGrafica = placaGrafica;
    }
}

const d1 = new DispositivoEletronico('Tablet');

d1.ligar();
console.log(d1);
d1.ligar();
d1.desligar();
console.log(d1);

const c1 = new Computador('Pichau B60', 'Core i5 13°Geração', 'RTX 3090');
c1.ligar();
console.log(c1);