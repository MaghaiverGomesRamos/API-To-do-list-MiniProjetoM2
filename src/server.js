import 'dotenv/config';
import express from 'express';
import startServer  from './models/startServer.js'
import router from './routes/tarefaRoutes.js'


const app = express()
app.use(express.json())

//Rotas
app.use('/tarefas', router);

const PORT = process.env.PORT

startServer(app, PORT)


