module.exports = app => {
    app.route('/categories')
        .get(app.services.categories.getAll);

    app.route('/categories/:categories_id')
        .get(app.services.categories.get);
}