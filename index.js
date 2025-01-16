const express = require("express");
const { connectMongoDb } = require("./connection");

const { logReqRes } = require("./middlewares"); // no need to mention index because it takes automatically
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Conection
connectMongoDb("mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("Mongo Error: ", err));

// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server Started at  ${PORT}`);
});
