module.exports = app => {
    app.route('/mOptionValues')
        .get(app.services.mOptionValues.getAll);

    app.route('/mOptionValues/:mOptionValues_id')
        .get(app.services.mOptionValues.get);
}