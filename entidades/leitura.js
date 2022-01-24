// Enumeration TipoTrofeu

class TipoTrofeu {

    static Ouro   = new TipoTrofeu("OURO")
    static Prata  = new TipoTrofeu("PRATA")
    static Bronze = new TipoTrofeu("BRONZE")

    constructor(name) {
        this._name = name
    }
}

// Classe Leitura

class Leitura {
    constructor (id, usuarioId, livroId, dataInicio, dataTermino, pontos, tipoTrofeu) {
        this._id = id
        this._usuarioId = usuarioId
        this._livroId = livroId
        this._dataInicio = dataInicio
        this._dataTermino = dataTermino
        this._pontos = pontos
        this._tipoTrofeu = tipoTrofeu
        
    }

    get id() {
        return this._id
    }
        set id(id) {
        this._id = id    
    }      

    get usuarioId() {
            return this._usuarioId
    }

    set usuarioId(usuarioId) {
        this._usuarioId = usuarioId    
    }      

    get livroId() {
        return this._livroId
    }

    set livroId(livroId) {
        this._livroId = livroId    
    }      

    get dataInicio() {
        return this._dataInicio
    }

    set dataInicio(dataInicio) {
        this._dataInicio = dataInicio    
    }      

    get dataTermino() {
        return this._dataTermino
    }

    set dataTermino(dataTermino) {
        this._dataTermino = dataTermino    
    }      

    get pontos() {
        return this._pontos
    }

    set pontos(pontos) {
        this._pontos = pontos    
    }     
    
    get tipoTrofeu() {
        return this._tipoTrofeu
    }

    set tipoTrofeu(tipoTrofeu) {
        this._tipoTrofeu = tipoTrofeu    
    }      

}