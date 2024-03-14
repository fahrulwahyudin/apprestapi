"use strict";

import response from "../res.js";
import connection from "../model/koneksi.js";

export const index = (req, res) => {
  res.send(response.ok("Aplikasi REST API ku berjalan"));
};
