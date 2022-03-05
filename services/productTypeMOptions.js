module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('product_type_m_options')
                .select()
                .then(productTypeMOptions => Sucesso(productTypeMOptions))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const {product_type_m_options_id } = req.params;
        try {
            const resposta = await app.db('product_type_m_options') 
                .select()
                .where({product_type_m_options_id })
                .then(productTypeMOptions => Sucesso(productTypeMOptions))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    return {
        getAll,
        get
    }
}