import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { PageNotFound } from "./middlewares/Errorhandling.js";
import userRouter from "./routes/user.js";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/visit", userRouter);
app.use(PageNotFound);
export default app;
