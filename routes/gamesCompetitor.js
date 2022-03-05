module.exports = app => {
    app.route('/gamesCompetitor')
        .get(app.services.gamesCompetitor.getAll);

    app.route('/gamesCompetitor/:id ')
        .get(app.services.gamesCompetitor.get);
}