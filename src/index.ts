// src/index.ts
import express from "express";
import config from "./config";

const app = express();
const port = config.port;

app.get("/", (req, res) => {
  res.send("Hello, Express TypeScript!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
