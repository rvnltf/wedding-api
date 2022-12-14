import express from "express";
import { verifyToken, isAdmin } from "../../utils/verifyAuth.js";
import { duplicateSubdomain } from "../../utils/verifyBridegroom.js";
import addBridegroom from "../../controllers/wedding/bridegroom/addBridegroom.js";
import getBridegroom from "../../controllers/wedding/bridegroom/getBridegroom.js";
import getBridegroomById from "../../controllers/wedding/bridegroom/getBridegroomById.js";
import updateBridegroom from "../../controllers/wedding/bridegroom/updateBridegroom.js";
import deleteBridegroom from "../../controllers/wedding/bridegroom/deleteBridegroom.js";

const router = express.Router();

//add bridegroom
router.post("/", verifyToken, isAdmin, duplicateSubdomain, addBridegroom);

//get bridegroom
router.get("/", verifyToken, isAdmin, getBridegroom);

//get bridegroom by id
router.get("/:id", verifyToken, isAdmin, getBridegroomById);

//update bridegroom by id
router.put("/:id", verifyToken, isAdmin, duplicateSubdomain, updateBridegroom);

//update active bridegroom by id
router.patch("/isActiveBridegroom/:id", verifyToken, isAdmin, updateBridegroom);

//update active bridegroom by id
router.delete("/:id", verifyToken, isAdmin, deleteBridegroom);

//add events
export default router;
