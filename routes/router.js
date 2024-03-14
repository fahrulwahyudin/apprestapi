"use strict";

import express from "express";
import { index } from "../controller/control.js";

const router = express.Router();

router.get("/", index.getData);

router.get("/:id", index.getDataId);

export default router;
