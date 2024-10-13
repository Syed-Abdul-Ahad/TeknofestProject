const express = require('express')
const authRouter = require('./Routes/authRouter')
const GlobalErrorHandler = require("./Controller/ErrorController")
const customError = require('./utils/customError')
const app = express()
const cors = require("cors");

app.use(express.json());

const allowedOrigins = ["http://localhost:3000", "http://localhost:5173"];
app.use(cors(allowedOrigins));

app.use("/api/v1/users", authRouter);

app.all("*", (req, res, next) => {
  const err = new customError(
    `can't find ${req.originalUrl} on the server`,
    404
  );
  next(err);
});

app.use(GlobalErrorHandler)

module.exports = app;