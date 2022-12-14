import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Event = db.events;
const Op = db.Sequelize.Op;

const getEventById = async (req, res, next) => {
  try {
    const event = await Event.findOne({
      where: {
        id: req.params.id,
      },
    });

    if (!event) throw new NotFound(`Data not found!`);

    res.status(200).send({
      success: true,
      data: event,
    });
  } catch (error) {
    next(error);
  }
};

export default getEventById;
