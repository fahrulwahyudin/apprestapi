import mysql from "mysql";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbsrestapi",
});

db.connect((err) => {
  if (err) throw err;
  console.log("terhubung ke database");
});

export default db;
