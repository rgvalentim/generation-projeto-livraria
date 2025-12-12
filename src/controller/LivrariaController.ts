import { Livro } from "../models/Livro";
import { LivrariaRepository } from "../repository/LivrariaRepository";

export class LivrariaController implements LivrariaRepository {
   //Lista com a coleção de livros
   private listaLivros: Array<Livro> = new Array<Livro>();

   //Variável para controlar o ISBN sequencial
   public isbnAtual: number = 0;

   //Métodos auxiliares

   //Gerar um novo ISBN
   public gerarIsbn(): number {
      return ++this.isbnAtual;
   }

   //Busca um livro no Array pelo ISBN
   public buscarNoArray(isbn: number): Livro | null {
      for (let livro of this.listaLivros) {
         if (livro.isbn === isbn) {
            return livro;
         }
      }
      return null;
   }

   //Implementações da interface
   
   //Cadastrar
   cadastrar(livro: Livro): void {
      this.listaLivros.push(livro);
      console.log("\nO livro foi cadastrado com sucesso!");
   }

   //Listar todos
   listarTodos(): void {
      if (this.listaLivros.length === 0) {
         console.log("\nNao existem livros cadastrados.");         
      } else {
         for (let livro of this.listaLivros) {
            livro.visualizar();
         }
      }
   }

   //Procurar por ISBN
   procurarPorIsbn(isbn: number): void {
      const buscaLivro = this.buscarNoArray(isbn);

      if (buscaLivro !== null) {
         buscaLivro.visualizar();
      } else {
         console.log("\nO livro nao foi encontrado!");
      }
   }

   //Atualizar
   atualizar(livro: Livro): void {
      const buscaLivro = this.buscarNoArray(livro.isbn);

      if (buscaLivro !== null) {
         this.listaLivros[this.listaLivros.indexOf(buscaLivro)] = livro;
         console.log("\nO livro foi atualizado com sucesso!");
      } else {
         console.log("\nO livro não foi encontrado!");
         
      }
   }

   //Deletar
   deletar(isbn: number): void {
      const buscaLivro = this.buscarNoArray(isbn);

      if (buscaLivro !== null) {
         this.listaLivros.splice(this.listaLivros.indexOf(buscaLivro), 1);
         console.log("O livro foi apagado com sucesso!");
      } else {
         console.log("\nO livro nao foi encontrado!");
      }
   }
}