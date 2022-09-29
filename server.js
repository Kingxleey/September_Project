const dotenv = require("dotenv");
const { mongoose } = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = require("./index");
const { PORT, DB_URL } = process.env;

mongoose.connect(DB_URL).then(() => 
console.log("connected"))
  .catch((err) => console.log(err));

app.listen(PORT, () => {
  console.log("server is running");
});
