module.exports = app => {
    app.route('/sport')
        .get(app.services.sport.getAll);

    app.route('/sport/:id')
        .get(app.services.sport.get);
}