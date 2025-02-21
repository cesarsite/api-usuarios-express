const UsuarioModel = require("../models/UsuarioModel");

class AuthControllers {
    login(login, senha){
        const dados = UsuarioModel.authenticate(login, senha)
        return dados;
    }
}

module.exports = AuthControllers