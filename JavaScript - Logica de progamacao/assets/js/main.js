const inputTarefa =document.querySelector('.input-tarefa');
const btnTarefa =document.querySelector('.btn-tarefa');
const tarefas =document.querySelector('.tarefas');

function criaLi(){
    const li = document.createElement('li');
    return li;
}


inputTarefa.addEventListener('keypress', function(e){   // KeyDown  KeyUp 
    
    if (!inputTarefa.value) return 
    if(e.keyCode === 13){
        criaTarefa(inputTarefa.value);
        limpaInput();
    }
})


function criaBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar';
    botaoApagar.setAttribute('class', 'apagar');  //Adicionando classe ao botão
    li.appendChild(botaoApagar);


}


function limpaInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
};


function criaTarefa(textInput){

    const li = criaLi();
    li.innerText = textInput;
    tarefas.appendChild(li);
    criaBotaoApagar(li);
    salvarTarefas();
};


btnTarefa.addEventListener('click', function(e){
    if (!inputTarefa.value) return // Retorna se o input for vazio
    
    criaTarefa(inputTarefa.value);
    limpaInput();
});


document.addEventListener('click', function(e){
    const el = e.target; // Seleciona o botão que foi clicado

    if(el.classList.contains('apagar')){
        el.parentElement.remove(); // parentElement Retorna o elemento pai daquele elemento
        salvarTarefas();
    }
});

function salvarTarefas(){

    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){ // Iteração pela lista sem utilizar indice
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ""); // Removendo a palavra apafar do texto
        listaDeTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem("tarefas", tarefasJSON);    
}

function addTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)

    for( let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }

}

addTarefasSalvas()