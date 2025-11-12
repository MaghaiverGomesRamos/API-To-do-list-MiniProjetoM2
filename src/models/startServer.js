import sequelize from './index.js';
import Tarefa from './tarefa.js';

const startServer = async (app,PORT) => {
    try {
        await sequelize.sync() // cria tabela se não existir
        console.log('Banco encontrado')
        app.listen(PORT, () => {
        console.log(`API - To do list rodando na porta ${PORT}`)
});
    }catch (error) {
        console.error('Erro ao sincronizar banco:', error)
    }
}

export default startServer