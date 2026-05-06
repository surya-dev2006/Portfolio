import express from "express";
import User from "../models/User.js";

const router = express.Router();


// POST REQUEST
router.post("/send", async (req, res) => {
  try {

    const { name, mail, number } = req.body;

    const user = await User.create({
      name,
      mail,
      number
    });

    res.status(201).json(user);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});


// GET REQUEST
router.get("/rec", async (req, res) => {
  try {
    const users = await User.find();

    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;