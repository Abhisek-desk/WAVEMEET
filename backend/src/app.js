import dotenv from "dotenv";
dotenv.config();

import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from "./controllers/socketManager.js";
const dbUrl = process.env.ATLASDB_URL;

const app = express();
const server = createServer(app); // Socket.io is tied to this
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ extended: true, limit: "40kb" }));

app.use("/api/v1/users", userRoutes);

app.get("/home", (req, res) => {
  return res.json({ hello: "world" });
});

const start = async () => {
  try {
    const connectionDB = await mongoose.connect(dbUrl);
    console.log(`MONGO connected DB Host: ${connectionDB.connection.host}`);

    // FIX: Change app.listen to server.listen
    server.listen(app.get("port"), () => {
      console.log(`Server is running on port ${app.get("port")}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
};

start();
