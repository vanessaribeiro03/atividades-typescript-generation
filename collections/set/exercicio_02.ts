import readlinesync = require('readline-sync');

const numeros: Set<number> = new Set([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

let numeroParaEncontrar: number = readlinesync.questionInt('Digite o numero que voce deseja encontrar: ');

if(numeros.has(numeroParaEncontrar)){
    console.log(`O número ${numeroParaEncontrar} foi encontrado!`);
}else{
    console.log(`O número ${numeroParaEncontrar} não foi encontrado!`);
    
}