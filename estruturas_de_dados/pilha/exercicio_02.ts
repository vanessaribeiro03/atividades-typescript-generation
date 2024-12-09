import readlinesync = require('readline-sync');
import { Stack } from './Stack';


const pilha = new Stack<string>(); 

while( true){
    console.log(
        `
        ---------------------
         Bem vindo a Livraria!
        ---------------------
        
        1 - Adicionar Livro na Pilha
        2 - Listar todos os Livros
        3 - Retirar Livro da Pilha
        0 - Sair
        `);

    let opcao: number = readlinesync.questionInt('Entre com a opcao desejada: ')

    switch (opcao) {
        case 1:
            let livro: string = readlinesync.question('Digite o nome do livro: ')
            pilha.push(livro);
            break;
        
            case 2:
                if(pilha.isEmpty()){
                    console.log('\nA pilha está vazia.');
                }else{
                    console.log('\nLivros da pilha:');
                    pilha.printStack();
                }
            break;

            case 3:
                if(pilha.isEmpty()){
                    console.log('\nA pilha está vazia.');
                }else{
                    const livroRemovido = pilha.pop();
                    console.log(`\nLivro ${livroRemovido} retirado. Pilha atualizada:`);
                    pilha.printStack();
                }
            break;

            case 0:
                console.log('Até a próxima!');
                break;
        default:
            console.log('Opção inválida. Digite uma opção entre 1 e 0.');
            
            break;
    }

    if(opcao === 0) break;
}




