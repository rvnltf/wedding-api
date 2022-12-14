const Events = (sequelize, Sequelize) => {
  return sequelize.define("events", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    eventName: {
      type: Sequelize.STRING,
    },
    eventDate: {
      type: Sequelize.DATE,
    },
    eventTime: {
      type: Sequelize.STRING,
    },
    eventLocation: {
      type: Sequelize.STRING,
    },
    eventAddress: {
      type: Sequelize.TEXT("long"),
    },
    eventMapUrl: {
      type: Sequelize.TEXT("long"),
    },
    showMaps: {
      type: Sequelize.BOOLEAN,
    },
  });
};

export default Events;
