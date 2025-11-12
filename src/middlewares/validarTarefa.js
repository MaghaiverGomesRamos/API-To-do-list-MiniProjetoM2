export const validarTarefa = (req, res, next) => {
    const { titulo, descricao, status } = req.body;

    // Verifica se o título ou a descrição estão ausentes ou vazios.
    // Caso falte algum, retorna um erro 400 (Bad Request)
    if (!titulo || !descricao || !status) {
        return res.status(400).json({ erro: "Titulo, descrição e status devem ser informados!" });
    }

    // Se tudo estiver ok, passa o controle para o próximo middleware ou controller
    next();
};
