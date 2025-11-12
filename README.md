# 📝 API de Gerenciamento de Tarefas

Aplicação backend desenvolvida como **Mini Projeto do curso Programadores do Amanhã**, utilizando **Node.js**, **Express**,**Sequelize** e **Sqlite**.  
O sistema permite **criar, listar, atualizar e deletar tarefas**, praticando os fundamentos de CRUD e banco de dados.

---

## 🚀 Tecnologias

- Node.js  
- Express  
- Sequelize  
- SQLite  
- Dotenv  

---

## 📁 Estrutura

```
├── config/
├── migrations/
├── models/
├── seeders/
├── src/
   ├── controllers/
   ├── DB/
   ├── middlewares/
   ├── models/
   ├── routes/
   └── server.js
├── .env.example.js
├── .gitignore
├── package.json
└── README.md
```

---

## ⚙️ Configuração

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/MaghaiverGomesRamos/API-To-do-list-MiniProjetoM2.git
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Crie o arquivo `.env`:**
   ```env
   Siga as instruções do .env.example!
   ```

4. **Execute as migrations:**
   ```bash
   npx sequelize-cli db:migrate
   ```

5. **Inicie o servidor:**
   ```bash
   npm run dev
   ```

---

## 🔗 Rotas Principais

| Método | Rota | Descrição |
|--------|------|------------|
| **POST** | `/tarefas` | Criar tarefa |
| **GET** | `/tarefas` | Listar todas |
| **GET** | `/tarefas/:id` | Buscar por ID |
| **PUT** | `/tarefas/:id` | Atualizar tarefa |
| **PATCH** | `/tarefas/:id/status` | Atualizar status |
| **DELETE** | `/tarefas/:id` | Deletar tarefa |
| **DELETE** | `/tarefas` | Deletar todas |

---

## 🧠 Middleware

O middleware `validarTarefa` garante que **título**,**descrição** e **status** sejam informados antes da criação da tarefa.

---

## 💾 Banco de Dados

As migrations criam automaticamente a tabela **Tarefas** com os campos:
- `id`
- `titulo`
- `descricao`
- `status`
- `createdAt`
- `updatedAt`

---

## 💡 Observações

- O projeto usa **SQLite** para simplificar o desenvolvimento local.  
- Pode ser facilmente adaptado para outros bancos no arquivo `config/config.json`.

---

## 👨‍💻 Autor

Desenvolvido por **Maghaiver Gomes Ramos** 🚀  
📧 magaiverg2@gmail.com 
🌐 [linkedin.com/in/maghaiver-dev](https://www.linkedin.com/in/maghaiver-dev)
