import { Livro } from "./Livro";

export class LivroFisico extends Livro{
   //Atributo específico da classe LivroFisico
   private _qtdPaginas: number;

   //Construtor
   constructor(isbn: number, titulo: string, autor: string, editora: string, 
      preco: number, qtdPaginas: number) {
         //Construtor da classe mae
         super(isbn, titulo, autor, editora, preco)

         //Atributo específico da classe LivroFisico
         this._qtdPaginas = qtdPaginas
      }

      //Get e Set especifico
      public get qtdPaginas(): number {
         return this._qtdPaginas;
      }

      public set qtdPaginas(qtdPaginas: number) {
         this._qtdPaginas = qtdPaginas;
      }

      //Polimorfismo do método visualizar
      public visualizar(): void {
         // Chama o visualizar da mãe para mostrar os dados básicos
         super.visualizar();

         //Adiciona a informação específica desse método visualizar
         console.log(`Quantidade de Folhas: ${this._qtdPaginas}`);
         console.log("*****************************************************\n");
         
      }

}