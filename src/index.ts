import express, { Application, Request, Response } from "express";
import logger from "./misc/logger";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  res.send("API is running");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.clear();
  logger.info(`Server is running on port ${PORT}`);
});
