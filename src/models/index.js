import { Sequelize } from 'sequelize';
import 'dotenv/config';

const storage = process.env.DB_STORAGE || "./database.sqlite";

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage,
  logging: false
});

export default sequelize;