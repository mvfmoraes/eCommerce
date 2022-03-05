module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('product_m_option_values')
                .select()
                .then(productMOptionValues => Sucesso(productMOptionValues))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const {product_m_option_values_id } = req.params;
        try {
            const resposta = await app.db('product_m_option_values') 
                .select()
                .where({product_m_option_values_id })
                .then(productMOptionValues => Sucesso(productMOptionValues))
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