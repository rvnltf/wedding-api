import db from "../config/weddingDb.js";
import { BadRequest } from "../utils/errors.js";

const Bridegroom = db.bridegroom;
const Op = db.Sequelize.Op;

export const duplicateSubdomain = async (req, res, next) => {
  try {
    const subDomain = req.body.subDomain;
    if (subDomain) {
      const subdomain = await Bridegroom.findOne({
        where: {
          subDomain,
        },
      });
      if (subdomain)
        throw new BadRequest(
          `Failed! Subdomain '${subDomain}' is already in use!`
        );
    }
    next();
  } catch (error) {
    next(error);
  }
};
