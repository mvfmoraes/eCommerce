module.exports = app => {
    app.route('/brandModels')
        .get(app.services.brandModels.getAll);

    app.route('/brandModels/:brand_models_id')
        .get(app.services.brandModels.get);
}