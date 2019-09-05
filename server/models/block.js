module.exports = (sequelize, DataTypes) => {
  const Block = sequelize.define('Block', {
    blockchain: {type:DataTypes.STRING, allowNull:false},
    register_date: {type:DataTypes.DATE, allowNull:false},
  });
  return Block;
};