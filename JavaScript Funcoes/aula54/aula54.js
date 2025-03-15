// Funções de callback

function rand(min = 1000, max =3000){
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor); 
}



function f1(callback){

    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());

}

function f2(callback){
   
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    },rand());

}


// f1(function(){
//     f2(function(){
//         console.log("f -  console")
//     });
// });


f1(f1Callback);


function f1Callback(){
    f2(f2Callback);
}

function f2Callback(){
    console.log('f -  console')
}

