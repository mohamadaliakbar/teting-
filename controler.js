"use strict";

var response = require("./res");
var connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi rest API ku sudah berjalan", res);
};

// tabel data
exports.tabeldata = function (req, res) {
  connection.query(
    "SELECT * FROM tabelmahasiswa",
    function (error, rows, fileds) {
      if (error) {
        connection.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
