const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 5000;

const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTED, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongooseDB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);

app.listen(port, () => {
  console.log("Server on port " + port);
});
