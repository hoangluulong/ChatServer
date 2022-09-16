'use strict';
module.exports = function(app) {
  let productsCtrl = require('./controllers/UserController');

  // todoList Routes
  app.route('/users')
    .get(productsCtrl.get)
    .post(productsCtrl.store);

  app.route('/users/:userID')
    .get(productsCtrl.detail)
    .put(productsCtrl.update)
    .delete(productsCtrl.delete);
};
