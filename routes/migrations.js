module.exports = app => {
    app.route('/migrations')
        .get(app.services.migrations.getAll);

    app.route('/migrations/:migrations_id')
        .get(app.services.migrations.get);
}