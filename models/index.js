import Sequelize from "sequelize";
import Role from "./role.js";
import User from "./user.js";

const sequelize = new Sequelize("auth", "root", "", {
  host: process.env.HOST,
  dialect: "mysql",
  operatorAliases: false,
  pool: {
    max: process.env.POOL_MAX,
    min: process.env.POOL_MIN,
    acquire: process.env.POOL_ACQUIRE,
    idle: process.env.POOL_IDLE,
  },
});

const db = {
  Sequelize,
  sequelize,
  user: User(sequelize, Sequelize),
  role: Role(sequelize, Sequelize),
  ROLES: ["admin", "user"],
};

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
});

export default db;
