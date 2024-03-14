"use strict";

import express from "express";
import { index } from "../controller/control";

const router = express.Router();

router.get("/", index);

export default router;
