import { Livro } from "./Livro";

export class LivroDigital extends Livro{
   //Atributo específico da classe LivroDigital
   private _formato: string;

   //Construtor
   constructor(isbn: number, titulo: string, autor: string, editora: string, 
      preco: number, formato: string) {
         //Construtor da classe mãe
         super(isbn, titulo, autor, editora, preco);

         //Atributo especifico da classe LivroDigityal
         this._formato = formato;
         }

         //Get e Set específicos
         public get formato(): string{
            return this._formato;
         }

         public set formato(formato: string){
            this._formato = formato
         }

         //Polimorfismo do método visualizar
         public visualizar(): void {
            // Chama o visualizar da mãe para mostrar os dados básicos
            super.visualizar();

            //Adiciona a informação específica desse método visuali8zar
            console.log(`Formato: ${this._formato}`);
            console.log("*****************************************************\n");
            
         }
}