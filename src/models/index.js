import { Sequelize } from 'sequelize';
import 'dotenv/config';

// Cria uma instância do Sequelize usando SQLite como banco local
// O caminho do arquivo do banco é definido na variável de ambiente DB_PATH
const sequelize = new Sequelize({
    dialect: 'sqlite',          // define o tipo de banco
    storage: process.env.DB_PATH // localização do arquivo .sqlite
});

export default sequelize;
