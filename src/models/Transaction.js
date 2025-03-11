module.exports = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('Transaction', {
        transaction_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        order_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        payment_method: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        transaction_status: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        transaction_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        total_amount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        tableName: 'transactions',
        timestamps: false
    });

    Transaction.associate = (models) => {
        Transaction.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        Transaction.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
    };

    return Transaction;
};
