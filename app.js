const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users");

const app = express();

app.use(bodyParser.json());
app.use("/users", userRoutes);

const dbURI = process.env.MONGO_TEST;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => app.listen(3001, () => console.log("Listening...")))
  .catch((err) => console.log(err));
