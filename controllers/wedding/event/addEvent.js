import db from "../../../config/weddingDb.js";
import { BadRequest } from "../../../utils/errors.js";

const Event = db.events;

const addEvent = async (req, res, next) => {
  try {
    const idBridegroom = await req.body.bridegroomId;

    if (!idBridegroom) throw new BadRequest(`No bridegroom id!`);

    const event = await Event.create({ ...req.body });

    if (!event) throw new BadRequest(`Invalid add data!`);

    event.save();

    res.status(200).send({
      success: true,
      message: "Data has been inserted.",
    });
  } catch (error) {
    next(error);
  }
};

export default addEvent;
