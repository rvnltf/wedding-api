const Photos = (sequelize, Sequelize) => {
  return sequelize.define("photos", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    section: {
      type: Sequelize.STRING,
    },
    filename: {
      type: Sequelize.STRING,
    },
    url: {
      type: Sequelize.STRING,
    },
    width: {
      type: Sequelize.INTEGER,
    },
    height: {
      type: Sequelize.INTEGER,
    },
  });
};

export default Photos;
