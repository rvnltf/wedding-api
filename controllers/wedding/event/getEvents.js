import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Event = db.events;
const Op = db.Sequelize.Op;

const getEvents = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.q || "";
    const offset = limit * page;
    const totalRow = await Event.count({
      where: {
        [Op.or]: [
          {
            groomFullName: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            brideFullName: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
    });
    const totalPage = Math.ceil(totalRow / limit);
    const result = await Event.findAll({
      where: {
        [Op.or]: [
          {
            groomFullName: {
              [Op.like]: "%" + search + "%",
            },
          },
          {
            brideFullName: {
              [Op.like]: "%" + search + "%",
            },
          },
        ],
      },
      offset,
      limit,
      order: [["createdAt", "DESC"]],
    });

    if (!result) throw new NotFound(`Data not found!`);

    res.status(200).send({
      success: true,
      page,
      limit,
      totalRow,
      totalPage,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default getEvents;
