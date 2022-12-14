import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Event = db.events;
const Op = db.Sequelize.Op;

const deleteBridegroom = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.destroy({
      where: {
        id,
      },
    });

    if (!event) throw new NotFound(`Data not found!`);

    res.status(200).send({
      success: true,
      message: "Data deleted successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteBridegroom;
