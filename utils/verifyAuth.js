import JWT from "jsonwebtoken";
import db from "../config/weddingDb.js";
import createError from "http-errors";
import { BadRequest } from "./errors.js";

const User = db.user;

export const verifyToken = async (req, res, next) => {
  try {
    let token = await req.headers.authorization;
    if (!token) throw new BadRequest("You are not authenticated!");

    token = await token.replace(/^Bearer\s+/, "");
    JWT.verify(token, process.env.SECRET_KEY, (err, user) => {
      if (err) throw new BadRequest("Token is not valid!");
      req.userId = user.id;
      next();
    });
  } catch (error) {
    next(error);
  }
};

export const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.userId);
    // console.log(req.user);
    user.getRoles().then((roles) => {
      roles.map((v) => {
        if (!v.name === "admin") throw new BadRequest("Required admin role!");
      });
      next();
    });
  } catch (error) {
    next(error);
  }
};
