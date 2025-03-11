module.exports = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
        address_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        street: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        state: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        zip_code: {
            type: DataTypes.STRING(10), 
            allowNull: false
        },
        number: {
            type: DataTypes.STRING(10), 
            allowNull: false
        },
        neighborhood: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        complement: {
            type: DataTypes.STRING(255),
            allowNull: true 
        }
    }, {
        tableName: 'addresses',
        timestamps: false
    });

    Address.associate = (models) => {
        Address.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    };

    return Address;
};
