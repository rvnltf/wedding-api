import db from "../../../config/weddingDb.js";
import { NotFound } from "../../../utils/errors.js";

const Wishes = db.wish;

const deleteWish = async (req, res, next) => {
  try {
    const id = req.params.id;
    const wish = await Wishes.destroy({
      where: {
        id,
      },
    });

    if (!wish) throw new NotFound(`Data not found!`);

    res.status(200).send({
      success: true,
      message: "Data deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteWish;
