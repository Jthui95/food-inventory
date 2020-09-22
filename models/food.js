module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    name: {
      type: DataTypes.STRING,  
      allowNull: false,
      validate: {
        len: [1, 140]
      }
    },
    expiration: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 140]
      },
    },
    quantity: {
      type: DataTypes.INTEGER,  
      allowNull: false,
      defaultvalue: 1,
      validate: {
      len: [1,10]
      }
    },
    location: {
      type: DataTypes.STRING,  
      allowNull: false,
      defaultvalue: "Refrigerator", 
      validate: {
        len: [1, 140]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    }
  });
  return Food;
};