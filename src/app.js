import express from "express"
import morgan from "morgan";//it is an dogger for logging http request and response in the console

const app = express();

app.use(express.json());

app.use(morgan("dev"));

export default app;

