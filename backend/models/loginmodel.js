module.exports = (sequelize, Sequelize) => {
    const customers = sequelize.define('customer', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
          },
        Name: {
            type: Sequelize.STRING
        },
        Email: {
            type: Sequelize.STRING
        },
        Password: {
            type: Sequelize.STRING,

        },
        isPremiumUser: Sequelize.BOOLEAN,
    });
    return customers
}

