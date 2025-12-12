export abstract class Livro {
   //Atributos da classe Livro
   private _isbn: number;
   private _titulo: string;
   private _autor: string;
   private _editora: string;
   private _preco: number;

   //Método construtor
   constructor (isbn: number, titulo: string, autor: string, editora: string, preco: number){
      this._isbn = isbn;
      this._titulo = titulo;
      this._autor = autor;
      this._editora = editora;
      this._preco = preco;
   }

   // Getters e Setters
   public get isbn(): number {
      return this._isbn;
   }

   public set isbn(isbn: number) {
      this._isbn = isbn;
   }

   public get titulo(): string {
      return this._titulo;
   }

   public set titulo(titulo: string) {
      this._titulo = titulo;
   }

   public get autor(): string {
      return this._autor;
   }

   public set autor(autor: string) {
      this._autor = autor;
   }

   public get editora(): string {
      return this._editora;
   }

   public set editora(editora: string) {
      this._editora = editora;
   }

   public get preco(): number {
      return this._preco;
   }

   public set preco(preco: number) {
      this._preco = preco;
   }

   //Método específico da classe
   public visualizar(): void {
      console.log("*****************************************************");
      console.log("\t\tDADOS DO LIVRO");
      console.log("*****************************************************");
      console.log(`ISBN: ${this._isbn}`);
      console.log(`Título: ${this._titulo}`);
      console.log(`Autor: ${this._autor}`);
      console.log(`Editora: ${this._editora}`);
      console.log(`Preco: R$ ${this._preco.toFixed(2)}`);
   }
}