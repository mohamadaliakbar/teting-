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

// menampilkan id siswa
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

// menambahkan tabel mahasiswa
exports.menambahkansiswa = function (req, res) {
  var NIM = req.body.NIM;
  var USERNAME = req.body.USERNAME;
  var JURUSAN = req.body.JURUSAN;
  connection.query(
    "INSERT INTO tabelmahasiswa(NIM, USERNAME, JURUSAN) VALUES(?,?,?)",
    [NIM, USERNAME, JURUSAN],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
