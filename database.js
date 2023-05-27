const mongoose = require("mongoose");
const URI = "mongodb://127.0.0.1/Tp5Web";
mongoose
  .connect(URI)
  .then((db) => console.log("DB Conectada"))
  .catch((err) => console.error(err));
module.exports = mongoose;
