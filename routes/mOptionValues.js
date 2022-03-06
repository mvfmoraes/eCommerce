module.exports = app => {
    app.route('/mOptionValues')
        .get(app.services.mOptionValues.getAll);

    app.route('/mOptionValues/:m_option_values_id')
        .get(app.services.mOptionValues.get);
}