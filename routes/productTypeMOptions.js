module.exports = app => {
    app.route('/productTypeMOptions')
        .get(app.services.productTypeMOptions.getAll);

    app.route('/productTypeMOptions/:product_type_m_options_id')
        .get(app.services.productTypeMOptions.get);
}