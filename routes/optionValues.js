module.exports = app => {
    app.route('/optionValues')
        .get(app.services.optionValues.getAll);

    app.route('/optionValues/:option_values_id')
        .get(app.services.optionValues.get);
}