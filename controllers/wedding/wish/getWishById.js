import db from "../../../config/weddingDb.js";
import { NotFound } from "../../../utils/errors.js";

const Wish = db.wish;

const getWishById = async (req, res, next) => {
  try {
    const wish = await Wish.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!wish) throw new NotFound(`Data not found!`);

    res.status(200).send({
      success: true,
      data: wish,
    });
  } catch (error) {
    next(error);
  }
};

export default getWishById;
