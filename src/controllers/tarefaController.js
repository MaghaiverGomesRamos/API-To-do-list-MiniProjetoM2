import sequelize from '../models/index.js';
import Tarefa from '../models/tarefa.js';

// Criar nova tarefa
export const CriarTarefa = async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;

    // Cria um novo registro na tabela "Tarefas" com os dados recebidos
    await Tarefa.create({ titulo, descricao, status });

    res.status(201).json({ message: "Tarefa criada com sucesso!" });
  } catch (error) {
    // Captura qualquer erro de validação ou banco
    res.status(400).json({ erro: error.message });
  }
};

// Listar todas as tarefas
export const listarTarefas = async (req, res) => {
  try {
    // Busca todas as tarefas no banco
    const tarefas = await Tarefa.findAll();
    res.json(tarefas);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Buscar tarefa por ID
export const buscarTarefaPorId = async (req, res) => {
  try {
    const { id } = req.params;

    // Procura a tarefa pelo ID primário (chave primária)
    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

    res.json(tarefa);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Atualizar tarefa completa (PUT)
export const atualizarTarefa = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

    // Atualiza todos os campos da tarefa
    await tarefa.update({ titulo, descricao, status });

    res.json({ mensagem: "Tarefa atualizada!" });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Atualizar apenas o status (PATCH)
export const atualizarStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

    // Atualiza apenas o campo "status"
    await tarefa.update({ status });

    res.json({ mensagem: "Status atualizado!" });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Deletar tarefa específica
export const deletarTarefa = async (req, res) => {
  try {
    const { id } = req.params;

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

    // Remove o registro do banco
    await tarefa.destroy();

    res.json({ mensagem: 'Tarefa deletada com sucesso!' });
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Deletar todas as tarefas
export const deletarTodas = async (req, res) => {
  try {
    // Remove todos os registros e reseta o contador de IDs
    await Tarefa.destroy({ where: {}, truncate: true });
    await sequelize.query("DELETE FROM sqlite_sequence WHERE name='Tarefas'");

    res.json({ mensagem: "Tarefas deletadas com sucesso!" });
  } catch (error) {
    res.status(500).json({ mensagem: error.message });
  }
};
