// Classe Livro 

class Livro {
    constructor (id, nome, autor, isbn, editora) {
        this._id = id
        this._nome = nome
        this._autor = autor
        this._editora = editora
        this._isbn = isbn
    }

    get id() {
        return this._id
    }
    
    set id(id) {
        this._id = id    
    }      

    get nome() {
        return this._nome
    }
    set nome(nome) {
        this._nome = nome    
    } 

    get autor() {
        return this._autor
    }

    set autor(autor) {
        this._autor = autor    
    } 

    get isbn() {
        return this._isbn
    }
    
    set isbn(isbn) {
        this._isbn = isbn    
    } 

    get editora() {
        return this._editora
    }
    set editora(editora) {
        this._editora = editora    
    } 
}
