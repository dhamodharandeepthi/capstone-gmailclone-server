const express = require("express");
const mongoose = require("mongoose");
const config = require("./utils/config");
const routes = require("./routes/route");
const cors = require("cors");

const app = express();
app.use(cors());
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", routes);

// Mongodb connection
console.log("connecting to mongodb...");
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log("connected to MONGODB...");

    // start the server
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  })
  .catch((error) => {
    console.log("error connecting to MONGODB:", error.message);
  });
