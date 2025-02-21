# API de Usuários com Express e JWT

Este é um projeto de API REST desenvolvido com Node.js, Express e autenticação JWT.

## 🚀 Tecnologias Utilizadas

- Node.js
- Express
- JWT (jsonwebtoken)
- Dotenv

## 📌 Funcionalidades

- Cadastro de usuários
- Autenticação via token JWT
- Listagem, consulta, atualização e remoção de usuários

## 📂 Estrutura do Projeto

```
/
├── controllers/
│   ├── AuthControler.js
│   ├── PostsController.js
│   ├── UsuariosController.js
│ 
├── models/
│   ├── PostModel.js
│   ├── UsuarioModel.js
│
├── rotas/
│   ├── PostsRotas.js
│   ├── RotasPrivadas.js
│   ├── RotasPublicas.js
│   ├── UsuariosRotas.js
│
├── .env
├── .gitignore
├── server.js
├── package.json
```

## ⚙️ Configuração

### 1️⃣ Clonar o repositório:
```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
```

### 2️⃣ Instalar dependências:
```bash
npm install
```

### 3️⃣ Criar o arquivo `.env` na raiz do projeto e adicionar:
```env
APP_KEY_TOKEN= 'sua-chave-secreta'
```

### 4️⃣ Rodar o servidor:
```bash
node server.js
```
O servidor estará disponível em `http://localhost:3000/`

## 🛠 Endpoints

### 🔑 Autenticação
- **POST** `/login` → Gera um token JWT a partir de login e senha.

### 👤 Usuários
- **GET** `/users` → Lista todos os usuários
- **GET** `/users/:id` → Consulta um usuário pelo ID
- **POST** `/users` → Cadastra um novo usuário
- **PUT** `/users/:id` → Atualiza um usuário pelo ID
- **DELETE** `/users/:id` → Remove um usuário pelo ID

## 📜 Licença

Este projeto é de uso livre para aprendizado.

