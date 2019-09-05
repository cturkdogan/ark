module.exports = (sequelize, DataTypes) => {
  const Defect = sequelize.define('Defect', {
    barcode: {type:DataTypes.STRING, allowNull:false},
    register_date: {type:DataTypes.DATE,  allowNull: false,},
    board_name: {type:DataTypes.STRING,  allowNull: false,},
    defect_name: {type:DataTypes.STRING, allowNull: false},
	defect_code: {type:DataTypes.STRING},
    defect_cause: {type:DataTypes.STRING},
	repaired: {type:DataTypes.BOOLEAN, defaultValue: false},
	repair_date: {type:DataTypes.DATE},
    part_ref: {type:DataTypes.STRING},
    comment: {type:DataTypes.STRING},
  });
  return Defect;
};