import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Wish = db.wish;
const Op = db.Sequelize.Op;

const updateWish = async (req, res, next) => {
  try {
    const id = req.params.id;
    const wish = await Wish.update(req.body, {
      where: {
        id,
      },
    });

    if (!wish) throw new BadRequest(`Invalid update data!`);

    res.status(200).send({
      success: true,
      message: "Wish is active successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default updateWish;
