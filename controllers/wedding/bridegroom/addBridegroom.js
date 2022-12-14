import db from "../../../config/weddingDb.js";
import { BadRequest } from "../../../utils/errors.js";

const Bridegroom = db.bridegroom;

const addBridegroom = async (req, res, next) => {
  try {
    const bridegroom = await Bridegroom.create({ ...req.body });
    if (!bridegroom) throw new BadRequest(`Invalid add data!`);
    bridegroom.save();
    res.status(200).send({
      success: true,
      message: "Data has been inserted.",
    });
  } catch (error) {
    next(error);
  }
};

export default addBridegroom;
