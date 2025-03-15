// IIFE -> immediately invoked function expression
// Funções imediatas

(function(idade, peso, altura){

    const sobrenome = 'Tavares';

    function criaNome(nome){
        return nome + ' ' + sobrenome;
    };

    function falaNome(){
        console.log(criaNome('Victor'));
    };

    falaNome();
    
    console.log(idade, peso, altura)

})(18,85,1.85);

const sobrenome = "Qualquer coisa";