const Wishes = (sequelize, Sequelize) => {
  return sequelize.define("wishes", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    ucapan: {
      type: Sequelize.STRING,
    },
    time: {
      type: Sequelize.STRING,
    },
  });
};

export default Wishes;
