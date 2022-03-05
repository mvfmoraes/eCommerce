module.exports = app => {
    app.route('/options')
        .get(app.services.options.getAll);

    app.route('/options/:options_id')
        .get(app.services.options.get);
}