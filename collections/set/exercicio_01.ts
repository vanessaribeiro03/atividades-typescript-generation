import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set<number>();

for (let i = 0; i < 10; i++) {
    let numerosParaAdicionar: number = readlinesync.questionInt('Digite um numero para ser adicionado: ')
    numeros.add(numerosParaAdicionar);
}

console.table(numeros);
