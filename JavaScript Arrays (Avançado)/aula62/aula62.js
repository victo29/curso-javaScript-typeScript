// Revisão do básico em Arrays

// Arrays são valores por referência
const nomes = new Array('Victor', 'Iasmin', 'Nelsi')    // ['Victor', 'Iasmin', 'Nelsi'];
nomes[0] = 'Antônio';
delete nomes[0]; // Gera um espaço vazio no array, deleta sem alterar os indices
console.log(nomes)



console.log('---------------------------------')

const copia = [...nomes] // Desssa forma é feita uma cópia mas apontando para espaço diferentes da memória
copia.push('Andriele');
console.log(copia);
console.log(nomes);



console.log('---------------------------------')

// Alterações feitas em 'novo' impactam 'nomes'
const novo = nomes;
novo.pop();

console.log(nomes);
console.log(novo);



console.log('---------------------------------')

const nomes2 = ['Nelson', 'Marina', 'Victor'];
console.log(nomes2);
const removido = nomes2.pop(); // Remove de trás e retorna
const removidoFrente = nomes2.shift(); // Remove do começo e retorna

console.log(nomes2);
console.log(removido);
console.log(removidoFrente);

nomes2.push('Iasmmin'); // Adiciona no final
nomes2.push('Nelsi'); 

nomes2.unshift('Shirley'); // Adiciona no começo



console.log('---------------------------------')

const nomes3 = ['Nelson', 'Marina', 'Victor', 'Gabriel', 'Jorge'];
const novo3 = nomes3.slice(0,-2); // Está cortando o Array, nesse caso cortando os dois últimos elementos

console.log(novo3);



console.log('---------------------------------')

const nomeCompleto = 'Victor Souza Queiroz';
const nomes4 = nomeCompleto.split(' '); // Utilizando os espaços do nome para criar um Array

const nomes5 = [ 'Victor', 'Souza', 'Queiroz' ]
const nomeUnido = nomes5.join(' ') // Juntando os elementos do array e adicionando um espaço entre eles

console.log(nomes4);



