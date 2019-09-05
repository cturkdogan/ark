module.exports = {
    up: (queryInterface, Sequelize) => 
      queryInterface.createTable('Items', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        itemID: {type: Sequelize.STRING, unique: true, allowNull: false},
        name: {type: Sequelize.STRING},
        group: {type: Sequelize.STRING},
        inventory: {type: Sequelize.INTEGER},
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
      queryInterface.dropTable('Items'),  
  };