import db from "../../../config/weddingDb.js";
import { BadRequest } from "../../../utils/errors.js";

const Wish = db.wish;

const addWish = async (req, res, next) => {
  try {
    const idBridegroom = await req.body.bridegroomId;

    if (!idBridegroom) throw new BadRequest(`No bridegroom id!`);

    const wish = await Wish.create({ ...req.body });

    if (!wish) throw new BadRequest(`Invalid add data!`);

    wish.save();

    res.status(200).send({
      success: true,
      message: "Data has been inserted.",
    });
  } catch (error) {
    next(error);
  }
};

export default addWish;
