module.exports = app => {
    app.route('/personRegion')
        .get(app.services.personRegion.getAll);

    app.route('/personRegion/:person_id')
        .get(app.services.personRegion.get);
}