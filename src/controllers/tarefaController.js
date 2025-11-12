import Tarefa from '../models/tarefa.js';

//Criar nova tarefa
export const CriarTarefa = async ( req, res ) => {
    try {
        const { titulo, descricao, status } = req.body;
        const tarefa = await Tarefa.create({titulo, descricao, status });
        res.status(201).json({message: "Tarefa criada com sucesso!"});
    } catch (error) {
        res.status(400).json({ erro: error.message});
    }
};

// Listar todas as tarefas 
export const listarTarefas = async (req, res ) => {
    try {
        const tarefas = await Tarefa.findAll();
        res.json(tarefas);

    } catch (error) {
        res.status(500).json({erro: error.message});
    }
}

//Buscar tarefa Por ID
export const buscarTarefaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const tarefa = await Tarefa.findByPk(id);
        if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada'});
        res.json(tarefa);
    } catch (error) {
        res.status(500).json({ erro: error.message});
    }
}

//Atualizar tarefa completa (PUT)
export const atualizarTarefa = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, descricao, status } = req.body;
        const tarefa = await Tarefa.findByPk(id);
        if (!tarefa) return res.status(404).json({erro: 'Tarefa não encontrada'});

        await tarefa.update({ titulo, descricao, status});
        res.json({mensagem: "Tarefa atualizada!"})
    } catch (error){
        res.status(400).json({erro: error.message });
    }
}

//Atualizar apenas status (PATCH)
export const atualizarStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const tarefa = await Tarefa.findByPk(id);
        if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada'})

        await tarefa.update({status});
        res.json({mensagem: "Status atualizados!"});
    } catch ( error ) {
        res.status(400).json({erro: error.message})
    }
};

//Deletar tarefa
export const deletarTarefa = async (req, res ) => {
    try {
        const { id } = req.params;
        const tarefa = await Tarefa.findByPk(id);
        if (!tarefa) return res.status(404).json({erro: 'Tarefa não encontrada'});

        await tarefa.destroy();
        res.json({mensagem: 'Tarefa deletada com sucesso!'});
    } catch ( error ) {
        res.status(400).json({erro: error.message});
    }
};

//Deletas todas as tarefas
export const deletarTodas = async (req, res) => {
    try {
        await Tarefa.destroy({ where: {}, truncate: true})
        res.json({mensagem: "Tarefas deletadas com sucesso!"})
    } catch (error) {
        res.status(500).json({mensagem: error.message})
    }
}
