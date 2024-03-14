"use strict";

import response from "../res.js";
import connection from "../model/koneksi.js";

export const index = {
  getData: (req, res) => {
    connection.query("SELECT * FROM mahasiswa", (err, rows, fields) => {
      if (err) {
        connection.log(err);
      } else {
        response(rows, res);
      }
    });
  },
};
