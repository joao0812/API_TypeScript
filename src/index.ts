import express from "express";
import http from "http";
import bodyParse from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

console.log("ola cara");

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParse.json());

const server = http.createServer(app);