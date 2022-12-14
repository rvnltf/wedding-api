import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Event = db.events;
const Op = db.Sequelize.Op;

const updateEvent = async (req, res, next) => {
  try {
    const id = req.params.id;
    const event = await Event.update(req.body, {
      where: {
        id,
      },
    });

    if (!event) throw new BadRequest(`Invalid update data!`);

    res.status(200).send({
      success: true,
      message: "Event is active successfully!",
    });
  } catch (error) {
    next(error);
  }
};

export default updateEvent;
