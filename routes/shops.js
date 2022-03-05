module.exports = app => {
    app.route('/shops')
        .get(app.services.shops.getAll);

    app.route('/shops/:shops_id')
        .get(app.services.shops.get);
}