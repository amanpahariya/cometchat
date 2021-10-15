const routes = require('express').Router();

routes.use("/user", require("../Controllers/verfiyUser"), require("./user/routes"));
routes.post("/upload-image", require("../Controllers/verfiyUser"), require("../Views/uploadImage"))
routes.post("/login", require("../Views/login"));
routes.post("/logout", require("../Views/logout"))


module.exports = routes;