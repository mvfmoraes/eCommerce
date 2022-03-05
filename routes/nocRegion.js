module.exports = app => {
    app.route('/nocRegion')
        .get(app.services.nocRegion.getAll);

    app.route('/nocRegion/:id')
        .get(app.services.nocRegion.get);
}