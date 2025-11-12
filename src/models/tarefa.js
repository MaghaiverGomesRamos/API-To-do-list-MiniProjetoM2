import { DataTypes } from 'sequelize';
import sequelize from './index.js';

const Tarefa = sequelize.define('Tarefa', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'O titulo não pode ser vazio'
            }
        }
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('a fazer', 'em andamento', 'concluida'),
        allowNull: false,
        defaultValue: 'a fazer',
        validate: {
            isIn: {
                args: [['a fazer', 'em andamento', 'concluida']],
                msg: 'Status deve ser ex: a fazer | em andamento | concluida '
            }
        }
    },
    tableName: 'tarefas'
});

export default Tarefa;