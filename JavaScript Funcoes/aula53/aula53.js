// Closures

function retornaFuncao(nome){
    // const nome = 'Luiz';
    return function (){
        return nome;
    };
}


const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João')
console.log(funcao())
console.log(funcao2())