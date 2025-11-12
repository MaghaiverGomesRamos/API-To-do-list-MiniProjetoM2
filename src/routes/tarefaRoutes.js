import { Router } from "express";
import { 
  listarTarefas, 
  buscarTarefaPorId, 
  atualizarStatus,
  atualizarTarefa,
  deletarTarefa, 
  CriarTarefa,
  deletarTodas
} from "../controllers/tarefaController.js";
import { validarTarefa } from "../middlewares/validarTarefa.js";

const router = Router();

// Cria nova tarefa (com validação de título e descrição)
router.post('/', validarTarefa, CriarTarefa);

// Retorna todas as tarefas registradas
router.get('/', listarTarefas);

// Busca uma tarefa específica pelo ID
router.get('/:id', buscarTarefaPorId);

// Atualiza todos os campos de uma tarefa existente
router.put('/:id', atualizarTarefa);

// Atualiza apenas o status de uma tarefa
router.patch('/:id/status', atualizarStatus);

// Remove uma tarefa específica
router.delete('/:id', deletarTarefa);

// Remove todas as tarefas (usado, por exemplo, para limpar o banco)
router.delete('/', deletarTodas);

export default router;
