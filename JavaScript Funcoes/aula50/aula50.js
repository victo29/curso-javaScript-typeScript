function funcao(a,b,c,d,e,f,g,h){
    console.log('oi');
    console.log(arguments);
    console.log(arguments[0]);
    console.log(a);
    console.log(h); // Cria a variável porém sem valor
};
funcao('Valor',1,2,3);

function soma(a,b = 2, c = 4){  // Serve igual para o exemplo a baixo
    // b = b || 0 // Caso B seja enviado vazio
    console.log(a+b+c);
};

soma(2, 2);
soma(2, undefined, 2);// Forma de não passar um valor, nesse caso o valor de B não é passado



// Atribuição via desestruturação
function funcao2({nome,sobrenome,idade}){ // Pode ser feito com Arrays tbm
    console.log(nome, sobrenome, idade);
};

let obj = {nome:'Victor', sobrenome:'Tavares', idade:18} ;
funcao2({nome:'Victor', sobrenome:'Tavares', idade:18});
funcao2(obj);


// Rest operatos
function conta(operador, acumulador, ...numeros){
    for(let numero of numeros){
        if (operador ==='+') acumulador += numero;
        if (operador ==='-') acumulador -= numero;
        if (operador ==='/') acumulador /= numero;
        if (operador ==='*') acumulador *= numero;
    }
    
    console.log(acumulador);
}

conta('+',0,1,2,3,4,5,6);







