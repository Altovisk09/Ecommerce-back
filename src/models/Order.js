module.exports = (sequelize, DataTypes) => {
    const Order = sequelize.define('Order', {
        order_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        total_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'orders',
        timestamps: false
    });

    Order.associate = (models) => {
        Order.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        Order.hasMany(models.OrderProduct, { foreignKey: 'order_id', as: 'order_products' });
        Order.hasOne(models.Transaction, { foreignKey: 'order_id', as: 'transaction' });
    };

    return Order;
};
