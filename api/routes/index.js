module.exports = app => {
    const controller = require('../controllers/index.js')();
    app.route("/")
      .get(controller.index)
  }