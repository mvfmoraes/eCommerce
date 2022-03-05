module.exports = app => {
    app.route('/productTypes')
        .get(app.services.productTypes.getAll);

    app.route('/productTypes/:product_types_id')
        .get(app.services.productTypes.get);
}