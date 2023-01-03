const { DataTypes, Op } = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('activity',{
        name: {
            type: DataTypes.STRING,
        },
        difficulty: {
            type: DataTypes.INTEGER,
            validate: {
                [Op.between]: [1, 5],
            }
        },
        duration:{
            type: DataTypes.INTEGER
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring')
        },
    });
};