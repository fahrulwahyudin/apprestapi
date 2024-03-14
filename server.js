import express from "express";
import bodyParser from "body-parser";
import router from "./routes/router.js";

const app = express();
const port = 3000;

//parse aplikasi ke json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(router);

app.app.listen(port, () => {
  console.log(`Server is on port ${port}`);
});
