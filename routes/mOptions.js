module.exports = app => {
    app.route('/mOptions')
        .get(app.services.mOptions.getAll);

    app.route('/mOptions/:mOptions_id')
        .get(app.services.mOptions.get);
}