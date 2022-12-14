import db from "../../../config/weddingDb.js";
import { BadRequest, NotFound } from "../../../utils/errors.js";

const Bridegroom = db.bridegroom;
const Op = db.Sequelize.Op;

const getBridegroom = async (req, res, next) => {
  try {
    const currentPage =
      parseInt(req.query.page) < 0 ? 0 : parseInt(req.query.page) - 1;
    const limit = parseInt(req.query.limit) || 10;
    const search = req.query.q || "";
    const offset = currentPage * limit;
    const totalRow = await Bridegroom.count({
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
    const result = await Bridegroom.findAll({
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
      currentPage,
      limit,
      totalRow,
      totalPage,
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default getBridegroom;
