import readlinesync = require("readline-sync");
import { LivroFisico } from "./src/models/LivroFisico";
import { LivroDigital } from "./src/models/LivroDigital";
import { LivrariaController } from "./src/controller/LivrariaController";

export function main() {

   //Instância da Classe LivrariaController
   let livraria: LivrariaController = new LivrariaController();

   //Variaveis auxiliares
   let opcao, isbn, tipo, preco, qtdPaginas: number;
   let titulo, autor, editora, formato: string;
   const tiposLivros = ["Livro Fisico", "Livro Digital"];
   //const formatosLivros = ["PDF", "MOBI", "EPUB", "TXT"];

   console.log("\nCriar Livros\n");
   let lf1: LivroFisico = new LivroFisico(livraria.gerarIsbn(), "Grande Sertao: Veredas", "Joao Guimaraes Rosa", "Novra Fronteira", 79.90, 600);
   livraria.cadastrar(lf1);
   let lf2: LivroFisico = new LivroFisico(livraria.gerarIsbn(), "A solidão dos numeros primos", "Paolo Giordano", "Rocco", 49.90, 350);
   livraria.cadastrar(lf2);
   let ld1: LivroDigital = new LivroDigital(livraria.gerarIsbn(), "Quarto de despejo", "Carolina Maria de Jesus", "Atica", 35.00, "EPUB");
   livraria.cadastrar(ld1);
   let ld2: LivroDigital = new LivroDigital(livraria.gerarIsbn(), "O livro dos abracos", "Eduardo Galeano", "L&PM", 35.00, "MOBI")
   livraria.cadastrar(ld2);

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
               titulo = readlinesync.question("Digite o Titulo do Livro: ");
               autor = readlinesync.question("Digite o Nome do(a) Autor(a): ");
               editora = readlinesync.question("Digite o Nome da Editora: ");
               preco = readlinesync.questionFloat("Digite o preco do livro (R$): ")
               tipo = readlinesync.keyInSelect(tiposLivros, "Digite o tipo do livro: ", { cancel: false}) + 1;

               switch(tipo) {
                  case 1:
                     qtdPaginas = readlinesync.questionInt("Digite a Quantidade de Paginas: ");
                     livraria.cadastrar(
                        new LivroFisico(livraria.gerarIsbn(), titulo, autor, editora, preco, qtdPaginas));
                     break;

                  case 2:
                     //perguntar  thiago porque essa linha não funciona
                     //formato = formatosLivros[readlinesync.keyInSelect(formatosLivros, "Escolha o formato: ", { cancel: false})];
                     formato = readlinesync.question("Escolha o formato do e-book (PDF, MOBI, EPUB ou TXT): ")
                     while (formato.toUpperCase() != "PDF" && formato.toUpperCase() != "MOBI" && formato.toUpperCase() != "EPUB" && formato.toUpperCase() != "TXT") {
                        console.log("O formato digitado eh invalido!");
                        formato = readlinesync.question("Escolha o formato do e-book (PDF, MOBI, EPUB ou TXT): ")
                     }
                     //converte para maiúsculo para garantir o padrão
                     formato = formato.toUpperCase();

                     livraria.cadastrar(
                        new LivroDigital(livraria.gerarIsbn(), titulo, autor, editora, preco, formato));
                     break;
               }
               
               keyPress()
               break;
            case 2:
               console.log("\n\nListar todas os Livros\n\n");
               livraria.listarTodos();

               keyPress();
               break;
            case 3:
               console.log("\n\nBuscar Livro por ISBN\n\n");
               isbn = readlinesync.questionInt("Digite o numero do ISBN: ")

               livraria.procurarPorIsbn(isbn);

               keyPress()
               break;
            case 4:
               console.log("\n\nAtualizar Dados do Livro\n\n");

               isbn = readlinesync.questionInt("Digite o numero do ISBN do Livro: ");

               const livroEncontrado = livraria.buscarNoArray(isbn);

               if (livroEncontrado !== null) {
                  titulo = readlinesync.question("Digite o Novo Titulo do Livro: ");
                  autor = readlinesync.question("Digite o(a) Novo(a) Autor(a) do Livro: ");
                  editora = readlinesync.question("Digite a Nova Editora do Livro: ");
                  preco = readlinesync.questionFloat("Digite o Novo Preco do Livro: ");

                  tipo = (livroEncontrado instanceof LivroFisico) ? 1 : 2;
                  switch (tipo) {
                     case 1:
                        qtdPaginas = readlinesync.questionInt("Digite a Nova Quantidade de Paginas: ");
                        livraria.atualizar(
                           new LivroFisico(isbn, titulo, autor, editora, preco, qtdPaginas));
                        break;

                     case 2:
                        formato = readlinesync.question("Escolha o Novo Formato do e-book (PDF, MOBI, EPUB ou TXT): ")
                        while (formato.toUpperCase() != "PDF" && formato.toUpperCase() != "MOBI" && formato.toUpperCase() != "EPUB" && formato.toUpperCase() != "TXT") {
                           console.log("O formato digitado eh invalido!");
                           formato = readlinesync.question("Escolha o formato do e-book (PDF, MOBI, EPUB ou TXT): ")
                        }
                        //converte para maiúsculo para garantir o padrão
                        formato = formato.toUpperCase();
                        livraria.atualizar(
                           new LivroDigital(isbn, titulo, autor, editora, preco, formato));
                        break;
                  } 

               } else {
                  console.log("O livro nao foi encontrado!");
                  
               }

               keyPress()
               break;
            case 5:
               console.log("\n\nApagar Livro\n\n");

               isbn = readlinesync.questionInt("Digite o numero do ISBN: ");

               livraria.deletar(isbn);

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