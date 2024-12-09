import readlinesync = require('readline-sync')

// Criamos a coleção array vazia
const cores: Array<string> = new Array<string>();

for (let i = 0; i < 5; i++) {
    let coresParaAdicionar: string = readlinesync.question('Digite uma cor: ')
    cores.push(coresParaAdicionar);
}

console.log('\nListagem das cores: ');

console.table(cores);

cores.sort();

console.log('\nListagem das cores ordenadas: ');

console.table(cores);


