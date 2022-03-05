module.exports = app => {
    app.route('/productOptionValues')
        .get(app.services.productOptionValues.getAll);

    app.route('/productOptionValues/:product_option_values_id')
        .get(app.services.productOptionValues.get);
}