import express from "express";
import { login, register } from "../controllers/user.controller.js";
const router = express.Router();
router.route("/login").post(login);
router.route("/register").post(register);
router.route("/add_to_activity").post((req, res) => {
  // Handle adding to activity
  res.status(200).json({ message: "Activity added successfully" });
});
router.route("/get_all_activities").get((req, res) => {
  // Handle getting all activities
  res.status(200).json({ message: "Activities retrieved successfully" });
});

export default router;
