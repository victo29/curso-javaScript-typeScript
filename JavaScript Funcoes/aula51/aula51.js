// return
// Retorna um valor
// Termina a função

function soma(a,b){
    return a + b;
}

let result = soma(2,5);

console.log(soma(3,2));
console.log(result);


function criaPessoa(nome, sobrenome){
    return {nome, sobrenome};
};

const p1 = criaPessoa('Victor', 'Tavares');
console.log(p1)

// -------------------------------------------------

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + resto;
    }
    return falaResto;
};

const olaMundo = falaFrase('Olá');
const frase = olaMundo(" Mundo");

console.log(frase);

// ---------------------------------------------------

// function duplica(n){
//     return n*2;
// };

// function triplica(n){
//     return n*3;
// };

function criaMultiplicador(multiplicador){

    return function (n){
        return n *multiplicador;
    };
};


const duplicar = criaMultiplicador(2);
const triplicar = criaMultiplicador(3);

console.log(duplicar(2));
console.log(triplicar(2));

