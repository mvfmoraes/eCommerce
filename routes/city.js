module.exports = app => {
    app.route('/city')
        .get(app.services.city.getAll);

    app.route('/city/:id')
        .get(app.services.city.get);
}