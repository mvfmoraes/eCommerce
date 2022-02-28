module.exports = app => {
    app.route('/admins')
        .get(app.services.admins.getAll);

    app.route('/admins/:admins_id')
        .get(app.services.admins.get);
}