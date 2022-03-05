module.exports = app => {

    const { Sucesso, Falha, Finalizar } = app.helpers.results;

    const getAll = async (req, res) => {
        try {
            const resposta = await app.db('competitor_event')// <=  Esse em laranja são literalmente as tabelas do banco, então o nome tem que ser igual!
                .select()
                .then(competitorEvents => Sucesso(competitorEvents))
                .catch(erro => Falha(erro));

            return res.status(200).send({ status: true, data: Finalizar(resposta) });
        } catch (erro) {
            return res.status(400).send({ status: false, erros: erro });
        }
    }

    const get = async (req, res) => {
        const {event_id } = req.params;
        try {
            const resposta = await app.db('competitor_event') // <=  Esse em laranja são literalmente as tabelas do banco, então o nome tem que ser igual!
                .select()
                .where({ event_id })
                .then(competitorEvents => Sucesso(competitorEvents))
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