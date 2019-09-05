module.exports=(sequelize, Sequelize) => {
    const Item = sequelize.define('Item', {
        itemID: {type: Sequelize.STRING, unique: true, allowNull: false},
        name: {type: Sequelize.STRING},
        group: {type: Sequelize.STRING},
        inventory: {type: Sequelize.INTEGER},
    });
    return Item;
};