import readlinesync = require("readline-sync");
import { Livro } from "./src/models/Livro";
import { LivroFisico } from "./src/models/LivroFisico";
import { LivroDigital } from "./src/models/LivroDigital";

export function main() {

    let opcao: number;

   //Objeto da classe LivroFisico
   const livroFisico: LivroFisico = new LivroFisico(2, "Morte e vida Severina", "Joao Cabaral de Melo Neto", "Companhia das Letras", 39.90, 200)
   livroFisico.visualizar();
   const livroDigital: LivroDigital = new LivroDigital(3, "Capitaes da Areia", "Jorge Amado", "Companhia das Letras", 39.90, "EPUB")
   livroDigital.visualizar();

    while (true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                  Livraria Sempere                   ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Livro                      ");
        console.log("            2 - Listar todas os Livros               ");
        console.log("            3 - Buscar Livro por ISBN                ");
        console.log("            4 - Atualizar Dados do Livro             ");
        console.log("            5 - Apagar Livro                         ");
        console.log("            6 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        opcao = readlinesync.questionInt("Entre com a opcao desejada: ");

        if (opcao == 6) {
            console.log("\nLivraria Sempere - Faca daqui sua casa");
            sobre();
            process.exit(0);
        }

        switch (opcao) {
            case 1:
               console.log("\n\nCadastrar Livro\n\n");
               
               keyPress()
               break;
            case 2:
               console.log("\n\nListar todas os Livros\n\n");

               keyPress()
               break;
            case 3:
               console.log("\n\nBuscar Livro por ISBN\n\n");

               keyPress()
               break;
            case 4:
               console.log("\n\nAtualizar Dados do Livro\n\n");

               keyPress()
               break;
            case 5:
               console.log("\n\nApagar Livro\n\n");

               keyPress()
               break;
            default:
                console.log("\nOpcao Invalida!\n");

                break;
        }
    }

}

/* Função com os dados da pessoa desenvolvedora */

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por:");
    console.log("Robson Valentim - robson.valentim@outlook.com");
    console.log("github.com/rgvalentim");
    console.log("*****************************************************");
}

//Função para adicionar um ponto de parada
function keyPress(): void {
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();