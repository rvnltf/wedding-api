import express from "express";
import bridegroom from "./bridegroom.js";
import event from "./event.js";

const router = express.Router();

router.use("/bridegroom", bridegroom);
router.use("/event", event);

export default router;
