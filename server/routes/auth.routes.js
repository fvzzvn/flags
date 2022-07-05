const { verifyRegister } = require("../middleware");
const controller = require("../controllers/auth.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/register",
    [
      verifyRegister.checkDuplicateUsernameOrEmail,
      verifyRegister.checkRolesExisted
    ],
    controller.register
  );
  app.post("/api/auth/login", controller.login);
  app.post("/api/auth/logout", controller.logout);
  app.post("/api/auth/refreshtoken", controller.refreshToken);
};