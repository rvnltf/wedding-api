import express from "express";
import { verifyToken, isAdmin } from "../../utils/verifyAuth.js";
import addWish from "../../controllers/wedding/wish/addWish.js";
import getWishes from "../../controllers/wedding/wish/getWishes.js";
import getWishById from "../../controllers/wedding/wish/getWishById.js";
import updateWish from "../../controllers/wedding/wish/updateWish.js";
import deleteWish from "../../controllers/wedding/wish/deleteWish.js";

const router = express.Router();

//add wish
router.post("/", addWish);

//get wish
router.get("/", getWishes);

//get wish by id
router.get("/:id", getWishById);

//update wish by id
router.patch("/:id", updateWish);

//update active wish by id
router.delete("/:id", deleteWish);

//add wishs
export default router;
