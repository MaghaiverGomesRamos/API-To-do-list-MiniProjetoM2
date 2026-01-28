import { Sequelize } from 'sequelize';
import 'dotenv/config';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const config = require('../../config/config.json');

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

const sequelize = dbConfig.use_env_variable
  ? new Sequelize(process.env[dbConfig.use_env_variable], dbConfig)
  : new Sequelize(dbConfig);

export default sequelize;