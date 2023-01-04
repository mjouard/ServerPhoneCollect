module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      typeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      image: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: false
      },
      isAvailable: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        default: true
      }
    });
  
    return Product;
  };