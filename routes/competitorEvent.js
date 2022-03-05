module.exports = app => {
    app.route('/competitorEvent')
        .get(app.services.competitorEvent.getAll);

    app.route('/competitorEvent/:event_id')
        .get(app.services.competitorEvent.get);
}