const express = require("express");
const app = express();
const userRoute = require("./routes/userRoute");
const mongoose = require("mongoose");
const errorRoute = require("./controllers/notFound");
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(userRoute);
app.use(errorRoute.notFound);
require("dotenv").config();
mongoose
  .connect(
    `mongodb+srv://${process.env.db_user}:${process.env.db_password}@cluster0.1nqrgaa.mongodb.net/Second-Task?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT);
  });
