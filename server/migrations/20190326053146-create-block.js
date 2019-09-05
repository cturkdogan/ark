module.exports = {
  up: (queryInterface, Sequelize) => 
    queryInterface.createTable('Block', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      blockchain: {
        type: Sequelize.STRING,
		allowNull: false
      },
      register_date: {
        type: Sequelize.DATE,
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
    queryInterface.dropTable('Block'),  
};