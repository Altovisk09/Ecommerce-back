module.exports = (sequelize, DataTypes) => {
    const OrderProduct = sequelize.define('OrderProduct', {
        order_product_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        product_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        unit_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        tableName: 'order_products',
        timestamps: false
    });

    OrderProduct.associate = (models) => {
        OrderProduct.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
        OrderProduct.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });
    };

    return OrderProduct;
};
