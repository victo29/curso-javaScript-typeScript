// Método Splice

const nomes = ['Nelson', 'Marina', 'Victor', 'Gabriel', 'Jorge'];

// nomes.splice(índicie inicial, quantos argumentos remover, elementos para adicionar...)


const removidos = nomes.splice(-1, 2); //retorna os valores excluidos em formato de array
console.log(nomes, removidos);

nomes.splice(Number.MAX_VALUE,0,'Roberto'); // Adicionando Valor ao final do Array
console.log(nomes)

nomes.splice(4,1,'Nelsimara') // Removendo um valor e adicionando outro no seu lugar
console.log(nomes);

nomes.splice(3,2,'Robesval', 'Kloviz') // Apagando dois valores e adicionando mais dois

console.log('------------------------------------------------------------')

console.log(nomes);

// Simulando o pop

nomes.splice(-1,1);
console.log('POP: ',nomes);

// Simulando o push
nomes.splice(nomes.length,0,'Roberto');
console.log('PUSH: ', nomes);

// Simulando o shift
nomes.splice(0,1);
console.log('SHIFT: ',nomes);

// Simulando o unshift
nomes.splice(0,0,'CR7');
console.log('UNSHIFT: ', nomes);