import express from "express";
import { verifyToken } from "../utils/verifyAuth.js";

const router = express.Router();

//GET Content
router.get("/getUser", verifyToken, (req, res) => {
  try {
    res.status(200).send({
      success: true,
      message: `admin page`,
    });
  } catch (error) {
    next(error);
  }
});

//POST Content
router.post("/postUser", verifyToken, (req, res, next) => {
  try {
    res.status(201).send({
      success: true,
      message: `admin page`,
      date: req.body,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
