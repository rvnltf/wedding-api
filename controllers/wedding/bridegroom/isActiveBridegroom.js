import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Bridegroom = db.bridegroom;
const Op = db.Sequelize.Op;

const isActiveBridegroom = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bridegroom = await Bridegroom.update(req.body, {
      where: {
        id,
      },
    });

    if (!bridegroom) throw new BadRequest(`Invalid update data!`);

    res.status(200).send({
      success: true,
      message: "Bridegroom is active successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default isActiveBridegroom;
