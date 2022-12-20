import Sequelize from "sequelize";
import Role from "../models/role.js";
import User from "../models/user.js";
import Bridegroom from "../models/wedding/bridegroom.js";
import Events from "../models/wedding/events.js";
import Photos from "../models/wedding/photos.js";
import Wishes from "../models/wedding/wishes.js";

const sequelize = new Sequelize("wedding_db", "root", "admin", {
  host: process.env.HOST,
  port: 3307,
  dialect: "mysql",
  operatorAliases: false,
  logging: false,
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
  bridegroom: Bridegroom(sequelize, Sequelize),
  events: Events(sequelize, Sequelize),
  photos: Photos(sequelize, Sequelize),
  wish: Wishes(sequelize, Sequelize),
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

db.bridegroom.hasMany(db.events, {
  onUpdate: "CASCADE",
  onDelete: "RESTRICT",
});
db.events.belongsTo(db.bridegroom);

db.bridegroom.hasMany(db.photos, {
  onUpdate: "CASCADE",
  onDelete: "RESTRICT",
});
db.photos.belongsTo(db.bridegroom);

db.bridegroom.hasMany(db.wish, {
  onUpdate: "CASCADE",
  onDelete: "RESTRICT",
});
db.wish.belongsTo(db.bridegroom);

export default db;
