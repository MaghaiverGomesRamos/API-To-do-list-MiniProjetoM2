import { DataTypes } from "sequelize";
import sequelize from "./index.js";

// Define o modelo "Tarefa" (estrutura da tabela no banco)
const Tarefa = sequelize.define(
  "Tarefa",
  {
    // Campo obrigatório — título da tarefa
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "O titulo não pode ser vazio",
        },
      },
    },
    // Campo opcional — detalhes da tarefa
    descricao: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // Campo de status com valores pré-definidos
    status: {
      type: DataTypes.ENUM("a fazer", "em andamento", "concluida"),
      allowNull: false,
      defaultValue: "a fazer", // toda tarefa começa como "a fazer"
      validate: {
        isIn: {
          args: [["a fazer", "em andamento", "concluida"]],
          msg: "Status deve ser ex: a fazer | em andamento | concluida ",
        },
      },
    },
  },
  {
    tableName: "Tarefas", // garante que a tabela tenha esse nome exato no banco
  }
);

export default Tarefa;
