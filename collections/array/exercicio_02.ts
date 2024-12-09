import readlinesync = require('readline-sync');

const numeros: Array<number> = [2, 5, 1, 3, 4, 9, 7, 8, 10, 6];

let numeroParaEncontrar: number = readlinesync.questionInt('Digite o numero que voce deseja encontrar: ');

if(numeros.includes(numeroParaEncontrar)){
    console.log(`O número ${numeroParaEncontrar} está localizando na posição ${numeros.indexOf(numeroParaEncontrar)}.`);
}else{
    console.log(`O número ${numeroParaEncontrar} não foi encontrado!`);
}