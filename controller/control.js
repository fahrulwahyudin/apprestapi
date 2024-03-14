"use strict";

import response from "../res.js";
import connection from "../model/koneksi.js";

export const index = (req, res) => {
  response("Aplikasi REST API ku berjalan!", res);
};
