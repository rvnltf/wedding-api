import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Bridegroom = db.bridegroom;
const Op = db.Sequelize.Op;

const deleteBridegroom = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bridegroom = await Bridegroom.destroy({
      where: {
        id,
      },
    });

    if (!bridegroom) throw new NotFound(`Data not found!`);

    res.status(200).send({
      success: true,
      message: "Data deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteBridegroom;
