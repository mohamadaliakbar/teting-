"use strict";

module.exports = function (app) {
  var jsonku = require("./controler");

  app.routes("/").get(jsonku.index);
};
