module.exports = app => {
    app.route('/person')
        .get(app.services.person.getAll);

    app.route('/person/:id')
        .get(app.services.person.get);
}