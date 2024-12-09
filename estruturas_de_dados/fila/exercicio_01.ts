import readlinesync = require('readline-sync');
import { Queue } from "./Queue";

const fila = new Queue<string>(); 

while( true){
    console.log(
        `
        ---------------------
         Bem vindo ao Banco!
        ---------------------
        
        1 - Adicionar Clientes na Fila
        2 - Listar todos os Clientes
        3 - Retirar Cliente da Fila
        0 - Sair
        `);

    let opcao: number = readlinesync.questionInt('Entre com a opcao desejada: ')

    switch (opcao) {
        case 1:
            let cliente: string = readlinesync.question('Digite o nome: ')
            fila.enqueue(cliente);
            break;
        
            case 2:
                if(fila.isEmpty()){
                    console.log('\nA lista está vazia.');
                }else{
                    console.log('\nClientes da lista:');
                    fila.printQueue();
                }
            break;

            case 3:
                if(fila.isEmpty()){
                    console.log('\nA lista está vazia.');
                }else{
                    const clienteRemovido = fila.dequeue();
                    console.log(`\nCliente ${clienteRemovido} retirado. Lista atualizada:`);
                    fila.printQueue();
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




