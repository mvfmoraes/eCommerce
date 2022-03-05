module.exports = app => {
    app.route('/medal')
        .get(app.services.medal.getAll);

    app.route('/medal/:id')
        .get(app.services.medal.get);
}