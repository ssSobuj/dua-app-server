const express = require("express");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000", "https://dua-app-client-next.vercel.app"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use("/api", apiRoutes);

module.exports = app;
