module.exports = app => {
    app.route('/brands')
        .get(app.services.brands.getAll);

    app.route('/brands/:brands_id')
        .get(app.services.brands.get);
}