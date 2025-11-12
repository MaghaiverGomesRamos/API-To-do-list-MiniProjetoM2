'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Tarefas", [
        {
          titulo: "Estudar Express.js e MongoDB",
          descricao: "Revisar conceitos de API e banco de dados",
          status: "a fazer",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
           titulo: "Criar CRUD com API-REST",
          descricao: "Desenvolver CRUD completo",
          status: "a fazer",
          createdAt: new Date(),
          updatedAt: new Date() 
        }
      ]
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tarefas", null, {})
  }
};
