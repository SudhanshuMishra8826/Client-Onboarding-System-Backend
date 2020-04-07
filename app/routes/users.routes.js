module.exports = (app) => {
    const users = require('../controllers/users.controllers.js');

    // Create a new Note
    app.post('/users', users.create);

}