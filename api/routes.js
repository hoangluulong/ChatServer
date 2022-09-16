'use strict';
module.exports = function(app) {
  let usersCtrl = require('./controllers/UserController');

  // todoList Routes
  app.route('/users')
    .get(usersCtrl.get)
    .post(usersCtrl.store);

  app.route('/users/:userID')
    .get(usersCtrl.detail)
    .put(usersCtrl.update)
    .delete(usersCtrl.delete);
};
