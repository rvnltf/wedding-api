import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Bridegroom = db.bridegroom;
const Op = db.Sequelize.Op;

const updateBridegroom = async (req, res, next) => {
  try {
    const id = req.params.id;
    const bridegroom = await Bridegroom.update(
      {
        active: req.body.active,
      },
      {
        where: {
          id,
        },
      }
    );

    if (!bridegroom) throw new BadRequest(`Invalid update data!`);

    res.status(200).send({
      success: true,
      message: "Data updated successfully!",
    });
  } catch (error) {
    next(error);
  }
};
export default updateBridegroom;
