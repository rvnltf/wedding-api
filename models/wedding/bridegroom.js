const Bridegroom = (sequelize, Sequelize) => {
  return sequelize.define(
    "bridegroom",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      groomName: {
        type: Sequelize.STRING,
      },
      groomFullName: {
        type: Sequelize.STRING,
      },
      groomBirthOrder: {
        type: Sequelize.STRING,
      },
      groomDadName: {
        type: Sequelize.STRING,
      },
      groomMomName: {
        type: Sequelize.STRING,
      },
      groomIg: {
        type: Sequelize.STRING,
      },
      brideName: {
        type: Sequelize.STRING,
      },
      brideFullName: {
        type: Sequelize.STRING,
      },
      brideBirthOrder: {
        type: Sequelize.STRING,
      },
      brideDadName: {
        type: Sequelize.STRING,
      },
      brideMomName: {
        type: Sequelize.STRING,
      },
      brideIg: {
        type: Sequelize.STRING,
      },
      date: {
        type: Sequelize.DATE,
      },
      subDomain: {
        type: Sequelize.STRING,
        unique: true,
      },
      audio: {
        type: Sequelize.STRING,
      },
      youtubeUrl: {
        type: Sequelize.STRING,
      },
      religion: {
        type: Sequelize.INTEGER,
      },
      package: {
        type: Sequelize.INTEGER,
      },
      theme: {
        type: Sequelize.INTEGER,
      },
      active: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      indexes: [
        {
          unique: false,
          fields: ["religion", "package", "active"],
        },
      ],
    }
  );
};

export default Bridegroom;
