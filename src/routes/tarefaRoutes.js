import { Router } from "express";
import { listarTarefas, 
    buscarTarefaPorId, 
    atualizarStatus,
    atualizarTarefa,
    deletarTarefa, 
    CriarTarefa,
    deletarTodas} from "../controllers/tarefaController.js";

const router = Router();

// Criar nova tarefa
router.post('/', CriarTarefa)

// Listar todas as tarefas
router.get('/', listarTarefas)

// Buscar tarefa por ID

router.get('/:id', buscarTarefaPorId)

// Atualizar tarefa completa

router.put('/:id', atualizarTarefa)

// Atualizar apenas Status

router.patch('/:id/status', atualizarStatus)

// Deletar tarefa

router.delete('/:id', deletarTarefa)

// Deletar todas as tarefas

router.delete('/', deletarTodas)

export default router