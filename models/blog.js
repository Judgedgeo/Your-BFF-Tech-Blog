const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Blog extends Model { }

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        }
    }, {
    sequelize,
    timestamps: false,
    freezeTableName: true, //uses singular table name instead of changing it to "Blogs"
    underscored: true, //sets field option on all attributes to snacke_case version of its name
    modelName: 'blog'

}
);

module.exports = Blog;