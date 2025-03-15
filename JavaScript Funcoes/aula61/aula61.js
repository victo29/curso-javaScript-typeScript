// Funções geradoras

function* geradora1(){
    
    // código qualquer.....

    yield 'Valor 1';

    // código qualquer.....

    yield 'Valor 2';

    // código qualquer.....

    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);


const g2 = geradora1();
for(let valor of g2){
    console.log(valor);
}

// -------------------

function* contadora(){ // Geradora infinita
    let i = 0;
    while(true){
        yield i;
        i++;
    }
}


const cont = contadora();
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);
console.log(cont.next().value);


// -----------------

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){
    yield* geradora3(); // Delegando funções para outra geradora

    yield 3;
    yield 4;
    yield 5;
}


const g4 = geradora4();

for(let valor of g4){
    console.log(valor);
}


// -----------------------------------------


function* geradora5(){
    yield function(){
        console.log('Vim do y1');
    };

    //...

    yield function(){
        console.log('Vim do y2');
    };
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();
func2();