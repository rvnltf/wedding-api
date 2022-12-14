import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Bridegroom = db.bridegroom;
const Op = db.Sequelize.Op;

const getBridegroomById = async (req, res, next) => {
  try {
    const bridegroom = await Bridegroom.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!bridegroom) throw new NotFound(`Data not found!`);

    res.status(200).send({
      success: true,
      data: bridegroom,
    });
  } catch (error) {
    next(error);
  }
};

export default getBridegroomById;
