module.exports = app => {
    app.route('/gamesCity')
        .get(app.services.gamesCity.getAll);

    app.route('/gamesCity/:games_id')
        .get(app.services.gamesCity.get);
}