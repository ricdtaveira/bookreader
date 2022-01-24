// Enum TipoUsuario
class TipoUsuario {

    static Visitante = new TipoUsuario("VISITANTE")
    static Leitor    = new TipoUsuario("LEITOR")
    static Admin     = new TipoUsuario("ADMIN")

    constructor(name) {
        this._name = name
    }
}

// Classe Usuario

class Usuario {
    constructor(id, login, senha, tipoUsuario) {
        this._id = id
        this._login = login
        this._senha = senha
        this._tipoUsuario = tipoUsuario
    }

    get id() {
        return this._id
    }

    set id(id) {
        this._id = id    
    }      

    get login() {
        return this._login
    }

    set login(login) {
        this._login = login    
    } 

    get senha() {
        return this._senha
    }

    set senha(senha) {
        this._senha = senha    
    } 

    get tipoUsuario() {
        return this._tipoUsuario
    }

    set tipoUsuario(tipoUsuario) {
        this._tipoUsuario = tipoUsuario    
    } 
}
 
