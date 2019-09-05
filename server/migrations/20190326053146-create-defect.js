module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Defects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      barcode: {
        type: Sequelize.STRING,
		allowNull: false
      },
      register_date: {
        type: Sequelize.DATE,
		allowNull: false
      },
      board_name: {
        type: Sequelize.STRING,
		allowNull: false
      },
      defect_name: {
        type: Sequelize.STRING
      },
	  defect_code: {
        type: Sequelize.STRING
      },
      defect_cause: {
        type: Sequelize.STRING
      },
	  repair_date: {
        type: Sequelize.DATE
      },      
      repaired: {
        type: Sequelize.BOOLEAN,
		defaultValue: false
      },
      part_ref: {
        type: Sequelize.STRING
      },
      comment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    }), 
  down: (queryInterface/*, Sequelize*/ ) => 
    queryInterface.dropTable('Defects'),  
};