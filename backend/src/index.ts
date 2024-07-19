import express from "express";
import cors from "cors";
import connectToDatabase from "./config/db";
import { APP_ORIGIN, NODE_ENV, PORT } from "./constants/env";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler";
import catchErrors from "./utils/catchErrors";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: APP_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.status(200).json({
    status: "healthy",
  });
});

app.use(errorHandler);

app.listen(8000, async () => {
  console.log(`connected on ${PORT} in ${NODE_ENV}`);
  await connectToDatabase();
});
