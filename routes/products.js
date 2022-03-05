module.exports = app => {
    app.route('/products')
        .get(app.services.products.getAll);

    app.route('/products/:products_id')
        .get(app.services.products.get);
}