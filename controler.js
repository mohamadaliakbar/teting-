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
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

// menampilkan file id

exports.tampilanid = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM tabelmahasiswa WHERE ID SISWA",
    id,
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
