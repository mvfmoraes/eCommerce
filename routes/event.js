module.exports = app => {
    app.route('/event')
        .get(app.services.event.getAll);

    app.route('/event/:id')
        .get(app.services.event.get);
}