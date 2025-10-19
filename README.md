<div align="center">

# 💰 Meu Bolso App

### Sistema de Controle Financeiro Pessoal

[![Node.js](https://img.shields.io/badge/Node.js-20.x-green.svg)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-5.1.0-blue.svg)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4-green.svg)](https://www.mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://www.docker.com/)
[![License](https://img.shields.io/badge/License-ISC-yellow.svg)](LICENSE)

**API RESTful robusta para gerenciamento financeiro pessoal desenvolvida durante curso de extensão da UCS**

[Sobre](#-sobre) • [Tecnologias](#-tecnologias) • [Arquitetura](#-arquitetura) • [Instalação](#-instalação) • [Uso](#-uso) • [API](#-documentação-da-api) • [Roadmap](#-roadmap)

</div>

---

## 📋 Sobre

**Meu Bolso App** é uma API RESTful completa para controle financeiro pessoal, desenvolvida como projeto prático do **Curso de Extensão em Desenvolvimento de APIs** da **Universidade de Caxias do Sul (UCS)**.

O projeto implementa as melhores práticas de desenvolvimento backend moderno, incluindo autenticação JWT, validação de dados, containerização com Docker e arquitetura escalável.

### 🎯 Objetivos do Projeto

- ✅ Implementar API RESTful seguindo padrões da indústria
- ✅ Aplicar autenticação e autorização com JWT
- ✅ Utilizar banco de dados NoSQL (MongoDB)
- ✅ Containerizar aplicação com Docker
- ✅ Implementar validações robustas de dados
- ✅ Seguir arquitetura MVC/Clean Architecture
- ✅ Desenvolver testes automatizados (em progresso)

---

## 🚀 Tecnologias

### Core Stack

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Node.js** | 20.x | Runtime JavaScript |
| **Express** | 5.1.0 | Framework web minimalista |
| **MongoDB** | 4.4 | Banco de dados NoSQL |
| **Mongoose** | 8.18.1 | ODM para MongoDB |

### Segurança & Autenticação

- **bcrypt** (6.0.0) - Hash de senhas
- **jsonwebtoken** (9.0.2) - Autenticação JWT
- **Joi** (18.0.1) - Validação de schemas

### DevOps & Ferramentas

- **Docker** & **Docker Compose** - Containerização
- **Nodemon** (3.1.10) - Hot reload em desenvolvimento
- **dotenv** (17.2.2) - Gerenciamento de variáveis de ambiente

---

## 🏗️ Arquitetura

### Estrutura de Diretórios

```
meu-bolso-app/
├── src/
│   ├── controllers/       # Lógica de negócio
│   │   ├── authController.js
│   │   ├── usersController.js
│   │   └── accountsController.js
│   ├── models/           # Schemas Mongoose
│   │   ├── users.js
│   │   ├── account.js
│   │   ├── transaction.js
│   │   └── category.js
│   ├── routes/           # Definição de rotas
│   │   ├── authRoute.js
│   │   ├── usersRoute.js
│   │   └── accountsRoute.js
│   ├── middleware/       # Middlewares customizados
│   │   ├── authMiddleware.js
│   │   ├── validate.js
│   │   └── userValidate.js
│   ├── validations/      # Schemas de validação Joi
│   │   ├── auth.validation.js
│   │   ├── account.validation.js
│   │   └── custom.validation.js
│   ├── utils/            # Funções utilitárias
│   │   └── pick.js
│   └── app.js            # Entry point da aplicação
├── docker-compose.yml    # Orquestração de containers
├── Dockerfile            # Imagem Docker da aplicação
├── .env.example          # Template de variáveis de ambiente
└── package.json          # Dependências e scripts
```

### Padrões Implementados

- **MVC Pattern** - Separação de responsabilidades
- **Repository Pattern** - Abstração de acesso a dados
- **Middleware Pattern** - Validação e autenticação
- **RESTful API** - Endpoints padronizados
- **JWT Authentication** - Autenticação stateless
- **Environment Variables** - Configuração segura

---

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ ou Docker
- MongoDB 4.4+ (ou usar Docker)
- npm ou yarn

### Opção 1: Instalação Local

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/meu-bolso-app.git
cd meu-bolso-app

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# 4. Inicie o MongoDB (se não estiver usando Docker)
# mongod --dbpath /caminho/para/dados

# 5. Inicie a aplicação
npm run dev
```

### Opção 2: Docker (Recomendado)

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/meu-bolso-app.git
cd meu-bolso-app

# 2. Configure as variáveis de ambiente
cp .env.example .env

# 3. Suba todos os serviços
docker-compose up --build

# Acesse:
# - API: http://localhost:3000
# - Mongo Express: http://localhost:8081
```

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# Servidor
PORT=3000

# Banco de Dados
MONGODB_URL=mongodb://localhost:27017/meu-bolso

# JWT
JWT_SIGNATURE=sua_chave_secreta_super_forte_aqui
JWT_EXPIRES_IN_ACCESS=15m
JWT_EXPIRES_IN_REFRESH=7d
```

---

## 💻 Uso

### Desenvolvimento

```bash
# Modo desenvolvimento com hot reload
npm run dev

# Modo produção
npm start
```

### Docker

```bash
# Subir todos os serviços
docker-compose up

# Subir em background
docker-compose up -d

# Ver logs
docker-compose logs -f app

# Parar serviços
docker-compose down

# Rebuild após mudanças
docker-compose up --build
```

---

## 📚 Documentação da API

### Base URL
```
http://localhost:3000
```

### Autenticação

#### Registrar Usuário
```http
POST /auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@email.com",
  "password": "senha123"
}
```

**Resposta (201):**
```json
{
  "message": "Usuario registrado com sucesso!"
}
```

#### Login
```http
POST /auth/login
Content-Type: application/json

{
  "email": "joao@email.com",
  "password": "senha123"
}
```

**Resposta (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Perfil do Usuário
```http
GET /auth/profile
Authorization: Bearer {accessToken}
```

#### Refresh Token
```http
POST /auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Usuários

#### Listar Usuários
```http
GET /users
Authorization: Bearer {accessToken}
```

#### Buscar Usuário por ID
```http
GET /users/:id
Authorization: Bearer {accessToken}
```

#### Atualizar Usuário
```http
PUT /users/:id
Authorization: Bearer {accessToken}
Content-Type: application/json

{
  "name": "João Silva Atualizado",
  "email": "joao.novo@email.com"
}
```

#### Deletar Usuário
```http
DELETE /users/:id
Authorization: Bearer {accessToken}
```

### Contas Financeiras

#### Listar Contas
```http
GET /accounts
Authorization: Bearer {accessToken}
```

#### Criar Conta
```http
POST /accounts
Authorization: Bearer {accessToken}
Content-Type: application/json

{
  "name": "Conta Corrente",
  "balance": 1000.00,
  "user": "userId"
}
```

#### Buscar Conta por ID
```http
GET /accounts/:id
Authorization: Bearer {accessToken}
```

#### Atualizar Conta
```http
PUT /accounts/:id
Authorization: Bearer {accessToken}
Content-Type: application/json

{
  "name": "Conta Poupança",
  "balance": 5000.00
}
```

#### Deletar Conta
```http
DELETE /accounts/:id
Authorization: Bearer {accessToken}
```

### Códigos de Status HTTP

| Código | Descrição |
|--------|-----------|
| 200 | Sucesso |
| 201 | Criado com sucesso |
| 204 | Sem conteúdo (deletado) |
| 400 | Requisição inválida |
| 401 | Não autenticado |
| 403 | Não autorizado |
| 404 | Não encontrado |
| 500 | Erro interno do servidor |

---

## 🔒 Segurança

### Implementações de Segurança

- ✅ **Senhas criptografadas** com bcrypt (salt rounds: 10)
- ✅ **JWT Tokens** para autenticação stateless
- ✅ **Access Token** de curta duração (15 minutos)
- ✅ **Refresh Token** para renovação segura (7 dias)
- ✅ **Validação de dados** com Joi em todas as rotas
- ✅ **Variáveis de ambiente** para dados sensíveis
- ✅ **CORS** configurado (em desenvolvimento)

### Boas Práticas

- Senhas nunca são retornadas nas respostas da API
- Tokens JWT assinados com chave secreta forte
- Validação de entrada em todas as rotas
- Tratamento adequado de erros
- Logs estruturados (em desenvolvimento)

---

## 🧪 Testes

```bash
# Executar testes unitários
npm test

# Executar testes com coverage
npm run test:coverage

# Executar testes em modo watch
npm run test:watch
```

> **Nota:** Testes automatizados em desenvolvimento

---

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor em modo desenvolvimento
npm start        # Inicia servidor em modo produção
npm test         # Executa testes (em desenvolvimento)
npm run lint     # Verifica código (em desenvolvimento)
```

### Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 🗺️ Roadmap

### ✅ Concluído

- [x] Setup inicial do projeto
- [x] Configuração Docker e Docker Compose
- [x] Integração MongoDB com Mongoose
- [x] Sistema de autenticação JWT completo
- [x] CRUD de usuários
- [x] CRUD de contas financeiras
- [x] Validação de dados com Joi
- [x] Middleware de autenticação
- [x] Relacionamento entre entidades

### 🚧 Em Desenvolvimento

- [ ] CRUD de transações financeiras
- [ ] Sistema de categorias
- [ ] Relatórios e dashboards
- [ ] Testes automatizados (Jest/Supertest)
- [ ] Documentação Swagger/OpenAPI
- [ ] Rate limiting
- [ ] Logs estruturados (Winston)

### 📋 Planejado

- [ ] Filtros e paginação avançados
- [ ] Upload de comprovantes
- [ ] Notificações por email
- [ ] Exportação de relatórios (PDF/Excel)
- [ ] Gráficos e análises financeiras
- [ ] API de integração bancária
- [ ] Deploy em produção (AWS/Heroku)
- [ ] CI/CD com GitHub Actions

---

## 📖 Aprendizados

### Conceitos Aplicados

- **RESTful API Design** - Princípios e boas práticas
- **Autenticação JWT** - Access e Refresh Tokens
- **MongoDB & Mongoose** - NoSQL e ODM
- **Docker** - Containerização e orquestração
- **Middleware Pattern** - Validação e autenticação
- **Async/Await** - Programação assíncrona
- **Error Handling** - Tratamento robusto de erros
- **Environment Variables** - Configuração segura
- **Git Flow** - Versionamento e colaboração

### Habilidades Desenvolvidas

- Desenvolvimento de APIs RESTful escaláveis
- Implementação de autenticação e autorização
- Trabalho com bancos de dados NoSQL
- Containerização de aplicações
- Validação e sanitização de dados
- Debugging e troubleshooting
- Documentação técnica

---

## 👨‍💻 Autor

**Gabriel Blauther**

- Estudante de Desenvolvimento de APIs - UCS
- LinkedIn: [Gabriel Souza Blauther](www.linkedin.com/in/gabrielblauther)
- GitHub: [@GabrielBlauther](https://github.com/GabrielBlauther)
- Email: gabriel@email.com

---

## 📄 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

- **Universidade de Caxias do Sul (UCS)** - Curso de Extensão
- **Professor(a) [Leonardo Souza]** - Orientação e mentoria
- Comunidade Node.js e MongoDB
- Todos os colegas do curso

---

<div align="center">

**Desenvolvido durante o Curso de Extensão da UCS**

⭐ Se este projeto te ajudou, considere dar uma estrela!

</div>
