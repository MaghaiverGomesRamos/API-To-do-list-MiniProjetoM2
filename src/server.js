import 'dotenv/config';
import express from 'express';
import router from './routes/tarefaRoutes.js';

const app = express();
app.use(express.json());

// Define o grupo de rotas relacionadas a tarefas
app.use('/tarefas', router);

const PORT = process.env.PORT;

// Inicia o servidor e exibe no console a porta usada
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
