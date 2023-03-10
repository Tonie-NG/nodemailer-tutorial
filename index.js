const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const email = require("./routes/email");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
dotenv.config();

app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.use("/email", email);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is up and running`);
});
