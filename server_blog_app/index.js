import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

// compoennts import
import Connection from "./connection/db.js";
import Router from "./routes/route.js";
const app = express();
dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
const port=process.env.PORT;
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extend: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", Router);
Connection(username,password);
app.listen(port, () => console.log(`server is running on ${port}`));

