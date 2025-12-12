import { Livro } from "../models/Livro";

export interface LivrariaRepository {

    // CRUD

    //Assinaturas do método    
    // Buscar livro pelo número do ISBN
    procurarPorIsbn(isbn: number): void;
    
    // Listar todos os livros cadastrados
    listarTodos(): void;
    
    // Cadastrar um novo livro (recebe um objeto Livro)
    cadastrar(livro: Livro): void;
    
    // Atualizar dados de um livro existente
    atualizar(livro: Livro): void;
    
    // Deletar um livro pelo ISBN
    deletar(isbn: number): void;
    
}