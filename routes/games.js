module.exports = app => {
    app.route('/games')
        .get(app.services.games.getAll);

    app.route('/games/:id')
        .get(app.services.games.get);
}