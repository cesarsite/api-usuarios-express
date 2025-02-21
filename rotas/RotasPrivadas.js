const express = require ('express')
const jwt = require ('jsonwebtoken')
const UsuariosRotas = require('./UsuariosRotas')
const PostsRotas = require('./PostsRotas')
require('dotenv').config()

const RotasPrivadas = express.Router()

// Middleware
RotasPrivadas.use((request, response, next) => {

    let auth = false

    if(request.headers.token) {
        const { token } = request.headers;
        try {
            jwt.verify(token,process.env.APP_KEY_TOKEN)
            auth = true;      
        } catch (e) {
            return response.status(403).send(e)
        }

    }

    if(auth === false) {
      return response.status(403).send("<h1>Não Autorizado</h1>")
    }
    next()
})

RotasPrivadas.use(UsuariosRotas)
RotasPrivadas.use(PostsRotas)

module.exports = RotasPrivadas


