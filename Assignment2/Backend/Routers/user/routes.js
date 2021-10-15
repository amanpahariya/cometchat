const routes = require('express').Router();

routes.get("/", require("../../Views/getUser"));
routes.post("/", require("../../Views/createUser"));
routes.delete("/", require("../../Views/deleteUser"));
routes.put("/", require("../../Views/updateUser"));

module.exports = routes;