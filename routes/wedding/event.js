import express from "express";
import { verifyToken, isAdmin } from "../../utils/verifyAuth.js";
import addEvent from "../../controllers/wedding/event/addEvent.js";
import getEvents from "../../controllers/wedding/event/getEvents.js";
import getEventById from "../../controllers/wedding/wish/getWishById.js";
import updateEvent from "../../controllers/wedding/event/updateEvent.js";
import deleteEvent from "../../controllers/wedding/event/deleteEvent.js";

const router = express.Router();

//add event
router.post("/", verifyToken, isAdmin, addEvent);

//get event
router.get("/", verifyToken, isAdmin, getEvents);

//get event by id
router.get("/:id", verifyToken, isAdmin, getEventById);

//update event by id
router.patch("/:id", verifyToken, isAdmin, updateEvent);

//update active event by id
router.delete("/:id", verifyToken, isAdmin, deleteEvent);

//add events
export default router;
