"use strict";

module.exports = function (app) {
  var jsonku = require("./controler");

  app.route("/").get(jsonku.index);
  app.route("/data").get(jsonku.tabeldata);
};
