var mysql = require("mysql");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbtesting",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Mysql konek");
});

module.exports = conn;
