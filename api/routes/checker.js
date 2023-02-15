module.exports = app => {
    const controller = require('../controllers/checker.js')();
    app.route("/api/v1/checker")
      .post(controller.checker)
  }