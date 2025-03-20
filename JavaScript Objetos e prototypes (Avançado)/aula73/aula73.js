//  Métodos úteis para objetos

//  Object.values -> Retorna os VALORES do objeto, diferente de KEYS que retorna as cheves
//  Object.entries -> Retorna chave e atributo juntos
//  Object.getOwnPropertyDescriptor(objeto, atributo) -> Descreve as propriedades de um atributo
//  Object.assing(objeto destino, Objeto a ser copiado ....) -> Usado para fazer cópias de objetos
//  ... (spread) -> Usado para fazer cópias de objetos

// Já vistos: 
//  Object.keys -> Retorna as chaves
//  Object.freeze -> Congela o objeto ou atributo
//  Object.defineProperties -> Define várias propriedades
//  Object.defineProperty -> Define uma propriedade

const produto ={
    nome: 'Caneca',
    preco: 1.8
}


// ------------------- ... (spread) e Object.assing ------------------------

outroProduto = {...produto, material: 'Parcelana'} // Spread operator para copiar informações de um para o outro
outraCopia = Object.assign({}, produto, {material: 'Porcelana'}); // Fazendo cópia de um objeto utilizando Object.assing

console.log(outroProduto);
console.log(outraCopia);


// ------------------- Object.getOwnPropertyDescriptor(objeto, atributo) ------------------------

Object.defineProperty(produto, 'nome', { // Alterando as propriedades do nome 
    configurable:false 
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // Descrevendo as propriedades de nome


// --------------------- Object.values e Object.entries --------------------------

console.log(Object.values(produto)); // Valores

console.log(Object.entries(produto)) //Valores e chave em arrays

produto.material = 'Porcelana';
for(let [chave, valor] of Object.entries(produto)){
    console.log(chave,valor)
}