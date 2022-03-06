module.exports = app => {
    app.route('/mOptions')
        .get(app.services.mOptions.getAll);

    app.route('/mOptions/:m_options_id')
        .get(app.services.mOptions.get);
}