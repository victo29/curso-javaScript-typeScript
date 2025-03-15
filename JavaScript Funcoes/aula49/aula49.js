// Declaração de função (Function hoisting)
falaOi()
function falaOi(){  
    console.log('Oi');
};

// Firts-class objects (Objetos de primeira classe) -> possibilidade de usar funções como dados
// Functio expression
const souUmDado = function(){
    console.log('Sou um dado');
};

souUmDado();

function executaFuncao(funcao){
    console.log('Função executada');
    funcao();
};
executaFuncao(souUmDado);


// Arrow functio
const funcaoArrow = () =>{
    console.log('Sou uma arrow function');
};
funcaoArrow();


// Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Estou falando...');
    },
    comer(){
        console.log('Comendo...');    
    }


}

obj.falar();
obj.comer();