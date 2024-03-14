"use strict";

import response from "../res.js";
import connection from "../model/koneksi.js";

export const index = {
  //mengambil data dari tabel mahasiswa
  getData: (req, res) => {
    connection.query("SELECT * FROM mahasiswa", (err, rows, fields) => {
      if (err) {
        connection.log(err);
      } else {
        response(rows, res);
      }
    });
  },

  //mengambil data dari tabel mahasiswa berdasarakan id
  getDataId: (req, res) => {
    let id = req.params.id;
    connection.query(
      "SELECT * FROM mahasiswa WHERE id = ?",
      [id],
      (err, rows, fields) => {
        if (err) {
          console.log(err);
        } else {
          response(rows, res);
        }
      }
    );
  },
};
