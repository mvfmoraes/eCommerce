module.exports = app => {
    app.route('/productMOptionValues')
        .get(app.services.productMOptionValues.getAll);

    app.route('/products/:product_m_option_values_id')
        .get(app.services.productMOptionValues.get);
}