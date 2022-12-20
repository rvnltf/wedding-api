import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
import fs from "fs";

import db from "./config/weddingDb.js";
import auth from "./routes/auth.js";
import guest from "./routes/guest.js";
import user from "./routes/user.js";
import admin from "./routes/admin.js";
import bridegroom from "./routes/wedding/bridegroom.js";
import event from "./routes/wedding/event.js";
import wish from "./routes/wedding/wish.js";
import handleErrors from "./middleware/handleErrors.js";

const app = express();

// const Role = db.role;
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

// const initial = () => {
//   Role.create({ id: 1, name: "admin" });
//   Role.create({ id: 2, name: "user" });
// };
// let accessLogStream = fs.createWriteStream("./log/access.log", { flags: "a" });

dotenv.config({
  path: "./config/config.env",
});

let corsOption = {
  origin: "http://localhost:8081",
};

app.use(morgan("dev"));

app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to Tetha Apps.",
  });
});

app.use("/api/v1/auth", auth);
app.use("/api/v1/guest", guest);
app.use("/api/v1/user", user);
app.use("/api/v1/admin", admin);

app.use("/api/v1/wedding/bridegroom", bridegroom);
app.use("/api/v1/wedding/event", event);
app.use("/api/v1/wedding/wish", wish);

app.use(handleErrors);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
