require("dotenv").config();

import express from "express";
import config from "config";
import router from "./router";

import db from "../config/db";

import Logger from "../config/logger";

import morganMiddleware from "./middleware/morganMiddleware";

const app = express();

app.use(morganMiddleware)
app.use(express.json())
app.use("/api", router)

const port = config.get<number>("port")

app.listen(port, async () => {
    await db();
    Logger.info('listening on port...: ' + port);
})