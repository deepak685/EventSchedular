require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const multer=require('multer');

const route = require("./routes/route");
const app = express();

app.use(express.json())
app.use(multer().any())

app.use("/", route);

const url = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@cluster0.4nkid.mongodb.net/EVENTScheduler`;

mongoose
  .connect(url,{ useNewUrlParser: true })
  .then(() => console.log("database is connected..."))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 3030, () =>
  console.log(`app running on port ${process.env.PORT}`)
);
