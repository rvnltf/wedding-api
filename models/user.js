const User = (sequelize, Sequelize) => {
  return sequelize.define("user", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fullname: {
      type: Sequelize.STRING,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
    },
    active: {
      type: Sequelize.BOOLEAN,
    },
  });
};

export default User;
