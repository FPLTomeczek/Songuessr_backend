require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const cors = require("cors");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("songuessr api");
});

app.use("/api/v1/auth", authRouter);

const run = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening on port ${port}`));
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

run();
