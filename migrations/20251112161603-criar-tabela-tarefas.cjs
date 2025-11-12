"use strict";

module.exports = {
  // Executado quando a migration é aplicada (criação da tabela)
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Tarefas", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true, // ID aumenta automaticamente
        primaryKey: true, // Define como chave primária
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false, // Campo obrigatório
      },
      descricao: {
        type: Sequelize.TEXT, // Permite textos longos
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "a fazer", // Valor padrão ao criar uma nova tarefa
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false, // Data de criação automática
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false, // Data de atualização automática
      },
    });
  },

  // Executado caso a migration precise ser revertida (desfaz a criação da tabela)
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Tarefas");
  }
};
