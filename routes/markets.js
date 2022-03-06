module.exports = app => {
    app.route('/markets')
        .get(app.services.markets.getAll);

    app.route('/markets/:markets_id')
        .get(app.services.markets.get);
}