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
    "SELECT * FROM tabelmahasiswa WHERE Id_siswa = ?",
    [id],
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
  var Nim = req.body.Nim;
  var Username = req.body.Username;
  var Jurusan = req.body.Jurusan;

  connection.query(
    "INSERT INTO tabelmahasiswa(Nim, Username, Jurusan) VALUES(?,?,?)",
    [Nim, Username, Jurusan],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menambahkan Data", res);
      }
    }
  );
};

// mengubah data
exports.mengubahdata = function (req, res) {
  var id = req.body.id_siswa;
  var Nim = req.body.Nim;
  var Username = req.body.Username;
  var Jurusan = req.body.Jurusan;

  connection.query(
    "UPDATE tabelmahasiswa SET Nim?, Username?, Jurusan?, WHERE Id_mahasiswa",
    [Nim, Username, Jurusan, id],
    function (error, rows, fileds) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data", res);
      }
    }
  );
};
