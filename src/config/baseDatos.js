const mongoose = require("mongoose");
mongoose
  .connect("mongodb://127.0.0.1:27017/Chat-Bot", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a MongoDB");
  })
  .catch((error) => {
    console.log("Error: " + error);
    process.exit(1);
  });