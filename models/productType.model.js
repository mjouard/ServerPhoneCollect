module.exports = (sequelize, Sequelize) => {
    const Type = sequelize.define("productType", {
      name: {
        type: Sequelize.STRING,
        allowNul: false
      }
    });
  
    return Type;
  };