module.exports = app => {
    app.route('/passwordResets')
        .get(app.services.passwordResets.getAll);

    app.route('/passwordResets/:password_resets_id')
        .get(app.services.passwordResets.get);
}