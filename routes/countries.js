module.exports = app => {
    app.route('/countries')
        .get(app.services.countries.getAll);

    app.route('/countries/:countries_id')
        .get(app.services.countries.get);
}